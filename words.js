const adjectives = [
  "Adorable",
  "Adventurous",
  "Aggressive",
  "Agreeable",
  "Alert",
  "Alive",
  "Amused",
  "Angry",
  "Annoyed",
  "Annoying",
  "Anxious",
  "Arrogant",
  "Ashamed",
  "Attractive",
  "Average",
  "Awful",
  "Bad",
  "Beautiful",
  "Better",
  "Bewildered",
  "Black",
  "Bloody",
  "Blue",
  "Blushing",
  "Bored",
  "Brainy",
  "Brave",
  "Breakable",
  "Bright",
  "Busy",
  "Calm",
  "Careful",
  "Cautious",
  "Charming",
  "Cheerful",
  "Clean",
  "Clear",
  "Clever",
  "Cloudy",
  "Clumsy",
  "Colorful",
  "Combative",
  "Comfortable",
  "Concerned",
  "Condemned",
  "Confused",
  "Cooperative",
  "Courageous",
  "Crazy",
  "Creepy",
  "Crowded",
  "Cruel",
  "Curious",
  "Cute",
  "Dangerous",
  "Dark",
  "Dead",
  "Defeated",
  "Defiant",
  "Delightful",
  "Depressed",
  "Determined",
  "Different",
  "Difficult",
  "Disgusted",
  "Distinct",
  "Disturbed",
  "Dizzy",
  "Doubtful",
  "Drab",
  "Dull",
  "Eager",
  "Easy",
  "Elated",
  "Elegant",
  "Embarrassed",
  "Enchanting",
  "Encouraging",
  "Energetic",
  "Enthusiastic",
  "Envious",
  "Evil",
  "Excited",
  "Expensive",
  "Exuberant",
  "Fair",
  "Faithful",
  "Famous",
  "Fancy",
  "Fantastic",
  "Fierce",
  "Filthy",
  "Fine",
  "Foolish",
  "Fragile",
  "Frail",
  "Frantic",
  "Friendly",
  "Frightened",
  "Funny",
  "Gentle",
  "Gifted",
  "Glamorous",
  "Gleaming",
  "Glorious",
  "Good",
  "Gorgeous",
  "Graceful",
  "Grieving",
  "Grotesque",
  "Grumpy",
  "Handsome",
  "Happy",
  "Healthy",
  "Helpful",
  "Helpless",
  "Hilarious",
  "Homeless",
  "Homely",
  "Horrible",
  "Hungry",
  "Hurt",
  "Ill",
  "Important",
  "Impossible",
  "Inexpensive",
  "Innocent",
  "Inquisitive",
  "Itchy",
  "Jealous",
  "Jittery",
  "Jolly",
  "Joyos",
  "Kind",
  "Lazy",
  "Light",
  "Lively",
  "Lonely",
  "Long",
  "Lovely",
  "Lucky",
  "Magnificent",
  "Misty",
  "Modern",
  "Motionless",
  "Muddy",
  "Mushy",
  "Mysterious",
  "Nasty",
  "Naughty",
  "Nervous",
  "Nice",
  "Nutty",
  "Obedient",
  "Obnoxious",
  "Odd",
  "Open",
  "Outrageous",
  "Outstanding",
  "Panicky",
  "Perfect",
  "Plain",
  "Pleasant",
  "Poised",
  "Poor",
  "Powerful",
  "Precious",
  "Prickly",
  "Proud",
  "Putrid",
  "Puzzled",
  "Quaint",
  "Real",
  "Relieved",
  "Repulsive",
  "Rich",
  "Scary",
  "Selfish",
  "Shiny",
  "Shy",
  "Silly",
  "Sleepy",
  "Smiling",
  "Smoggy",
  "Sore",
  "Sparkling",
  "Splendid",
  "Spotless",
  "Stormy",
  "Strange",
  "Stupid",
  "Successful",
  "Super",
  "Talented",
  "Tame",
  "Tasty",
  "Tender",
  "Tense",
  "Terrible",
  "Thankful",
  "Thoughtful",
  "Thoughtless",
  "Tired",
  "Tough",
  "Troubled",
  "Ugliest",
  "Ugly",
  "Uninterested",
  "Unsightly",
  "Unusual",
  "Upset",
  "Uptight",
  "Vast",
  "Victorious",
  "Vivacious",
  "Wandering",
  "Weary",
  "Wicked",
  "Wild",
  "Witty",
  "Worried",
  "Worrisome",
  "Wrong",
  "Zany",
  "Zealous"
]

