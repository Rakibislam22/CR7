export interface FamilyStory {
  id: string;
  name: string;
  relation: string;
  quote?: string;
  narrative: string;
  keyMoments: string[];
  accentColor: string;
}

export const FAMILY_MEMBERS: FamilyStory[] = [
  {
    id: "dolores-aveiro",
    name: "Maria Dolores dos Santos Aveiro",
    relation: "Mother & Rock of His Life",
    quote: "My mother is the pillar of our family. Everything I am, I owe to her sacrifice and love.",
    narrative:
      "Dolores worked tirelessly as a cook and cleaner in Madeira to put food on the table for her four children. When Sporting CP asked for 12-year-old Cristiano to move hundreds of miles away to Lisbon, she swallowed her own heartbreak so her son could chase his dream. Throughout his career, she has been in the stands praying with her rosary beads, celebrating every triumph, and standing by him through every adversity.",
    keyMoments: [
      "Supported 12-year-old Cristiano moving to the mainland to pursue football",
      "Present at every Ballon d'Or ceremony in Paris and Zurich",
      "Celebrated on the pitch during the UEFA Euro 2016 triumph in Paris",
      "Known for her emotional reactions and enduring faith in the stands",
    ],
    accentColor: "border-rose-500/40 bg-rose-950/20",
  },
  {
    id: "jose-dinis-aveiro",
    name: "José Dinis Aveiro (1953–2005)",
    relation: "Father & Eternal Inspiration",
    quote: "He never saw me win the Champions League or the Ballon d'Or... but I know he is watching from above.",
    narrative:
      "A former soldier and kitman at Cristiano's first boyhood club CF Andorinha, José Dinis was the person who introduced young Cristiano to football. He named his son after Ronald Reagan. Tragically, Dinis passed away in London in September 2005 at the age of 52 due to liver failure, just as Cristiano was rising at Manchester United. Ronaldo famously played for Portugal against Russia just hours after hearing the news. To this day, whenever Cristiano points to the heavens after scoring, it is a quiet dedication to his father.",
    keyMoments: [
      "Introduced Cristiano to his first club, CF Andorinha in Madeira",
      "Cristiano played for Portugal vs Russia in Moscow just 24 hours after his passing",
      "Every major trophy and goal celebration looking up is dedicated to his memory",
      "Ronaldo's emotional interview with Piers Morgan recalling how his father never saw him reach #1 in the world",
    ],
    accentColor: "border-amber-500/40 bg-amber-950/20",
  },
  {
    id: "siblings",
    name: "Hugo, Elma & Katia Aveiro",
    relation: "Brother & Sisters",
    quote: "We grew up in a tiny house in Quinta Falcão. We had very little, but we had each other.",
    narrative:
      "Growing up sharing small rooms in Santo António, Madeira, the Aveiro siblings formed an unbreakable bond. Older brother Hugo has been closely involved with managing the Museu CR7 in Funchal. Sisters Elma and Katia have been vocal, proud supporters throughout his journey, always defending him with fierce Madeira pride and maintaining the family's deep roots in the island community.",
    keyMoments: [
      "Brother Hugo manages the CR7 Museum in Funchal, Madeira",
      "Sister Katia has released music and dedicated songs to family perseverance",
      "United together during every family holiday and international tournament",
    ],
    accentColor: "border-emerald-500/40 bg-emerald-950/20",
  },
  {
    id: "georgina-and-children",
    name: "Georgina Rodríguez & Their Children",
    relation: "Partner & Children",
    quote: "My family is my greatest trophy. Nothing else compares to walking through the door and hugging my children.",
    narrative:
      "Cristiano and Georgina have built a loving, close-knit home for their five children: Cristiano Jr., twins Eva and Mateo, Alana Martina, and Bella Esmeralda. Cristiano Jr. has followed his father through academies in Madrid, Turin, Manchester, and Riyadh, displaying the same dedication and love for the ball. Off the pitch, Ronaldo's world centers on family dinners, school drop-offs, and quiet moments away from the cameras.",
    keyMoments: [
      "Met in Madrid in 2016, building an inseparable partnership",
      "Raising Cristiano Jr., Eva, Mateo, Alana Martina, and Bella Esmeralda",
      "Cristiano Jr. winning trophies in Juventus, Manchester United, and Al Nassr youth squads",
      "Sharing positive, warm family moments during holidays and quiet retreats",
    ],
    accentColor: "border-sky-500/40 bg-sky-950/20",
  },
];

export const MADEIRA_HOMETOWN = {
  title: "Santo António, Funchal — Where the Dream Began",
  description:
    "Perched on the volcanic hills of Madeira Island in the Atlantic Ocean, Funchal's Santo António neighborhood was where a scrawny boy kicked punctured plastic balls past passing cars. In 2017, Madeira Airport was officially named Cristiano Ronaldo International Airport, greeting millions of visitors to the island where Portugal's greatest icon was born.",
  quote: "I never forget where I came from. Madeira is in my blood, in my heart, and in everything I do.",
};

