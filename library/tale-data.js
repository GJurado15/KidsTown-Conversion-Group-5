// "Wacky Web Tale" mad-libs, ported from scripts/library/b_*_tale.pl (the
// form) + */[state]tale.pl (the generated story). Each field renders as a
// <select> (or a text <input> when `type: "text"`); `render(values)` builds
// the finished story HTML from the chosen values.
const TALES = {
  ct: {
    name: "Connecticut",
    stateNum: 7,
    map: "b_ct_map.gif",
    line: "forest-line.gif",
    titleColor: "#FF5512",
    fields: [
      { name: "tribes", prefix: "", type: "select", options: ["Many", "Several", "No"], suffix: " Indian Tribes are native to Connecticut." },
      { name: "animals", prefix: "Many ", type: "select", options: ["small", "giant", "brown"], suffix: " animals live in Connecticut." },
      { name: "pollution", prefix: "Connecticut like many other states has a ", type: "select", options: ["problem", "celebration", "solution"], suffix: " with pollution." },
    ],
    render(v) {
      return (
        "<p><b>" + v.tribes + "</b> Native Indian tribes such as the Niantic, Podunk, Qunnipiac, and Pequot are native to the area of Connecticut. " +
        "As in most regions of our country, Native Americans were killed to provide land and resources for the European settlers. " +
        "<b>" + v.tribes + "</b> Indians were killed by the diseases they caught from the Europeans. Today, the remaining tribes live on reservations " +
        "established by the European settlers and American government.</p><hr>" +
        "<p>Connecticut is so <b>" + v.animals + "</b> that it could fit within Alaska more than 117 times. Even though Connecticut is a " +
        "<b>" + v.animals + "</b> state compared to other states, it has a large population. With so many people living in such a <b>" + v.animals + "</b> " +
        "area most large animals such as bears and panthers have been pushed out of the state. Many <b>" + v.animals + "</b> animals still live in " +
        "Connecticut, like rabbits, minks, and squirrels.</p><hr>" +
        "<p>In the 1800s Connecticut had a <b>" + v.pollution + "</b>. There was a shortage of fertile land and an abundance of water. So, Connecticut " +
        "became a very industrialized state with lots of textile mills and factories. All of these industries dumped many pollutants into the " +
        "waters of Connecticut. This caused a new <b>" + v.pollution + "</b> of water pollution. To fix the <b>" + v.pollution + "</b>, Connecticut has " +
        "written many laws concerning what can be put into its rivers. Turning the water off while brushing your teeth saves precious water. " +
        "You can also save water by taking quick showers instead of bathing. With everyone working together, we can save one of our most precious " +
        "resources, <b>water!</b></p>"
      );
    },
  },

  or: {
    name: "Oregon",
    stateNum: 37,
    map: "b_or_map.gif",
    line: "sun-line.gif",
    titleColor: "#0088CC",
    fields: [
      { name: "recycle", prefix: "Many ", type: "select", options: ["adults", "children", "dogs"], suffix: "  participate in Oregon's recycling program." },
      { name: "forest", prefix: "Oregon has many ", type: "select", options: ["new", "aged", "rainbow"], suffix: " forests." },
      { name: "trees", prefix: "Oregon has many ", type: "select", options: ["cute", "large", "speedy"], suffix: " natural geographical features." },
    ],
    render(v) {
      return (
        "<p>Oregon is bordered on three sides by Washington, Idaho, Nevada and California. The very <b>" + v.trees + "</b> Pacific Ocean borders " +
        "Oregon on the west side of the state. The Columbia River is 7 miles wide where it empties into the Pacific Ocean. It is so <b>" + v.trees + "</b>, " +
        "in fact, that <b>" + v.trees + "</b> oceangoing ships can travel up the river for 200 miles. The <b>" + v.trees + "</b> Crater Lake is the deepest " +
        "lake in the United States. It's located in an extinct volcano, Mount Mazama.</p><hr>" +
        "<p>In 1971 Oregon became the first state to require that beverage cans and bottles be returnable. Now all of Oregon's <b>" + v.recycle + "</b> " +
        "participate in the recycling program.</p><hr>" +
        "<p>In a process called clear-cutting, many of Oregon's <b>" + v.forest + "</b> forests have disappeared. Many <b>" + v.forest + "</b> trees were " +
        "between 200 and 1,200 years old. Many animals and birds are endangered by the removal of these trees. Oregon is now requiring smarter ways " +
        "to remove trees. In the future Oregon hopes to have many <b>" + v.forest + "</b> forests again.</p>"
      );
    },
  },

  wi: {
    name: "Wisconsin",
    stateNum: 49,
    map: "b_wi_map.gif",
    line: "bead-line.gif",
    titleColor: "#00bb01",
    fields: [
      { name: "name", prefix: "Please type in your first name: ", type: "text" },
      { name: "favorite", prefix: "What is one of your least favorite foods ", type: "select", options: ["peas", "beets", "cucumbers"], suffix: "" },
      { name: "native", prefix: "Which Native Wisconsin tribe would you like to include in your Tale? ", type: "select", options: ["Winnebago", "Dakota", "Menominee"], suffix: "" },
    ],
    render(v) {
      const name = v.name || "you";
      return (
        "<p>When <b>" + name + "</b> and other children visit Wisconsin, they can learn all about the glaciers that once covered most of the state. " +
        "Because of the glaciers, most of Wisconsin is flat and has very fertile soil. Many crops like <b>" + v.favorite + "</b>, corn, and cranberries " +
        "are grown on these lands today. But Wisconsin is most famous for its dairy farming. Wisconsin produces more milk and dairy products than " +
        "any other state.</p><hr>" +
        "<p>The very first people to live in Wisconsin were the Native Indians. Tribes like the <b>" + v.native + "</b>, Fox, Sauk, and Kickapoo " +
        "settled in Wisconsin after the Ice Age. Some Native Americans built large burial mounds shaped like animals. When Europeans first came to " +
        "Wisconsin, they were friends with the Native people and traded furs and other goods with them. Today, most Native Americans live on " +
        "reservations.</p><hr>" +
        "<p>Many famous individuals were born in Wisconsin. One name that <b>" + name + "</b> might be familiar with is Oshkosh, a famous Menominee " +
        "Indian leader who successfully kept his tribal lands. There is a city named after him, Oshkosh. Have you heard of Oshkosh clothes for kids? " +
        "<b>" + name + "</b> might have read some books, or seen a television show about another famous Wisconsinite, Laura Ingalls Wilder, who was " +
        "born in Pepin, Wisconsin. She wrote the <i>Little House on the Prairie</i> books, which later became a television series.</p>"
      );
    },
  },
};
