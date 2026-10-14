const worlds = {
  Think: ['🧠', 'Puzzles, planning & problem-solving'],
  Connect: ['❤️', 'Kindness, listening & confidence'],
  Money: ['💷', 'Budgeting, saving & shopping'],
  Life: ['🍳', 'Cooking, organising & everyday skills'],
  Make: ['🔧', 'DIY, building & creativity'],
  Explore: ['🌍', 'Nature, community & discovery']
};

const skillLevels = [
  'Starter',
  'Growing',
  'Confident',
  'Skilled',
  'KindStepz Champion'
];

function getSkillLevel(completedCount) {
  if (completedCount >= 25) return skillLevels[4];
  if (completedCount >= 15) return skillLevels[3];
  if (completedCount >= 10) return skillLevels[2];
  if (completedCount >= 5) return skillLevels[1];
  return skillLevels[0];
}

const missions = {
  Think: [
    ['The Three-Way Plan', 'Pick a simple family job. Think of three ways to do it, then choose the best plan together.'],
    ['Memory Detective', 'Look at ten safe household objects for 30 seconds. Cover them and see how many you can remember.'],
    ['Route Planner', 'Choose somewhere familiar and work out two different ways to get there.'],
    ['What Would Happen?', 'Choose an everyday problem and each suggest what might happen after three different choices.'],
    ['Build a Schedule', 'Plan a fun hour together using four activities and sensible timings.']
  ],

  Connect: [
    ['Three Good Things', 'Each person says three things they appreciate about the other.'],
    ['Listening Mission', 'Take turns talking for one minute while the other listens without interrupting, then say what you heard.'],
    ['Kindness Spotter', 'Find three kind things people did today, however small.'],
    ['Team Decision', 'Choose a family activity together. Everyone gets to suggest one idea before deciding.'],
    ['Thank-You Mission', 'Make or write a short thank-you for somebody who helped your family.']
  ],

  Money: [
    ['The £10 Dinner', 'Imagine you have £10 to make dinner. Choose what you would buy, total it and see what is left.'],
    ['Needs or Wants?', 'Choose ten everyday items and decide together whether each is a need, a want, or sometimes both.'],
    ['Save for It', 'Choose something inexpensive you would like and work out how long saving £1 a week would take.'],
    ['Price Detective', 'Pick three similar household products and compare their prices and sizes.'],
    ['Change Challenge', 'Make an imaginary shop. Pay for items and work out the correct change.']
  ],

  Life: [
    ['Snack Builder', 'Plan and safely prepare a simple snack together.'],
    ['Ten-Minute Tidy', 'Choose one small area and work together for ten minutes to organise it.'],
    ['Laundry Detective', 'Look at clothing labels together and work out how different items should be washed.'],
    ['Meal Planner', 'Choose breakfast, lunch and dinner for one day and make a simple ingredient list.'],
    ['Ready Tomorrow', 'Prepare what you need for tomorrow so the morning is easier.']
  ],

  Make: [
    ['Fix It First', 'Find something safe that needs organising, adjusting or simple maintenance and decide what is needed.'],
    ['Paper Tower', 'Build the tallest free-standing tower you can from paper.'],
    ['Reuse Challenge', 'Turn clean packaging into something useful or decorative.'],
    ['Measure It', 'Choose five household objects and estimate their size before measuring them.'],
    ['Design a Helper', 'Draw an invention that would make one everyday family job easier.']
  ],

  Explore: [
    ['Nature Five', 'Go outside and find five different natural things without damaging them.'],
    ['Street Detective', 'On a safe walk, spot five things that help a community work.'],
    ['Weather Watch', 'Look at the sky and make a weather prediction, then check later.'],
    ['Local History Question', 'Choose one local building or place and find out one thing about its past with an adult.'],
    ['Map Maker', 'Draw a simple map of a familiar safe route and mark useful landmarks.']
  ]
};

// Adventure Club bonus missions.
// Kept separate from the 30 core KindStepz missions.
const adventureClubMissions = [
  {
    id: 'adventure-rainbow-hunt',
    episode: 'Episode 1 — The Missing Rainbow',
    title: '🌈 Rainbow Hunt',
    description:
      'Find something red, yellow, green and blue together. Then each person chooses one helpful thing to do at home.',
    safety:
      'Always ask your grown-up before exploring somewhere new.',
    points: 100
  }
];

