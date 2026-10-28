export interface GivingItem {
  id: string;
  category: "donation" | "blood" | "tribute-to-cr7" | "tribute-by-cr7";
  title: string;
  description: string;
  dateOrYear: string;
  sourceLabel: string;
  sourceUrl: string;
  impactHighlight?: string;
}

export interface QuoteTribute {
  quote: string;
  author: string;
  role: string;
  source: string;
}

export const GIVING_ITEMS: GivingItem[] = [
  {
    id: "giving-1",
    category: "blood",
    title: "Dedicated Blood and Bone Marrow Donor",
    description:
      "Unlike many fellow footballers, Cristiano Ronaldo has famously chosen not to get any tattoos so that he can donate blood and plasma on a regular, scheduled basis. He also registered as a bone marrow donor after his Portugal teammate Carlos Martins revealed his son had leukemia in 2011.",
    dateOrYear: "Ongoing (since 2011)",
    sourceLabel: "Eurosport / Red Cross / Save the Children campaigns",
    sourceUrl: "https://www.eurosport.com/football/why-cristiano-ronaldo-has-no-tattoos_sto7018894/story.shtml",
    impactHighlight: "Donates blood & plasma regularly; inspired thousands of global donors",
  },
  {
    id: "giving-2",
    category: "donation",
    title: "€1 Million+ Donation to Portuguese Hospitals During COVID-19",
    description:
      "Together with his agent Jorge Mendes, Ronaldo donated over €1 million to fund three intensive care units at Hospital de Santa Maria in Lisbon and Hospital de Santo António in Porto, providing life-saving ventilators, monitors, and infusion pumps.",
    dateOrYear: "March 2020",
    sourceLabel: "Reuters / Hospital Santa Maria Statement",
    sourceUrl: "https://www.reuters.com/article/us-health-coronavirus-ronaldo-donation-idUSKBN21B2V0",
    impactHighlight: "Equipped 3 full ICU wings with ventilators & monitoring beds",
  },
  {
    id: "giving-3",
    category: "donation",
    title: "Auctioned European Golden Boot to Fund Schools in Gaza",
    description:
      "In 2011, Ronaldo donated his 2011 European Golden Boot award to the Real Madrid Foundation, which auctioned it for €1.5 million to build schools and fund education programs for children in Gaza.",
    dateOrYear: "November 2012",
    sourceLabel: "Marca & Real Madrid Foundation Charity Report",
    sourceUrl: "https://www.marca.com/2012/11/20/en/football/real_madrid/1353406253.html",
    impactHighlight: "€1.5M raised for children's educational centers",
  },
  {
    id: "giving-4",
    category: "donation",
    title: "Global Ambassador for Save the Children, UNICEF & World Vision",
    description:
      "Served as Global Ambassador for Save the Children since 2013, making numerous multi-million donations and using his global reach to advocate against child hunger, obesity, and lack of healthcare in war zones and developing countries.",
    dateOrYear: "2013–Present",
    sourceLabel: "Save the Children Official Organization Portal",
    sourceUrl: "https://www.savethechildren.org/us/about-us/ambassadors/cristiano-ronaldo",
    impactHighlight: "Global Ambassador helping millions of vulnerable children",
  },
  {
    id: "giving-5",
    category: "donation",
    title: "Paid Full Brain Surgery Costs for 10-Month-Old Erik Ortiz Cruz",
    description:
      "When parents of 10-month-old Spanish infant Erik Ortiz Cruz, who suffered from cortical dysplasia causing up to 30 seizures a day, asked Ronaldo for a signed shirt to auction, Ronaldo paid the entire €60,000 cost of the surgery and follow-up treatments.",
    dateOrYear: "March 2014",
    sourceLabel: "The Independent & AS Spain",
    sourceUrl: "https://www.independent.co.uk/sport/football/european/cristiano-ronaldo-pays-full-ps50-000-cost-of-operation-for-10-month-old-baby-boy-with-rare-brain-disorder-9186644.html",
    impactHighlight: "Funded complete life-saving cranial surgery and treatment",
  },
  {
    id: "giving-6",
    category: "tribute-to-cr7",
    title: "Madeira Airport Renamed Cristiano Ronaldo International Airport",
    description:
      "In March 2017, the regional government of Madeira officially renamed the archipelago's main international airport to Aeroporto Internacional Cristiano Ronaldo, recognizing him as Madeira's greatest worldwide ambassador.",
    dateOrYear: "March 29, 2017",
    sourceLabel: "BBC News & Government of Madeira Official Gazette",
    sourceUrl: "https://www.bbc.com/news/world-europe-39433606",
    impactHighlight: "One of the few active athletes ever honored with an international airport name",
  },
  {
    id: "giving-7",
    category: "tribute-to-cr7",
    title: "Museu CR7 and Bronze Monument in Funchal",
    description:
      "Established in Funchal waterfront overlooking the harbor, Museu CR7 houses over 200 individual and collective trophies, including all five Ballons d'Or and four Golden Shoes, accompanied by a 3.4-meter bronze statue erected in his honor.",
    dateOrYear: "December 2013",
    sourceLabel: "Madeira Tourism Authority Official Registry",
    sourceUrl: "https://www.visitmadeira.com/en/what-to-do/culture/museums/museu-cr7",
    impactHighlight: "Tourist landmark drawing hundreds of thousands to his home island annually",
  },
  {
    id: "giving-8",
    category: "tribute-to-cr7",
    title: "Grand Officer of the Order of Prince Henry & Grand Officer of the Order of Merit",
    description:
      "Awarded Portugal's highest state civilian honors by President Aníbal Cavaco Silva and President Marcelo Rebelo de Sousa for bringing global prestige to Portugal and exemplifying Portuguese determination on the world stage.",
    dateOrYear: "2014 & 2016",
    sourceLabel: "Presidency of the Portuguese Republic (Chancelaria das Ordens Honoríficas)",
    sourceUrl: "https://www.presidencia.pt",
    impactHighlight: "Highest state decoration conferred by the Portuguese Republic",
  },
];

export const TRIBUTE_QUOTES: QuoteTribute[] = [
  {
    quote:
      "Cristiano Ronaldo was the most gifted player I managed. He surpassed all the great players I had at United. And he wasn't born with that body and that power — he made himself.",
    author: "Sir Alex Ferguson",
    role: "Legendary Manchester United Manager",
    source: "Sir Alex Ferguson: My Autobiography",
  },
  {
    quote:
      "There are players who are touched by a magic wand. The truth is that Cristiano has that, but he also works harder than anyone else on the planet.",
    author: "Zinedine Zidane",
    role: "Former Real Madrid Manager & Football Legend",
    source: "Post-UCL Final Press Conference 2017",
  },
  {
    quote:
      "Cristiano is a monster. When you think he is at his limit, he invents something new. To score 50 goals every single season is not human.",
    author: "Gianluigi Buffon",
    role: "Legendary Italian Goalkeeper",
    source: "UEFA Champions League Interview",
  },
  {
    quote:
      "He doesn't just score goals; he carries the psychological weight of entire stadiums. You cannot intimidate Cristiano Ronaldo.",
    author: "José Mourinho",
    role: "Two-Time Champions League Winner",
    source: "Sky Sports Premier League Studio",
  },
];

