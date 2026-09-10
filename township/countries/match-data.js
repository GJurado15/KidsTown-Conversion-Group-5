// Country Shape Matching Game rounds, ported from scripts/township/
// match1-6.pl + their clue-reveal variants (match1c1.pl etc). Each round
// shows a country outline and 3 clues (revealed one at a time by clicking)
// plus 3 country choices — any choice takes you to that country's fact
// page (see country-data.js), right or wrong, since "even wrong answers
// have interesting things to tell you."
const MATCH_ROUNDS = {
  1: {
    shapeImg: "match_co.gif",
    clues: [
      'This country is also known as "The Land Down Under."',
      "Koalas and tasmanian devils live here.",
      "This country takes up an entire continent.",
    ],
    choices: [
      { label: "France", id: "france" },
      { label: "Australia", id: "australia" },
      { label: "Japan", id: "japan" },
    ],
  },
  2: {
    shapeImg: "match2.gif",
    clues: [
      "This country is in Europe.",
      "Part of this country is in the Arctic Circle.",
      "This country was invaded by the USSR in 1939.",
    ],
    choices: [
      { label: "Finland", id: "finland" },
      { label: "Egypt", id: "egypt" },
      { label: "Jamaica", id: "jamaica" },
    ],
  },
  3: {
    shapeImg: "match3.gif",
    clues: [
      "This country is part of the Middle East.",
      "Most of the people in this country are Islamic.",
      "About 25% of the world's oil reserves are in this country.",
    ],
    choices: [
      { label: "Gabon", id: "gabon" },
      { label: "Ukraine", id: "ukraine" },
      { label: "Saudi Arabia", id: "saudi" },
    ],
  },
  4: {
    shapeImg: "Match4.gif",
    clues: [
      "This is a South American country.",
      "The world's highest waterfalls, Angel Falls, are in this country.",
      "The official language is Spanish.",
    ],
    choices: [
      { label: "Thailand", id: "thailand" },
      { label: "Spain", id: "spain" },
      { label: "Venezuela", id: "venezuela" },
    ],
  },
  5: {
    shapeImg: "match5.gif",
    clues: [
      "This country is in Asia.",
      "More than 1 billion people live here.",
      "One of the oldest civilizations in the world exists here.",
    ],
    choices: [
      { label: "Antarctica", id: "antarctica" },
      { label: "Madagascar", id: "madagascar" },
      { label: "China", id: "china" },
    ],
  },
  6: {
    shapeImg: "match6.gif",
    clues: [
      "This country is part of North America.",
      "This is the world's largest Spanish-speaking country.",
      "Mayans, Aztecs, Toltecs, and Olmecs used to live here.",
    ],
    choices: [
      { label: "Mexico", id: "mexico" },
      { label: "Laos", id: "laos" },
      { label: "Turkey", id: "turkey" },
    ],
  },
};
