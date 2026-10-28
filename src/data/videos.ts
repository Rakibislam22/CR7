export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
  category: "goals" | "champions-league" | "interviews" | "skills" | "tributes";
  era: string;
  duration: string;
  description: string;
}

export const CURATED_VIDEOS: VideoItem[] = [
  {
    id: "vid-1",
    title: "The Bicycle Kick in Turin vs Juventus (April 2018)",
    youtubeId: "V_w3f3fXhT8",
    category: "champions-league",
    era: "Real Madrid",
    duration: "3:45",
    description: "The 2.38m high bicycle kick in the UEFA Champions League quarter-final that earned a standing ovation from Juventus fans.",
  },
  {
    id: "vid-2",
    title: "Wolfsburg Comeback Hat-Trick: Santiago Bernabéu Miracle (2016)",
    youtubeId: "LgWzYlB9p9E",
    category: "champions-league",
    era: "Real Madrid",
    duration: "4:15",
    description: "Overturning a 2-0 deficit with a magnificent hat-trick culminating in an 77th-minute free-kick to send Real Madrid to the UCL semifinals.",
  },
  {
    id: "vid-3",
    title: "UEFA Euro 2016 Final: Tears, Leadership & Glory in Paris",
    youtubeId: "q6y3fO_u0Qo",
    category: "tributes",
    era: "Portugal",
    duration: "5:20",
    description: "The emotional rollercoaster of July 10, 2016: from heartbreak injury to leading his team from the technical area to Portugal's first major trophy.",
  },
  {
    id: "vid-4",
    title: "Sensational Hat-Trick vs Spain: FIFA World Cup 2018 (Sochi)",
    youtubeId: "vB3P8_yOq9M",
    category: "goals",
    era: "Portugal",
    duration: "4:50",
    description: "One of the greatest individual World Cup performances ever: 3 goals against Spain including an 88th-minute free-kick masterpiece.",
  },
  {
    id: "vid-5",
    title: "The Impossible Comeback: Juventus 3–0 Atlético Madrid (2019)",
    youtubeId: "Y6vX1J3hW8A",
    category: "champions-league",
    era: "Juventus",
    duration: "5:10",
    description: "Predicting his own hat-trick to his family and delivering with two bullet headers and an 86th-minute penalty against Simeone's defense.",
  },
  {
    id: "vid-6",
    title: "Sporting CP vs Manchester United (August 6, 2003): The Match That Changed History",
    youtubeId: "w_G3O9XmZ9I",
    category: "skills",
    era: "Sporting CP",
    duration: "4:00",
    description: "18-year-old Cristiano Ronaldo dizzying John O'Shea and the Manchester United defense, convincing Sir Alex Ferguson to sign him on the spot.",
  },
  {
    id: "vid-7",
    title: "The Emotional Tribute to His Father José Dinis Aveiro",
    youtubeId: "rV9X2l7hE9Y",
    category: "interviews",
    era: "Portugal",
    duration: "6:15",
    description: "Cristiano watching unseen archival footage of his father speaking with immense pride before he passed away in 2005.",
  },
  {
    id: "vid-8",
    title: "The 900th Career Goal: Historic Nations League Strike vs Croatia",
    youtubeId: "d4G7y8Z1x3A",
    category: "goals",
    era: "Al Nassr / Portugal",
    duration: "3:30",
    description: "Cristiano Ronaldo becomes the first football player in history to officially record 900 competitive career goals.",
  },
];

