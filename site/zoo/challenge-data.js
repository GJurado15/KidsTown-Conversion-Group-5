// ZooKeeper's Challenge: one trivia question per region, ported from the
// scripts/zoo/d6_*.pl files. Each region has exactly one `correct: true`
// choice. `img` (optional) is a filename under graphics/zoo/, shown with
// the feedback for that choice.
const ZOO_CHALLENGES = {
  africa: {
    question: "What is the tallest land animal living in the world today?",
    backHref: "africa.html",
    backLabel: "Go back to the Animals of Africa.",
    choices: [
      {
        label: "Elephant",
        correct: false,
        text: "The elephant is not the tallest animal in the world. The elephant is the largest land animal in the world. An adult male elephant can weigh up to 13,000 pounds!",
      },
      {
        label: "Giraffe",
        correct: true,
        img: "d6giraff.gif",
        text: "Giraffes are the tallest animals living in the world today. They can grow to be 19 feet tall!",
      },
      {
        label: "Hippopotamus",
        correct: false,
        text: "A hippopotamus can be big, but it is not the tallest animal in the world. Adult hippos are the second largest land animals in the world after elephants. They can grow to weigh 8,000 pounds!",
      },
    ],
  },

  australia: {
    question: "What do you call animals that have pouches to carry their young?",
    backHref: "australia.html",
    backLabel: "Go back to the Animals of Australia.",
    choices: [
      {
        label: "Marsupials",
        correct: true,
        img: "d6kanga.gif",
        text: "Animals that have pouches are called marsupials. Both kangaroos and koalas are marsupials.",
      },
      {
        label: "Reptiles",
        correct: false,
        text: "Reptiles are cold-blooded animals that lay eggs. Reptiles do not have pouches to carry their young.",
      },
      {
        label: "Herbivores",
        correct: false,
        text: "Herbivores are animals that eat plants. Although some herbivores have pouches to carry their young, not all herbivores have pouches.",
      },
    ],
  },

  ocean: {
    question: "What covers two-thirds of the surface of the Earth?",
    backHref: "ocean.html",
    backLabel: "Go back to the Animals of the Ocean.",
    choices: [
      {
        label: "Land",
        correct: false,
        text: "Land covers one-third of the surface of the Earth.",
      },
      {
        label: "Trees",
        correct: false,
        text: "Trees do not cover two-thirds of the surface of the Earth. Trees supply most of the oxygen that people breathe. The oldest tree is 4,725 years old.",
      },
      {
        label: "Water",
        correct: true,
        img: "ocean.jpg",
        text: "Yes, water covers over two-thirds of the surface of the Earth.",
      },
    ],
  },

  polar: {
    question: "Which animal's fur turns white in the winter and brown or gray in the summer?",
    backHref: "polar.html",
    backLabel: "Go back to the Animals of the Polar Regions.",
    choices: [
      {
        label: "Polar Bear",
        correct: false,
        text: "The polar bear's fur does not turn white in the winter and does not turn brown or gray in the summer. The polar bear's fur varies from pure white to a light yellow. The white fur is an important disguise for the polar bear as it hunts its prey on the ice pack.",
      },
      {
        label: "Arctic Hare",
        correct: true,
        img: "d6hare.gif",
        text: 'The arctic hare\'s fur turns white in the winter and brown or gray in the summer. In the winter, the arctic hare is white with black ear-tips. The underfur is dense and gray.',
      },
      {
        label: "Caribou",
        correct: false,
        text: "The caribou's fur does not turn white in the winter and does not turn brown or gray in the summer. The caribou's fur is typically brown and shaggy with a white neck and mane.",
      },
    ],
  },
};