// Age-specific mission instructions. Indexed by original world and mission number.
const ageMissionInstructions = {
  "Think": [
    [
      "Choose three picture-based solutions with an adult.",
      "Suggest three ways to complete a family task.",
      "Compare three plans and their advantages.",
      "Evaluate three approaches, considering time and resources."
    ],
    [
      "Remember three to five safe objects.",
      "Remember six to ten safe objects.",
      "Use memory techniques to recall ten objects.",
      "Develop and test a memory strategy."
    ],
    [
      "Follow a pretend route using landmarks.",
      "Compare two familiar routes with an adult.",
      "Estimate distances and journey times for safe routes.",
      "Plan routes considering accessibility, cost and safety; do not share your real route."
    ],
    [
      "Choose between simple everyday outcomes.",
      "Predict consequences of three choices.",
      "Discuss short- and long-term consequences.",
      "Evaluate risks, consequences and alternative decisions."
    ],
    [
      "Arrange three picture cards in order.",
      "Plan four activities within an hour.",
      "Allocate time and include breaks.",
      "Build a realistic schedule with priorities and contingency time."
    ]
  ],

  "Connect": [
    [
      "Say or draw three things you like about each other.",
      "Share three things you appreciate and explain why.",
      "Discuss three strengths you appreciate in each other.",
      "Explore how appreciation strengthens relationships."
    ],
    [
      "Take turns speaking for twenty seconds.",
      "Listen for one minute and repeat what you heard.",
      "Practise active listening and ask a follow-up question.",
      "Practise reflective listening without judgement."
    ],
    [
      "Spot three kind actions with an adult.",
      "Record three examples of kindness.",
      "Discuss how small acts affect others.",
      "Identify ways to encourage kindness in the community."
    ],
    [
      "Choose an activity from two safe options.",
      "Suggest ideas and agree on a family activity.",
      "Compare suggestions and reach a compromise.",
      "Practise negotiation and respectful disagreement."
    ],
    [
      "Draw a thank-you picture.",
      "Write a short thank-you message.",
      "Write a thoughtful message explaining someone’s positive impact.",
      "Express meaningful gratitude through a letter or conversation."
    ]
  ],

  "Money": [
    [
      "Choose three pretend food items and count play coins with an adult.",
      "Plan a pretend dinner for £10 and calculate what is left.",
      "Plan a balanced dinner and compare ingredient prices.",
      "Create a £10 meal budget, compare unit prices and explain trade-offs."
    ],
    [
      "Sort picture cards into things we need and things we like.",
      "Sort ten everyday items and explain your choices.",
      "Discuss how priorities change depending on circumstances.",
      "Evaluate needs, wants, advertising and spending pressures."
    ],
    [
      "Put pretend coins into a savings jar.",
      "Calculate how many weeks saving £1 at a time would take.",
      "Set a savings goal and calculate weekly contributions.",
      "Build a realistic savings plan with milestones and unexpected costs."
    ],
    [
      "Compare two pretend price tags and find the cheaper item.",
      "Compare three products and their prices.",
      "Compare price, quantity and value for money.",
      "Calculate unit costs and assess discounts critically."
    ],
    [
      "Practise exchanging pretend coins for items.",
      "Run a pretend shop and calculate simple change.",
      "Calculate change using different payment amounts.",
      "Practise transactions, receipts, refunds and checking totals."
    ]
  ],

  "Life": [
    [
      "Choose safe ingredients with an adult and assemble a no-cook snack. Check for allergies first.",
      "Prepare a simple snack with an adult, practising hygiene, measuring and checking for allergies.",
      "Follow a simple recipe safely, checking allergies and asking an adult before using knives, heat or electrical appliances.",
      "Plan and prepare a nutritious snack, considering allergies, food safety and cost; use knives, heat or appliances only with appropriate adult supervision."
    ],
    [
      "Sort toys or safe objects into labelled containers.",
      "Organise a small area using a ten-minute timer.",
      "Prioritise tasks and organise a workspace.",
      "Develop an efficient organisation routine and evaluate improvements."
    ],
    [
      "Match clean clothes by colour and type with an adult.",
      "Learn basic clothing care symbols and sort laundry with an adult.",
      "Interpret care labels and explore washing settings with adult supervision.",
      "Plan laundry loads and consider energy efficiency; only operate washing machines with appropriate adult permission or supervision."
    ],
    [
      "Choose picture cards for breakfast, lunch and dinner.",
      "Plan three simple meals and list ingredients.",
      "Create a balanced one-day meal plan and shopping list.",
      "Plan meals considering nutrition, budget, allergies and food waste."
    ],
    [
      "Choose clothes and pack a bag with an adult.",
      "Make a checklist and prepare for the following day.",
      "Prepare a schedule and identify tomorrow’s priorities.",
      "Develop an independent preparation routine with backup plans."
    ]
  ],

  "Make": [
    [
      "Identify something safe that needs tidying or adjusting with an adult. Do not use tools.",
      "Investigate a simple household problem with an adult and suggest safe solutions. Do not attempt electrical, gas or structural repairs.",
      "Identify a simple maintenance problem and plan a safe solution with an adult; only use age-appropriate tools with permission and supervision.",
      "Evaluate a household maintenance task, materials and safety requirements. Leave electrical, gas, structural or other hazardous repairs to a responsible adult or qualified professional."
    ],
    [
      "Build a tower using paper and folding.",
      "Build a paper tower and test ways to make it stronger.",
      "Build and test different tower structures.",
      "Investigate stability, load distribution and structural design."
    ],
    [
      "Create something colourful from clean packaging.",
      "Design a useful object using recycled materials.",
      "Design and construct something useful from clean recycled materials.",
      "Develop a sustainable product prototype and evaluate its usefulness."
    ],
    [
      "Compare objects using big, small, long and short.",
      "Estimate and measure five household objects.",
      "Estimate dimensions, measure accurately and compare results.",
      "Calculate dimensions, area and material requirements."
    ],
    [
      "Draw an imaginary invention that helps at home.",
      "Design a practical invention and explain how it works.",
      "Sketch an invention, label components and explain its purpose.",
      "Develop a product concept, consider accessibility and test improvements."
    ]
  ],

  "Explore": [
    [
      "Find five natural things with an adult, such as leaves or clouds.",
      "Identify five natural objects and describe their differences.",
      "Identify five natural features and investigate their role in the environment.",
      "Examine biodiversity and discuss how human activity affects local habitats."
    ],
    [
      "Spot three safe community features with an adult.",
      "Find five things that help a community, such as crossings or libraries.",
      "Explore how five community features support accessibility and safety.",
      "Evaluate local infrastructure and suggest improvements for community wellbeing."
    ],
    [
      "Look at the sky and choose sunny, cloudy, rainy or windy.",
      "Predict tomorrow’s weather and compare it with what happens.",
      "Record weather observations and compare them with a forecast.",
      "Analyse weather patterns, forecast accuracy and sources of uncertainty."
    ],
    [
      "Look at a picture of an old local building and ask what it was used for.",
      "Research one interesting fact about a local building with an adult.",
      "Research a historical building using reliable sources.",
      "Compare historical sources and explain how a local place has changed over time."
    ],
    [
      "Draw a pretend map using simple landmarks.",
      "Draw a map of a familiar route using symbols and landmarks; keep it private.",
      "Create a labelled fictional map with a key, scale and landmarks.",
      "Design an accessible fictional route map considering distance, safety and transport options."
    ]
  ]
};

