## Step 3: COBOL 애플리케이션 실행 및 레거시 코드베이스 품질 보장을 위한 테스트 계획 작성

다음 활동에서는 COBOL 회계 애플리케이션을 빌드하고 실행하며, 레거시 코드베이스의 품질을 보장하는 데 사용할 수 있는 테스트 계획을 작성합니다.

COBOL 애플리케이션을 실행하면 작동 방식과 기능을 이해하는 데 도움이 됩니다.

### ⌨️ Activity: COBOL 애플리케이션 빌드 및 실행

COBOL은 컴파일 언어입니다. 소스 코드를 실행하기 전에 컴파일해야 합니다.

하지만... COBOL 소스 코드를 컴파일하는 방법을 모르시죠? 걱정 마세요!

이것은 일반적인 작업이기 때문에, Codespace에서 바로 사용할 수 있는 커스텀 프롬프트 파일을 이미 설정해 두었습니다!

1. Copilot Chat 창에서 아직 **Agent 모드**를 사용하고 있는지 확인합니다.
1. 채팅 입력 상자에 `/runCobolApp`을 입력하고 목록에서 프롬프트를 선택하여 **Run COBOL App** 프롬프트 파일을 사용합니다. 다른 것은 입력하지 않아도 됩니다. 프롬프트만 선택하세요.
   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > /runCobolApp
   > ```

   > [!NOTE]
   > 프롬프트 파일의 내용은 `.github/prompts` 디렉토리에서 찾을 수 있습니다.
   > [프롬프트 파일 문서](https://code.visualstudio.com/docs/copilot/customization/prompt-files)에서 자세히 알아볼 수 있습니다.

1. COBOL 앱으로 작동 방식을 확인해 보세요!
   - 애플리케이션은 메뉴에서 옵션을 선택하라는 메시지를 표시합니다.
   - COBOL 회계 앱의 다양한 옵션을 사용해 보고, 끝내면 옵션 `4`를 선택하여 종료합니다.

### ⌨️ Activity: 현재 구현을 검증하기 위한 테스트 계획 생성

기존 레거시 회계 시스템의 기능을 고려하여 모든 중요 기능과 엣지 케이스를 포괄하는 종합적인 테스트 계획을 생성하려고 합니다.

이 테스트 계획을 나중에 Node.js 애플리케이션에서 테스트를 만드는 데 사용할 것입니다.

1. Copilot Chat 창에서 아직 **Agent 모드**를 사용하고 있는지 확인합니다.
1. 채팅 입력 상자에 위의 프롬프트를 입력하거나 붙여넣어 테스트 계획의 구체적인 지시사항과 요구사항을 Copilot에 제공합니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > The current Cobol app has no tests.
   > Can you please create a test plan of the current business logic and
   > implementation that I can use to validate with business stakeholders.
   >
   > Store it in a file called `docs/TESTPLAN.md`.
   > Later I would like to use this test plan to create unit and integration tests in a node.js app. I am in the middle of transforming the current Cobol app to a node.js app.
   > The test plan should include the following headings:
   > 1. Test Case ID
   > 2. Test Case Description
   > 3. Pre-conditions
   > 4. Test Steps
   > 5. Expected Result
   > 6. Actual Result
   > 7. Status (Pass/Fail)
   > 8. Comments
   >
   > Please create the test plan in a markdown table format.
   > The test plan should cover all the business logic in the current Cobol app.
   >
   > ```

1. `docs/TESTPLAN.md` 파일에서 테스트 계획을 미리볼 수 있는지 확인합니다. 문제가 있으면 결과가 만족스러울 때까지 Copilot과 계속 대화하여 테스트 계획을 개선할 수 있습니다.

1. `docs/TESTPLAN.md` 파일의 변경 사항을 커밋하고 `modernize-legacy-code` 브랜치에 푸시합니다.

   > [!TIP]
   > 이전 단계처럼 Copilot을 사용하여 커밋 메시지를 작성하거나 직접 작성할 수 있습니다.

<details>
<summary>문제가 있나요? 🤷</summary><br/>

- `/runCobolApp` 프롬프트가 목록에 보이지 않으면 **Agent 모드**를 사용하고 있는지 확인하세요.
- 피드백을 받지 못하면 `docs/TESTPLAN.md` 파일 변경 사항을 `modernize-legacy-code` 브랜치에 푸시했는지 확인하세요.

</details>
