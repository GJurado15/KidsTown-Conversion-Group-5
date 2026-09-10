// Farm Field-Trip encyclopedia, ported from scripts/school/FarmTown2-*.pl
// (animals) and FarmTown4-*.pl (crops). Rendered by detail.html?type=&id=.
const ANIMALS = {
  cows: {
    label: "Cows",
    title: "Cows",
    html:
      "<p>Cows produce milk. They are milked two to three times a day by the farmer.</p>" +
      '<p><img src="ABY50289.jpg" width="290" height="289" alt=""></p>' +
      "<p>A baby cow is called a calf. Grown-ups are called heifers and bulls.</p>" +
      '<p>Milk is used in making cheese, butter and ice cream.<br>' +
      'Cows eat the <a href="detail.html?type=crops&id=hay">hay</a> and ' +
      '<a href="detail.html?type=crops&id=corn">corn</a> that grow in the fields.</p>',
  },
  pigs: {
    label: "Pigs",
    title: "Pigs",
    html:
      '<p>Pigs like to play in the mud. That\'s why they always seem to be dirty.<br>' +
      "On Zeek's farm, pigs live in this <b>pig pen</b>.</p>" +
      '<p><img src="ACC50134.jpg" width="446" height="276" alt=""></p>' +
      "<p>Baby pigs are called piglets.<br>Grown-ups are called sows and boars.<br>" +
      "Pigs' noses are called snouts.<br>They use their snouts to dig up roots and grubs in the ground to eat.</p>" +
      "<p>Pigs like to eat a lot and will eat almost anything.<br>When pigs eat, they really <i>pig out!</i></p>",
  },
  horses: {
    label: "Horses",
    title: "Horses",
    html:
      "<p>Horses help with many of the jobs on the farm.<br>" +
      "Before farmers had tractors to help with planting and harvesting,<br>" +
      "horses were used to pull plows and other farm equipment.<br>" +
      "Horses still help farmers by pulling wagons and buggies.</p>" +
      '<p><img src="ACB50144.jpg" width="346" height="346" alt=""></p>' +
      "<p>Baby horses are called colts.<br>Grown-ups are called mares and stallions.<br>" +
      "Zebras and donkeys are cousins of horses.</p>" +
      "<p>Farmers sometimes ride horses as they care for other animals<br>" +
      "by not letting them wander too far away.<br><br>Horses also like to play and <i>horse around!</i></p>",
  },
  sheep: {
    label: "Sheep",
    title: "Sheep",
    html:
      "<p>Sheep have a thick coat of wool that we call <b>fleece</b>.<br>" +
      "The fleece is sheared off, cleaned, spun, and made into clothes and blankets.</p>" +
      '<p><img src="ACE50059.jpg" width="345" height="237" alt=""></p>' +
      "<p>Baby sheep are called lambs. Grown-ups are called ewes and rams.</p>" +
      "<p>Sheep live together in groups called <b>flocks</b>.<br>They eat grass that grows in the fields.<br>" +
      '<a href="detail.html?type=animals&id=dogs">Dogs</a> sometimes help farmers <b>herd</b> the sheep, keeping them together and out of danger.</p>',
  },
  chickens: {
    label: "Chickens",
    title: "Chickens",
    html:
      "<p>On Zeek's farm, chickens live in a <b>chicken coop</b>.<br>" +
      "This is where the chickens will lay eggs.<br>" +
      "Chickens eat insects and grain by pecking at them on the ground.</p>" +
      '<p><img src="ABX50047.jpg" width="445" height="283" alt=""></p>' +
      "<p>Baby chickens are called chicks. Grown-ups are called hens and roosters.<br>" +
      "Roosters wake up farmers in the morning by crowing to announce the beginning of a new day.</p>" +
      "<p>Chickens lay eggs that are gathered and used for food.<br>Chicken feathers are used to make pillows.</p>",
  },
  dogs: {
    label: "Dogs",
    title: "Dogs",
    html:
      "<p>Dogs help on the farm by rounding up the other animals<br>" +
      "so that they can find their way home.<br>" +
      "They can also go get help if someone is in trouble.</p>" +
      '<p><img src="ACU50036.jpg" width="446" height="255" alt=""></p>' +
      "<p>Baby dogs are called puppies.</p>" +
      "<p>Dogs are known as the farmer's best friend.<br>" +
      "They protect farmers and their families by barking to warn of danger.<br><br>" +
      "Many dogs like to play fetch by chasing after sticks and bringing them back.</p>",
  },
  cats: {
    label: "Cats",
    title: "Cats",
    html:
      "<p>Cats like to chase and play with each other around the farm.<br>" +
      "They also chase small rodents like mice.<br>" +
      "On Zeek's farm, cats can usually be found playing in the barn.</p>" +
      '<p><img src="ACT50369.jpg" width="348" height="216" alt=""></p>' +
      "<p>Baby cats are called kittens.<br>" +
      'Zeek\'s cats like to drink the milk from his <a href="detail.html?type=animals&id=cows">cows</a>.<br>' +
      "They mostly like to nap and cuddle.</p>" +
      '<p>Cats like to play with balls of yarn made using the wool from <a href="detail.html?type=animals&id=sheep">sheep</a>.<br>' +
      "Zeek's cats also like to climb trees.</p>",
  },
};