const AGE_ROUTES = ['4–6', '7–9', '10–12', '13–16'];

function ageRouteIndex(age) {
  const value = String(age ?? '')
    .replace(/[\u2010-\u2015\u2212]/g, '-')
    .replace(/\s/g, '');

  const normalized = AGE_ROUTES.map(a =>
    a.replace(/[\u2010-\u2015\u2212]/g, '-')
  );

  return normalized.indexOf(value);
}

function missionInstructions(w, i) {
  const p = profile();
  const route = ageRouteIndex(p?.age);
  const instructions = ageMissionInstructions[w]?.[i];

  return (route >= 0 && instructions?.[route]) ||
    missions[w][i][1];
}

const defaultState = {
  profiles: [],
  active: null,
  parentPin: '',
  settings: {
    large: false,
    contrast: false
  },
  feedback: []
};

let state =
  JSON.parse(localStorage.getItem('kindstepz04') || 'null') ||
  structuredClone(defaultState);

const app = document.querySelector('#app');

let parentUnlocked = false;

function requireParent() {
  if (!parentUnlocked || !state.parentPin) {
    parentSpace();
    return false;
  }

  return true;
}
const save = () => {
  localStorage.setItem('kindstepz04', JSON.stringify(state));
  applySettings();
};

const profile = () =>
  state.profiles.find(p => p.id === state.active);

function applySettings() {
  document.body.classList.toggle(
    'large-text',
    !!state.settings.large
  );

  document.body.classList.toggle(
    'high-contrast',
    !!state.settings.contrast
  );
}

function shell(content) {
  app.innerHTML = `
    <div class="wrap">

      <nav>
        <button class="navbtn" onclick="home()">
          🌱 Home
        </button>

        ${
          profile()
            ? '<button class="navbtn" onclick="worldScreen()">🧭 Missions</button>'
            : ''
        }

        <button class="navbtn" onclick="parentSpace()">
          🔒 Parent Space
        </button>

        <button class="navbtn" onclick="info()">
          ⓘ Info
        </button>
      </nav>

      ${content}

      <div class="footer">
        KindStepz MVP Candidate v0.6 •
        Small moments. Real skills. Stronger families.
      </div>

    </div>
  `;
}

function missionCount(p) {
  return (p.done || []).filter(id =>
    Object.keys(worlds).some(w =>
      String(id).startsWith(w)
    )
  ).length;
}

function home() {
  parentUnlocked = false;
  let p = profile();

  if (!p) {
    shell(`
      <section class="hero">
        <h1 class="logo">🌱 KindStepz</h1>

        <p class="tag">
          Small moments. Real skills. Stronger families.
        </p>
      </section>

      <div class="card">
        <h2>Start your family journey</h2>

        <p>
          Choose an age route and a simple nickname.
          KindStepz stores progress on this device
          for this prototype.
        </p>

        <button
          class="btn primary"
          onclick="newProfile()"
        >
          Create Family Profile
        </button>
      </div>

      <div class="notice">
        <b>Real-world first.</b>
        KindStepz starts positive activities away from
        the screen. Adults remain responsible for safety
        and supervision.
      </div>
    `);

    return;
  }

  const firstComplete =
    p.firstJourneyDone ||
    p.done.includes("firstJourney") ||
    missionCount(p) > 0;

  shell(`
    <section class="hero">
      <h1 class="logo">🌱 KindStepz</h1>

      <p class="tag">
        Small moments. Real skills. Stronger families.
      </p>
    </section>

    <div class="card">
      <p>Age ${p.age}</p>

      <h2>
        ${esc(p.nickname || 'Family')} profile
      </h2>

      <p>
        ⭐ ${p.points || 0} KindPoints •
        ${missionCount(p)}/30 missions
      </p>
    </div>

    ${
      missionCount(p) >= 5
        ? `
          <div class="card hero">
            <p><b>🌟 FAMILY JOURNEY</b></p>

            <h2>${getSkillLevel(missionCount(p))}</h2>

            <p>
              Brilliant — your family has completed
              ${missionCount(p)} KindStepz missions together.
            </p>

            <button
              class="btn primary"
              onclick="worldScreen()"
            >
              Choose Next Mission
            </button>
          </div>
        `
        : firstComplete
          ? `
            <div class="card hero">
              <p><b>🌱 FIRST KINDSTEP COMPLETE</b></p>

              <h2>Brilliant — you did it!</h2>

              <p>
                Your family's first small win is complete.
              </p>

              <button
                class="btn primary"
                onclick="worldScreen()"
              >
                Choose Next Mission
              </button>
            </div>
          `
          : `
            <div class="card hero">
              <p><b>🌱 YOUR FIRST KINDSTEP</b></p>

              <h2>One Small Win</h2>

              <p>
                Choose one small useful thing to do
                together today.
              </p>

              <p>About 5–10 minutes.</p>

              <button
                class="btn primary"
                onclick="firstJourney()"
              >
                Start One Small Win
              </button>
            </div>
          `
    }

    <button
      class="btn"
      onclick="worldScreen()"
    >
      Continue to Skill Worlds
    </button>

    <div class="notice">
      <b>Real-world first.</b>
      KindStepz starts positive activities away from
      the screen. Adults remain responsible for safety
      and supervision.
    </div>
  `);
}

