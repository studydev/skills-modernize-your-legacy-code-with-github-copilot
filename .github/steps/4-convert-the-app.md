## Step 4: 레거시 COBOL 코드를 Node.js로 변환하기

완벽합니다! 이제 데이터 흐름 다이어그램을 생성하고 종합적인 테스트 계획을 준비했으므로, COBOL에서 Node.js로의 실제 코드 변환을 위해 GitHub Copilot을 활용하는 데 필요한 모든 컨텍스트가 갖추어졌습니다.

데이터 흐름 다이어그램은 시스템을 통해 데이터가 어떻게 이동하는지 이해하는 데 도움이 되고, 테스트 계획은 현대화 과정에서 동일한 기능을 유지하도록 보장합니다. 이 기반을 통해 GitHub Copilot은 비즈니스 로직을 보존하면서 레거시 코드를 지능적으로 변환할 수 있습니다.

### ⌨️ Activity: Copilot을 활용하여 COBOL을 Node.js로 변환

GitHub Copilot을 사용하여 COBOL 애플리케이션을 현대적인 Node.js로 변환하는 무거운 작업을 해봅시다. Copilot은 기존 코드베이스와 데이터 흐름 이해를 사용하여 기능적으로 동등한 Node.js 애플리케이션을 만들 것입니다.

> [!NOTE]
> Copilot이 정확히 필요한 것을 수행하도록 구체적이고 명확한 프롬프트를 작성하는 것이 여전히 중요합니다!

1. Copilot Chat 창을 열고 **Agent 모드**를 사용하고 있는지 확인합니다.
1. 변환 프로세스를 시작하기 위해 Copilot에 다음 프롬프트를 제공합니다:

    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > #codebase convert the three separate COBOL legacy files into a single
    > Node.js src/accounting/index.js accounting application.
    >
    > Leverage the data flow diagram of the existing COBOL application
    > available in the repository to preserve:
    > - the original business logic
    > - data integrity
    > - menu options of the original application.
    >
    > Change directory to src/accounting and install all prerequisites
    > to run the Node.js application
    >
    > Create a .vscode/launch.json file to run the Node.js application
    > ```

1. Node.js 애플리케이션이 `src/accounting` 디렉토리에 생성되고 VS Code의 `Run and Debug` 사이드바에서 실행할 수 있는지 확인합니다.

1. 애플리케이션이 원래 COBOL 애플리케이션과 동일하게 작동하는지 확인합니다.

### ⌨️ Activity: 테스트 계획을 기반으로 단위 테스트 만들기

이전에 생성한 테스트 계획을 종합적인 단위 테스트 생성의 청사진으로 사용합시다. 이렇게 하면 현대화된 코드가 원래 COBOL 시스템과 정확히 동일하게 동작하는지 보장합니다.

`docs/TESTPLAN.md`에 상세한 테스트 계획이 이미 있으므로, GitHub Copilot이 이를 컨텍스트로 사용하여 새 Node.js 구현에 맞는 단위 테스트를 만들 수 있습니다.

1. Copilot Chat 창을 열고 **Agent 모드**를 사용하고 있는지 확인합니다.
1. `docs/TESTPLAN.md` 파일을 채팅에 첨부하여 Copilot이 컨텍스트로 사용할 수 있도록 합니다.
1. 단위 테스트를 생성하기 위해 Copilot에 다음 프롬프트를 제공합니다:
    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > #codebase change directory to src/accounting and install all
    > prerequisites for the test framework.
    >
    > - Write unit tests for the Node.js application that mirror the scenarios in the test plan documented in docs/TESTPLAN.md.
    > - Place the tests in a dedicated test file.
    > - Make sure each test checks the expected behavior
    >   described in the COBOL test plan.
    > ```

1. Copilot Agent 모드는 단위 테스트를 생성하고 실행되는지 확인해야 합니다. 자가 치유 기능을 통해 Copilot은 테스트 생성 중 발생하는 문제를 자동으로 수정해야 합니다.
   > 문제가 있으면 테스트가 통과되고 결과가 만족스러울 때까지 Copilot과 계속 대화하여 테스트를 개선할 수 있습니다.

### ⌨️ Activity: 최종 확인 및 변경 사항 커밋

거의 다 되었습니다! 이제 Node.js 애플리케이션이 원래 COBOL 시스템과 정확히 동일하게 작동하는지 확인합시다.

잠시 시간을 들여 애플리케이션과 테스트 스위트를 직접 실행하여 모든 것이 예상대로 작동하는지 확인합니다.

1. Copilot 채팅을 사용하여 이 프로세스를 도울 수 있습니다.

    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > Run the Node.js application and run the test suite and verify tests pass.
    > ```

1. `src/accounting` 디렉토리의 변경 사항을 커밋하고 `modernize-legacy-code` 브랜치에 푸시합니다.

   > [!TIP]
   > 이전 단계처럼 소스 컨트롤 사이드 패널을 사용할 수 있습니다!

<details>
<summary>문제가 있나요? 🤷</summary><br/>

피드백을 받지 못하는 경우 다음을 확인하세요:

- `src/accounting/*` 변경 사항을 `modernize-legacy-code` 브랜치에 푸시했는지 확인하세요.

</details>

### :keyboard: Activity: Pull Request 생성 및 머지

거의 끝났습니다! Pull Request를 생성하고 변경 사항을 `main`에 머지합시다.

1. 웹 브라우저에서 저장소로 이동합니다.
1. 상단의 **Pull requests** 탭을 클릭합니다. Pull Request를 만들라는 배너가 표시됩니다.
1. 오른쪽 상단에서 녹색 **Compare & pull request** 버튼을 누릅니다.
1. **Open a pull request** 페이지에서 다음 옵션을 입력합니다:

   - **base** 브랜치로 `main`을 선택합니다.
   - **compare** 브랜치로 `modernize-legacy-code` 브랜치를 선택합니다.
   - **add a title** 필드에 `Modernize my legacy COBOL application to Node.js`를 입력합니다.
   - **add a description** 필드에서 Copilot 버튼을 클릭하고 summary를 선택하여 자동 생성합니다. [GitHub Copilot PR 요약 문서](https://docs.github.com/en/enterprise-cloud@latest/copilot/using-github-copilot/using-github-copilot-for-pull-requests/creating-a-pull-request-summary-with-github-copilot)
   - 또는 직접 작성할 수도 있습니다:

     ```md
     Modernize my legacy COBOL application to Node.js with an explanation of the COBOL code and a test plan.
     This pull request converts the COBOL application to a Node.js application, preserving the original business logic and functionality.
     It also includes unit tests based on the test plan.
     ```

1. 녹색 **Create pull request** 버튼을 누릅니다.
1. 아래로 스크롤하여 커밋 기록을 검토하고 변경 사항이 있는지 확인합니다.
1. 하단에서 녹색 **Merge pull request** 버튼을 누르고 녹색 **Confirm merge** 버튼을 누릅니다.