const nouns = [
  "Actor",
  "Gold",
  "Painting",
  "Advertisement",
  "Grass",
  "Parrot",
  "Afternoon",
  "Greece",	
  "Pencil",
  "Airport",
  "Guitar",	
  "Piano",
  "Ambulance",
  "Hair",	
  "Pillow",
  "Animal",	
  "Hamburger",
  "Pizza",
  "Answer",	
  "Helicopter",	
  "Planet",
  "Apple",
  "Helmet",
  "Plastic",
  "Army",
  "Holiday",
  "Honey",
  "Potato",
  "Balloon",	
  "Horse",
  "Queen",
  "Banana",	
  "Hospital",
  "Quill",
  "Battery",
  "House",
  "Rain",
  "Beach",	
  "Hydrogen",
  "Rainbow",
  "Beard",
  "Ice",	
  "Raincoat",
  "Bed",	
  "Insect",	
  "Refrigerator",
  "Insurance",
  "Restaurant",
  "Iron",
  "River",
  "Branch",	
  "Island",	
  "Rocket",
  "Breakfast",
  "Jackal",	
  "Room",
  "Brother",
  "Jelly",
  "Rose",
  "Camera",	
  "Jewellery",
  "Candle",	
  "Sandwich",
  "Car",	
  "Juice",	
  "School",
  "Caravan",	
  "Kangaroo",	
  "Scooter",
  "Carpet",	
  "King",	
  "Shampoo",
  "Cartoon",
  "Kitchen",
  "Shoe",	
  "Kite",	
  "Soccer",
  "Church",	
  "Knife",	
  "Spoon",
  "Crayon",	
  "Lamp",	
  "Stone",
  "Crowd",
  "Lawyer",	
  "Sugar",
  "Leather",	
  "Sweden",
  "Death",
  "Library",
  "Teacher",
  "Lighter",	
  "Telephone",
  "Diamond",
  "Lion",	
  "Television",
  "Dinner",	
  "Lizard",	
  "Tent",
  "Disease",
  "Lock",
  "Doctor",	
  "Tomato",
  "Dog",	
  "Lunch",	
  "Toothbrush",
  "Dream",	
  "Machine",	
  "Traffic",
  "Dress",	
  "Magazine",	
  "Train",
  "Easter",	
  "Magician",	
  "Truck",
  "Egg",
  "Eggplant",	
  "Market",	
  "Umbrella",	
  "Match",	
  "Van",
  "Elephant",	
  "Microphone",	
  "Vase",
  "Energy",	
  "Monkey",	
  "Vegetable",
  "Engine",	
  "Morning",	
  "Vulture",
  "Motorcycle",
  "Wall",
  "Evening",
  "Nail",
  "Whale",
  "Eye",
  "Napkin",
  "Window",
  "Family",
  "Needle",
  "Wire",
  "Finland",
  "Nest",
  "Xylophone",
  "Fish",
  "Nigeria",
  "Yacht",
  "Flag",
  "Night",
  "Yak",
  "Flower",
  "Notebook",
  "Zebra",
  "Football",
  "Ocean",
  "Zoo",
  "Forest",
  "Oil",
  "Garden",
  "Fountain",
  "Orange",
  "Gas",
  "France",
  "Oxygen",
  "Girl",
  "Furniture",
  "Oyster",
  "Glass",
  "Garage",
  "Ghost",
]

const generateGamertag = (num) => {
  if (!num){
    num = 1;
  };
  for (let i = 0; i < num; i++) {
    let adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    let noun = nouns[Math.floor(Math.random() * nouns.length)];
    console.log(`${adj}${noun}`)
  };
};

generateGamertag(1000);