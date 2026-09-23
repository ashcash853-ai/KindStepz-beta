const SUPABASE_URL = "https://abducuzugbhncahlpoht.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_G96jDysFbQFNLscKK56D8g_1bk61O9Q"; 
const worlds={Think:['🧠','Puzzles, planning & problem-solving'],Connect:['❤️','Kindness, listening & confidence'],Money:['💷','Budgeting, saving & shopping'],Life:['🍳','Cooking, organising & everyday skills'],Make:['🔧','DIY, building & creativity'],Explore:['🌍','Nature, community & discovery']};
const missions={Think:[['The Three-Way Plan','Pick a simple family job. Think of three ways to do it, then choose the best plan together.'],['Memory Detective','Look at ten safe household objects for 30 seconds. Cover them and see how many you can remember.'],['Route Planner','Choose somewhere familiar and work out two different ways to get there.'],['What Would Happen?','Choose an everyday problem and each suggest what might happen after three different choices.'],['Build a Schedule','Plan a fun hour together using four activities and sensible timings.']],Connect:[['Three Good Things','Each person says three things they appreciate about the other.'],['Listening Mission','Take turns talking for one minute while the other listens without interrupting, then say what you heard.'],['Kindness Spotter','Find three kind things people did today, however small.'],['Team Decision','Choose a family activity together. Everyone gets to suggest one idea before deciding.'],['Thank-You Mission','Make or write a short thank-you for somebody who helped your family.']],Money:[['The £10 Dinner','Imagine you have £10 to make dinner. Choose what you would buy, total it and see what is left.'],['Needs or Wants?','Choose ten everyday items and decide together whether each is a need, a want, or sometimes both.'],['Save for It','Choose something inexpensive you would like and work out how long saving £1 a week would take.'],['Price Detective','Pick three similar household products and compare their prices and sizes.'],['Change Challenge','Make an imaginary shop. Pay for items and work out the correct change.']],Life:[['Snack Builder','Plan and safely prepare a simple snack together.'],['Ten-Minute Tidy','Choose one small area and work together for ten minutes to organise it.'],['Laundry Detective','Look at clothing labels together and work out how different items should be washed.'],['Meal Planner','Choose breakfast, lunch and dinner for one day and make a simple ingredient list.'],['Ready Tomorrow','Prepare what you need for tomorrow so the morning is easier.']],Make:[['Fix It First','Find something safe that needs organising, adjusting or simple maintenance and decide what is needed.'],['Paper Tower','Build the tallest free-standing tower you can from paper.'],['Reuse Challenge','Turn clean packaging into something useful or decorative.'],['Measure It','Choose five household objects and estimate their size before measuring them.'],['Design a Helper','Draw an invention that would make one everyday family job easier.']],Explore:[['Nature Five','Go outside and find five different natural things without damaging them.'],['Street Detective','On a safe walk, spot five things that help a community work.'],['Weather Watch','Look at the sky and make a weather prediction, then check later.'],['Local History Question','Choose one local building or place and find out one thing about its past with an adult.'],['Map Maker','Draw a simple map of a familiar safe route and mark useful landmarks.']]};
const defaultState={profiles:[],active:null,parentPin:'',settings:{large:false,contrast:false},feedback:[]};let state=JSON.parse(localStorage.getItem('kindstepz04')||'null')||structuredClone(defaultState);const app=document.querySelector('#app');
const save=()=>{localStorage.setItem('kindstepz04',JSON.stringify(state));applySettings()};const profile=()=>state.profiles.find(p=>p.id===state.active);function applySettings(){document.body.classList.toggle('large-text',!!state.settings.large);document.body.classList.toggle('high-contrast',!!state.settings.contrast)}
function shell(content){app.innerHTML=`<div class="wrap"><nav><button class="navbtn" onclick="home()">🌱 Home</button>${profile()?'<button class="navbtn" onclick="worldScreen()">🧭 Missions</button>':''}<button class="navbtn" onclick="parentSpace()">🔒 Parent Space</button><button class="navbtn" onclick="info()">ⓘ Info</button></nav>${content}<div class="footer">KindStepz MVP Candidate v0.4 • Small moments. Real skills. Stronger families.</div></div>`}
function home(){
  let p=profile();

  if(!p){
    shell(`
      <section class="hero">
        <h1 class="logo">🌱 KindStepz</h1>
        <p class="tag">Small moments. Real skills. Stronger families.</p>
      </section>

      <div class="card">
        <h2>Start your family journey</h2>
        <p>Choose an age route and a simple nickname. KindStepz stores progress on this device for this prototype.</p>
        <button class="btn primary" onclick="newProfile()">Create Family Profile</button>
      </div>

      <div class="notice">
        <b>Real-world first.</b> KindStepz starts positive activities away from the screen. Adults remain responsible for safety and supervision.
      </div>
    `);
    return;
  }

  shell(`
    <section class="hero">
      <h1 class="logo">🌱 KindStepz</h1>
      <p class="tag">Small moments. Real skills. Stronger families.</p>
    </section>

    <div class="card">
      <p>Age ${p.age}</p>
      <h2>${esc(p.nickname||'Family')} profile</h2>
      <p>⭐ ${p.points} KindPoints • ${p.done.length}/30 missions</p>
    </div>

    ${p.done.lenght > 0 ? `
<div class="card hero">
  <p><b>🌱 FIRST KINDSTEP COMPLETE</b></p>
  <h2>Brilliant — you did it!</h2>
  <p>Your family's first small win is complete.</p>
  <button class="btn primary" onclick="worldScreen()">Choose Next Mission</button>
</div>
` : `
<div class="card hero">
  <p><b>🌱 YOUR FIRST KINDSTEP</b></p>
  <h2>One Small Win</h2>
  <p>Choose one small useful thing to do together today.</p>
  <p>About 5-10 minutes.</p>
  <button class="btn primary" onclick="firstJourney()">Start One Small Win</button>
</div>
`}

    ${progressHTML(p)}

    <button class="btn" onclick="worldScreen()">Continue to Skill Worlds</button>

    <div class="notice">
      <b>Real-world first.</b> KindStepz starts positive activities away from the screen. Adults remain responsible for safety and supervision.
    </div>
  `);
}
function firstJourney(){shell(`<div class="card hero"><h1>🌱 One Small Win</h1><p>Choose one small useful thing to do together today.</p><p>It could be preparing something, organising something, helping with a household task, or learning one simple skill.</p><div class="card"><h2>For the grown-up</h2><p>Guide, encourage and let them have a go rather than taking over.</p></div><button class="btn primary" onclick="firstJourneyDone()">We did it</button></div>`)}
function firstJourneyDone(){let p=profile();if(!p)return home();if(p.firstJourneyDone)return home();p.firstJourneyDone=true;if(!p.done.includes("firstJourney"))p.done.push("firstJourney");p.points=100;save();alert("🌱 Brilliant! One small win completed.");home()}
function newProfile(){shell(`<div class="card"><h1>Create a profile</h1><label>Nickname (optional — avoid a child's full name)</label><input id="nick" class="input" maxlength="20" placeholder="e.g. Team Green"><p>Choose age route</p><div class="grid">${['4–6','7–9','10–12','13–16'].map(a=>`<button class="btn" onclick="createProfile('${a}')">${a}</button>`).join('')}</div></div>`)}
function createProfile(age){let nick=document.querySelector('#nick').value.trim();let p={id:Date.now().toString(),nickname:nick,age,points:0,done:[],badges:[],reflections:[]};state.profiles.push(p);state.active=p.id;save();worldScreen()}
function worldScreen(){let p=profile();if(!p)return home();shell(`<div class="top"><div><span class="pill">${esc(p.nickname||'Family')} • Age ${p.age}</span><h1>Choose a Skill World</h1></div><strong>⭐ ${p.points}</strong></div><div class="grid">${Object.entries(worlds).map(([w,x])=>`<button class="btn world" onclick="world('${w}')"><div style="font-size:30px">${x[0]}</div>${w}<div class="small">${x[1]}</div></button>`).join('')}</div>${progressHTML(p)}`)}
function world(w){let p=profile();shell(`<button class="back" onclick="worldScreen()">← Skill Worlds</button><div class="card"><h1>${worlds[w][0]} ${w}</h1><p>${worlds[w][1]}</p>${missions[w].map((m,i)=>{let id=w+i,d=p.done.includes(id);return `<div class="card mission"><h2>${d?'✓ ':''}${m[0]}</h2><p>${m[1]}</p><button class="btn ${d?'':'primary'}" onclick="mission('${w}',${i})">${d?'Do Again':'Start Mission'}</button></div>`}).join('')}</div>`)}
function mission(w,i){let m=missions[w][i];shell(`<button class="back" onclick="world('${w}')">← Back</button><div class="card mission center"><div style="font-size:48px">${worlds[w][0]}</div><h1>${m[0]}</h1><p style="font-size:20px">${m[1]}</p><div class="notice">Keep it safe and age-appropriate. An adult stays responsible for food, tools, roads and outdoor activities.</div><p class="points">⭐ 100 KindPoints</p><button class="btn primary" onclick="reflect('${w}',${i})">We Finished It!</button></div>`)}
function reflect(w,i){shell(`<div class="card center"><h1>How did it go?</h1><p>There is no failure here — reflection helps families learn.</p><div class="grid">${[['😊','Nailed it'],['🙂','We did it'],['🤔','That was tricky'],['🔄','Try again']].map(x=>`<button class="btn" onclick="finish('${w}',${i},'${x[1]}')"><div style="font-size:28px">${x[0]}</div>${x[1]}</button>`).join('')}</div></div>`)}
function finish(w,i,reaction){let p=profile(),id=w+i,isNew=!p.done.includes(id);if(isNew){p.done.push(id);p.points+=100;if(p.done.length===1)p.badges.push('🏅 First Step');if(Object.keys(worlds).every(x=>p.done.some(d=>d.startsWith(x)))&&!p.badges.includes('🌟 Family Explorer'))p.badges.push('🌟 Family Explorer')}p.reflections.push({mission:id,reaction,date:new Date().toISOString()});save();shell(`<div class="card hero"><div style="font-size:60px">${isNew?'🏅':'🌱'}</div><h1>${isNew?'Great step!':'Mission revisited!'}</h1><p>${isNew?'You practised a real-world skill together.':'Practising again is part of learning.'}</p><h2>⭐ ${p.points} KindPoints</h2><button class="btn primary" onclick="worldScreen()">Choose Next Mission</button></div>${progressHTML(p)}`)}
function progressHTML(p){let n=p.done.length,pc=Math.round(n/30*100);return `<div class="card"><h2>Family Journey</h2><p><b>${n}/30</b> starter missions completed</p><div class="bar"><div class="fill" style="width:${pc}%"></div></div><p>${Object.keys(worlds).map(w=>`${worlds[w][0]} ${w} ${p.done.some(d=>d.startsWith(w))?'✓':'○'}`).join(' &nbsp; ')}</p>${p.badges.map(b=>`<span class="badge">${b}</span>`).join('')}</div>`}
function parentSpace(){if(state.parentPin)return pinGate();shell(`<div class="card"><h1>Parent Space</h1><p>Create a 4-digit local PIN. This prototype keeps the PIN only on this device; it is not account-grade security.</p><input id="pin" class="input" inputmode="numeric" maxlength="4" placeholder="4-digit PIN"><button class="btn primary" onclick="setPin()">Set Parent PIN</button><button class="btn" onclick="parentDashboard()">Skip for prototype</button></div>`)}
function setPin(){let v=document.querySelector('#pin').value;if(!/^\d{4}$/.test(v))return alert('Please enter exactly 4 digits.');state.parentPin=v;save();parentDashboard()}
function pinGate(){shell(`<div class="card"><h1>Parent Space</h1><input id="pin" class="input" type="password" inputmode="numeric" maxlength="4" placeholder="PIN"><button class="btn primary" onclick="checkPin()">Unlock</button></div>`)}function checkPin(){document.querySelector('#pin').value===state.parentPin?parentDashboard():alert('PIN not recognised.')}
function parentDashboard(){let p=profile();shell(`<div class="card"><h1>Parent Dashboard</h1>${p?`<p><b>${esc(p.nickname||'Family')}</b> • Age ${p.age} • ⭐ ${p.points} • ${p.done.length}/30 completed</p>`:'<p>No active profile yet.</p>'}<button class="btn" onclick="switchProfile()">Manage profiles</button></div><div class="card"><h2>Accessibility</h2><div class="setting"><span>Larger text</span><button class="btn" onclick="toggleSetting('large')">${state.settings.large?'On':'Off'}</button></div><div class="setting"><span>High contrast</span><button class="btn" onclick="toggleSetting('contrast')">${state.settings.contrast?'On':'Off'}</button></div></div><div class="card"><h2>Testing & data</h2><p class="muted">Export contains local prototype progress and feedback. Review it before sharing.</p><button class="btn" onclick="feedback()">Leave prototype feedback</button> <button class="btn" onclick="exportData()">Export my data</button></div><div class="card"><h2>Reset</h2><p>Erase KindStepz prototype data from this browser.</p><button class="btn danger" onclick="resetAll()">Erase local data</button>$(familyProgressHTML(p)}</div>`)}
function toggleSetting(k){state.settings[k]=!state.settings[k];save();parentDashboard()}
function familyProgressHTML(p){const counts={think:0,connect:0,money:0,life:0,make:0,explore:0};(p.done||[]).forEach(id=>{const w=String(id).split("-")[0];if(counts[w]!==undefined)counts[w]++;});const worlds={think:"🧠 Think",connect:"❤️ Connect",money:"💷 Money",life:"🍳 Life",make:"🔧 Make",explore:"🌍 Explore"};return `<div class="card"><h2>Family Progress</h2>${Object.entries(worlds).map(([w,name])=>`<div class="setting"><span><b>${name}</b></span><span>${counts[w]}/5</span></div>`).join("")}</div>`;}
function switchProfile(){shell(`<div class="card"><h1>Family Profiles</h1>${state.profiles.map(p=>`<div class="setting"><span><b>${esc(p.nickname||'Family')}</b> • ${p.age}</span><button class="btn" onclick="activate('${p.id}')">${p.id===state.active?'Active':'Use'}</button></div>`).join('')||'<p>No profiles yet.</p>'}<button class="btn primary" onclick="newProfile()">Add profile</button></div>`)}function activate(id){state.active=id;save();parentDashboard()}
function feedback(){shell(`<div class="card"><h1>Family Test Feedback</h1><label>Would you use KindStepz again?</label><select id="again" class="input"><option>Yes</option><option>Maybe</option><option>No</option></select><label>What worked or felt confusing?</label><textarea id="note" class="input" rows="5" maxlength="500"></textarea><button class="btn primary" onclick="saveFeedback()">Save feedback on this device</button></div>`)}function saveFeedback(){state.feedback.push({again:document.querySelector('#again').value,note:document.querySelector('#note').value.trim(),date:new Date().toISOString()});save();parentDashboard()}
function exportData(){let safe={version:'0.4',exported:new Date().toISOString(),profiles:state.profiles.map(({id,...p})=>p),settings:state.settings,feedback:state.feedback};let b=new Blob([JSON.stringify(safe,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='kindstepz-test-export.json';a.click();URL.revokeObjectURL(a.href)}
function resetAll(){if(confirm('Erase all KindStepz data stored in this browser?')){localStorage.removeItem('kindstepz04');state=structuredClone(defaultState);applySettings();home()}}
function info(){shell(`<div class="card"><h1>About KindStepz</h1><p>KindStepz is a prototype designed to help families practise practical, thinking and relationship skills through short real-world missions.</p><h2>Join the KindStepz beta</h2><p>Adults can join our early-access list.</p><label>Email</label><input id="betaEmail" class="input" type="email" placeholder="you@example.com"><label><input id="betaAdult" type="checkbox"> I confirm I am 18 or over</label><label><input id="betaMarketing" type="checkbox"> I would like to receive KindStepz news and updates</label><button class="btn primary" onclick="joinBeta()">Join beta</button><p id="betaMessage"></p><h2>Privacy</h2><p>Your family progress stays locally on this device. If you choose to join the beta list, your email address, adult confirmation and marketing choice are sent to our secure beta database.</p><h2>Parent information</h2><p>KindStepz is not medical, therapeutic, financial or professional safety advice. Adults choose whether an activity is suitable and supervise as needed.</p><h2>Testing rule</h2><p>Please avoid entering children's full names or identifying information. Use a nickname if you want to label a profile.</p></div>`)}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}applySettings();home();
async function betaSignup(email,adultConfirmed,marketingConsent){const r=await fetch(SUPABASE_URL+"/rest/v1/beta_signups",{method:"POST",headers:{"apikey":SUPABASE_PUBLISHABLE_KEY,"Content-Type":"application/json"},body:JSON.stringify({email:email,adult_confirmed:adultConfirmed,marketing_consent:marketingConsent})});return r.ok;}
async function joinBeta(){const email=document.querySelector("#betaEmail").value.trim();const adult=document.querySelector("#betaAdult").checked;const marketing=document.querySelector("#betaMarketing").checked;const msg=document.querySelector("#betaMessage");if(!email||!email.includes("@")){msg.textContent="Please enter a valid email address.";return}if(!adult){msg.textContent="Please confirm you are 18 or over.";return}msg.textContent="Joining...";try{const ok=await betaSignup(email,adult,marketing);if(ok){msg.textContent="Thanks — you're on the KindStepz beta list!";document.querySelector("#betaEmail").value="";document.querySelector("#betaAdult").checked=false;document.querySelector("#betaMarketing").checked=false}else{msg.textContent="That email may already be registered."}}catch(e){msg.textContent="Signup didn't work. Please try again."}}
