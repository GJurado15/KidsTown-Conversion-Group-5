// Fill-in-the-blank quizzes, ported from scripts/library/b_ny_fillin_db.pl,
// b_dc_fillin_db.pl (the forms) + data/library/b_fillin_datafile.txt (the
// grading data). Each question has an `options` list, the `correct` option,
// a `paragraph` shown either way, and `items` (extra facts about the wrong
// answers).
const FILLINS = {
  ny: {
    heading: "New York City Facts",
    map: "b_ny_map.gif",
    color: "#007000",
    backHref: "regions/mid-atlantic.html",
    backLabel: "Mid Atlantic States",
    intro:
      "The following questions relate to both the city and state of New York. When you are done selecting your answers, click \"Learn More\" to see how you did.",
    questions: [
      {
        prompt: "What is the tallest skyscraper in New York?",
        options: ["Sears Tower", "Leaning Tower of Pisa", "Empire State Building", "World Trade Center Buildings"],
        correct: "World Trade Center Buildings",
        paragraph: "<b>The World Trade Center Buildings</b> are the tallest at 110 stories. The Empire State Building is only 102 stories.",
        items: ["The Sears Tower is in Chicago.", "The Leaning Tower of Pisa is in Italy.", "Empire State Building is in New York, but it's too short."],
      },
      {
        prompt: "What is the name of the famous sports center in New York?",
        options: ["Madison Square Garden", "Sun Devil Stadium", "Coors Field", "Riverside Stadium"],
        correct: "Madison Square Garden",
        paragraph: "<b>Madison Square Garden</b> is the most famous of New York City's sports centers. The New York Rangers and Knicks both play there.",
        items: ["Coors Field is in Denver, Colorado.", "Sun Devil Stadium is in Arizona.", "Dodgers Stadium is in California."],
      },
      {
        prompt: "In 1524 New York was discovered by?",
        options: ["Alonso Alvarez de Pineda", "Giovanni da Verrazano", "Marcos de Niza", "Juan de Gaeten"],
        correct: "Giovanni da Verrazano",
        paragraph: "<b>Giovanni da Verrazano</b> was looking for a route to the Orient when he stumbled upon the Atlantic Coast and New York.",
        items: ["Alonso Alvarez de Pineda discovered the Texas coastline.", "Marcos de Niza discovered Arizona.", "Juan de Gaeten discovered Hawaii."],
      },
      {
        prompt: "The Dutch bought New Amsterdam (Manhattan) from what Native American tribe?",
        options: ["Pequot", "Apache", "Sioux", "Manhattan"],
        correct: "Manhattan",
        paragraph: "<b>Manhattan</b> was the name given to the Native Americans who lived in the area called Manhattan today. The Dutch bought it for only $24, from people who turned out not to even be from that area.",
        items: ["Pequot were from the Connecticut area.", "Apache were from the Southwestern United States.", "Sioux were native to the Oregon region."],
      },
      {
        prompt: "How many Americans can trace their roots to someone who passed through Ellis Island?",
        options: ["One out of every 2", "75", "About 20 million", "Billions!!!"],
        correct: "One out of every 2",
        paragraph: "<b>One out of every 2</b> Americans can trace their roots through Ellis Island, where immigrants were processed into America.",
        items: ["Billions of people live on planet Earth, and the population is still growing!", "About 75 different languages are spoken in New York.", "About 20 million people visit New York each year."],
      },
    ],
  },

  dc: {
    heading: "Washington D.C. Facts",
    map: "b_usa_flag.gif",
    color: "#0155fa",
    backHref: "regions/mid-atlantic.html",
    backLabel: "Mid Atlantic States",
    intro:
      "The following questions are related to our nation's capital, Washington D.C. When you are done selecting your answers, click \"Learn More\" to see how you did.",
    questions: [
      {
        prompt: "What do the initials D.C. stand for?",
        options: ["Donkeys and Cows", "District of Columbia", "Donuts and Coffee"],
        correct: "District of Columbia",
        paragraph: "<b>D.C.</b> stands for the <b>District of Columbia</b>. Washington D.C. is not a state; its residents were only allowed to vote in presidential elections starting in 1964.",
        items: ["Every day people in Washington D.C. eat donuts and drink coffee.", "In the 1800s, donkeys and cows may have been seen in the streets of our capital."],
      },
      {
        prompt: "What famous woman founded The Red Cross?",
        options: ["Clara Barton", "Susan B. Anthony", "Julia Ward Howe"],
        correct: "Clara Barton",
        paragraph: "<b>Clara Barton</b> was a nurse during the Civil War who tended to wounded soldiers in the capital. After the war she founded the Red Cross.",
        items: ['Julia Ward Howe wrote "The Battle Hymn of the Republic" during the Civil War while staying at the Willard Hotel.', "Susan Brownell Anthony was a suffragist who spoke out for a woman's right to vote."],
      },
      {
        prompt: "What famous U.S. President never lived in the White House?",
        options: ["George Washington", "Theodore Roosevelt", "Pierre L'Enfant"],
        correct: "George Washington",
        paragraph: '<b>George Washington</b> never lived in the "President\'s House," but he laid the cornerstone for the Capitol Building in 1793.',
        items: ["Pierre L'Enfant was the original designer of the Federal City, later called Washington D.C.", 'Theodore Roosevelt did live in the "President\'s House" but renamed it the "White House."'],
      },
      {
        prompt: "Which term below is used for Washington D.C.?",
        options: ["Capital", "Capitol", "Capitalize"],
        correct: "Capital",
        paragraph: '<b>Capital</b> is the term for a "seat of government" for a state or nation. Washington D.C. is the capital of the United States.',
        items: ["Capitol refers to the building in which lawmakers meet.", "Capitalize means to write a word with an initial capital letter."],
      },
      {
        prompt: "How long on average does a $1 bill last?",
        options: ["23 years", "5 years", "18 months"],
        correct: "18 months",
        paragraph: "<b>18 months</b> is the average lifespan of a $1 bill. American money is made from a mix of 75% cotton and 25% linen, not trees.",
        items: ["5 years is the average time before a $10 bill has to be recycled.", "23 years is the life expectancy for a $100 bill."],
      },
    ],
  },
};
