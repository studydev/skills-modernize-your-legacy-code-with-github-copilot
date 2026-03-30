## Step 1: GitHub Copilot으로 애플리케이션 현대화 시작

Mergington 고등학교의 IT 팀에 오신 것을 환영합니다! 중요한 시기에 합류하셨습니다. 학교에서는 1990년대 초부터 동일한 COBOL 기반 회계 시스템을 사용하여 학생 수수료, 식당 계정, 학용품 구매를 관리해 왔습니다. 원래 프로그래머는 몇 년 전에 퇴직했고, 현재 IT 직원은 변경이 필요할 때마다 시스템을 유지하는 데 어려움을 겪고 있습니다. 애플리케이션을 더 현대적인 프로그래밍 언어로 업데이트하려는 욕구가 있으며, Node.js가 이 요구 사항에 적합해 보입니다.

<img width="60%%" height="60%%" alt="COBOL에서 Node.js로" src="https://raw.githubusercontent.com/skills-kr/modernize-your-legacy-code-with-github-copilot/main/.github/images/cobol-to-nodejs.png" />

### 📖 이론: 교육 기관 레거시 시스템 현대화

> [!NOTE]
> 교육 환경에서의 레거시 코드 현대화란 필수적인 학교 업무 운영과 데이터 무결성을 보존하면서 오래된 시스템을 현대 기술로 변환하는 것을 의미합니다.

많은 교육 기관이 여전히 중요한 행정 기능을 위해 레거시 COBOL 시스템에 의존하고 있습니다. 이러한 시스템은 수십 년 동안 학교 재정을 안정적으로 관리해 왔지만, 현재 상당한 도전 과제를 제시합니다:

- ❗ 기술 인력 부족 – 오늘날 COBOL을 아는 개발자가 적어 유지보수가 어렵고 비용이 많이 듭니다.
- ❗ 통합 문제 – 레거시 시스템은 현대 플랫폼, API, 클라우드 서비스와 인터페이스하기 어렵습니다.
- ❗ 높은 유지보수 비용 – 오래된 시스템과 비효율적인 프로세스가 레거시 시스템의 운영 및 지원 비용을 높입니다.
- ❗ 민첩성 부족 – 레거시 시스템은 경직되어 새로운 비즈니스 요구 사항이나 시장 변화에 빠르게 적응하기 어렵습니다.
- ❗ 보안 위험 – 오래된 코드베이스는 현대적인 보안 기능이 부족하여 시스템이 취약해질 수 있습니다.

#### 레거시 시스템 현대화의 이점

- ✅ 향상된 민첩성 – 변화하는 비즈니스 및 기술 요구에 더 쉽게 적응하고 확장할 수 있습니다.
- ✅ 비용 효율성 – 현대 시스템은 일반적으로 더 효율적이며 수동 개입이 적습니다.
- ✅ 더 나은 통합 – 현대 도구, API, 타사 서비스와의 원활한 연결.
- ✅ 강화된 보안 – 최신 보안 프로토콜과 현대 표준 준수.
- ✅ 인재 접근성 – 현대 언어와 도구에 익숙한 개발자를 더 쉽게 채용할 수 있습니다.

그러나 기업은 레거시 시스템을 현대화하는 초기 단계를 두려워하는 경우가 많습니다.

GitHub Copilot은 이러한 두려움을 극복하고 현대화 프로세스를 전환하는 데 도움을 줄 수 있습니다:

1. 문서가 없는 수십 년 된 COBOL 코드를 해독하는 데 도움.
1. 비즈니스 로직이 그대로 유지되도록 테스트 생성을 지원.
1. COBOL 구조를 현대적인 Node.js 대응물로 변환.
1. 새 코드를 테스트하여 원래 시스템의 요구 사항을 충족하는지 확인.

### ⌨️ Activity: 환경 설정하기

시작하기 위해 GitHub Copilot을 효과적으로 사용하는 데 필요한 도구와 확장이 포함된 GitHub Codespace를 설정합니다.

