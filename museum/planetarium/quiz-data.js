// Solar System quiz content, ported from data/museum/ss1.dat (Basic Tour)
// and data/museum/ss2.dat (Advanced Tour).
//
// Each question has exactly one `correct: true` choice among its four
// `choices`. `img` is a filename under graphics/museum/. To add a question,
// append an entry with the same shape to the relevant tour's array.
const QUIZ_TOURS = {
  basic: [
    {
      question: "Which picture shows the only star in our Solar System?",
      choices: [
        { img: "c_ear1.gif", text: "Earth is one of the nine planets that orbit the Sun.", correct: false },
        { img: "c_ven1.gif", text: "Venus is the second planet from the Sun.", correct: false },
        { img: "c_sun1.gif", text: "The Sun is the only star in our Solar System.", correct: true },
        { img: "c_sat3.gif", text: "Saturn is a planet that orbits the only star in our Solar System.", correct: false },
      ],
    },
    {
      question: "Which planet is the smallest and is furthest from the Sun?",
      choices: [
        { img: "c_jup1.gif", text: "Jupiter is the largest planet in our Solar System.", correct: false },
        { img: "c_ven1.gif", text: "Venus is larger than the smallest planet.", correct: false },
        { img: "c_plu1.gif", text: "Pluto is the smallest planet and is furthest from the Sun.", correct: true },
        { img: "c_sat3.gif", text: "Saturn is second largest planet.", correct: false },
      ],
    },
    {
      question: "Which picture shows the planet that is closest to the Sun?",
      choices: [
        { img: "c_ear1.gif", text: "Earth is the third planet from the Sun.", correct: false },
        { img: "c_ura1.gif", text: "Uranus is the seventh planet from the Sun.", correct: false },
        { img: "c_sun1.gif", text: "You chose the Sun itself.", correct: false },
        { img: "c_mer1.gif", text: "Mercury is the closest planet to the Sun.", correct: true },
      ],
    },
    {
      question: 'Which planet is known for its "red spot"?',
      choices: [
        { img: "c_jup2.gif", text: "Jupiter is known for its red spot.", correct: true },
        { img: "c_mar1.gif", text: 'Mars is known as the "red planet", but not for having a "red spot".', correct: false },
        { img: "c_hai1.gif", text: "A comet may travel through our solar system but a planet is what you're looking for.", correct: false },
        { img: "c_sat3.gif", text: "Saturn is known for its rings.", correct: false },
      ],
    },
    {
      question: "Which planet is the largest in the Solar System?",
      choices: [
        { img: "c_mil1.gif", text: "The Milky Way Galaxy is larger than any planet.", correct: false },
        { img: "c_jup3.gif", text: "Jupiter is the largest planet in the Solar System.", correct: true },
        { img: "c_sun1.gif", text: "The Sun is larger than Jupiter but it is not considered a planet.", correct: false },
        { img: "c_sat3.gif", text: "Saturn is not the largest planet.", correct: false },
      ],
    },
    {
      question: "Which planet is the seventh planet from the Sun?",
      choices: [
        { img: "c_ear1.gif", text: "You chose Earth, which is the third planet from the Sun.", correct: false },
        { img: "c_nep2.gif", text: "Close but not quite. Neptune is the eighth planet from the Sun.", correct: false },
        { img: "c_ura1.gif", text: "Uranus is the seventh planet from the Sun.", correct: true },
        { img: "c_mar1.gif", text: "You chose Mars, which is the fourth planet from the Sun.", correct: false },
      ],
    },
    {
      question: "Which planet do you live on?",
      choices: [
        { img: "c_ear2.gif", text: "Earth is the only planet that has life, as far as we know.", correct: true },
        { img: "c_hai2.gif", text: "Halley's Comet does not have life upon it.", correct: false },
        { img: "c_jup1.gif", text: "Jupiter is a gaseous planet, unable to sustain life.", correct: false },
        { img: "c_nep2.gif", text: "Neptune is a gaseous planet, unable to sustain life.", correct: false },
      ],
    },
    {
      question: "Which picture shows the largest object in our Solar System?",
      choices: [
        { img: "c_ear1.gif", text: "Earth is not the largest object.", correct: false },
        { img: "c_ven1.gif", text: "Venus is not the largest object.", correct: false },
        { img: "c_sun1.gif", text: "The Sun is the largest object in our Solar System.", correct: true },
        { img: "c_sat3.gif", text: "Saturn is large but not as large as the Sun.", correct: false },
      ],
    },
    {
      question: "Which planet is the ninth planet from the Sun?",
      choices: [
        { img: "c_jup1.gif", text: "Jupiter is the fifth planet from the Sun.", correct: false },
        { img: "c_ven1.gif", text: "Venus is the third planet.", correct: false },
        { img: "c_plu1.gif", text: "Pluto is the ninth planet from the Sun. It is also the furthest away.", correct: true },
        { img: "c_sat3.gif", text: "Saturn is the sixth planet.", correct: false },
      ],
    },
    {
      question: "Pluto is the smallest planet. What is the next smallest planet?",
      choices: [
        { img: "c_ear1.gif", text: "Earth is not quite the second smallest.", correct: false },
        { img: "c_ura1.gif", text: "Uranus is quite large compared to the smaller planets.", correct: false },
        { img: "c_sun1.gif", text: "The Sun is larger than all of the planets.", correct: false },
        { img: "c_mer1.gif", text: "Except for Pluto, Mercury is the smallest planet.", correct: true },
      ],
    },
    {
      question: 'Which planet is known for its "rings"?',
      choices: [
        { img: "c_sat3.gif", text: "Saturn is known for its rings. Saturn's rings are mostly ice particles.", correct: true },
        { img: "c_ven1.gif", text: 'Venus does not have any "rings".', correct: false },
        { img: "c_hai1.gif", text: "A comet may travel through our solar system but a planet is what you're looking for.", correct: false },
        { img: "c_jup2.gif", text: "Jupiter is known for its red spot, not its rings.", correct: false },
      ],
    },
    {
      question: "Which planet is the fourth from the Sun?",
      choices: [
        { img: "c_mil1.gif", text: "The Milky Way Galaxy is not a planet in our Solar System.", correct: false },
        { img: "c_mar1.gif", text: "Mars is the fourth planet from the Sun.", correct: true },
        { img: "c_ura1.gif", text: "Uranus is the seventh planet from the Sun.", correct: false },
        { img: "c_ear1.gif", text: "Earth is the third planet from the Sun.", correct: false },
      ],
    },
    {
      question: "Which planet is the eighth planet from the Sun?",
      choices: [
        { img: "c_ear1.gif", text: "You chose Earth, which is the third planet from the Sun.", correct: false },
        { img: "c_jup2.gif", text: "Close but not quite. Jupiter is the fifth planet from the Sun.", correct: false },
        { img: "c_nep2.gif", text: "Neptune is the eighth planet from the Sun.", correct: true },
        { img: "c_mar1.gif", text: "You chose Mars, which is the fourth planet from the Sun.", correct: false },
      ],
    },
    {
      question: "Which planet is between Mercury and Earth?",
      choices: [
        { img: "c_ven1.gif", text: "Venus is the planet that resides between Mercury and Earth.", correct: true },
        { img: "c_hai2.gif", text: "Halley's Comet is not a planet.", correct: false },
        { img: "c_jup1.gif", text: "Jupiter is between Mars and Saturn.", correct: false },
        { img: "c_sat3.gif", text: "Saturn is between Jupiter and Uranus.", correct: false },
      ],
    },
    {
      question: "Which planet is between Jupiter and Uranus?",
      choices: [
        { img: "c_nep1.gif", text: "Neptune resides between Uranus and Pluto.", correct: false },
        { img: "c_hai2.gif", text: "Halley's Comet is not a planet.", correct: false },
        { img: "c_jup1.gif", text: "Jupiter is between Mars and Saturn.", correct: false },
        { img: "c_sat3.gif", text: "Saturn is between Jupiter and Uranus.", correct: true },
      ],
    },
  ],

  advanced: [
    {
      question: "Which of these contains 99.85% of all the matter in the Solar System?",
      choices: [
        { img: "c_ear1.gif", text: "Earth accounts for a very small portion of total mass of the Solar System.", correct: false },
        { img: "c_ven1.gif", text: "Venus accounts for a tiny portion of the total mass of the Solar System.", correct: false },
        { img: "c_sun1.gif", text: "The Sun accounts for 99.85% of all the matter in the Solar System. The planets only contain 0.135% of the total mass.", correct: true },
        { img: "c_sat3.gif", text: "Although a large planet, Saturn accounts for a very small portion of the total mass of the Solar System.", correct: false },
      ],
    },
    {
      question: "Our Solar System resides in a spiral galaxy consisting of 200 billion stars called:",
      choices: [
        { img: "c_jup1.gif", text: "Jupiter is a planet in our Solar System.", correct: false },
        { img: "c_ven1.gif", text: "Venus is a planet in our Solar System.", correct: false },
        { img: "c_mil1.gif", text: "The Milky Way Galaxy is the home of our Solar System.", correct: true },
        { img: "c_sat3.gif", text: "Saturn is a planet in our Solar System.", correct: false },
      ],
    },
    {
      question: "Because of its highly elliptical orbit, this planet is actually closer to the Sun than is Neptune during portions of its orbit.",
      choices: [
        { img: "c_ear1.gif", text: "You chose Earth. Earth is the third planet from the Sun and always closer to the Sun than Neptune.", correct: false },
        { img: "c_ura1.gif", text: "Close, but Uranus is always closer than Neptune to the Sun.", correct: false },
        { img: "c_sun1.gif", text: "You chose the Sun itself.", correct: false },
        { img: "c_plu1.gif", text: "Because of its irregular orbit Pluto is actually closer, at times, to the Sun than is Neptune.", correct: true },
      ],
    },
    {
      question: "Terrestrial Planets are the four innermost planets in the Solar System. Which planet is a Terrestrial Planet?",
      choices: [
        { img: "c_mer1.gif", text: "Mercury is considered a Terrestrial Planet because it is one of the four innermost planets. They are called Terrestrial because they are compact and rocky like the Earth's surface.", correct: true },
        { img: "c_jup1.gif", text: "Jupiter is a Jovian Planet because of its gaseous nature.", correct: false },
        { img: "c_hai1.gif", text: "A comet is not one of the four innermost planets.", correct: false },
        { img: "c_sat3.gif", text: "Saturn is a Jovian Planet because of its gaseous nature.", correct: false },
      ],
    },
    {
      question: "The Jovian Planets are the four gaseous planets and consist of the fifth through the eighth planets. Which planet is a Jovian Planet?",
      choices: [
        { img: "c_ven1.gif", text: "Venus is one of the Terrestrial Planets.", correct: false },
        { img: "c_jup3.gif", text: "Jupiter is one of the Jovian Planets. Saturn, Uranus and Neptune are also Jovian Planets.", correct: true },
        { img: "c_plu1.gif", text: "Pluto is not one of the four Jovian Planets because it is not gaseous.", correct: false },
        { img: "c_ear1.gif", text: "Earth is one of the four Terrestrial Planets.", correct: false },
      ],
    },
    {
      question: "Which planet is one of the four Terrestrial Planets and also has an enormous circular basin on its surface called the Caloris Basin?",
      choices: [
        { img: "c_ear1.gif", text: "Earth is one of the Terrestrial Planets but it does not have the Caloris Basin on its surface.", correct: false },
        { img: "c_nep2.gif", text: "Neptune is one of the Jovian Planets.", correct: false },
        { img: "c_mer1.gif", text: "Mercury has a large circular basin like those found on the moon called the Caloris Basin.", correct: true },
        { img: "c_mar1.gif", text: "Mars is one of the Terrestrial Planets but it is not the one with the Caloris Basin on its surface.", correct: false },
      ],
    },
    {
      question: "This planet has many volcanoes and a fractured surface. Its atmosphere is 96% carbon dioxide and its surface temperature is more than twice as hot as the Earth's.",
      choices: [
        { img: "c_ven1.gif", text: "Venus has an unstable surface and it is very hot. It also has clouds made up of sulfuric acid.", correct: true },
        { img: "c_hai2.gif", text: "Halley's Comet is not a planet.", correct: false },
        { img: "c_jup1.gif", text: "Jupiter is a gaseous planet without volcanoes.", correct: false },
        { img: "c_nep2.gif", text: "Neptune is a gaseous planet without volcanoes.", correct: false },
      ],
    },
    {
      question: "This planet has a diameter of 12756 km and the highest point on its surface is the tip of Mount Everest. Its atmosphere is made up of 21% oxygen.",
      choices: [
        { img: "c_sat1.gif", text: "Saturn's atmosphere contains virtually no oxygen. Saturn's atmosphere contains mostly hydrogen (97%).", correct: false },
        { img: "c_ura1.gif", text: "Uranus has a diameter of 51118 km. Almost 4 times the size of the planet with Mount Everest.", correct: false },
        { img: "c_ear2.gif", text: "Earth's atmosphere has the oxygen that humans require to breathe.", correct: true },
        { img: "c_mar1.gif", text: "Mars is smaller and its atmosphere is 95% carbon dioxide.", correct: false },
      ],
    },
    {
      question: "Which planet is larger than Mars but smaller than Earth?",
      choices: [
        { img: "c_jup1.gif", text: "Jupiter is many times larger than Earth.", correct: false },
        { img: "c_ven1.gif", text: "Venus is almost twice the size of Mars but it is just barely smaller than Earth. Venus is 12104 km in diameter.", correct: true },
        { img: "c_nep1.gif", text: "Neptune is larger than Earth.", correct: false },
        { img: "c_sat3.gif", text: "Saturn is a planet that is larger than Earth.", correct: false },
      ],
    },
    {
      question: 'Which planet has one natural satellite called the "Moon"?',
      choices: [
        { img: "c_ear1.gif", text: 'Earth is the third planet from the Sun and only has one natural orbiting body called the "Moon".', correct: true },
        { img: "c_ura1.gif", text: "The Moon does not orbit Uranus.", correct: false },
        { img: "c_sun1.gif", text: "Earth would be considered a natural satellite of the Sun.", correct: false },
        { img: "c_plu1.gif", text: 'Pluto does have a natural satellite called Charon. Although this is a moon, it is not the "Moon".', correct: false },
      ],
    },
    {
      question: "This planet ranks as the third smallest planet. It is a little hotter than Earth but not because it is closer to the Sun.",
      choices: [
        { img: "c_mar1.gif", text: "Mars is the third smallest planet and is hotter than Earth due to its lack of protective atmosphere.", correct: true },
        { img: "c_jup1.gif", text: "Jupiter is the largest planet.", correct: false },
        { img: "c_hai1.gif", text: "A comet is not one of the planets.", correct: false },
        { img: "c_sat1.gif", text: "Saturn is a Jovian Planet that ranks second to largest.", correct: false },
      ],
    },
    {
      question: "This gas giant is 11 times bigger than Earth and 20% larger than Saturn. It has a diameter of 142800km.",
      choices: [
        { img: "c_ven1.gif", text: "Venus is not one of the gas giants.", correct: false },
        { img: "c_jup1.gif", text: "Jupiter is a gas giant and the largest planet in the Solar System. Two of Jupiter's moons, Io and Europa can be seen in the picture.", correct: true },
        { img: "c_plu1.gif", text: "Pluto is the smallest planet.", correct: false },
        { img: "c_ear1.gif", text: "The Earth is not a gas giant.", correct: false },
      ],
    },
    {
      question: 'This planet is the fourth largest planet and has a larger mass than Uranus. It is nicknamed "The Mystic".',
      choices: [
        { img: "c_nep1.gif", text: "Neptune is smaller than Uranus but it is larger in mass. It will actually be the furthest planet from the Sun until 1999 when Pluto again becomes furthest.", correct: true },
        { img: "c_hai2.gif", text: "Halley's Comet is not a planet.", correct: false },
        { img: "c_jup1.gif", text: "Jupiter is the largest planet.", correct: false },
        { img: "c_plu1.gif", text: "Pluto is the smallest planet.", correct: false },
      ],
    },
  ],
};
