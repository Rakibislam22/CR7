export interface TimelineEra {
  id: string;
  name: string;
  period: string;
  club: string;
  accentColor: string;
  description: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  dateStr?: string;
  eraId: string;
  title: string;
  club: string;
  location: string;
  summary: string;
  details: string;
  milestoneBadge?: string;
  statsHighlight?: string;
  quote?: string;
  videoId?: string;
  sourceUrl?: string;
}

export const TIMELINE_ERAS: TimelineEra[] = [
  {
    id: "madeira",
    name: "Madeira Roots & Youth",
    period: "1985–2001",
    club: "CF Andorinha & CD Nacional",
    accentColor: "border-emerald-500 text-emerald-400",
    description: "Born in Santo António, Funchal, Madeira. A determined boy who kicked balls through steep streets and overcame heart surgery to pursue his destiny.",
  },
  {
    id: "sporting",
    name: "The Sporting Discovery",
    period: "2001–2003",
    club: "Sporting CP",
    accentColor: "border-green-500 text-green-400",
    description: "Rising through Sporting's famous academy at Alcochete, debuting at 17, and mesmerizing Sir Alex Ferguson in a fateful pre-season friendly.",
  },
  {
    id: "united-1",
    name: "Manchester United: The Boy to King",
    period: "2003–2009",
    club: "Manchester United",
    accentColor: "border-red-500 text-red-400",
    description: "Inheriting Beckham's legendary No. 7 shirt, transforming his physique, claiming 3 Premier League titles, the 2008 Champions League, and his first Ballon d'Or.",
  },
  {
    id: "real-madrid",
    name: "Real Madrid: Peak Galáctico",
    period: "2009–2018",
    club: "Real Madrid CF",
    accentColor: "border-amber-400 text-amber-300",
    description: "An unprecedented decade of football supremacy. 450 goals in 438 matches, 4 Champions League crowns, 4 more Ballons d'Or, and unforgettable records.",
  },
  {
    id: "juventus",
    name: "Juventus: The Italian Conquest",
    period: "2018–2021",
    club: "Juventus FC",
    accentColor: "border-zinc-400 text-zinc-300",
    description: "Conquering Serie A at 33, scoring over 100 goals faster than any player in Juve history, and producing an iconic UCL hat-trick against Atlético Madrid.",
  },
  {
    id: "united-2",
    name: "Old Trafford Homecoming",
    period: "2021–2022",
    club: "Manchester United",
    accentColor: "border-rose-500 text-rose-400",
    description: "Returning to the Theatre of Dreams at age 36, scoring 24 goals across all competitions, and proving that greatness is timeless.",
  },
  {
    id: "portugal",
    name: "Portugal: Immortal Captain",
    period: "2003–Present",
    club: "Seleção das Quinas",
    accentColor: "border-crimson text-rose-400",
    description: "Carrying a nation from heartbreak to triumph: captaining Portugal to UEFA Euro 2016 victory, the 2019 Nations League, and breaking the all-time international goal record.",
  },
  {
    id: "al-nassr",
    name: "Al Nassr & The 900 Goal Frontier",
    period: "2023–Present",
    club: "Al Nassr FC",
    accentColor: "border-yellow-500 text-yellow-300",
    description: "Catalyzing global attention to Asian and Middle Eastern football, shattering the Saudi Pro League single-season scoring record, and passing 900 official career goals.",
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "event-1985",
    year: "1985",
    dateStr: "February 5, 1985",
    eraId: "madeira",
    title: "Born in Santo António, Funchal, Madeira",
    club: "Madeira",
    location: "Funchal, Madeira, Portugal",
    summary: "Cristiano Ronaldo dos Santos Aveiro is born into humble beginnings.",
    details: "Named after Ronald Reagan by his father José Dinis Aveiro. Growing up in a small house with his mother Dolores, father Dinis, brother Hugo, and sisters Elma and Katia, football became his constant companion on the steep cobbled streets.",
    milestoneBadge: "Origin Story",
  },
  {
    id: "event-1997",
    year: "1997",
    dateStr: "August 1997",
    eraId: "madeira",
    title: "Trial and Move to Sporting Academy",
    club: "Sporting CP Youth",
    location: "Lisbon, Portugal",
    summary: "At age 12, leaves his family in Madeira to join the Sporting CP Academy in Lisbon.",
    details: "Tearful goodbyes and homesickness marked his early months, mocked by classmates for his island accent. He turned alienation into intense drive, working in the gym after hours and training with weights attached to his ankles.",
    milestoneBadge: "Academy Journey",
  },
  {
    id: "event-2002",
    year: "2002",
    dateStr: "October 7, 2002",
    eraId: "sporting",
    title: "Sensational Primeira Liga Debut",
    club: "Sporting CP",
    location: "Estádio José Alvalade, Lisbon",
    summary: "Scores twice on his league debut against Moreirense in a 3–0 victory.",
    details: "Wearing number 28, 17-year-old Ronaldo scored a solo wonder goal dribbling past three defenders before finishing with composure. He became the first player to play for Sporting's U-16, U-17, U-18, B-team, and first team in a single season.",
    milestoneBadge: "Senior Debut",
    statsHighlight: "2 Goals on League Debut",
  },
  {
    id: "event-2003-aug",
    year: "2003",
    dateStr: "August 6, 2003",
    eraId: "sporting",
    title: "The Friendly That Changed History",
    club: "Sporting CP vs Man United",
    location: "Estádio José Alvalade",
    summary: "Destroys Manchester United in the opening of the new Alvalade stadium (3–1).",
    details: "United players, bewildered by Ronaldo's speed and step-overs, urged Sir Alex Ferguson on the team bus back to sign him immediately. Sir Alex Ferguson famously refused to leave Lisbon without securing the 18-year-old prodigy for £12.24 million.",
    milestoneBadge: "Destiny Call",
    quote: "After we played Sporting, the lads in the dressing room talked about him constantly. On the plane, they said to me: 'You have to sign him.' - Sir Alex Ferguson",
  },
  {
    id: "event-2003-nov",
    year: "2003",
    dateStr: "August 16, 2003",
    eraId: "united-1",
    title: "Premier League Debut at Old Trafford",
    club: "Manchester United",
    location: "Old Trafford, Manchester",
    summary: "Comes on in the 61st minute against Bolton Wanderers to a standing ovation.",
    details: "Given the iconic number 7 shirt worn by George Best, Bryan Robson, Eric Cantona, and David Beckham. His electricity and step-overs brought the entire Stretford End to their feet.",
    milestoneBadge: "No. 7 Inherited",
  },
  {
    id: "event-2008-ucl",
    year: "2008",
    dateStr: "May 21, 2008",
    eraId: "united-1",
    title: "First UEFA Champions League Crown in Moscow",
    club: "Manchester United",
    location: "Luzhniki Stadium, Moscow",
    summary: "Towering header gives United the lead in the Champions League final against Chelsea.",
    details: "United prevail on penalties in the rain of Moscow. Ronaldo finishes the season with 42 goals, winning the Premier League, Champions League, European Golden Shoe, and the 2008 Ballon d'Or.",
    milestoneBadge: "Champions of Europe",
    statsHighlight: "42 Goals in 2007-08 Season",
  },
  {
    id: "event-2009-madrid",
    year: "2009",
    dateStr: "July 6, 2009",
    eraId: "real-madrid",
    title: "World Record Presentation at Santiago Bernabéu",
    club: "Real Madrid",
    location: "Santiago Bernabéu, Madrid",
    summary: "Transfers to Real Madrid for a then-world record £80 million (€94 million).",
    details: "80,000 screaming fans packed the Bernabéu simply for his unveiling, chanting his name and 'Hala Madrid!'. The arrival of a titan who would redefine the club's modern era.",
    milestoneBadge: "World Record Transfer",
  },
  {
    id: "event-2014-decima",
    year: "2014",
    dateStr: "May 24, 2014",
    eraId: "real-madrid",
    title: "La Décima and The All-Time UCL Season Record",
    club: "Real Madrid",
    location: "Estádio da Luz, Lisbon",
    summary: "Real Madrid seal their historic 10th European Cup in Lisbon.",
    details: "Ronaldo sets an unbreakable UEFA Champions League record with 17 goals in a single tournament, scoring in the final against Atlético Madrid.",
    milestoneBadge: "La Décima",
    statsHighlight: "Record 17 Goals in One UCL Campaign",
  },
  {
    id: "event-2016-euro",
    year: "2016",
    dateStr: "July 10, 2016",
    eraId: "portugal",
    title: "UEFA Euro 2016 Champion for Portugal",
    club: "Portugal",
    location: "Stade de France, Paris",
    summary: "Captains Portugal to their first ever major international silverware.",
    details: "Despite suffering a brutal knee injury in the final, Ronaldo stood by coach Fernando Santos on the sideline with a heavily strapped knee, cheering, barking instructions, and willing his teammates to victory. Eder scored in extra time.",
    milestoneBadge: "European Champion",
  },
  {
    id: "event-2017-duodecima",
    year: "2017",
    dateStr: "June 3, 2017",
    eraId: "real-madrid",
    title: "Brace in Cardiff & Back-to-Back Champions League",
    club: "Real Madrid",
    location: "Millennium Stadium, Cardiff",
    summary: "Scores twice against Gianluigi Buffon's Juventus in a 4–1 final rout.",
    details: "Real Madrid become the first club in modern Champions League history to retain the trophy. Ronaldo finishes the knockout phase with 10 goals against Bayern Munich, Atlético Madrid, and Juventus.",
    milestoneBadge: "Back-to-Back Champions",
    statsHighlight: "10 Goals in Quarter, Semi & Final",
  },
  {
    id: "event-2018-bicycle",
    year: "2018",
    dateStr: "April 3, 2018",
    eraId: "real-madrid",
    title: "The Bicycle Kick in Turin",
    club: "Real Madrid vs Juventus",
    location: "Allianz Stadium, Turin",
    summary: "Leaps 2.38 meters into the air to strike arguably the greatest overhead kick in UCL history.",
    details: "Even the Juventus home supporters stood up and applauded in stunned admiration. The moment forged a deep mutual bond that paved the way for his move to Turin that summer. Real went on to complete the three-peat in Kyiv.",
    milestoneBadge: "Goal of the Century",
  },
  {
    id: "event-2019-atletico",
    year: "2019",
    dateStr: "March 12, 2019",
    eraId: "juventus",
    title: "The Impossible Comeback: Hat-Trick vs Atlético",
    club: "Juventus",
    location: "Allianz Stadium, Turin",
    summary: "Overturns a 2-0 first-leg deficit against Diego Simeone's Atletico with a masterclass hat-trick.",
    details: "Before the match, Ronaldo told his family and friends: 'I am going to score three tomorrow and we are going through.' Two towering headers and a nerveless 86th-minute penalty delivered one of the greatest individual comebacks in football history.",
    milestoneBadge: "Miracle Hat-Trick",
  },
  {
    id: "event-2021-world-record",
    year: "2021",
    dateStr: "September 1, 2021",
    eraId: "portugal",
    title: "All-Time Men's International Top Goalscorer",
    club: "Portugal vs Republic of Ireland",
    location: "Estádio Algarve, Faro",
    summary: "Scores two late headers in the 89th and 96th minutes to surpass Ali Daei's 109 goals.",
    details: "Reached 111 international goals (and counting). A testament to 18 unbroken years of leading his country with pride and unyielding physical resilience.",
    milestoneBadge: "Guinness World Record",
    statsHighlight: "111 International Goals (Surpassing 109)",
  },
  {
    id: "event-2024-900",
    year: "2024",
    dateStr: "September 5, 2024",
    eraId: "al-nassr",
    title: "The 900th Official Career Goal",
    club: "Portugal vs Croatia",
    location: "Estádio da Luz, Lisbon",
    summary: "Volleys in against Croatia in the UEFA Nations League to become the first human to reach 900 official goals.",
    details: "Falling to his knees with his hands over his face, Ronaldo wept tears of pride. 900 verified official goals in competitive football, cementing his status as the greatest finisher the sport has ever witnessed.",
    milestoneBadge: "Historic 900 Goals",
    statsHighlight: "900 Official Career Goals",
  },
];

