export interface HeadlineStat {
  label: string;
  value: string;
  subtext: string;
  highlight?: boolean;
}

export interface ClubRecord {
  club: string;
  period: string;
  appearances: number;
  goals: number;
  assists: number;
  trophies: number;
  iconicTrophies: string[];
  color: string;
}

export interface TrophySummary {
  category: string;
  items: {
    title: string;
    count: number;
    years: string;
  }[];
}

export interface WorldRecord {
  record: string;
  detail: string;
  verifiedBy: string;
}

export const HEADLINE_STATS: HeadlineStat[] = [
  { label: "Official Career Goals", value: "900+", subtext: "All-time #1 official goalscorer in history", highlight: true },
  { label: "UEFA Champions League", value: "5x", subtext: "2008, 2014, 2016, 2017, 2018", highlight: true },
  { label: "Ballon d'Or Titles", value: "5x", subtext: "2008, 2013, 2014, 2016, 2017", highlight: true },
  { label: "International Goals", value: "133+", subtext: "World record for men's national team", highlight: false },
  { label: "European Golden Shoes", value: "4x", subtext: "2008, 2011, 2014, 2015", highlight: false },
  { label: "Senior Career Trophies", value: "35+", subtext: "Across England, Spain, Italy & Portugal", highlight: false },
];

export const CLUB_RECORDS: ClubRecord[] = [
  {
    club: "Sporting CP",
    period: "2002–2003",
    appearances: 31,
    goals: 5,
    assists: 6,
    trophies: 1,
    iconicTrophies: ["Supertaça Cândido de Oliveira (2002)"],
    color: "from-emerald-600 to-emerald-950",
  },
  {
    club: "Manchester United (Phase 1)",
    period: "2003–2009",
    appearances: 292,
    goals: 118,
    assists: 69,
    trophies: 9,
    iconicTrophies: ["3x Premier League", "1x UEFA Champions League", "1x FIFA Club World Cup", "1x FA Cup"],
    color: "from-red-600 to-red-950",
  },
  {
    club: "Real Madrid",
    period: "2009–2018",
    appearances: 438,
    goals: 450,
    assists: 131,
    trophies: 16,
    iconicTrophies: ["4x UEFA Champions League (including three-peat)", "2x La Liga", "3x FIFA Club World Cup", "2x Copa del Rey"],
    color: "from-sky-500 to-indigo-950",
  },
  {
    club: "Juventus",
    period: "2018–2021",
    appearances: 134,
    goals: 101,
    assists: 22,
    trophies: 5,
    iconicTrophies: ["2x Serie A", "1x Coppa Italia", "2x Supercoppa Italiana"],
    color: "from-zinc-400 to-zinc-900",
  },
  {
    club: "Manchester United (Phase 2)",
    period: "2021–2022",
    appearances: 54,
    goals: 27,
    assists: 5,
    trophies: 0,
    iconicTrophies: ["Club Top Scorer 2021-22 (24 goals at age 37)"],
    color: "from-red-700 to-zinc-950",
  },
  {
    club: "Al Nassr",
    period: "2023–Present",
    appearances: 74,
    goals: 68,
    assists: 18,
    trophies: 1,
    iconicTrophies: ["Arab Club Champions Cup (2023 Top Scorer)"],
    color: "from-amber-500 to-yellow-950",
  },
  {
    club: "Portugal National Team",
    period: "2003–Present",
    appearances: 216,
    goals: 133,
    assists: 45,
    trophies: 2,
    iconicTrophies: ["UEFA Euro 2016", "UEFA Nations League 2019"],
    color: "from-rose-600 to-emerald-950",
  },
];

export const WORLD_RECORDS: WorldRecord[] = [
  {
    record: "All-Time Top Scorer in Football History",
    detail: "900+ official goals in verified competitive senior matches, recognized by FIFA and IFFHS.",
    verifiedBy: "FIFA / RSSSF / UEFA",
  },
  {
    record: "Most Goals in UEFA Champions League History",
    detail: "140 goals in 183 appearances; also holds the single-season record with 17 goals (2013-14).",
    verifiedBy: "UEFA Official Records",
  },
  {
    record: "All-Time Top International Goalscorer",
    detail: "133+ goals for Portugal, surpassing Ali Daei's record of 109 goals.",
    verifiedBy: "Guinness World Records / FIFA",
  },
  {
    record: "Only Player to Score in 5 Different FIFA World Cups",
    detail: "Scored in 2006, 2010, 2014, 2018, and 2022 World Cup finals tournaments.",
    verifiedBy: "FIFA World Cup Archives",
  },
  {
    record: "Most Champions League Knockout Stage Goals",
    detail: "67 goals in knockout matches—more than anyone else in European football history.",
    verifiedBy: "UEFA Official Records",
  },
  {
    record: "Real Madrid's All-Time Greatest Goalscorer",
    detail: "450 goals in just 438 matches—an astounding ratio exceeding 1.02 goals per match.",
    verifiedBy: "Real Madrid CF Archives",
  },
];

export const GOAL_TYPES = [
  { label: "Right Foot", percentage: 64, count: "576+ goals" },
  { label: "Left Foot", percentage: 19, count: "172+ goals" },
  { label: "Headers", percentage: 17, count: "153+ goals" },
];

