# Gaji 사용법

먼저 Gaji 에 관심가져주셔서 감사합니다.
Gaji 는 Gherkin 문법으로 작성된 한글 `.feature`파일의 포맷팅을 위한 extension 입니다.

## 목차

- [준비](#준비)
  - [한글 코딩환경](#한글-코딩환경)
  - [폰트 설정](#폰트-설정)
- [사용](#사용)
  - [단축키](#단축키)

### 준비

#### 한글 코딩환경

먼저 Visual Studio Code 에 한글 코딩환경을 세팅합니다.

코딩용 폰트를 사용해야하는 이유는 고정된 글자의 자평을 통해 자간과 행간을 유지됩니다.
일반적으로 한글 코딩용 폰트는 한 글자당 영문자나 숫자 2 개의 자평을 가지게됩니다.
**Gaji** 역시 한글이 글자당 2 개의 영문자 글꼴폭을 가지게된다는 가정하에 만들어진 VSCode 용 extension 입니다.

추천하는 한글 코딩용 폰트는 아래와 같습니다.

- [D2 Coding Font](https://github.com/naver/d2codingfont)
- [나눔 고딕 코딩](https://github.com/naver/nanumfont)

#### 폰트 설정

그리고 VSCode 의 환경설정에서 사용할 폰트를 설정합니다.

단축키 (Window, Linux)`Ctrl+,`/(OSX) `Cmd+,` 를 통해 환경설정에 접근할 수 있습니다.
환경설정에 아래와같이 `editor.fontFamily`에 D2Coding 혹은 NanumGothicCoding 을 입력해줍니다.

> (아래는 예시로 폰트 1 개만 설정하면 됩니다. 가장 먼저 선언된 폰트가 우선 적용됩니다.)
> (영문과 한글의 고정폭을 위해 반드시 제일 우선 적용되도록 설정해야합니다.)

```json
{
    ...
    "editor.fontFamily": "D2Coding, NanumGothicCoding, Menlo, ..."
}
```

### 사용

#### 단축키

- (Windows, Linux) `Ctrl+Shift+P`/(OSX) `Cmd+Shift+P` 를 눌러 command palette 에서 사용할 수 있습니다.
- 혹은 단축키 (Windows, Linux) `Ctrl+Shift+f`/(OSX) `Cmd-Shift-F`를 통해서도 사용할 수 있습니다.
