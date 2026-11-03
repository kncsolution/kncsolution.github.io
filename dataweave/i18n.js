'use strict';
// Korean is the default on every page load; language changes preserve UI state.
let currentLanguage = 'ko';
const english = {
  'DataWeave 처음으로':'DataWeave home', '주 메뉴':'Main navigation', '언어 선택':'Language selection', '메뉴 열기':'Open menu', '메뉴 닫기':'Close menu',
  '작동 방식':'How it works', '주요 기능':'Features', '기술 구성':'Architecture',
  '데이터에 의미를.':'Give data meaning.', '질문에는':'Give questions', '근거를.':'clear answers.',
  '탐색하고, 연결하고, 질문하세요.':'Explore. Connect. Ask.', '데이터에서 답을 찾는 모든 과정을 하나의 워크스페이스에서.':'One workspace for every step from data to answers.',
  '작동 방식 살펴보기':'See how it works', '제품 인터페이스 예시':'Example product interface',
  '◇   고객':'◇ Customer','◇   계약':'◇ Contract','◇   납부':'◇ Payment','◉   읽기 전용 연결':'◉ Read-only connection',
  '데이터 탐색':'Explore data','의미 모델':'Semantic model','조회 기록':'Query history','예시 화면':'Sample UI',
  '◇ 고객':'◇ Customer','◇ 계약':'◇ Contract','◇ 납부':'◇ Payment',
  '계약을 보유한다 →':'holds contract →','납부 내역을 가진다':'has payments','매핑 검증 완료':'Mapping validated','✓ 근거 확인 가능':'✓ Evidence available',
  '유효한 계약을 보유한 고객':'Customers with valid contracts','명':'people','원':'KRW','기준일 2026.10.31 · 중복 고객 제외':'As of Oct 31, 2026 · Unique customers',
  '유효한 계약을 보유한 고객 수를 알려줘.':'How many customers have valid contracts?',
  '등록된':'I applied the defined','‘유효한 계약’':'“valid contract”','정의를 적용해 조회했어요.':'criteria to this query.',
  '✓ 계약 상태: ACTIVE':'✓ Contract status: ACTIVE','✓ 계약 종료일: 기준일 이후':'✓ End date: after the reference date',
  '조건에 맞는 고객은':'The result is','128명':'128 customers','입니다.':'matching these criteria.',
  '조회 근거 보기 ↗':'View query evidence ↗','데이터에 질문해 보세요':'Ask about your data',
  '로컬 AI 실행':'Local AI execution','기존 데이터베이스 연결':'Connect existing databases','조회 근거 확인':'Trace every answer',
  '세 가지 기술.':'Three technologies.','하나의 연결된 경험.':'One connected experience.',
  '데이터에서 답까지.':'From data to answers.','끊김 없는 네 단계.':'Four connected steps.',
  '서로 다른 도구 사이를 오가던 작업을':'Bring the work across different tools','하나의 흐름으로 연결합니다.':'into one continuous workflow.',
  '제품 작업 단계':'Product workflow','연결하다':'Connect','정의하다':'Define','질문하다':'Ask','검증하다':'Verify',
  '데이터베이스와 만나기':'Meet your database','구조에 의미 더하기':'Add meaning to structure','익숙한 언어로 조회하기':'Query in your own words','답변의 근거 확인하기':'Trace the evidence',
  '기존 데이터베이스를 연결하고 테이블, 컬럼, 관계를 탐색하세요. 원본 데이터를 보면서 모델링을 시작할 수 있습니다.':'Connect an existing database and explore its tables, columns, and relationships. Start modeling with your source data in view.',
  '고객, 계약, 납부와 같은 개념을 정의하고 테이블과 연결하세요. AI의 매핑 제안을 검토한 뒤 모델에 반영합니다.':'Define concepts such as customers, contracts, and payments, then map them to tables. Review AI suggestions before applying them to your model.',
  '등록된 개념과 관계를 활용해 자연어로 조회하세요. 질문의 조건과 기준을 확인한 뒤 결과를 살펴봅니다.':'Query in natural language using your defined concepts and relationships. Confirm the criteria, then explore the results.',
  '적용한 정의, 매핑과 실행 질의를 따라가며 답변을 확인하세요. 검토한 모델과 조회를 프로젝트에 보관합니다.':'Verify answers through the definitions, mappings, and executed queries. Save reviewed models and queries in your project.',
  '테이블 너머의':'Go beyond tables.','의미를 연결하세요.':'Connect their meaning.',
  '컬럼 이름만으로는 알 수 없는 업무의 맥락.':'Your data has context that column names cannot capture.',
  '고객, 계약, 납부처럼 익숙한 개념으로 정의하고':'Define familiar concepts like customers and contracts,',
  '실제 데이터와 연결하세요.':'and connect them to the underlying data.',
  '개념과 관계를 눈으로 보며 편집':'Visually edit concepts and relationships',
  'AI가 제안한 매핑을 검토하고 반영':'Review and apply AI-suggested mappings',
  '기존 DB를 가상 지식 그래프로 조회':'Query existing databases as virtual knowledge graphs',
  '아래 개념을 선택해 매핑을 확인하세요 ↘':'Select a concept to explore its mapping ↘','인터랙티브 예시':'Interactive example',
  '고객의 고유 식별자를 기준으로 원본 데이터와 개념을 연결합니다.':'Map source data to the Customer concept using its unique identifier.',
  '계약과 고객의 관계를 customer_id를 통해 정의합니다.':'Define the relationship between contracts and customers through customer_id.',
  '납부를 계약과 연결하고 amount 컬럼을 납부 금액으로 정의합니다.':'Connect payments to contracts and map the amount column to Payment.amount.',
  'customers.customer_id → 고객.id':'customers.customer_id → Customer.id',
  'contracts.customer_id → 고객 · 계약을 보유한다':'contracts.customer_id → Customer · holds contract',
  'payments.amount → 납부.금액':'payments.amount → Payment.amount',
  '질문은 자연스럽게.':'Ask in your own words.','답변은 확인할 수 있게.':'See how answers are built.',
  '익숙한 업무 용어로 질문하세요.':'Use the language of your work.',
  '정의된 기준으로 조회하고, 근거까지 따라가세요.':'Query with defined criteria and follow the evidence.',
  '무엇이 궁금한가요?':'What would you like to know?',
  '유효한 계약을 보유한 고객 수는?':'How many customers have valid contracts?',
  '상품별 활성 계약 수를 보여줘':'Show active contracts by product',
  '이번 달 납부 금액을 알려줘':'Show payments received this month',
  '미리 준비된 예시 데이터로 작동합니다.':'This demo uses prepared sample data.',
  '실제 데이터베이스나 AI 모델에 연결하지 않습니다.':'No live database or AI model is connected.',
  '✓ 조회 완료':'✓ Query complete',
  '기준일에 유효한 계약을 보유한 고객을 중복 없이 집계했습니다.':'Counts unique customers with a valid contract on the reference date.',
  '상태 ACTIVE · 종료일이 기준일 이후인 계약':'Status ACTIVE · Contract end date after the reference date',
  '상품별 활성 계약 수':'Active contracts by product','상품':'Product','활성 계약':'Active contracts',
  '86건':'86','35건':'35','21건':'21',
  '동일 기준일에 유효한 계약 142건을 상품별로 집계했습니다. 한 고객은 여러 계약을 보유할 수 있습니다.':'Groups 142 valid contracts by product on the same reference date. One customer may hold multiple contracts.',
  '유효한 계약을 상품별로 분류 · 계약 ID 기준 집계':'Valid contracts grouped by product · Counted by contract ID',
  '2026년 10월 납부 금액':'Payments in October 2026',
  '예시 데이터의 기준월인 2026년 10월에 완료된 원화 납부 금액을 합산했습니다.':'Sums completed KRW payments in October 2026, the reference month for this sample.',
  '납부 상태 COMPLETED · 통화 KRW · 2026년 10월':'Payment status COMPLETED · Currency KRW · October 2026',
  '조회 근거 보기':'View query evidence','조회 근거 접기':'Hide query evidence','적용 정의':'Definition','기준 시점':'Reference date','모델 / 매핑':'Model / mapping','2026.10.31 · 예시 데이터':'Oct 31, 2026 · Sample data','실행 질의 예시':'Example executed query',
  '익숙한 데이터.':'Your existing data.','새로운 작업 방식.':'A new way to work.',
  '데이터 탐색, 의미 기반 조회, 로컬 AI.':'Data exploration, semantic queries, and local AI.',
  '세 가지 기술을 하나의 제품 경험으로 연결했습니다.':'Three technologies, connected in one product.',
  '구조와 원본 데이터를 탐색하고':'Explore schemas and source data,','SQL로 직접 확인하는 작업 공간.':'and verify results directly with SQL.',
  '의미 모델과 매핑을 통해':'Query existing databases through','기존 DB를 조회하는 엔진.':'semantic models and mappings.',
  '질문을 해석하고 모델링을 돕는 AI.':'AI that interprets questions and helps you model.',
  '사용자 PC 또는 사내 서버에서 실행.':'Run it on your PC or an internal server.',
  '데이터 연결 → 의미 모델 → 질의 검증 → DB 조회 → 결과 설명':'Connect data → Model meaning → Validate query → Query DB → Explain results',
  'AI 처리 위치를 직접 선택하고, 검토한 모델과 매핑을 프로젝트로 저장해 재사용하세요.':'Choose where AI runs. Save reviewed models and mappings in projects and reuse them.',
  '데이터가 달라도,':'Different data.','작업의 흐름은 같습니다.':'The same connected workflow.',
  '도메인 예시':'Domain examples','커머스':'Commerce','자산 관리':'Asset management','연구 데이터':'Research data',
  '고객부터 납부까지, 하나의 연결.':'From customers to payments.',
  '고객과 계약, 납부의 관계를 정의해 거래 흐름을 살펴보세요.':'Define the relationships between customers, contracts, and payments to explore transactions.',
  '장비의 위치와 담당자를 한눈에.':'Every asset, owner, and location.',
  '장비, 설치 장소, 관리 담당자를 연결해 자산 현황을 조회하세요.':'Connect equipment to its location and owner to explore your asset inventory.',
  '연구 결과를 맥락과 함께.':'Put research results in context.',
  '프로젝트와 실험, 측정 결과를 연결해 연구 데이터를 탐색하세요.':'Connect projects, experiments, and measurements to explore research data.',
  '◇ 담당자':'◇ Owner','◇ 장비':'◇ Asset','◇ 장소':'◇ Location','◇ 프로젝트':'◇ Project','◇ 실험':'◇ Experiment','◇ 측정':'◇ Measurement',
  '제품의 적용 방식을 설명하는 예시이며, 실제 도입 사례가 아닙니다.':'Illustrative applications of the product, not customer deployments.',
  '궁금한 점을':'A few answers','먼저 살펴보세요.':'before you start.',
  '기존 데이터를 다른 곳으로 옮겨야 하나요?':'Do I need to move my existing data?',
  'Ontop의 가상 지식 그래프는 연결된 원본 DB에서 질의를 실행합니다. 의미 모델을 사용하기 위해 데이터를 별도 그래프 DB에 복제할 필요는 없습니다. 여러 DB를 함께 조회하려면 추가적인 통합 구성이 필요합니다.':'Ontop virtual knowledge graphs execute queries against the connected source database. You do not need to copy data to a separate graph database to use a semantic model. Querying across multiple databases requires additional integration.',
  'AI가 업무 정의를 자동으로 결정하나요?':'Does AI decide business definitions automatically?',
  'AI는 개념과 관계, 매핑의 초안을 제안합니다. 사용자가 검토하고 반영한 정의를 기준으로 조회하며, 모호한 조건은 확인하는 방식으로 설계했습니다.':'AI suggests draft concepts, relationships, and mappings. Queries use definitions that you have reviewed and applied, with clarification for ambiguous criteria.',
  '로컬 실행은 무엇을 의미하나요?':'What does local execution mean?',
  '언어 모델의 처리를 사용자 PC 또는 사내 서버에서 수행한다는 의미입니다. 원격 DB를 연결하면 해당 DB와 통신합니다. 홈페이지의 데모는 외부 AI나 데이터베이스에 연결하지 않는 샘플 시연입니다.':'The language model runs on your PC or an internal server. Connecting a remote database involves communication with that database. This website demo uses sample data without connecting to external AI or databases.',
  '이 페이지에서 실제 제품을 사용할 수 있나요?':'Can I use the actual product on this page?',
  '현재 페이지는 제품 설계를 소개하는 로컬 홈페이지입니다. 제품 화면과 조회 결과는 기능을 설명하기 위한 시연이며, 실제 통합 프로그램이나 설치 파일은 포함되어 있지 않습니다.':'This local website introduces the product design. Screens and query results illustrate the intended features; the integrated application and its installer are not included.',
  '당신의 데이터에,':'Your data.','이해할 수 있는 연결을.':'Meaningfully connected.',
  '제품 데모 체험하기':'Explore the product demo','연결부터 검증까지, 직접 살펴보세요.':'Explore every step, from connection to verification.',
  '제품 소개 프로토타입 · 가칭 DataWeave':'Product website prototype · Working name: DataWeave',
  '로컬 실행 전용 · 예시 데이터 기반':'Local only · Powered by sample data','맨 위로 ↑':'Back to top ↑',
  '데모 닫기':'Close demo','하나의 흐름, 네 가지 경험':'One workflow. Four experiences.',
  '시연 진행 단계':'Demo progress','← 이전':'← Previous','다음 단계 →':'Next step →','직접 살펴보기 ↗':'Explore the examples ↗',
  '실제 제품 연결 없이 동작하는 기능 소개 시연입니다.':'An illustrative walkthrough with no live product connection.',
  '읽기 전용 연결':'Read-only connection','예시 데이터 · 중복 고객 제외':'Sample data · Unique customers',
  '✓ 상태 ACTIVE · 종료일이 기준일 이후':'✓ Status ACTIVE · End date after reference date',
  '✓ 기준일 2026.10.31':'✓ Reference date: Oct 31, 2026',
  '✓ 실행 질의와 조회 결과 확인':'✓ Review the executed query and its results',
  '01. 연결하다':'01. Connect','02. 정의하다':'02. Define','03. 질문하다':'03. Ask','04. 검증하다':'04. Verify'
};
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
function translateValue(value) {
  const core=value.trim();
  if(currentLanguage!=='en' || !Object.hasOwn(english,core)) return value;
  return value.replace(core,english[core]);
}
function applyTranslations() {
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode())) {
    if(node.parentElement?.closest('script,style,[data-language]')) continue;
    let saved=originalText.get(node);
    if(!saved || (node.nodeValue!==saved.ko && node.nodeValue!==saved.en)) {
      saved={ko:node.nodeValue,en:null}; originalText.set(node,saved);
    }
    const output=translateValue(saved.ko);
    if(currentLanguage==='en') saved.en=output;
    if(node.nodeValue!==output) node.nodeValue=output;
  }
  document.querySelectorAll('[aria-label]').forEach(el=>{
    let saved=originalAttributes.get(el);
    const value=el.getAttribute('aria-label');
    if(!saved || (value!==saved.ko && value!==saved.en)) {saved={ko:value,en:null}; originalAttributes.set(el,saved);}
    const output=translateValue(saved.ko);if(currentLanguage==='en')saved.en=output;
    el.setAttribute('aria-label',output);
  });
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{
  currentLanguage=button.dataset.language;
  document.documentElement.lang=currentLanguage;
  document.title=currentLanguage==='ko'?'DataWeave — 데이터에 의미를 연결하다':'DataWeave — Give your data meaning';
  document.querySelector('meta[name="description"]').content=currentLanguage==='ko'?'데이터 탐색부터 의미 모델링, 자연어 조회와 검증까지. DataWeave 로컬 AI 데이터 워크스페이스.':'Explore, model, query, and verify your data in one local AI workspace.';
  document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  applyTranslations();
}));