function firstJourney() {
  parentUnlocked = false;

  shell(`
    <div class="card hero">

      <h1>🌱 One Small Win</h1>

      <p>
        Choose one small useful thing to do together today.
      </p>

      <p>
        It could be preparing something, organising something,
        helping with a household task, or learning one simple skill.
      </p>

      <div class="card">

        <h2>For the grown-up</h2>

        <p>
          Guide, encourage and let them have a go
          rather than taking over.
        </p>

      </div>

      <button
        class="btn primary"
        onclick="firstJourneyDone()"
      >
        We did it
      </button>

    </div>
  `);
}

function firstJourneyDone() {
  let p = profile();

  if (!p) {
    return home();
  }

  if (p.firstJourneyDone) {
    return home();
  }

  p.firstJourneyDone = true;

  if (!p.done.includes("firstJourney")) {
    p.done.push("firstJourney");
    p.points = (p.points || 0) + 100;
  }

  save();

  alert(
    "🌱 Brilliant! One small win completed."
  );

  home();
}

function newProfile() {
  shell(`
    <div class="card">

      <h1>Create a profile</h1>

      <label>
        Nickname
        (optional — avoid a child's full name)
      </label>

      <input
        id="nick"
        class="input"
        maxlength="20"
        placeholder="e.g. Team Green"
      >

      <p>Choose age route</p>

      <div class="grid">
        ${
          ['4–6', '7–9', '10–12', '13–16']
            .map(a => `
              <button
                class="btn"
                onclick="createProfile('${a}')"
              >
                ${a}
              </button>
            `)
            .join('')
        }
      </div>

    </div>
  `);
}

function createProfile(age) {
  let nick =
    document.querySelector('#nick').value.trim();

  let p = {
    id: Date.now().toString(),
    nickname: nick,
    age,
    points: 0,
    done: [],
    badges: [],
    reflections: [],
    adventureDone: [],
    firstJourneyDone: false
  };

  state.profiles.push(p);
  state.active = p.id;

  save();
  worldScreen();
}

function worldScreen() {
  parentUnlocked = false;
  let p = profile();

  if (!p) {
    return home();
  }

  shell(`
    <div class="top">

      <div>

        <span class="pill">
          ${esc(p.nickname || 'Family')}
          • Age ${p.age}
        </span>

        <h1>
          Choose a Skill World
        </h1>

      </div>

      <strong>
        ⭐ ${p.points || 0}
      </strong>

    </div>

    <div class="grid">

      ${
        Object.entries(worlds)
          .map(([w, x]) => `
            <button
              class="btn world"
              onclick="world('${w}')"
            >

              <div style="font-size:30px">
                ${x[0]}
              </div>

              ${w}

              <div class="small">
                ${x[1]}
              </div>

            </button>
          `)
          .join('')
      }

    </div>

    <div class="card hero">
      <p><b>🌈 THE 15-MINUTE ADVENTURE CLUB</b></p>

      <h2>Adventure Club Missions</h2>

      <p>
        Continue the adventure with special real-world
        family missions.
      </p>

      <button
        class="btn primary"
        onclick="adventureClubScreen()"
      >
        Start an Adventure
      </button>
    </div>

    ${progressHTML(p)}
  `);
}

function adventureClubScreen() {
  parentUnlocked = false;
  let p = profile();

  if (!p) return home();

  shell(`
    <button
      class="back"
      onclick="worldScreen()"
    >
      ← Skill Worlds
    </button>

    <div class="card hero">
      <p><b>🌈 THE 15-MINUTE ADVENTURE CLUB</b></p>

      <h1>Adventure Club Missions</h1>

      <p>
        Watch the adventure. Then bring the mission
        into the real world together.
      </p>
    </div>

    ${adventureClubMissions.map((m, i) => `
      <div class="card mission">
        <p><b>${m.episode}</b></p>

        <h2>${m.title}</h2>

        <p>${m.description}</p>

        <button
          class="btn primary"
          onclick="adventureClubMission(${i})"
        >
          Start Mission
        </button>
      </div>
    `).join('')}
  `);
}

function adventureClubMission(i) {
  parentUnlocked = false;

  const m = adventureClubMissions[i];

  if (!m) return adventureClubScreen();

  shell(`
    <button
      class="back"
      onclick="adventureClubScreen()"
    >
      ← Adventure Club
    </button>

    <div class="card mission center">

      <div style="font-size:60px">
        🌈
      </div>

      <p><b>${m.episode}</b></p>

      <h1>${m.title}</h1>

      <p style="font-size:20px">
        ${m.description}
      </p>

      <div class="notice">
        <b>Adventure Safety:</b><br>
        ${m.safety}
      </div>

      <p class="points">
        ⭐ ${m.points} KindPoints
      </p>

      <button
        class="btn primary"
        onclick="finishAdventureClubMission(${i})"
      >
        We Finished It!
      </button>

    </div>
  `);
}

