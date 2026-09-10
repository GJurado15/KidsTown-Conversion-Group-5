// Riddles, ported from scripts/toystore/poem1-7.pl + answer1-7.pl.
// Each entry's `poem` is shown first; clicking "answer" reveals `answerName`
// + `answerImg` in place, without a page navigation.
const RIDDLES = [
  {
    poem: "I wear a multicolored coat<br>of ribbons, green, yellow and blue<br>I shine after each rain<br>To bring good luck<br>To all of you.",
    answerName: "It is a rainbow.",
    answerImg: "rain3.gif",
  },
  {
    poem: "Blow it up<br>and watch the skin<br>grow bigger.<br>Twist a string to it.<br>Tie it.<br>See it floating there<br>way above you<br>in the air.",
    answerName: "It is a balloon.",
    answerImg: "balloon.gif",
  },
  {
    poem: "Once these creatures roamed<br>the world alone.<br>Now they are fossil.<br>Now they are bone.<br>You can see them<br>in the halls of<br>the natural history museum.",
    answerName: "They are dinosaurs.",
    answerImg: "dino.gif",
  },
  {
    poem: "Over six feet tall,<br>with black and white feathers,<br>and two long feet,<br>you will find me<br>at the zoo street.",
    answerName: "I am an ostrich.",
    answerImg: "ostrich.gif",
  },
  {
    poem: "I am the color of milky white<br>falling through the air<br>landing on things<br>to light there.",
    answerName: "I am a snow flake.",
    answerImg: "snow.gif",
  },
  {
    poem: "They grow by lakes<br>and streams<br>when workers see them<br>they scream<br>they are four feet tall<br>in the fall<br>blooming in white seeds<br>they are like weeds<br>hot dog at first<br>catlike at last.",
    answerName: "I am a cattail.",
    answerImg: "cattail.gif",
  },
  {
    poem: "They are yellow at first<br>then fluffy white<br>hundreds grouped together<br>they will float away<br>in autumn days<br>upon windy weather.",
    answerName: "I am a dandelion.",
    answerImg: "dande.gif",
  },
];
