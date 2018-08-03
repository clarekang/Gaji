export enum Step {
  FEATURE = "feature",
  SCENARIO = "scenario",
  OUTLINE = "outline",
  EXAMPLE = "example",
  GIVEN = "given",
  WHEN = "when",
  THEN = "then",
  AND = "and",
  BUT = "but",
}

const feature: string[] = ["Feature", "기능"];
const background: string[] = ["Background", "배경"];
const scenario: string[] = ["Scenario", "시나리오"];
const outline: string[] = ["Scenario Outline", "시나리오 개요"];
const example: string[] = ["Examples", "예"];
const given: string[] = ["Given", "조건", "먼저"];
const when: string[] = ["When", "만일", "만약"];
const then: string[] = ["Then", "그러면"];
const and: string[] = ["And", "그리고"];
const but: string[] = ["But", "하지만", "단"];

export const gherkinSteps: { [key: string]: string[] } = {
  feature,
  background,
  scenario,
  outline,
  example,
  given,
  when,
  then,
  and,
  but,
};
