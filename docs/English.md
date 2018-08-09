# Gaji User Guide

Thank you for interesting for Gaji.
This extension is formatter for Gherkin `.feature` written by Korean.

## Table Of Contents

- [Preparations](#preparations)
  - [Korean Coding Font](#korean-coding-font)
  - [Set Font to Workspace Setting](#set-font-to-workspace-setting)
- [How to Use](#how-to-use)
  - [Shortcuts](#shortcuts)

### Preparations

#### Korean Coding Font

First of all, set Korean Coding font on your VS Code.

Coding Font is a contemporary monospaced sans-serif with a warm touch and is expertly hinted for screen use.
You should use the font for coding is to maintain the leading and the leading between the letter's fixed-width.
Generally, fonts for Korean coding will have two alphabetic characters per character.
** Gaji ** which is an extension for VSCode, also based on the assumption that Korean will have two alphabetic characters per character.

Reconmmanded Korean Coding Fonts

- [D2 Coding Font](https://github.com/naver/d2codingfont)
- [NanumGothicCoding](https://github.com/naver/nanumfont)

#### Set Font to Workspace Setting

And Set **VS Code Workspace Setting** Korean coding font for using.

To open your user and workspace settings, use the following VS Code menu command:

- On Windows/Linux - File > Preferences > Settings
- On macOS - Code > Preferences > Settings

You can also open the user and workspace settings from the Command Palette (`Cmd+Shift+P`) with Preferences: Open User Settings and Preferences: Open Workspace Settings or use the keyboard shortcut (`Cmd+,`).

There are actions available inside Default Settings and `settings.json` editors which will help you quickly copy or update a setting.

Set your `editor.fontFamily` D2Coding or NanumGothicCoding.

> Follow is an example for setting font to `workspace settings`.
> You should set it to be First priority for English and Korean fixed-width.

```json
{
    ...
    "editor.fontFamily": "D2Coding, NanumGothicCoding, Menlo, ..."
}
```

### How to Use

#### Shortcuts

Apply `Gaji` from the command palette `Ctrl+Shift+P` (Windows, Linux) or `Cmd-Shift-P` (OSX) to apply indentation for the `.feature` files or you can use key shortcut `Ctrl+Shift+F` (Windows, Linux) `Cmd+Shift+F` (OSX).