function finishAdventureClubMission(i) {
  let p = profile();
  const m = adventureClubMissions[i];

  if (!p || !m) return home();

  if (!p.adventureDone) {
    p.adventureDone = [];
  }

  const isNew = !p.adventureDone.includes(m.id);

  if (isNew) {
    p.adventureDone.push(m.id);
    p.points = (p.points || 0) + m.points;
  }

  save();

  shell(`
    <div class="card hero">

      <div style="font-size:70px">
        🌈⭐
      </div>

      <h1>MISSION COMPLETE!</h1>

      <h2>${m.title}</h2>

      <p>
        You helped bring the colours back to Adventure Valley
        — and made your own world a little brighter too.
      </p>

      <h2>
        ${
          isNew
            ? `+${m.points} KindPoints`
            : 'Adventure completed again!'
        }
      </h2>

      <p>
        ⭐ ${p.points} KindPoints total
      </p>

      <button
        class="btn primary"
        onclick="adventureClubScreen()"
      >
        Adventure Club
      </button>

      <button
        class="btn"
        onclick="worldScreen()"
      >
        Back to KindStepz
      </button>

    </div>
  `);
}
function world(w) {
  parentUnlocked = false;
  let p = profile();

  shell(`
    <button
      class="back"
      onclick="worldScreen()"
    >
      ← Skill Worlds
    </button>

    <div class="card">

      <h1>
        ${worlds[w][0]} ${w}
      </h1>

      <p>
        ${worlds[w][1]}
      </p>

      ${
        missions[w]
          .map((m, i) => {
            let id = w + i;
            let d = p.done.includes(id);

            return `
              <div class="card mission">

                <h2>
                  ${d ? '✓ ' : ''}
                  ${m[0]}
                </h2>

                <p>
                  ${esc(missionInstructions(w, i))}
                </p>

                <button
                  class="btn ${d ? '' : 'primary'}"
                  onclick="mission('${w}',${i})"
                >
                  ${d ? 'Do Again' : 'Start Mission'}
                </button>

              </div>
            `;
          })
          .join('')
      }

    </div>
  `);
}

function mission(w, i) {
  parentUnlocked = false;
  let m = missions[w][i];

  shell(`
    <button
      class="back"
      onclick="world('${w}')"
    >
      ← Back
    </button>

    <div class="card mission center">

      <div style="font-size:48px">
        ${worlds[w][0]}
      </div>

      <h1>
        ${m[0]}
      </h1>

      <p class="age-route-label">
        Age ${esc(profile()?.age || 'not selected')} mission
      </p>

      <p style="font-size:20px">
        ${esc(missionInstructions(w, i))}
      </p>

      <div class="notice">
        Keep it safe and age-appropriate.
        An adult stays responsible for food,
        tools, roads and outdoor activities.
      </div>

      <p class="points">
        ⭐ 100 KindPoints
      </p>

      <button
        class="btn primary"
        onclick="reflect('${w}',${i})"
      >
        We Finished It!
      </button>

    </div>
  `);
}

function reflect(w, i) {
  shell(`
    <div class="card center">

      <h1>
        How did it go?
      </h1>

      <p>
        There is no failure here —
        reflection helps families learn.
      </p>

      <div class="grid">

        ${
          [
            ['😊', 'Nailed it'],
            ['🙂', 'We did it'],
            ['🤔', 'That was tricky'],
            ['🔄', 'Try again']
          ]
            .map(x => `
              <button
                class="btn"
                onclick="finish('${w}',${i},'${x[1]}')"
              >

                <div style="font-size:28px">
                  ${x[0]}
                </div>

                ${x[1]}

              </button>
            `)
            .join('')
        }

      </div>

    </div>
  `);
}

function finish(w, i, reaction) {
  let p = profile();
  let id = w + i;

  let isNew = !p.done.includes(id);

  if (isNew) {
    p.done.push(id);
    p.points = (p.points || 0) + 100;

    if (
      missionCount(p) === 1 &&
      !p.badges.includes('🏅 First Step')
    ) {
      p.badges.push('🏅 First Step');
    }

    if (
      Object.keys(worlds).every(x =>
        p.done.some(d => String(d).startsWith(x))
      ) &&
      !p.badges.includes('🌟 Family Explorer')
    ) {
      p.badges.push('🌟 Family Explorer');
    }
  }

  p.reflections.push({
    mission: id,
    reaction,
    date: new Date().toISOString()
  });

  const completed = missionCount(p);

  const milestone =
    isNew && [5, 10, 15, 25, 30].includes(completed);

  const level = getSkillLevel(completed);

  save();

  shell(`
    <div class="card hero">

      <div style="font-size:60px">
        ${milestone ? '🌟' : isNew ? '🏅' : '🌱'}
      </div>

      <h1>
        ${
          milestone
            ? `${level} milestone reached!`
            : isNew
              ? 'Great step!'
              : 'Mission revisited!'
        }
      </h1>

      <p>
        ${
          milestone
            ? `Brilliant! Your family has reached the ${level} skill level.`
            : isNew
              ? 'You practised a real-world skill together.'
              : 'Practising again is part of learning.'
        }
      </p>

      <h2>
        ⭐ ${p.points} KindPoints
      </h2>

      <button
        class="btn primary"
        onclick="worldScreen()"
      >
        Choose Next Mission
      </button>

    </div>

    ${progressHTML(p)}
  `);
}

