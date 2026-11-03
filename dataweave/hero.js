'use strict';
Object.assign(english, {
 '데이터를 연결하고.':'Connect your data.', '의미를 정의하고.':'Define its meaning.', 'AI로 질문하세요.':'Ask with local AI.',
 '데이터 탐색부터 의미 모델링, 자연어 조회와 검증까지.':'Explore, model, query, and verify your data.',
 '기존 데이터와 로컬 AI를 하나의 작업 환경으로 연결합니다.':'Bring existing data and local AI together in one workspace.',
 '주요 기능 알아보기':'Explore features', '세 가지 기술, 하나의 워크스페이스':'Three technologies. One workspace.',
 '의미 기반 조회':'Semantic queries','근거 확인':'Traceable answers','제품 자동 시연':'Animated product walkthrough',
 '예시 데이터 기반 시연':'Illustrative sample data','연결됨':'Connected','질문을 기다리고 있어요':'Ready for your question',
 '데이터를 연결하고':'Connect your data and','첫 질문을 시작하세요.':'ask your first question.',
 '정의와 조건을 확인하고 있어요':'Checking definitions and criteria',
 '시연 일시정지':'Pause walkthrough','시연 재생':'Play walkthrough','일시정지':'Pause','재생':'Play','시연 단계 선택':'Select walkthrough step',
 '연결':'Connect','모델링':'Model','질문':'Ask','검증':'Verify',
 '기존 데이터베이스의 구조를 탐색합니다.':'Explore the structure of an existing database.',
 '테이블을 개념과 관계로 연결합니다.':'Connect tables to concepts and relationships.',
 '등록된 정의로 질문의 조건을 확인합니다.':'Interpret your question using defined criteria.',
 '조회 결과와 적용한 근거를 함께 확인합니다.':'Review the result and the evidence behind it.',
 '데이터를 연결하세요.':'Connect your data.','기존 DB의 테이블과 관계를 탐색합니다.':'Explore tables and relationships in your database.',
 '의미를 정의하세요.':'Define its meaning.','개념과 관계를 실제 데이터에 연결합니다.':'Map concepts and relationships to real data.',
 '자연어로 질문하세요.':'Ask in your own words.','등록된 업무 용어로 데이터를 조회합니다.':'Query data using your defined business terms.',
 '근거를 확인하세요.':'Follow the evidence.','답변의 정의와 실행 질의를 살펴봅니다.':'Inspect definitions and executed queries.'
});
(() => {
 const workspace=document.querySelector('#hero-workspace');
 const stage=document.querySelector('.hero-stage');
 const play=document.querySelector('#hero-play');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const descriptions=['기존 데이터베이스의 구조를 탐색합니다.','테이블을 개념과 관계로 연결합니다.','등록된 정의로 질문의 조건을 확인합니다.','조회 결과와 적용한 근거를 함께 확인합니다.'];
 let scene=0,elapsed=0,last=0,frame=0,inView=true,paused=reduced.matches;
 const duration=6000;
 function updateButton(){
   play.setAttribute('aria-pressed',String(paused));
   play.setAttribute('aria-label',paused?'시연 재생':'시연 일시정지');
   document.querySelector('#hero-play-icon').textContent=paused?'▶':'Ⅱ';
   document.querySelector('#hero-play-label').textContent=paused?'재생':'일시정지';
   stage.classList.toggle('playback-paused',paused);
   applyTranslations();
 }
 function selectScene(index){
   scene=index;elapsed=0;workspace.dataset.scene=String(index);
   document.querySelector('#scene-counter').textContent=String(index+1).padStart(2,'0')+' / 04';
   document.querySelector('#scene-description').textContent=descriptions[index];
   document.querySelector('#scene-progress-bar').style.width='0%';
   document.querySelectorAll('[data-scene-select]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.sceneSelect)===index)));
   document.querySelectorAll('.app-tabs>span:not(.sample-tag)').forEach((tab,i)=>tab.classList.toggle('selected',i===(index===0?0:index===3?2:1)));
   [['.source-scene',index===0],['.ai-welcome',index<2],['.ai-question',index>=2],['.ai-thinking',index===2],['.ai-response',index===3],['.result-preview',index===3],['.result-wait',index!==3]].forEach(([selector,visible])=>{const el=workspace.querySelector(selector);el.setAttribute('aria-hidden',String(!visible));el.inert=!visible;});
   applyTranslations();
 }
 function allowed(){return !paused&&inView&&!document.hidden;}
 function tick(time){
   frame=0;if(!allowed()){last=0;return;}
   if(last) elapsed+=Math.min(time-last,100);last=time;
   if(elapsed>=duration)selectScene((scene+1)%4);
   document.querySelector('#scene-progress-bar').style.width=(elapsed/duration*100)+'%';
   frame=requestAnimationFrame(tick);
 }
 function sync(){if(allowed()){if(!frame){last=0;frame=requestAnimationFrame(tick);}}else{cancelAnimationFrame(frame);frame=0;last=0;}stage.classList.toggle('motion-stopped',!allowed());}
 play.addEventListener('click',()=>{paused=!paused;updateButton();sync();});
 document.querySelectorAll('[data-scene-select]').forEach(b=>b.addEventListener('click',()=>{selectScene(Number(b.dataset.sceneSelect));paused=true;updateButton();sync();}));
 document.addEventListener('visibilitychange',sync);
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{threshold:.1}).observe(stage);
 reduced.addEventListener('change',e=>{if(e.matches){paused=true;updateButton();sync();}});
 selectScene(reduced.matches?3:0);updateButton();sync();
})();
