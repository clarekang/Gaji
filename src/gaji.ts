"use strict";

import { Step, gherkinSteps } from "./model";

export default class Gaji implements IGaji {
  private stepIndent: number;

  constructor() {
    this.stepIndent = 4;
  }

  public format(text: string): string {
    const lines: string[] = [];
    const textArray = text.split(/[\r\n]+/g);
    textArray.forEach((line: string, index: number) => {
      const trimedText = line.trim();
      const prevLine = lines.length > 1 ? lines[lines.length - 1] : null;
      let isPushed = false;
      if (this.isTable(trimedText) && !!prevLine && !this.isTable(prevLine)) {
        const table: ITableElement[][] = [];
        for (let i = index; i < textArray.length; i++) {
          const tableLine = textArray[i];
          if (!this.isTable(tableLine)) {
            break;
          }
          const row = this.getTableRow(tableLine);
          table.push(row);
        }
        const parsedTable = this.parseStringToTable(table);
        lines.push(...parsedTable);
        isPushed = true;
      } else {
        Object.keys(gherkinSteps).forEach((key: string) => {
          if (isPushed) {
            return true;
          }
          const step = gherkinSteps[key];
          const filtered = step.filter(
            (x: string) => trimedText.substr(0, x.length) === x,
          );
          if (filtered.length > 0) {
            isPushed = true;
            lines.push(this.setTextIndent(key, trimedText));
          }
        });
      }
      if (!isPushed && !this.isTable(trimedText)) {
        lines.push(trimedText);
      }
    });
    return lines.join("\r\n");
  }

  private parseStringToTable(table: ITableElement[][]): string[] {
    const rowLength = table[0].length;
    const columns: ITableElement[][] = [];
    table.forEach((row: ITableElement[]) => {
      for (let columnIndex = 0; columnIndex < rowLength; columnIndex++) {
        if (!columns[columnIndex]) {
          columns[columnIndex] = [];
        }
        columns[columnIndex].push(
          ...row.filter(e => e.columnIndex === columnIndex),
        );
      }
    });

    const newTable: string[][] = [];
    columns.forEach((column: ITableElement[], columnIndex: number) => {
      const max = this.getMaxLengthFromTable(column);
      if (max > 0) {
        column.forEach((element: ITableElement, elementIndex: number) => {
          if (!newTable[elementIndex]) {
            newTable[elementIndex] = [];
          }
          newTable[elementIndex][columnIndex] = this.setCenterPad(
            element.value,
            max - element.length,
          );
        });
      }
    });

    return newTable.map(
      row => `${this.getPadding(this.stepIndent * 3)}${row.join("|")}|`,
    );
  }

  private setTextIndent(key: string, text: string) {
    switch (key) {
      case Step.FEATURE:
      case Step.SCENARIO:
      case Step.OUTLINE:
        return `\n${text}\n`;
      case Step.GIVEN:
      case Step.WHEN:
      case Step.THEN:
      case Step.AND:
      case Step.BUT:
        return `${this.getPadding(this.stepIndent)}${text}`;
      case Step.EXAMPLE:
        return `\n${this.getPadding(this.stepIndent * 2)}${text}`;
    }
    return text;
  }

  private setCenterPad(value: string, count: number): string {
    if (count > 0) {
      const half = count / 2;
      const leftPadding = this.getPadding(Math.ceil(half) + 1);
      const rightPadding = this.getPadding(Math.floor(half) + 1);
      return [leftPadding, value, rightPadding].join("");
    }
    return value;
  }

  private getMaxLengthFromTable(column: ITableElement[]): number {
    let max = 0;
    column.forEach((element: ITableElement) => {
      if (element.length > max) {
        max = element.length;
      }
    });
    return max;
  }

  private getTableRow(row: string): ITableElement[] {
    return row.split("|").map((element: string, index: number) => ({
      value: element.trim(),
      length: this.getTextLength(element.trim()),
      columnIndex: index,
    }));
  }

  private getPadding(value: number): string {
    return Array(value * 1).join(" ");
  }

  // korean string length is to be 2
  private getTextLength(text: string): number {
    let tcount = 0;
    for (let k = 0, temp = text.length; k < temp; k++) {
      const onechar = text.charAt(k);
      if (escape(onechar).length > 4) {
        tcount += 2;
      } else {
        tcount += 1;
      }
    }
    return tcount;
  }

  private isTable(text: string): boolean {
    return text.indexOf("|") > -1;
  }
}

interface IGaji {
  format: (text: string) => string;
}

interface ITableElement {
  value: string;
  length: number;
  columnIndex: number;
}