function familyProgressHTML(p) {
  const counts = {
    Think: 0,
    Connect: 0,
    Money: 0,
    Life: 0,
    Make: 0,
    Explore: 0
  };

  (p.done || []).forEach(id => {
    Object.keys(counts).forEach(w => {
      if (String(id).startsWith(w)) {
        counts[w]++;
      }
    });
  });

  const labels = {
    Think: "🧠 Think",
    Connect: "❤️ Connect",
    Money: "💷 Money",
    Life: "🍳 Life",
    Make: "🔧 Make",
    Explore: "🌍 Explore"
  };

  return `
    <div class="card">

      <h2>
        Family Progress
      </h2>

      <p>
        See which skills your family
        has been practising together.
      </p>

      ${
        Object.entries(labels)
          .map(([w, name]) => `
            <div class="setting">

              <span>
                <b>${name}</b>
              </span>

              <span>
                ${counts[w]}/5
              </span>

            </div>
          `)
          .join('')
      }

    </div>
  `;
}

function progressHTML(p) {
  const completed = missionCount(p);

  const percent = Math.round(
    (completed / 30) * 100
  );

  const currentLevel = getSkillLevel(completed);

  const badges =
    (p.badges || []).length
      ? `
        <div class="card">
          <h2>Badges</h2>

          <p>
            ${(p.badges || []).join(' ')}
          </p>
        </div>
      `
      : '';

  return `
    <div class="card">

      <h2>
        Family Journey
      </h2>

      <p>
        <b>
          ${completed}/30 starter missions completed
        </b>
      </p>

      <div class="skill-level">
        <div>
          🌱 <b>Skill Level: ${currentLevel}</b>
        </div>

        <small>
          ${
            completed < 30
              ? `${
                  completed < 5
                    ? 5 - completed
                    : completed < 10
                      ? 10 - completed
                      : completed < 15
                        ? 15 - completed
                        : completed < 25
                          ? 25 - completed
                          : 30 - completed
                } mission(s) until the next milestone`
              : 'KindStepz Champion reached!'
          }
        </small>
      </div>

      <div
        style="
          height:12px;
          background:#e8eee9;
          border-radius:999px;
          overflow:hidden;
        "
      >
        <div
          style="
            height:100%;
            width:${percent}%;
            background:currentColor;
            opacity:.35;
          "
        ></div>
      </div>

    </div>

    ${familyProgressHTML(p)}

    ${badges}
  `;
}
function parentSpace() {
  parentUnlocked = false;

  if (state.parentPin) {
    return pinGate();
  }

  shell(`
    <div class="card">

      <h1>Parent Space</h1>

      <p>
        Create a 4-digit local PIN.
        This prototype keeps the PIN only
        on this device; it is not
        account-grade security.
      </p>

      <label for="pin">Parent PIN</label>

      <input
        id="pin"
        class="input"
        type="password"
        inputmode="numeric"
        maxlength="4"
        autocomplete="off"
        placeholder="4-digit PIN"
        onkeydown="if(event.key === 'Enter') setPin()"
      >

      <button
        class="btn primary"
        onclick="setPin()"
      >
        Set Parent PIN
      </button>

    </div>
  `);
}

function setPin() {
  const v = document.querySelector('#pin').value;

  if (!/^\d{4}$/.test(v)) {
    return alert('Please enter exactly 4 digits.');
  }

  state.parentPin = v;
  parentUnlocked = true;

  save();
  parentDashboard();
}

function pinGate() {
  shell(`
    <div class="card">

      <h1>Parent Space</h1>

      <label for="pin">Parent PIN</label>

      <input
        id="pin"
        class="input"
        type="password"
        inputmode="numeric"
        maxlength="4"
        autocomplete="off"
        placeholder="PIN"
        onkeydown="if(event.key === 'Enter') checkPin()"
      >

      <button
        class="btn primary"
        onclick="checkPin()"
      >
        Unlock
      </button>

    </div>
  `);
}

function checkPin() {
  const entered = document.querySelector('#pin').value;

  if (entered === state.parentPin) {
    parentUnlocked = true;
    parentDashboard();
  } else {
    alert('PIN not recognised.');
  }
}

