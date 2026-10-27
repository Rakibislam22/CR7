# CR7 – The GOAT Journey: MVP Document

## 1. Vision

A storytelling website that lets any visitor get to know Cristiano Ronaldo completely: his journey from Madeira to today, his family roots, the criticism he faced, and how he answered it on the pitch. Anyone who scrolls through should understand why he is the GOAT, through emotion, data and video together.

## 2. Target Users

- Ronaldo fans who want everything in one place
- Neutral fans and Messi fans looking for the case for CR7
- New fans who don't know his story yet

## 3. MVP Scope (v1, about 2 to 3 weeks)

### Must-have

1. **Hero section**: bold intro, "GOAT" tagline, CTA "Start the Journey".
2. **Career Timeline** (core feature), by era:
   - Early life (Madeira, Andorinha, Nacional)
   - Sporting CP
   - Manchester United (2003–09): Ballon d'Or 2008, Champions League 2008
   - Real Madrid (2009–18): four Champions League titles in five years, all-time top scorer
   - Juventus (2018–21)
   - Manchester United return (2021–22)
   - Al Nassr (2023–present)
   - Portugal: Euro 2016, Nations League
3. **Champions League Hall**: titles, record goals, iconic moments (the bicycle kick against Juventus, famous hat-tricks), stat cards.
4. **Critics vs Answers**: two columns.
   - Left: the criticism (headline or claim, source link, date)
   - Right: his answer (match, goal, trophy, stat, video)
5. **Family & Roots** (see section 4).
6. **Giving Back & Tributes** (see section 5).
7. **Stats & Records**: goals, assists, trophies, records, shown as charts.
8. **Video gallery**: YouTube embeds grouped by era and category.
9. **Responsive and fast**: mobile first.

### Nice-to-have (v2)

- Admin panel to add and edit content
- Ronaldo vs Messi comparison tool
- "How well do you know CR7?" quiz
- Bangla + English language toggle
- Dark/light mode and animations (Framer Motion)
- Fan comments and reactions

### Out of scope (MVP)

Visitor login, payments, live match data, mobile app, monetization.

## 4. Section Spec: Family & Roots

This section stays focused on love and family only. No gossip, no rumors.

- **His mother, Dolores Aveiro**: the woman who raised him, supported his move to Sporting as a boy, and is a constant presence in his life. Include public photos with proper licence, and moments he has shared about her.
- **His father, José Dinis Aveiro**: passed away in 2005, when Ronaldo was 20. Ronaldo has often spoken about how much he meant to him and has dedicated goals and awards to his memory. Tell this with respect.
- **Family members**: mention siblings (Hugo, Elma, Katia), his partner Georgina Rodríguez, and his children. Keep it to publicly shared, positive family moments.
- Format: a calm, emotional page with a short story, a few photos and one or two embedded interview clips.

## 5. Section Spec: Giving Back & Tributes

Goal: show that his greatness is also about who he is off the pitch, and how the world honors him.

### Donations and charity (collect only items with a credible source)

- Charity donations and support for children's hospitals and medical causes
- Support for people hit by natural disasters
- Sale of a Golden Boot for charity
- His long-known blood donor habits
- Rule: for every item, add the source link. Some widely shared donation stories online are exaggerated or disputed, so verify each one with a reliable outlet or a charity statement before publishing.

### Tributes to Ronaldo

- Museu CR7 in Funchal, Madeira
- Statue in Funchal
- Madeira airport renamed Cristiano Ronaldo International Airport (2017)
- Awards: Ballon d'Or wins, Guinness World Records, national honors from Portugal
- Words from teammates, coaches and rivals (short quotes with sources)

### Tributes by Ronaldo

- Dedications of goals and trophies to his family and to people he admired
- Moments of respect to fellow players and fans

## 6. Content Plan (the biggest job)

The website wins on content quality, not code.

| Content | Source | Note |
| --- | --- | --- |
| Stats | Transfermarkt, FBref, UEFA, Wikipedia | Always link the source |
| Videos | Official YouTube channels (UEFA, Real Madrid, Man United, Portugal, Ronaldo's own) | Embed, never download and re-upload |
| Photos | Wikimedia Commons, Unsplash (check licence) | No Getty or AP photos |
| Criticism quotes | Original article or interview | Short quote plus source link |
| Charity facts | Charity statements, major news outlets | Verify before publishing |
| Timeline text | Write in your own words | No copy-paste |

## 7. Legal and Copyright

- Match footage is copyrighted. Use YouTube embeds (iframe) only.
- Add an "Unofficial fan tribute" disclaimer in the footer.
- Do not sell ads or merchandise in the MVP, to avoid trademark issues.
- Personal and family content: only public, verified information.

## 8. Tech Stack (MERN)

- **Frontend**: React (Vite) or Next.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Hosting**: Vercel (frontend), Render or Railway (backend), MongoDB Atlas
- **Charts**: Recharts

### Data models

- `TimelineEvent`: year, title, description, era, image, videoId
- `Video`: title, youtubeId, category, era
- `CriticAnswer`: criticism, source, date, answerTitle, answerDescription, videoId
- `Stat`: category, season, club, value
- `FamilyMember`: name, relation, story, photo
- `GivingItem`: type (donation or tribute), title, description, date, sourceUrl

## 9. Pages and Routes

- `/` Home
- `/journey` Timeline
- `/champions-league`
- `/critics-vs-answers`
- `/family` Family & Roots
- `/giving-back` Donations and Tributes
- `/stats`
- `/videos`
- `/about` (disclaimer and sources)

## 10. Build Plan

| Week | Work |
| --- | --- |
| 1 | Research and collect content (50+ timeline events, 30+ videos, stats, family and giving items), wireframes, project setup |
| 2 | Home, Timeline, Videos, Stats, backend API |
| 3 | Champions League, Critics vs Answers, Family, Giving Back, polish, responsive, deploy |

## 11. Success Criteria

- A new visitor understands Ronaldo's whole story within 5 minutes
- At least 10 Critics vs Answers pairs
- At least 10 verified donation or tribute items, each with a source
- Mobile Lighthouse score of 85 or more
- Every claim has a source

## 12. First Steps

1. Start a Google Sheet or Notion page for timeline events (year, event, source).
2. List criticism and answer pairs.
3. Collect verified donation and tribute items with source links.
4. Collect YouTube links by era.
5. Sketch the timeline page on paper or Figma.
6. Create the repo and set up frontend and backend.

*Unofficial fan tribute project.*