// Wonders of the World quizzes, ported from scripts/township/{zeus,pyramid,
// wall,tajmahal}.pl (the form) + wonders.pl (the grading logic) +
// data/township/{zeus,pyram,wall,india}.txt (the answer key).
//
// Each wonder has a 3-part quiz: a multiple-choice (q1), a true/false (q2),
// and a "construct the word" spelling puzzle (q3Letters, one dropdown per
// letter position, each with a few decoy letters). `rewardImages[n]` is the
// image shown for n correct answers (0-3); `rewardImages[3]` is the full
// reward, shown with the "Good Job" message instead of "Almost there".
const WONDERS = {
  zeus: {
    title: "Statue of Zeus of Olympia",
    pageTitle: "Wonders - Statue of Zeus",
    bg: "lightblue",
    map: "mapgr.jpg",
    mapLabel: "Map of Greece",
    flag: "flaggr.gif",
    flagLabel: "Flag of Greece",
    sideImg: "greece4.gif",
    sideLabel: "Parthenon",
    side2Img: "greece7.gif",
    side2Label: "Statue of Aphrodite",
    intro:
      "The statue of Zeus was built in the honor of the god who the Ancient Olympic games were held for. " +
      "It was located in the ancient town that gave its name to the Olympics, the ancient town of Olympia in Greece. " +
      "The ancient Greek calendar starts in 776 BCE. The Olympic games are believed to have started that year. " +
      "The temple of Zeus in Olympia was designed by the architect Libon and was built around 420 BCE. " +
      "The statue was placed inside the temple about 15 to 20 years later when its creator, Pheidias, finished sculpting it. " +
      "The statue represents the god of the ancient world, Zeus, sitting and holding a staff made from ivory and gold. " +
      "The whole statue was made from gold, and it was as tall as a modern four-story building. During the Olympic games, " +
      "even wars stopped allowing athletes from Syria, Egypt, and Sicily to celebrate the Olympics and to worship their king of gods: Zeus.",
    q1: { prompt: "The statue of Zeus was built around the year", options: ["500 CE", "300 BCE", "420 BC"], correct: "420 BC" },
    q2: { prompt: "Does the statue still exist?", correct: "off" },
    q3: {
      prompt: "In which town was the statue located? (Construct the word)",
      letters: [
        { options: ["M", "N", "O", "P", "Q", "R", "S"], correct: "O" },
        { options: ["K", "L", "M", "N", "O", "P", "Q"], correct: "L" },
        { options: ["U", "V", "W", "X", "Y", "Z"], correct: "Y" },
        { options: ["K", "L", "M", "N", "O", "P"], correct: "M" },
        { options: ["K", "L", "M", "N", "O", "P", "Q"], correct: "P" },
        { options: ["F", "G", "H", "I", "J", "K", "L"], correct: "I" },
        { options: ["A", "B", "C", "D", "E", "F", "G"], correct: "A" },
      ],
    },
    rewardImages: ["zeus3.jpg", "zeus2.jpg", "zeus1.jpg", "zeus.jpg"],
    rewardText:
      "Greece is one of the countries with great history and mythology. Besides Zeus, other gods such as Poseidon, " +
      "Aphrodite and Apollo, were the center of the attention of the ancient world.",
  },

  pyramid: {
    title: "Great Pyramid of Giza",
    pageTitle: "Wonders - Pyramids",
    bg: "lightyellow",
    map: "mapeg.jpg",
    mapLabel: "Map of Egypt",
    flag: "flageg.gif",
    flagLabel: "Flag of Egypt",
    sideImg: "egypt6.gif",
    sideLabel: "Statue of a Pharoah",
    side2Img: "desert.jpg",
    side2Label: "River Nile",
    intro:
      "We have just arrived in Egypt. In this wonderful country on the west side of the river Nile, we find the oldest " +
      "and one of the biggest monuments of the world: The Great Pyramid of Giza. This Pyramid was designed by the Egyptian " +
      "Pharaoh (King) Khufu around the year 2560 BCE to be his tomb when he died. The Great pyramid is believed to have " +
      "been built over a 20-year period. When it was finished, it was 145.75 meters or 481 feet high. The structure " +
      "consists of approximately two million blocks of stone each weighing more than two tons. The inside of the Great " +
      "Pyramid has galleries, corridors and escape shafts that all lead to the center of the pyramid where the " +
      "sarcophagus (the Pharaoh's tomb) is located. The Pharaoh was placed there when he died with a lot of gold, " +
      "precious stones and other valuable things, that he could take with him on his mystic journey to the afterlife.",
    q1: { prompt: "The Great Pyramid of Giza was built around the year", options: ["500 CE", "2560 BCE", "5080 BCE"], correct: "2560 BCE" },
    q2: { prompt: "Were there any corridors, galleries, or escape shafts in the pyramid?", correct: "on" },
    q3: {
      prompt: "An ancient building that Egyptians used as a tomb for their Pharaohs: (Construct the word)",
      letters: [
        { options: ["M", "N", "O", "P", "Q", "R"], correct: "P" },
        { options: ["U", "V", "W", "X", "Y", "Z"], correct: "Y" },
        { options: ["O", "P", "Q", "R", "S", "T"], correct: "R" },
        { options: ["A", "B", "C", "D", "E", "F"], correct: "A" },
        { options: ["K", "L", "M", "N", "O", "P"], correct: "M" },
        { options: ["F", "G", "H", "I", "J", "K"], correct: "I" },
        { options: ["A", "B", "C", "D", "E", "F"], correct: "D" },
      ],
    },
    rewardImages: ["pyramid4.jpg", "pyramid3.jpg", "pyramid2.jpg", "pyramid1.jpg"],
    rewardText:
      "Egypt has many pyramids besides the one of Giza. It also has the great Sphinx, a beautiful structure of one of the " +
      "gods of ancient Egypt, which still exists after thousands of years.",
  },

  wall: {
    title: "Great Wall of China",
    pageTitle: "Wonders - Great Wall of China",
    bg: "white",
    map: "mapch.jpg",
    mapLabel: "Map of China",
    flag: "flagch.gif",
    flagLabel: "Flag of China",
    sideImg: "china3.gif",
    sideLabel: "Chinese Painting",
    side2Img: "china8.gif",
    side2Label: "Tiananmen Square",
    intro:
      "The Great Wall of China is the longest structure ever built. It is about 4,000 miles long. Remarkably, it was all " +
      "built by hand. Most of the wall was built with bricks and stones. Some of the tallest parts of the Great Wall, near " +
      "the capital city of Beijing, rise to 35 feet. These sections are about 25 feet wide at the base and 20 feet wide at " +
      "the top. Watch towers stand 100 to 200 feet apart along the wall. Historically, the wall was built during the time " +
      "of the Ming dynasty which ruled China from 1368-1644. Its main purpose was to protect China from the invaders of " +
      "the north, who mostly came from Mongolia. Even after hundreds of years, the Great Wall still stands.",
    q1: { prompt: "What dynasty ruled China during the time that the Great Wall was built?", options: ["Select one", "Ming", "Hang", "Khan"], correct: "Ming" },
    q2: { prompt: "The Great Wall was built to protect China from invaders.", correct: "on" },
    q3: {
      prompt: "Most of the Great Wall is built with stones and ________ (Construct the word)",
      letters: [
        { options: ["A", "B", "C", "D", "E", "F"], correct: "B" },
        { options: ["M", "N", "O", "P", "Q", "R"], correct: "R" },
        { options: ["F", "G", "H", "I", "J", "K"], correct: "I" },
        { options: ["A", "B", "C", "D", "E", "F"], correct: "C" },
        { options: ["F", "G", "H", "I", "J", "K"], correct: "K" },
        { options: ["O", "P", "Q", "R", "S", "T"], correct: "S" },
      ],
    },
    rewardImages: ["answer0.jpg", "answer1.jpg", "answer2.jpg", "answer3.jpg"],
    rewardText:
      "In addition to the Great Wall, China has many other interesting places to visit. Places such as the mountains of " +
      "Tibet, The Forbidden City, as well as the Temple of Heaven. The Great Wall awaits your arrival.",
  },

  taj: {
    title: "Taj Mahal",
    pageTitle: "Wonders - Taj Mahal",
    bg: "salmon",
    map: "india1.gif",
    mapLabel: "Map of India",
    flag: "indflag.jpg",
    flagLabel: "Flag of India",
    sideImg: "india3.gif",
    sideLabel: "River Ganges",
    side2Img: "india4.gif",
    side2Label: "Hindu Temple",
    intro:
      'The Taj Mahal is considered to be one of the wonders of the world. The Taj Mahal was built by the Mughal Emperor ' +
      '"Shah Jahan" in memory of his beloved "Mumtaz Mahal". It took 20,000 craftsmen working around the clock for 22 years ' +
      "to complete it. It is truly one man's monumental testimony of love. The Taj Mahal has become a landmark not only " +
      "for the city of Agra, but for the entire country of India.",
    q1: { prompt: "The Taj Mahal is located in:", options: ["Select one", "China", "India", "Tibet"], correct: "India" },
    q2: { prompt: "The Taj Mahal was built by 20,000 craftsmen.", correct: "on" },
    q3: {
      prompt: "The Taj Mahal was a work of ____! (Construct the word)",
      letters: [
        { options: ["F", "G", "H", "I", "J", "K", "L"], correct: "L" },
        { options: ["M", "N", "O", "P", "Q", "R"], correct: "O" },
        { options: ["R", "S", "T", "U", "V", "W"], correct: "V" },
        { options: ["A", "B", "C", "D", "E", "F"], correct: "E" },
      ],
    },
    rewardImages: ["taj14.jpg", "taj12.jpg", "taj34.jpg", "taj1.jpg"],
    rewardText:
      "India is one of the largest countries in the world with a population of over 500 million people. The history of " +
      "India is over two thousand years old.",
  },
};
