## Step 2: 학교의 레거시 COBOL 회계 시스템 이해하기

이 단계에서는 학교의 레거시 COBOL 회계 시스템을 탐색하여 그 구조와 기능을 이해합니다. 이것은 현대화 프로세스를 준비하는 데 도움이 됩니다.

### ⌨️ Activity: 학교의 레거시 회계 시스템 탐색하기

학교의 회계 시스템을 현대화하기 전에, 어떻게 작동하는지 이해해야 합니다.

먼저, 저장소의 COBOL 파일을 몇 분간 탐색해 보세요. `src/cobol` 디렉토리에서 찾을 수 있습니다.

> [!NOTE]
> COBOL은 1960년대와 1970년대에 비즈니스 애플리케이션에 널리 사용되었던 레거시 언어입니다. 현대 프로그래밍 언어와 비교하면 매우 다른 구문과 구조를 가지고 있습니다.
>
> COBOL에 익숙하지 않더라도 걱정하지 마세요! GitHub Copilot이 코드와 그 목적을 이해하는 데 도움을 줄 수 있습니다.

GitHub Copilot을 사용하여 COBOL 코드를 이해해 봅시다!

1. 사이드바에서 Copilot Chat 창을 열고 **Agent** 모드를 선택합니다. 나머지 실습에서도 이 모드를 사용합니다.
1. Copilot Chat 사이드바에서 **Add Context...**를 클릭하고, **Files & Folders**를 선택한 다음 `src/` 디렉토리를 선택합니다. 이렇게 하면 COBOL 파일이 프롬프트 컨텍스트에 포함되어 다음 프롬프트에서 어떤 파일을 참조하는지 Copilot이 확실하게 알 수 있습니다.

1. Agent 모드에서 Copilot에게 다음을 요청합시다:
   - 학교 회계 시스템의 맥락에서 각 파일의 목적을 설명
   - `docs/README.md` 파일을 만들고 발견한 내용, 특히 핵심 함수와 비즈니스 요구 사항을 문서화

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Create a README.md file in a new /docs directory
   >
   > Document the purpose of each COBOL file, key functions,
   > and any specific business rules related to student accounts.
   > ```

   > [!TIP]
   > 좋은 프롬프트를 만드는 것은 적절한 컨텍스트, 명확성, 구체성의 조합입니다. [프롬프트 엔지니어링](https://docs.github.com/en/copilot/concepts/prompt-engineering-for-copilot-chat)에 대해 자세히 알아보세요.

<details>
<summary>문제가 있나요? 🤷</summary><br/>

- COBOL은 열에 민감한 언어입니다. 코드는 구획(IDENTIFICATION, DATA, PROCEDURE)과 섹션으로 구성됩니다.
- `main.cob` 파일은 사용자 인터페이스와 메뉴 옵션을 처리합니다 (학생 잔액 조회, 결제 처리, 구매 기록, 종료).
- `operations.cob` 파일은 다양한 학생 계정 작업에 대한 로직을 포함합니다.
- `data.cob` 파일은 학생 계정 잔액의 저장을 관리합니다.

</details>

### ⌨️ Activity: 데이터 흐름 다이어그램 만들기

이제 학교의 회계 시스템에 대해 더 잘 이해했으니, 데이터가 시스템을 통해 어떻게 흐르는지 시각화합시다. 나중에 Copilot이 코드를 현대화하는 데 도움이 되는 컨텍스트로 사용할 수 있습니다.

> [!NOTE]
> 작업을 더 작은 단계로 나누고 있다는 것에 주목하세요.
>
> Copilot은 모든 것을 한 번에 시도하는 것보다 (예: `Hey Copilot, 이 COBOL 코드베이스를 Node.js로 리팩토링해`) 구체적이고 작은 작업을 제공할 때 더 효과적이라는 것을 알게 될 것입니다.
>
> 이것은 특히 대규모 코드베이스 현대화와 컨텍스트 창 제한이 관련될 때 더욱 그렇습니다.

다이어그램으로 데이터 흐름을 시각화합시다!

1. Copilot에게 학교 회계 시스템을 통해 데이터가 어떻게 이동하는지 보여주는 Mermaid 데이터 흐름 다이어그램(DFD)을 만들도록 요청합니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Create a sequence diagram of the app
   > showing the data flow of the app.
   >
   > Please create this in mermaid format so that I can render this at
   > the end of the docs/README.md markdown file.
   > ```

1. `docs/README.md` 파일에서 다이어그램을 미리볼 수 있는지 확인합니다.

1. 왼쪽 사이드바에서 `Source Control` 탭을 선택하고 `modernize-legacy-code` 브랜치에서 변경하고 있는지 확인합니다.

   > [!TIP]
   > 소스 컨트롤 영역에서 파일을 열면 단순히 여는 것이 아니라 원본과의 차이점이 표시됩니다.

1. `docs/README.md` 파일을 찾고 `+` 기호를 눌러 변경 사항을 스테이징 영역에 모읍니다.

1. 스테이징된 변경 사항 목록 위에서 **Message** 텍스트 박스를 찾되, 지금은 **아무것도 입력하지 마세요**.

   - 일반적으로 여기에 변경 사항에 대한 짧은 설명을 작성하지만, 이제 Copilot이 도와줍니다!

1. **Message** 텍스트 박스 오른쪽에서 **Copilot으로 커밋 메시지 생성** 버튼(반짝이 아이콘)을 찾아 클릭합니다.

1. **Commit** 버튼과 **Sync Changes** 버튼을 눌러 변경 사항을 GitHub의 `modernize-legacy-code` 브랜치에 푸시합니다.

1. Mona가 작업을 확인하고 피드백을 제공하며 다음 레슨을 공유할 때까지 잠시 기다립니다.

<details>
<summary>문제가 있나요? 🤷</summary><br/>

피드백을 받지 못하는 경우 다음을 확인하세요:

- `docs/README.md` 파일 변경 사항을 `modernize-legacy-code` 브랜치에 푸시했는지 확인하세요.

</details>