const CROPS = {
  corn: {
    label: "Corn",
    title: "Corn",
    html:
      '<table><tr><td>' +
      "<p>Some farmers plant corn in their fields.<br><br>" +
      "Corn plants grow tall and have many, long, deep green leaves.<br><br>" +
      "The top of the corn plant is called a <b>tassel</b>.<br><br>" +
      "Each corn plant may have several ears of corn growing on it.<br><br>" +
      "Farmers can use a machine called a <b>combine</b> to pick the corn.</p>" +
      '</td><td><img src="SSGP1195.jpg" width="284" height="380" alt=""></td></tr></table>' +
      "<p>There are many different types of corn plants.<br>" +
      "Some corn is called Indian Corn and has kernels with several different colors.<br>" +
      "The corn mostly found in supermarkets is called sweet corn.<br>" +
      "The corn called popcorn has kernels that pop when heated.</p>",
  },
  hay: {
    label: "Hay",
    title: "Hay",
    html:
      '<table><tr><td>' +
      '<p><a href="detail.html?type=animals&id=cows">Cows</a> and ' +
      '<a href="detail.html?type=animals&id=horses">horses</a> eat hay.<br><br>' +
      "Hay is tall grass that is grown and dried in the Summer.<br><br>" +
      "Farmers bale the hay to make it easier to store it in their barns.<br><br>" +
      "Stored hay will be used to feed the animals during Winter.<br><br>" +
      "Bales of hay can be either round or square-shaped.</p>" +
      '</td><td><img src="SSGP1724.jpg" width="300" height="280" alt=""></td></tr></table>' +
      "<p>After Zeek puts the hay into his barn, he likes to lie on it and take a nap!</p>",
  },
  wheat: {
    label: "Wheat",
    title: "Wheat",
    html:
      '<table><tr><td>' +
      "<p>Some farmers grow wheat in their fields.<br><br>" +
      "Wheat that is planted in the Fall is called <b>Winter Wheat</b> because it grows during the Winter.<br><br>" +
      "This wheat is harvested in the Spring.<br><br>" +
      "Farmers can then use the same fields to plant other crops such as corn or hay.</p>" +
      '</td><td><img src="B41327.jpg" width="400" height="300" alt=""></td></tr></table>' +
      "<p>Wheat is used to make flour. Flour can then be used to make cereal and bread.</p>",
  },
  pumpkins: {
    label: "Pumpkins",
    title: "Pumpkins",
    html:
      '<table><tr><td>' +
      "<p>Here are pumpkins in one of Zeek's fields.<br><br>" +
      "Pumpkins can be used to feed the animals.<br><br>" +
      "You can also make delicious pies out of them.<br><br>" +
      'Pumpkin pies can be served with whipped cream made from the milk of ' +
      '<a href="detail.html?type=animals&id=cows">cows</a>.</p>' +
      '</td><td><img src="671700.jpg" width="320" height="240" alt=""></td></tr></table>' +
      "<p>Zeek likes to grow pumpkins because they can be carved into Jack-O-Lanterns for Halloween.</p>",
  },
  apples: {
    label: "Apples",
    title: "Apples",
    html:
      '<table><tr><td>' +
      "<p>Here are apples growing in one of the orchards.<br><br>" +
      "Zeek will sometimes just pick an apple right off the tree and eat it.<br><br>" +
      "He has to be careful when he does that, because some worms like to eat apples too!</p>" +
      '</td><td><img src="B41300.jpg" width="400" height="300" alt=""></td></tr></table>' +
      "<p>Zeek likes to grow apples because he can make apple pies and caramel apples.</p>",
  },
  oranges: {
    label: "Oranges",
    title: "Oranges",
    html:
      '<table><tr><td>' +
      "<p>These oranges grow in one of the orchards.<br><br>" +
      "Oranges are squeezed to make orange juice.<br><br>" +
      "You can peel off the outer part of the orange, called the <b>rind</b>, and eat the sweet and juicy inner segments.</p>" +
      '</td><td><img src="B9451.jpg" width="320" height="240" alt=""></td></tr></table>' +
      "<p>Zeek likes to grow oranges because he can eat them for snacks.<br>Oranges also contain Vitamin C that helps people to stay healthy.</p>",
  },
  grapes: {
    label: "Grapes",
    title: "Grapes",
    html:
      '<table><tr><td>' +
      "<p>Grapes grow on vines in a vineyard.<br><br>" +
      "Grapes come in different colors like purple, red and green.<br><br>" +
      "They are squeezed to make grape juice or can be eaten as a snack.<br><br>" +
      "If the grapes are picked and left in the Sun to dry out, they become raisins.<br><br>" +
      "Raisins are used for snacks and to put on breakfast cereal.</p>" +
      '</td><td><img src="SSGP1004.jpg" width="284" height="380" alt=""></td></tr></table>' +
      "<p>Zeek also uses his grapes to make grape jelly.</p>",
  },
};
