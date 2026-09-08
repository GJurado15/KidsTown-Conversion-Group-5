// City Park "Big Journey" story content.
//
// Each entry is keyed by page number (matching the original data/citypark/pageN
// files) and holds the page body as an HTML template. Use {{name}} anywhere
// the visitor's name should appear. Links to other pages are plain relative
// links (`?page=N`) since story.html renders whichever page the URL asks for.
//
// To add a new page: add an entry here and link to it with `?page=<key>`
// from wherever it should be reachable.
const CITYPARK_GRAPHICS = "../../graphics/citypark";

const STORY_PAGES = {
  1: `
    Your big adventure starts out just like any other lazy summer day. The
    birds are chirping outside, and you can just tell from the smell of the
    air that this day is going to be really hot.
    <p>Your friend calls out from the street, "{{name}}, why don't you come
    outside and play? It looks like its going to be a great day!" You decide
    that yes, you will go out and play today. You pull on your favorite blue
    shirt and head outside.
    <p>As you step out onto the porch, you feel that something is not quite
    right. The birds are no longer chirping. The light seems too bright. All
    of a sudden, you can't see anything at all. You fall into a deep sleep.
    <a href="?page=2">You wake up</a> in a strange place.
    <p><a href="index.html">Back</a>
  `,

  2: `
    <img src="${CITYPARK_GRAPHICS}/park.gif" alt="The Park" width="90" height="100" hspace="10" vspace="10" align="left">
    Bright sunlight streams into your eyes, making it hard to see. Your eyes
    finally adjust and you see that you are no longer on your front porch.
    You look around and see that you seem to be in a very large park. There
    are big trees around the edge of the park, and lots of grass. There are
    other people in the park, but for some reason, they don't look right.
    The air feels much cooler than it did on your porch.
    <p>You see a girl and her dog. Do you want to walk up to them?
    <a href="?page=3">Yes</a>&nbsp;
    <a href="?page=4">No</a>
    <p><a href="?page=1">Back</a>
  `,

  3: `
    <img src="${CITYPARK_GRAPHICS}/girl.gif" alt="Girl and Dog" width="90" height="100" hspace="10" vspace="10" align="right">
    As you begin to get closer to the girl, you notice what is wrong with
    her. You can see right through her! She looks like any other girl, but
    she also kind of looks like ghosts do in the movies. You can even see
    through her dog! You finally say "Hello, my name is {{name}}. What is
    your name?"
    <p>She doesn't even notice you. You reach out to touch her, and your
    hand goes right through her!
    <p>You think to yourself, "Well, these people aren't going to be much
    help."
    <p><img src="${CITYPARK_GRAPHICS}/book.gif" alt="Old Book" width="55" height="72" hspace="10" vspace="10" align="right">
    You walk back to the place where you first woke up and you see a book.
    "That wasn't there before," you think to yourself. You reach down and
    grab it.
    <p>The book has a leather cover and looks very old. The writing on the
    cover is in a language you have never seen before. You open the book
    and see that the first page says, "{{name}}, FIND THE COMPASS." The
    rest of the pages are strangely blank.
    <p>So, you are supposed to find the compass. A compass is a thing that
    helps you find your way, and since you are very lost, finding your way
    sounds like a great idea. You look around and see a stand about 50 feet
    away that looks like it has something on it. You <a href="?page=5">walk</a>
    towards the stand.
    <p><a href="?page=2">Back</a>
  `,

  4: `
    <img src="${CITYPARK_GRAPHICS}/book.gif" alt="Old Book" width="55" height="72" hspace="10" vspace="10" align="right">
    You walk back to the place where you first woke up and you see a book.
    "That wasn't there before," you think to yourself. You reach down and
    grab it.
    <p>The book has a leather cover and looks very old. The writing on the
    cover is in a language you have never seen before. You open the book
    and see that the first page says, "{{name}}, FIND THE COMPASS."
    <p>So, you are supposed to find the compass. A compass is a thing that
    helps you find your way, and since you are very lost, finding your way
    sounds like a great idea. You look around and see a stand about 50 feet
    away that looks like it has something on it. You <a href="?page=5">walk</a>
    towards the stand.
    <p><a href="?page=2">Back</a>
  `,

  5: `
    <img src="${CITYPARK_GRAPHICS}/compass.gif" alt="Compass" width="60" height="60" hspace="10" vspace="10" align="right">
    As you approach the stand, you notice two things. First, you see that
    there is a compass on the stand. That is interesting. Second, you see a
    small reddish bird next to the compass. Unlike the people still with
    you here in the park, you can't see through the bird. It looks kind of
    like a parakeet.
    <p>You get to the stand. As you reach for the compass, you feel the
    leather book in your hand getting warm. At that same moment the bird
    says, "Hey {{name}}, you should probably look in the book."
    <p><img src="${CITYPARK_GRAPHICS}/bird.gif" alt="bird" width="84" height="95" hspace="10" vspace="10" align="left">
    The bird startles you. As far as you know, only parrots talk, and this
    certainly doesn't look like a parrot.
    <p><img src="${CITYPARK_GRAPHICS}/directions.gif" alt="Directions" width="100" height="111" hspace="10" vspace="10" align="right">
    You decide to do what it says. You look in the book. The first page
    still says, "{{name}}, FIND THE COMPASS," but now, there is writing on
    the second page. It says, "{{name}}, GO WEST AND FIND THE DOME."
    <p>You take the compass and find that you are facing North. Using the
    directions of North, South, East and West from the picture, which way
    do you have to turn in order to be facing West?
    <p><a href="?page=6">Left</a> or <a href="?page=7">Right</a>?
    <p><a href="?page=4">Back</a>
  `,

  6: `
    <img src="${CITYPARK_GRAPHICS}/directionl.gif" alt="Directions" width="100" height="111" hspace="10" vspace="10" align="right">
    You did it {{name}}! If you are facing North, and you take a little
    turn to your left, you will then be facing West.
    <p>Let's <a href="?page=8">continue</a>. Way to go!
    <p><a href="?page=5">Back</a>
  `,

  7: `
    <img src="${CITYPARK_GRAPHICS}/directionr.gif" alt="Compass" width="100" height="111" hspace="10" vspace="10" align="right">
    {{name}}, this is kind of a tricky question. Looking again at the
    picture that has N, S, E and W on it, you will see that if you turn to
    your right when you are facing North, you will then be facing East.
    <p><a href="?page=5">Back</a>
  `,

  8: `
    <img src="${CITYPARK_GRAPHICS}/mountains.gif" alt="Mountains" width="100" height="90" hspace="10" vspace="10" align="right">
    You leave the park and start walking West on a paved street. After you
    have gone a little way you notice that way off in the distance, you can
    see snow capped mountains.
    <p><img src="${CITYPARK_GRAPHICS}/bird.gif" alt="bird" width="84" height="95" hspace="10" vspace="10" align="left">
    You look over your shoulder and see that the bird is following you. It
    says, "Hey, {{name}}, don't mind me. I'm just here to help you out if
    you get in any trouble."
    <p>You decide to <a href="?page=9">Continue</a>.
    <p><a href="?page=7">Back</a>
  `,

  9: `
    <img src="${CITYPARK_GRAPHICS}/mountains.gif" alt="Mountains" width="100" height="90" hspace="10" vspace="10" align="right">
    The first street you pass is called Apple Street. The next street you
    pass is called Birch Street.
    <p>Which street do you think would come next,
    <a href="?page=10">Willow Street</a> or <a href="?page=11">Cherry Street</a>?
    <p><a href="?page=8">Back</a>
  `,

  10: `
    <img src="${CITYPARK_GRAPHICS}/mountains.gif" alt="Mountains" width="100" height="90" hspace="10" vspace="10" align="right">
    If you were thinking that all of these streets had the names of trees,
    then Willow Street might come next. But Cherry is also the name of a
    tree. There must be another way to choose.
    <p><a href="?page=9">Back</a>
  `,

  11: `
    <img src="${CITYPARK_GRAPHICS}/mountains.gif" alt="Mountains" width="100" height="90" hspace="10" vspace="10" align="right">
    {{name}}, you sure are good at figuring things out! You noticed that
    Apple Street started with the letter A, and Birch Street started with
    the letter B. So it would make sense to think that the next street
    would start with a C, and it does! Cherry Street is the next street.
    <p>Now that you have that figured out, you <a href="?page=12">continue</a>
    down the street, looking for the dome.
    <p><a href="?page=9">Back</a>
  `,

  12: `
    <img src="${CITYPARK_GRAPHICS}/dome.gif" alt="Dome" width="100" height="90" hspace="10" vspace="10" align="right">
    After walking several blocks you finally see the glint of the dome up
    ahead of you.
    <p><img src="${CITYPARK_GRAPHICS}/bird.gif" alt="bird" width="84" height="95" hspace="10" vspace="10" align="left">
    Out of nowhere, the bird says, "Hey, {{name}}. I've got a little riddle
    for you.
    <p>I happen to know that the address of the dome is 1369 Kids Town
    Lane. It is also on the right side of the street. I'll give you a clue
    as to how to get home if you can tell me what side of the street my
    house is on.
    <p>All I'll tell you is that the address of my house is even, meaning
    that the last number of the address ends with an even number.
    <p>What side of the street do you suppose my house is on?
    <a href="?page=14">Left</a>&nbsp;or&nbsp;<a href="?page=13">Right</a>?"
    <p><a href="?page=11">Back</a>
  `,

  13: `
    <img src="${CITYPARK_GRAPHICS}/dome.gif" alt="Dome" width="100" height="90" hspace="10" vspace="10" align="right">
    Wow {{name}}, that was a hard riddle. The dome has an odd address. Odd
    addresses end with 1, 3, 5, 7, or 9. The dome is on the right side of
    the street.
    <p><img src="${CITYPARK_GRAPHICS}/bird.gif" alt="bird" width="84" height="95" hspace="10" vspace="10" align="left">
    That makes you think odd addresses are on one side of the street and
    even addresses are on the other side of the street. The bird's house
    has an even address (it ends with 2, 4, 6, or 8) so it is on the
    opposite side of the house as the dome. Therefore it is on the left
    side of the street.
    <p><a href="?page=12">Back</a>
  `,

  14: `
    <img src="${CITYPARK_GRAPHICS}/dome.gif" alt="Dome" width="100" height="90" hspace="10" vspace="10" align="right">
    Nice work {{name}}. That riddle was especially hard. This is how you
    solved the puzzle: the dome has an odd address and is on the right side
    of the street. Odd addresses end with 1, 3, 5, 7, or 9.
    <p><img src="${CITYPARK_GRAPHICS}/bird.gif" alt="bird" width="84" height="95" hspace="10" vspace="10" align="left">
    That makes you think odd addresses are on one side of the street and
    even addresses are on the other side of the street. And that is
    exactly the way it is. The bird's house has an even address (it ends
    with 2, 4, 6, 8 or 0) so it is on the opposite side of the house as the
    dome. Therefore it is on the left side of the street.
    <p>Here is your <a href="?page=15">clue</a>.
    <p><a href="?page=12">Back</a>
  `,

  15: `
    <img src="${CITYPARK_GRAPHICS}/dome.gif" alt="Dome" width="100" height="90" hspace="10" vspace="10" align="right">
    The bird says to you, "{{name}}, the answer has been in your hands the
    whole time." You realize that the book in your hands is getting warm
    again. You open it up. You see that the first two pages say the same
    thing, but now there is a third page.
    <p><img src="${CITYPARK_GRAPHICS}/bird.gif" alt="Bird" width="84" height="95" hspace="10" vspace="10" align="left">
    The page says, "{{name}}, this journey is over. There will be more to
    come, but now it is time to go home. Close your eyes, count backwards
    from 10 to 1 and you will be back to where you began."
    <p>Which way do you decide to count?
    <p><a href="?page=16">1, 2, 3, 4, 5, 6, 7, 8, 9, 10</a>
    <p><a href="?page=17">10, 9, 8, 7, 6, 5, 4, 3, 2, 1</a>
    <p><a href="?page=18">2, 4, 6, 8, 10</a>
  `,

  16: `
    <img src="${CITYPARK_GRAPHICS}/dome.gif" alt="Dome" width="100" height="90" hspace="10" vspace="10" align="right">
    You close your eyes and count from 1 to 10.
    <p>1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    <p>You open your eyes and see that nothing has changed. You are still
    in the same spot by the dome!
    <p>Then you realize that you were supposed to count backwards, starting
    at 10 and ending at 1.
    <p>You decide to <a href="?page=15">try</a> again.
    <p><a href="?page=15">Back</a>
  `,

  17: `
    You close your eyes and count from 10 down to 1.
    <p>10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    <p>You try to open your eyes, but you can't. Suddenly, the air is hot
    again, and you hear the birds chirping.
    <p>You are finally able to open your eyes. When you do, you realize
    that you are once again on your front porch. You see your friend
    standing in the street.
    <p>She says, "{{name}}, come on! Let's go play!"
    <p>Well, she doesn't seem to have noticed that you were gone for a
    little while. You decide not to bring it up.
    <p>It's time for another journey... let's go explore the rest of
    KidsTown!
    <p><a href="../index.html">Back to Kids Town</a>
    <p><a href="?page=15">Back</a>
  `,

  18: `
    You close your eyes and count from 2 to 10 by even numbers.
    <p><img src="${CITYPARK_GRAPHICS}/dome.gif" alt="Dome" width="100" height="90" hspace="10" vspace="10" align="right">
    You open your eyes and see that nothing has changed. You are still in
    the same spot by the dome!
    <p>Then you realize that you were supposed to count backwards, starting
    at 10 and ending at 1. Instead, you counted by evens, from 2 to 10.
    <p>You decide to <a href="?page=15">try</a> again.
    <p><a href="?page=15">Back</a>
  `,
};