function parentDashboard() {
  if (!requireParent()) return;

  const p = profile();

  if (!p) {
    return home();
  }

  shell(`
    <div class="card">

      <h1>Parent Dashboard</h1>

      <p>
        <b>${esc(p.nickname || 'Family')}</b>
        • Age ${p.age}
        • ⭐ ${p.points || 0}
        • ${missionCount(p)}/30 completed
      </p>

      <button
        class="btn"
        onclick="switchProfile()"
      >
        Manage profiles
      </button>

    </div>

    ${familyProgressHTML(p)}

    <div class="card">

      <h2>Accessibility</h2>

      <div class="setting">

        <span>Larger text</span>

        <button
          class="btn"
          onclick="toggleSetting('large')"
        >
          ${state.settings.large ? 'On' : 'Off'}
        </button>

      </div>

      <div class="setting">

        <span>High contrast</span>

        <button
          class="btn"
          onclick="toggleSetting('contrast')"
        >
          ${state.settings.contrast ? 'On' : 'Off'}
        </button>

      </div>

    </div>

    <div class="card">

      <h2>Testing &amp; data</h2>

      <p>
        Export contains local prototype
        progress and feedback.
        Review it before sharing.
      </p>

      <button
        class="btn"
        onclick="feedback()"
      >
        Leave prototype feedback
      </button>

      <button
        class="btn"
        onclick="exportData()"
      >
        Export my data
      </button>

      <button
        class="btn"
        onclick="chooseRestoreFile()"
      >
        Restore saved data
      </button>

      <input
        id="restore-file"
        type="file"
        accept=".json,application/json"
        hidden
        onchange="restoreDataFile(this)"
      >

    </div>

    <div class="card">

      <h2>Reset</h2>

      <p>
        Erase KindStepz prototype data
        from this browser.
      </p>

      <button
        class="btn danger"
        onclick="resetAll()"
      >
        Erase local data
      </button>

    </div>
  `);
}

function toggleSetting(k) {
  if (!requireParent()) return;

  state.settings[k] = !state.settings[k];

  save();
  parentDashboard();
}

function switchProfile() {
  if (!requireParent()) return;

  shell(`
    <div class="card">

      <h1>Family Profiles</h1>

      ${
        state.profiles
          .map(p => `
            <div class="setting">

              <span>
                <b>${esc(p.nickname || 'Family')}</b>
                • ${p.age}
              </span>

              <button
                class="btn"
                onclick="activate('${p.id}')"
              >
                ${p.id === state.active ? 'Active' : 'Use'}
              </button>

            </div>
          `)
          .join('') || '<p>No profiles yet.</p>'
      }

      <button
        class="btn primary"
        onclick="newProfile()"
      >
        Add profile
      </button>

    </div>
  `);
}

function activate(id) {
  if (!requireParent()) return;

  state.active = id;

  save();
  parentDashboard();
}
function feedback() {
  if (!requireParent()) return;

  shell(`
    <div class="card">

      <h1>Family Test Feedback</h1>

      <label>
        Would you use KindStepz again?
      </label>

      <select
        id="again"
        class="input"
      >
        <option>Yes</option>
        <option>Maybe</option>
        <option>No</option>
      </select>

      <label>
        What worked or felt confusing?
      </label>

      <textarea
        id="note"
        class="input"
        rows="5"
        maxlength="500"
      ></textarea>

      <button
        class="btn primary"
        onclick="saveFeedback()"
      >
        Save feedback on this device
      </button>

    </div>
  `);
}

function saveFeedback() {
  if (!requireParent()) return;

  state.feedback.push({
    again:
      document.querySelector('#again').value,

    note:
      document
        .querySelector('#note')
        .value
        .trim(),

    date:
      new Date().toISOString()
  });

  save();
  parentDashboard();
}

function exportData() {
  if (!requireParent()) return;

  const ok = confirm(
    "This backup may contain family nicknames, progress and feedback stored on this device. Keep it private and review it before sharing.\n\nDownload your KindStepz backup now?"
  );

  if (!ok) return;

  const safe = {
    version: '0.6',
    exported:
      new Date().toISOString(),

    profiles:
      state.profiles.map(
        ({ id, ...p }) => p
      ),

    settings:
      state.settings,

    feedback:
      state.feedback
  };

  const b = new Blob(
    [
      JSON.stringify(
        safe,
        null,
        2
      )
    ],
    {
      type: 'application/json'
    }
  );

  const a =
    document.createElement('a');

  a.href =
    URL.createObjectURL(b);

  a.download =
    'kindstepz-backup-v06.json';

  a.click();

  URL.revokeObjectURL(a.href);
}

function chooseRestoreFile() {
  if (!requireParent()) return;

  document
    .querySelector('#restore-file')
    .click();
}