> [!TIP]
> 현재 및 향후 기능에 대해서는 [GitHub Copilot 기능](https://docs.github.com/en/copilot/about-github-copilot/github-copilot-features) 문서에서 자세히 알아볼 수 있습니다.

1. 아래 버튼을 우클릭하여 새 탭에서 **Codespace 생성** 페이지를 엽니다. 기본 구성을 사용하세요.

   [![GitHub Codespaces에서 열기](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

1. **Repository** 필드가 원본이 아닌 여러분의 실습 복사본인지 확인한 후, 녹색 **Create Codespace** 버튼을 클릭합니다.
   - ✅ 여러분의 복사본: `/{{full_repo_name}}`
   - ❌ 원본: `/skills-kr/modernize-your-legacy-code-with-github-copilot`

1. Visual Studio Code가 브라우저에 로드될 때까지 잠시 기다립니다.

1. 왼쪽 사이드바에서 확장 탭을 클릭하고 `GitHub Copilot`과 `Cobol` 확장이 설치되어 활성화되어 있는지 확인합니다.

   <img width="350" alt="VS Code용 Copilot 확장" src="https://raw.githubusercontent.com/skills-kr/modernize-your-legacy-code-with-github-copilot/main/.github/images/copilot-extension-vscode.png" />

   <img width="345" alt="VS Code용 COBOL 확장" src="https://raw.githubusercontent.com/skills-kr/modernize-your-legacy-code-with-github-copilot/main/.github/images/cobol-extension-vscode.png" />

1. VS Code 상단에서 **Copilot 아이콘**을 찾아 클릭하여 Copilot Chat 패널을 엽니다.

   <img width="150" alt="VS Code의 Copilot 채팅 아이콘" src="https://raw.githubusercontent.com/skills-kr/modernize-your-legacy-code-with-github-copilot/main/.github/images/copilot-chat-icon.png" />

1. GitHub Copilot을 처음 사용하는 경우 계속하려면 사용 약관에 동의해야 합니다.

<details>
<summary>문제가 있나요? 🤷</summary><br/>

- Copilot 아이콘이 보이지 않으면 GitHub Copilot 확장이 설치되어 활성화되어 있는지 확인하세요.
- Copilot 채팅 패널이 보이지 않거나 다른 문제가 있는 경우, `Ctrl + Shift + P` (Windows) 또는 `Cmd + Shift + P` (Mac)로 Codespace를 새로고침하고 **Developer: Reload Window**를 선택해 보세요.

</details>

### :keyboard: Activity: Copilot으로 터미널 명령어 기억하기 🙋

잘 하셨습니다! 이제 작업 환경이 설정되었으니, 다음 단계에서 리팩토링을 위해 브랜치를 시작하도록 Copilot에게 도움을 요청합시다!

1. 하단 패널에서 **Terminal** 탭을 선택합니다.

1. 새 터미널 창에서 키보드 단축키 `Ctrl + I` (Windows) 또는 `Cmd + I` (Mac)를 사용하여 **Copilot의 터미널 인라인 채팅**을 불러옵니다.

1. Copilot에게 잊어버린 명령어를 기억할 수 있도록 도움을 요청합시다: 브랜치를 만들고 게시하는 방법입니다.

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Hey copilot, how can I create and publish a new git branch
   > called modernize-legacy-code?
   > ```

   <details>
   <summary>문제가 있나요? 🤷</summary><br/>

   **Copilot의 터미널 인라인 채팅**을 사용해야 합니다. Copilot Chat 패널이 아닙니다.

   터미널 인라인 채팅은 특별히 터미널 명령어를 도와주도록 설계되었습니다.

   Copilot은 아래와 유사한 명령어로 응답할 것입니다.

   ```shell
   git checkout -b modernize-legacy-code
   git push -u origin modernize-legacy-code
   ```

   </details>

1. 이제 명령어가 마음에 들면, `Run` 버튼을 눌러 Copilot이 실행하도록 합니다. 복사하여 붙여넣을 필요가 없습니다!

1. 이제 브랜치가 GitHub에 푸시되었으므로, Mona가 이미 여러분의 작업을 확인하고 있을 것입니다. 잠시 기다리며 댓글을 주시하세요. Mona가 진행 정보와 다음 레슨으로 응답할 것입니다.

<details>
<summary>문제가 있나요? 🤷</summary><br/>

피드백을 받지 못하는 경우 다음을 확인하세요:

- 정확히 `modernize-legacy-code`라는 이름으로 브랜치를 만들었는지 확인하세요. 접두사나 접미사 없이.
- 브랜치가 실제로 저장소에 푸시되었는지 확인하세요. 그것이 다음 단계를 트리거합니다.
- Copilot이 명령어를 이해하지 못하면, 다시 표현하거나 더 많은 컨텍스트를 제공해 보세요.

</details>
