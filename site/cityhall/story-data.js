// Casebook Interactive Stories, ported from scripts/cityhall/bbb*.pl and
// cap*.pl. The original CGI is stateless, so it hand-authored a near-
// duplicate page for every combination of "which clues has the player
// already seen" (e.g. bbb2a/bbb2b/bbb3-3/bbb3-5/... are byte-identical
// content with only the trailing links differing). A static page can just
// keep that state in memory, so this collapses each distinct piece of
// content into one node and tracks visited nodes in sessionStorage instead.
//
// Each story is a small graph: `nodes[id]` has `img`, `color`, `text`, and
// `choices` (each `{label, to}` pointing at another node id in the same
// story). `end` is the terminal node. For "bbb", `solveRequires` lists the
// clue nodes that unlock an extra "Solve the Case" choice once all have
// been visited (mirroring the original's "gather all the clues first"
// design, without needing a combinatorial page per clue-order).
const STORIES = {
  bbb: {
    title: "The Bungled Bank Burglary",
    start: "manager",
    solveRequires: ["willy", "paper", "vaultDoor", "historian", "vaultContents"],
    nodes: {
      manager: {
        img: "bbb1.gif",
        color: "#22ac2f",
        text:
          '"Thank you both for coming," the bank manager says as he escorts you toward his office. "Last night we were nearly robbed."' +
          '<br><br>"Nearly?" questions Detective Anders.' +
          '<br><br>"Well, thanks to quick action by our night security guard, Willy Sparks, nothing was stolen. I figured you may be able to find some clues that will lead us to the culprit so he won\'t strike again. Feel free to examine the vault and interview Willy."',
        choices: [
          { label: "examine the vault", to: "vaultContents" },
          { label: "question Willy", to: "willy" },
        ],
      },
      willy: {
        img: "bbb2.gif",
        color: "#a00000",
        text:
          '"I\'m not one to brag," asserts Willy Sparks, the security guard, "but without my help, the thief would have gotten away with everything."' +
          '<br><br>"Tell us exactly what happened," Detective Anders says as he looks closely at Willy.' +
          '<br><br>"At about 4:30 in the morning I was doing my rounds near the teller\'s windows when I heard something back by the vault. I rushed back and surprised a masked man stuffing a bag full of money and <i>this</i>," explains Willy as he holds up a piece of paper.',
        choices: [
          { label: "examine the paper", to: "paper" },
          { label: "continue questioning Willy", to: "vaultDoor" },
        ],
      },
      paper: {
        img: "bbb3.gif",
        color: "#0000a0",
        text:
          '"It is a page from former U.S. President Woodrow Wilson\'s diary," Willy continues. "It is one of the bank\'s most prized possessions.' +
          '<br><br>It was recently appraised at $500,000. I had never seen it before, but the bank manager talks about it so often that I immediately knew what it was when I approached the thief."' +
          "<br><br>You and Detective Anders read the page:<br><br><tt>April 16, 1917<br><br>" +
          "Today we declared war on Germany and the other Central Powers. I have lived through many bloody conflicts in my life, but World War I is indeed the most terrible I have ever witnessed.<br><br>Thomas Woodrow Wilson</tt>",
        choices: [
          { label: "speak with an historian about the diary entry", to: "historian" },
          { label: "continue questioning Willy", to: "vaultDoor" },
        ],
      },
      vaultDoor: {
        img: "bbb4.gif",
        color: "#af4c00",
        text:
          '"Whenever the vault is opened at night a silent alarm notifies the police," explains Willy.' +
          '<br><br>"So I told the robber to put his hands in the air until they arrived, but he dropped the bag and fled out the back of the bank."' +
          "<br><br>You and Detective Anders examine the door at the rear of the bank. The lock has been blown apart, probably by a small explosive." +
          '<br><br>"I figured that I shouldn\'t chase him out of the bank. So while I was waiting for the police, I counted the money by hand to make sure none was missing. Within a half an hour the police arrived and the robber had not returned."',
        choices: [
          { label: "look more closely at the scrap of paper", to: "paper" },
          { label: "examine the vault", to: "vaultContents" },
        ],
      },
      historian: {
        img: "bbb5.gif",
        color: "#9400d3",
        text:
          '"World War I, or the Great War, was the largest and most brutal conflict of its time," explains the historian from a nearby library.' +
          '<br><br>"It spanned the years from 1914 though 1918 but the United States wasn\'t actively involved until 1917. It was the first war to introduce large-scale use of machine guns, aircraft, and deadly poison gas."' +
          '<br><br>"Could President Wilson have written a note about the Great War in April of 1917?" You ask the historian.' +
          '<br><br>"Definitely," explains the historian. "In fact, April 16, 1917 was the day that the United States began fighting. Until then, the U.S. had been considered a neutral country."',
        choices: [
          { label: "continue questioning Willy", to: "vaultDoor" },
          { label: "examine the vault", to: "vaultContents" },
        ],
      },
      vaultContents: {
        img: "bbb6.gif",
        color: "#226b22",
        text:
          '"We keep $1,000,000 in cash in the vault along with other documents," began the bank manager.' +
          '<br><br>"The bills are all in denominations of $20 or lower so it would have been easy for the robber to spend the money anywhere."' +
          '<br><br>"And what about the other documents?" you ask.' +
          '<br><br>"Most of them would have no value to a thief, they are just copies of deeds and loans. However, the Woodrow Wilson diary entry is quite valuable, indeed. Thankfully, Willy was able to recover it with the cash."',
        choices: [
          { label: "question Willy again", to: "willy" },
          { label: "examine that diary entry", to: "paper" },
        ],
      },
    },
    end: {
      img: "end.gif",
      color: "#22ac2f",
      text:
        '"I think we have enough information to assist your search for the culprit," Detective Anders explains to the bank manager.' +
        '<br><br>"Your security guard, Willy Sparks, is lying about his actions last night. That would suggest he has some involvement in the incident."' +
        '<br><br>"Also, the diary page Willy gave you is a forgery," you add.' +
        '<br><br>"I don\'t understand. How could Willy be involved? And where is the real diary page?" cries the bank manager.' +
        '<br><br>"We knew Willy was lying when he said that he counted all the cash before the police arrived. He said the police arrived within half an hour, but it would have taken more than five hours to count $1,000,000 in small bills by hand. And the diary page is obviously bogus because it refers to \'World War I\'. In 1917, the first World War was known as the Great War. It wouldn\'t have made sense to call it World War I when there hadn\'t been a World War II, yet."' +
        "<br><br>Upon hearing this evidence, Willy admits to stealing the diary page and replacing it with a fake. Since he couldn't get into the vault without setting off the silent alarm, he made up the story about the robber. While the police were on their way he forged the diary page, but he was in such a hurry he wrote <i>World War I</i> instead of <i>The Great War</i>.",
      choices: [
        { label: "The Case of the Alien Photo", href: "story.html?case=cap" },
        { label: "return to the main Casebook Interactive Stories page", href: "index.html" },
      ],
    },
  },

  cap: {
    title: "The Case of the Alien Photo",
    start: "photo",
    nodes: {
      photo: {
        img: "cap1.gif",
        color: "#22ac2f",
        text:
          '"I have proof that there is life on Venus!" shouts Maurice Mole from across the police station.' +
          '<br><br>"I\'m going to make millions when I sell this to the tabloids," he giggles devilishly and waves a photograph in the air.' +
          "<br><br>Maurice Mole is well known in the county as a con artist. He is clever, but you and Detective Anders have managed to foil all his previous attempts to fool the public. You decide to carefully examine the glossy photograph. It shows a barren landscape dotted with tiny figures that look like aliens.",
        choices: [
          { label: "question Maurice Mole about the photo", to: "questioning" },
          { label: "send the photo to the crime lab for testing", to: "crimelab" },
        ],
      },
      questioning: {
        img: "cap2.gif",
        color: "#a00000",
        text:
          '"Actually, I\'m amazed that nobody discovered this before," explains Maurice.' +
          '<br><br>"When I pointed my telescope at Venus last night I saw these little figures jumping around. I thought I should take a picture of them."' +
          "<br><br>You and Detective Anders exchange looks of skepticism. Maurice Mole seems like the least likely person to spend his nights looking at the stars.",
        choices: [
          { label: "continue questioning Maurice", to: "routine" },
          { label: "send the photo to the crime lab", to: "crimelab" },
        ],
      },
      crimelab: {
        img: "cap3.gif",
        color: "#0000a0",
        text:
          "Rather than spend more time listening to Maurice, you decide that the crime lab may provide you with some answers." +
          '<br><br>"I think the photograph is a fake," states the scientist at the crime lab, "but I can\'t prove it. It looks like \'aliens\' were put in the background by a computer. Unfortunately, you will probably need more evidence to prove that Maurice Mole\'s claims are untrue."',
        choices: [{ label: "question Maurice face to face", to: "routine" }],
      },
      routine: {
        img: "cap4.jpg",
        color: "#af4c00",
        text:
          '"I\'m an astronomer at heart," claims Maurice. "Ever since I saw my first shooting star I fell in love with the night sky.' +
          '<br><br>Of course, my favorite planet is Venus." Maurice Mole\'s ears twitch a little bit as he explains his nightly routine. "When the sky is its darkest, usually around midnight, I turn my telescope toward Venus to admire its rocky surface. In fact, there hasn\'t been one night in the last six months that I haven\'t spent at least fifteen minutes looking at the beautiful planet."' +
          "<br><br>You see Detective Anders smile slightly. That can only mean one thing: he has found a problem with Maurice Mole's story.",
        choices: [
          { label: "solve the mystery", to: "end" },
          { label: "look for more evidence at Maurice Mole's apartment", to: "apartment" },
        ],
      },
      apartment: {
        img: "cap5.gif",
        color: "#9400d3",
        text:
          '"I have absolutely nothing to hide," exclaims Maurice. "You may examine my apartment inside and out."' +
          "<br><br>Maurice Mole's apartment is dark and messy. His clothes are scattered about the floor and dirty dishes are piled up on the counters. You notice a computer with a scanner in a back room. Maurice guides you to his balcony and points to a shiny white telescope. \"There it is,\" he says. \"If the sky were darker, I would let you look at the aliens for yourselves.\"" +
          "<br><br>You and Detective Anders look at the telescope. It appears to be remarkably clean compared to everything else in the apartment. Something dangling from the eyepiece of the telescope catches your eye; it is a price tag." +
          '<br><br>"I, uh," stammers Maurice, "I just forgot to take the price tag off."' +
          '<br><br>Detective Anders looks at you with a wink, "I think you can also forget about getting any money from the tabloids, Maurice. Your photo is a fake."',
        choices: [{ label: "the solution to the Case of the Alien Photo", to: "end" }],
      },
    },
    end: {
      img: "end.gif",
      color: "#226b22",
      text:
        '"Maurice, your story is so full of holes some people might mistake it for swiss cheese!" you exclaim.' +
        "<br><br>\"First, it would be impossible for you to photograph aliens on the surface of Venus. Venus is covered with a thick blanket of clouds which prevents anyone from seeing the surface. Second, you claim to have looked at Venus every night for the last six months. That, too, is impossible. Due to the motion of the planets, Venus is not visible from Earth for six consecutive months. Finally, you said that you looked at Venus at midnight. As every astronomer knows, Venus is visible only near sunrise or sunset.\"" +
        '<br><br>Confronted with your facts, Maurice decides to confess to the forgery. "When I heard how much money the tabloids offered for alien photographs, I decided to fake one on my computer. I guess I should have spent more time in the library learning about Venus, first. I just bought the telescope yesterday to fool you two."',
      choices: [
        { label: "The Bungled Bank Burglary", href: "story.html?case=bbb" },
        { label: "return to the main Casebook Interactive Stories page", href: "index.html" },
      ],
    },
  },
};