async function restoreDataFile(input) {
  if (!requireParent()) return;

  const file =
    input.files && input.files[0];

  if (!file) return;

  try {
    if (file.size > 1024 * 1024) {
      throw new Error('Backup is too large.');
    }

    const data =
      JSON.parse(await file.text());

    if (
      !data ||
      !['0.4', '0.5', '0.6'].includes(String(data.version)) ||
      !Array.isArray(data.profiles) ||
      data.profiles.length > 100 ||
      !Array.isArray(data.feedback || [])
    ) {
      throw new Error('Unsupported backup format.');
    }

    const allowed =
      new Set(
        Object.keys(missions).flatMap(w =>
          missions[w].map((_, i) => w + i)
        )
      );

    const allowedAdventure =
      new Set(
        adventureClubMissions.map(m => m.id)
      );

    const restored =
      data.profiles.map((p, i) => {
        const adventureDone =
          Array.isArray(p?.adventureDone)
            ? p.adventureDone
            : [];

        if (
          !p ||
          typeof p !== 'object' ||
          !['4–6', '7–9', '10–12', '13–16'].includes(p.age) ||
          typeof p.nickname !== 'string' ||
          p.nickname.length > 20 ||
          !Number.isSafeInteger(p.points) ||
          p.points < 0 ||
          !Array.isArray(p.done) ||
          p.done.length > 31 ||
          !p.done.every(
            d =>
              d === 'firstJourney' ||
              allowed.has(d)
          ) ||
          new Set(p.done).size !== p.done.length ||
          adventureDone.length > adventureClubMissions.length ||
          !adventureDone.every(id =>
            allowedAdventure.has(id)
          ) ||
          new Set(adventureDone).size !== adventureDone.length ||
          !Array.isArray(p.badges) ||
          !p.badges.every(
            b =>
              typeof b === 'string' &&
              b.length < 100
          ) ||
          !Array.isArray(p.reflections) ||
          p.reflections.length > 10000
        ) {
          throw new Error('Invalid profile data.');
        }

        const adventurePoints =
          adventureDone.reduce(
            (total, id) => {
              const mission =
                adventureClubMissions.find(
                  m => m.id === id
                );

              return total +
                (mission ? mission.points : 0);
            },
            0
          );

        const expected =
          p.done.length * 100 +
          adventurePoints;

        if (p.points !== expected) {
          throw new Error(
            'Points do not match completed activities.'
          );
        }

        return {
          id:
            'restored-' +
            Date.now() +
            '-' +
            i,

          nickname: p.nickname,
          age: p.age,
          points: p.points,

          done:
            [...p.done],

          badges:
            [...p.badges],

          adventureDone:
            [...adventureDone],

          reflections:
            p.reflections
              .filter(
                r =>
                  r &&
                  typeof r.mission === 'string' &&
                  typeof r.reaction === 'string' &&
                  typeof r.date === 'string'
              )
              .map(r => ({
                mission:
                  r.mission.slice(0, 50),

                reaction:
                  r.reaction.slice(0, 100),

                date:
                  r.date.slice(0, 50)
              })),

          firstJourneyDone:
            p.done.includes('firstJourney') ||
            !!p.firstJourneyDone
        };
      });

    const profileSignature =
      p =>
        JSON.stringify({
          nickname: p.nickname,
          age: p.age,
          points: p.points,

          done:
            [...p.done].sort(),

          badges:
            [...p.badges].sort(),

          adventureDone:
            [...(p.adventureDone || [])].sort(),

          reflections:
            p.reflections,

          firstJourneyDone:
            !!p.firstJourneyDone
        });

    const existingSignatures =
      new Set(
        state.profiles.map(profileSignature)
      );

    const newProfiles =
      restored.filter(p => {
        const signature =
          profileSignature(p);

        if (
          existingSignatures.has(signature)
        ) {
          return false;
        }

        existingSignatures.add(signature);
        return true;
      });

    const existingFeedback =
      new Set(
        state.feedback.map(f =>
          JSON.stringify({
            again: f.again,
            note: f.note,
            date: f.date
          })
        )
      );

    const newFeedback =
      data.feedback
        .filter(
          f =>
            f &&
            ['Yes', 'Maybe', 'No'].includes(f.again) &&
            typeof f.note === 'string' &&
            f.note.length <= 500 &&
            typeof f.date === 'string'
        )
        .map(f => ({
          again: f.again,
          note: f.note,
          date: f.date.slice(0, 50)
        }))
        .filter(f => {
          const signature =
            JSON.stringify(f);

          if (
            existingFeedback.has(signature)
          ) {
            return false;
          }

          existingFeedback.add(signature);
          return true;
        });

    if (
      !newProfiles.length &&
      !newFeedback.length
    ) {
      alert(
        'This backup has already been restored. Nothing was changed.'
      );

      return;
    }

    if (
      !confirm(
        `Add ${newProfiles.length} new profiles and ${newFeedback.length} feedback entries? Existing data will be kept.`
      )
    ) {
      return;
    }

    const previous =
      structuredClone(state);

    try {
      state.profiles.push(
        ...newProfiles
      );

      state.feedback.push(
        ...newFeedback
      );

      save();
    } catch (err) {
      state = previous;
      throw err;
    }

    alert(
      `${newProfiles.length} profiles and ${newFeedback.length} feedback entries added. Existing data was preserved.`
    );

    parentDashboard();

  } catch (err) {
    alert(
      'Restore cancelled: ' +
      err.message
    );

  } finally {
    input.value = '';
  }
}
function resetAll() {
  if (!requireParent()) return;

  if (
    confirm(
      'Erase all KindStepz data stored in this browser?'
    )
  ) {
    localStorage.removeItem('kindstepz04');

    state = structuredClone(defaultState);
    parentUnlocked = false;

    applySettings();
    home();
  }
}

function info() {
  parentUnlocked = false;

  shell(`
    <div class="card">

      <h1>About KindStepz</h1>

      <p>
        KindStepz is a prototype designed
        to help families practise practical,
        thinking and relationship skills
        through short real-world missions.
      </p>

      <h2>Privacy</h2>

      <p>
        Your family progress is stored locally
        on this device.

        KindStepz does not require an account
        and does not collect your family's names,
        progress or mission activity.
      </p>

      <h2>Parent information</h2>

      <p>
        KindStepz is not medical, therapeutic,
        financial or professional safety advice.

        Adults choose whether an activity is suitable
        and supervise as needed.
      </p>

      <h2>Testing rule</h2>

      <p>
        Please avoid entering children's full names
        or identifying information.

        Use a nickname if you want to label a profile.
      </p>

      <h2>Adventure Club</h2>

      <p>
        The 15-Minute Adventure Club offers
        optional real-world family missions.

        These bonus adventures are separate
        from the 30 core KindStepz missions.
      </p>

    </div>
  `);
}

function esc(s) {
  return String(s).replace(
    /[&<>"']/g,
    c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c])
  );
}
applySettings();
home();
