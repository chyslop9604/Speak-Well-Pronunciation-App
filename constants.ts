
import { Story } from './types';

export const STORIES: Story[] = [
  {
    id: 'pete-white-shoes',
    title: "Pete: I Love My White Shoes",
    description: "피트와 함께 빨강, 파랑, 갈색으로 변하는 하얀 운동화 이야기를 노래해요!",
    coverEmoji: "👟",
    segments: [
      { id: 'ws1', text: "Pete the Cat was walking down the street in his brand-new white shoes.", illustration: "🐱👟✨", context: "Start", trickyWords: [{ word: "Walking", guide: "l 소리가 나지 않게 '워킹'!" }, { word: "Street", guide: "str 발음을 '스트-뤼트'!" }] },
      { id: 'ws2', text: "Pete stepped in a large pile of strawberries! It turned his shoes red.", illustration: "🍓👟🔴", context: "Red", trickyWords: [{ word: "Stepped", guide: "p 소리를 가볍게 '스텝트'!" }, { word: "Strawberries", guide: "'스트뤄-베리즈'라고 천천히!" }] },
      { id: 'ws3', text: "Pete stepped in a large pile of blueberries! It turned his shoes blue.", illustration: "🫐👟🔵", context: "Blue", trickyWords: [{ word: "Blueberries", guide: "blue와 berries를 자연스럽게 이어보세요." }] },
      { id: 'ws4', text: "Did Pete cry? Goodness no! He kept on walking and singing his song.", illustration: "🎸🐱", context: "Moral", trickyWords: [{ word: "Cry", guide: "r 발음을 굴리며 '크롸이'!" }] }
    ]
  },
  {
    id: 'pete-groovy-buttons',
    title: "Pete: Four Groovy Buttons",
    description: "멋진 단추를 하나씩 잃어버려도 피트는 울지 않아요. 숫자를 세어봐요!",
    coverEmoji: "🔘",
    segments: [
      { id: 'gb1', text: "Pete put on his favorite shirt with four big, colorful, round, groovy buttons.", illustration: "🐱👕🟡", context: "Intro", trickyWords: [{ word: "Favorite", guide: "'페이보릿' 이라고 읽어요." }, { word: "Groovy", guide: "v 소리를 살려 '그루-비'!" }] },
      { id: 'gb2', text: "Pop! Oh no! One of the buttons popped off and rolled away. How many are left?", illustration: "🔘💨", context: "Action", trickyWords: [{ word: "Popped", guide: "p 소리를 톡톡 터뜨려요." }, { word: "Rolled", guide: "r 소리를 굴려보세요." }] },
      { id: 'gb3', text: "Three! Did Pete cry? Goodness no! Buttons come and buttons go.", illustration: "3️⃣🐱😎", context: "Moral", trickyWords: [{ word: "Three", guide: "th 발음을 위해 혀를 살짝 내미세요." }] },
      { id: 'gb4', text: "I'm down to my belly button! It's all good!", illustration: "🐱🔘✨", context: "Final Button", trickyWords: [{ word: "Belly", guide: "L 발음을 선명하게 '벨-리'." }] }
    ]
  },
  {
    id: 'pete-school-shoes',
    title: "Pete: Rocking in My School Shoes",
    description: "피트가 학교의 여기저기를 탐험해요. 신나는 락앤롤 리듬으로 연습해요!",
    coverEmoji: "🎸",
    segments: [
      { id: 'ss1', text: "Here comes Pete strolling down the street in his brand-new school shoes.", illustration: "🐱🎒👟", context: "School", trickyWords: [{ word: "Strolling", guide: "'스트뤌-링'이라고 굴려보세요." }] },
      { id: 'ss2', text: "Pete is at his desk. Is he worried? Goodness no!", illustration: "📖🐱🪑", context: "Desk", trickyWords: [{ word: "Worried", guide: "w 소리를 위해 입을 동그랗게 모으세요." }] },
      { id: 'ss3', text: "He's rocking in his school shoes! I'm rocking in my school shoes!", illustration: "🎸🔥", context: "Rocking", trickyWords: [{ word: "Rocking", guide: "r 발음이 중요해요!" }] },
      { id: 'ss4', text: "Pete is in the library. He is reading a groovy book.", illustration: "📚🐱", context: "Library", trickyWords: [{ word: "Library", guide: "'라이-브러리'라고 천천히 읽어요." }] }
    ]
  },
  {
    id: 'pete-magic-sunglasses',
    title: "Pete: Magic Sunglasses",
    description: "마법 선글라스를 끼면 세상이 어떻게 보일까요? 기분을 날려버려요!",
    coverEmoji: "😎",
    segments: [
      { id: 'ms1', text: "Pete the Cat woke up feeling blue. He had never been blue before.", illustration: "🐱😔", context: "Sad", trickyWords: [{ word: "Feeling", guide: "f와 l 소리를 주의하며 '필-링'." }] },
      { id: 'ms2', text: "Toad gave Pete some magic, cool, blue, sunglasses.", illustration: "🐸🕶️", context: "Gift", trickyWords: [{ word: "Sunglasses", guide: "s 소리를 시원하게 내보세요." }] },
      { id: 'ms3', text: "The birds are singing. The sky is bright. The sun is shining!", illustration: "🐦☀️", context: "Happy", trickyWords: [{ word: "Bright", guide: "'브롸이트'!" }, { word: "Shining", guide: "'샤이닝'!" }] },
      { id: 'ms4', text: "I'm feeling all right! Life is groovy with these cool glasses.", illustration: "🐱😎🌈", context: "Ending", trickyWords: [{ word: "Groovy", guide: "V 소리를 꼭 챙겨주세요." }] }
    ]
  },
  {
    id: 'pete-at-the-beach',
    title: "Pete the Cat: At the Beach",
    description: "피트와 함께 시원한 바다로 떠나요! 파도를 타는 법을 배워볼까요?",
    coverEmoji: "🏖️",
    segments: [
      { id: 'beach1', text: "It is a hot day. Pete the Cat goes to the beach with his family.", illustration: "☀️🏖️🐱", context: "Arrival", trickyWords: [{ word: "Beach", guide: "EA를 길게 '비-치'라고 해요." }] },
      { id: 'beach2', text: "The sand is hot. Pete's feet are hot. He needs to go into the water.", illustration: "🏝️🦶🔥", context: "Hot Sand", trickyWords: [{ word: "Sand", guide: "D 소리를 살짝 들려주세요." }] },
      { id: 'beach3', text: "The water is cool. Pete wants to surf. He catches a big wave!", illustration: "🏄‍♂️🌊", context: "Surfing", trickyWords: [{ word: "Surf", guide: "R과 F 발음을 연결해 '서-ㄹ프'!" }] },
      { id: 'beach4', text: "Surfing is groovy! Pete loves the ocean.", illustration: "🤙🌊🐱", context: "Happy Cat", trickyWords: [{ word: "Ocean", guide: "O를 길게 '오우-션'." }] }
    ]
  },
  {
    id: 'pete-big-lunch',
    title: "Pete's Big Lunch",
    description: "피트가 아주 거대한 샌드위치를 만들어요. 어떤 재료가 들어갈까요?",
    coverEmoji: "🥪",
    segments: [
      { id: 'lunch1', text: "Pete is hungry. He makes a big sandwich with fish and mayo.", illustration: "🥪🐟", context: "Making", trickyWords: [{ word: "Hungry", guide: "H 소리를 깊게 '헝-그리'!" }] },
      { id: 'lunch2', text: "He adds an apple, a cracker, and even a hot dog!", illustration: "🍎🌭", context: "Adding", trickyWords: [{ word: "Cracker", guide: "CK 소리를 강하게 '크래커'." }] },
      { id: 'lunch3', text: "It is too big for Pete! He calls his friends to help him eat.", illustration: "🐱🐶🐭", context: "Sharing", trickyWords: [{ word: "Friends", guide: "ds 발음을 합쳐 '프렌즈'." }] },
      { id: 'lunch4', text: "Pete's sandwich is big, but sharing with friends is better.", illustration: "🥪❤️", context: "Ending", trickyWords: [{ word: "Better", guide: "T를 부드럽게 '베러'." }] }
    ]
  },
  {
    id: 'pete-play-ball',
    title: "Pete the Cat: Play Ball!",
    description: "피트가 야구 경기를 해요. 공을 치지 못해도 피트는 즐거워요!",
    coverEmoji: "⚾",
    segments: [
      { id: 'ball1', text: "Pete has a mitt. Pete has a bat. It is time to play ball!", illustration: "⚾🐱", context: "Ready", trickyWords: [{ word: "Mitt", guide: "T를 짧고 강하게 '미트'!" }] },
      { id: 'ball2', text: "Pete is at bat. He swings and misses. Strike one!", illustration: "⚾❌", context: "Batting", trickyWords: [{ word: "Swings", guide: "SW 소리를 '스윙즈'." }] },
      { id: 'ball3', text: "He strikes out, but he is not sad. Pete had fun playing the game.", illustration: "❌😊", context: "Game Over", trickyWords: [{ word: "Strikes", guide: "str 발음을 주의하세요." }] },
      { id: 'ball4', text: "Winning is cool, but playing with friends is even cooler.", illustration: "🏆🐱", context: "Ending", trickyWords: [{ word: "Winning", guide: "W를 동그랗게 '위닝'." }] }
    ]
  },
  {
    id: 'pete-pet',
    title: "A Pet for Pete",
    description: "피트가 금붕어를 입양했어요. 물고기 친구의 이름은 무엇일까요?",
    coverEmoji: "🐠",
    segments: [
      { id: 'pet1', text: "Pete goes to the pet store. He wants a pet. He gets a goldfish.", illustration: "🏪🐠", context: "Store", trickyWords: [{ word: "Goldfish", guide: "L과 F를 이어서 '골드-피쉬'." }] },
      { id: 'pet2', text: "Goldie is a good fish. She swims in her bowl.", illustration: "🐠🫧", context: "Home", trickyWords: [{ word: "Swims", guide: "W 발음을 살려 '스윔즈'." }] },
      { id: 'pet3', text: "Pete paints a picture of Goldie. It is a masterpiece!", illustration: "🎨🐱", context: "Art", trickyWords: [{ word: "Masterpiece", guide: "'마스터-피스'!" }] },
      { id: 'pet4', text: "Everyone loves Goldie. Pete is a happy cat with a happy fish.", illustration: "🐠❤️🐱", context: "Ending", trickyWords: [{ word: "Happy", guide: "H 소리를 하- 하고 내뱉으세요." }] }
    ]
  },
  {
    id: 'pete-train-trip',
    title: "Pete's Train Trip",
    description: "칙칙폭폭 기차 여행! 피트가 할머니 댁으로 기차를 타고 가요.",
    coverEmoji: "🚂",
    segments: [
      { id: 'train1', text: "Pete is going on a train trip. He sees the conductor and the tracks.", illustration: "🚂🎫", context: "Boarding", trickyWords: [{ word: "Conductor", guide: "C 소리를 강하게 '컨덕터'." }] },
      { id: 'train2', text: "The train goes fast. Choo-choo! Pete loves the ride.", illustration: "💨🚄", context: "Moving", trickyWords: [{ word: "Choo-choo", guide: "CH 소리를 '츄-츄'!" }] },
      { id: 'train3', text: "Pete looks out the window. He sees mountains and trees.", illustration: "⛰️🌲", context: "View", trickyWords: [{ word: "Mountains", guide: "'마운-튼즈'라고 읽어요." }] },
      { id: 'train4', text: "Pete is at Grandma's house. What a groovy train trip!", illustration: "👵🐱", context: "Arrival", trickyWords: [{ word: "Grandma", guide: "d 소리를 작게 '그랜-마'." }] }
    ]
  },
  {
    id: 'pete-scuba-cat',
    title: "Pete the Cat: Scuba-Cat",
    description: "물속 깊이 잠수해볼까요? 아름다운 바닷속 친구들을 만나요.",
    coverEmoji: "🤿",
    segments: [
      { id: 'scuba1', text: "Pete goes scuba diving. He sees an octopus and a shark.", illustration: "🤿🐙🦈", context: "Diving", trickyWords: [{ word: "Scuba", guide: "U를 길게 '스쿠-바'." }, { word: "Octopus", guide: "'옥토-퍼스'!" }] },
      { id: 'scuba2', text: "The ocean is full of treasure. Look at all the colorful fish!", illustration: "💎🐠", context: "Treasure", trickyWords: [{ word: "Treasure", guide: "S가 J 소리처럼 '트레져'." }] },
      { id: 'scuba3', text: "Pete finds a seahorse. It is very tiny and cool.", illustration: "🐎🌊", context: "Seahorse", trickyWords: [{ word: "Seahorse", guide: "H 소리를 챙겨서 '씨-호스'." }] },
      { id: 'scuba4', text: "Pete is the coolest scuba-cat in the whole ocean.", illustration: "🐱🤿✨", context: "Ending", trickyWords: [{ word: "Whole", guide: "W는 묵음이에요! '홀'이라고 읽으세요." }] }
    ]
  },
  {
    id: 'pete-brave',
    title: "Sir Pete the Brave",
    description: "용감한 기사 피트! 성을 지키기 위해 모험을 떠나요.",
    coverEmoji: "🛡️",
    segments: [
      { id: 'brave1', text: "Sir Pete is a brave knight. He has a sword and a shield.", illustration: "🛡️🗡️", context: "Knight", trickyWords: [{ word: "Knight", guide: "K는 묵음이에요! '나이트'라고 읽으세요." }] },
      { id: 'brave2', text: "He meets a dragon. The dragon is friendly and likes to sing.", illustration: "🐉🎶", context: "Dragon", trickyWords: [{ word: "Dragon", guide: "dr 발음을 '쥬뤠-건' 처럼 굴려보세요." }] },
      { id: 'brave3', text: "Sir Pete and the dragon play music together in the castle.", illustration: "🏰🎸", context: "Music", trickyWords: [{ word: "Castle", guide: "T는 묵음이에요! '캐-슬'." }] },
      { id: 'brave4', text: "He saves the day. Everyone cheers for Sir Pete!", illustration: "🙌🏰", context: "Victory", trickyWords: [{ word: "Cheers", guide: "EE를 길게 '치-어즈'." }] }
    ]
  },
  {
    id: 'pete-snow-daze',
    title: "Pete the Cat: Snow Daze",
    description: "눈이 펑펑 내려요! 학교가 쉬는 날, 피트는 무엇을 할까요?",
    coverEmoji: "❄️",
    segments: [
      { id: 'snow1', text: "It is a snow day! Pete puts on his hat and mittens.", illustration: "❄️🧶", context: "Winter", trickyWords: [{ word: "Mittens", guide: "T 소리를 끊어서 '미-튼즈'." }] },
      { id: 'snow2', text: "Pete builds a snowman. It is a very cool cat.", illustration: "☃️🐱", context: "Snowman", trickyWords: [{ word: "Builds", guide: "U는 소리 내지 않고 '빌즈'." }] },
      { id: 'snow3', text: "Pete goes sledding down a big hill. Fast and groovy!", illustration: "🛷❄️", context: "Sledding", trickyWords: [{ word: "Sledding", guide: "L과 D를 부드럽게 '슬레-딩'." }] },
      { id: 'snow4', text: "Snow days are the best days. Pete loves the winter!", illustration: "🐱❄️✨", context: "Ending", trickyWords: [{ word: "Winter", guide: "W를 동그랗게 '윈-터'." }] }
    ]
  },
  {
    id: 'pete-thanksgiving',
    title: "The First Thanksgiving",
    description: "피트와 함께 추수감사절의 의미를 되새겨보며 감사함을 배워요.",
    coverEmoji: "🦃",
    segments: [
      { id: 'tg1', text: "Pete is in a school play about the first Thanksgiving.", illustration: "🎭🦃", context: "Play", trickyWords: [{ word: "Thanksgiving", guide: "TH 발음을 잊지 마세요!" }] },
      { id: 'tg2', text: "The Pilgrims and Native Americans shared a big feast.", illustration: "🧺🍗", context: "History", trickyWords: [{ word: "Feast", guide: "EA를 길게 '피-스트'." }] },
      { id: 'tg3', text: "We are thankful for our family and friends.", illustration: "👨‍👩‍👧‍👦❤️", context: "Gratitude", trickyWords: [{ word: "Thankful", guide: "TH를 강하게 '땡-크풀'!" }] },
      { id: 'tg4', text: "Everyone eats together. It is a very happy day!", illustration: "🍽️🐱", context: "Ending", trickyWords: [{ word: "Together", guide: "TH 소리를 넣어 '투게-더'." }] }
    ]
  },
  {
    id: 'pete-valentines',
    title: "Valentine's Day Is Cool",
    description: "사랑이 넘치는 발렌타인 데이! 피트가 친구들에게 카드를 전해요.",
    coverEmoji: "💌",
    segments: [
      { id: 'val1', text: "Pete thinks Valentine's Day is cool. He makes cards for everyone.", illustration: "💌✂️", context: "Crafting", trickyWords: [{ word: "Valentine", guide: "V 발음을 살려 '발렌타인'!" }] },
      { id: 'val2', text: "He gives a card to Callie. He gives a card to Grumpy Toad.", illustration: "🐱🐸", context: "Giving", trickyWords: [{ word: "Grumpy", guide: "'그럼-피'라고 읽어요." }] },
      { id: 'val3', text: "Love is everywhere. It is a groovy day!", illustration: "💖🌈", context: "Love", trickyWords: [{ word: "Everywhere", guide: "'에브리-웨어'라고 부드럽게." }] },
      { id: 'val4', text: "Pete gets a card too! Kindness is the coolest.", illustration: "🐱💖✨", context: "Ending", trickyWords: [{ word: "Kindness", guide: "'카인드-니스'!" }] }
    ]
  },
  {
    id: 'pete-baking',
    title: "Pete's Big Baking Adventure",
    description: "피트가 달콤한 컵케이크를 구워요. 믹싱하고 굽는 소리를 들어볼까요?",
    coverEmoji: "🧁",
    segments: [
      { id: 'bake1', text: "Pete is baking cupcakes. He adds sugar and flour to the bowl.", illustration: "🧁🥣", context: "Baking", trickyWords: [{ word: "Flour", guide: "꽃(Flower)과 발음이 같아요!" }] },
      { id: 'bake2', text: "He mixes it all together. The batter looks groovy.", illustration: "🥣🥄", context: "Mixing", trickyWords: [{ word: "Batter", guide: "T 소리를 부드럽게 '배러'." }] },
      { id: 'bake3', text: "The oven is hot. The cupcakes smell so sweet!", illustration: "🔥🧁", context: "Smell", trickyWords: [{ word: "Oven", guide: "V 소리를 넣어 '어-븐'." }] },
      { id: 'bake4', text: "Yummy cupcakes for everyone! Pete is a great baker.", illustration: "😋🧁", context: "Ending", trickyWords: [{ word: "Great", guide: "GR을 굴려서 '그뤠이트'!" }] }
    ]
  },
  {
    id: 'pete-lost-tooth',
    title: "Pete and the Lost Tooth",
    description: "이빨 요정이 올까요? 피트의 빠진 이빨 이야기를 들어보세요.",
    coverEmoji: "🦷",
    segments: [
      { id: 'tooth1', text: "Pete lost a tooth. He puts it under his pillow.", illustration: "🦷🛏️", context: "Lost", trickyWords: [{ word: "Pillow", guide: "L 발음을 살려 '필-로우'." }] },
      { id: 'tooth2', text: "The Tooth Fairy comes. She leaves a special surprise.", illustration: "🧚‍♀️✨", context: "Fairy", trickyWords: [{ word: "Surprise", guide: "'서-프라이즈'라고 읽어요." }] },
      { id: 'tooth3', text: "Pete sees a shiny coin! Losing a tooth is groovy.", illustration: "🪙🐱", context: "Gift", trickyWords: [{ word: "Shiny", guide: "SH를 살려 '샤이니'." }] },
      { id: 'tooth4', text: "Keep smiling, Pete! Your new tooth will grow soon.", illustration: "😁✨", context: "Ending", trickyWords: [{ word: "Smiling", guide: "S와 M을 연결해 '스마일링'." }] }
    ]
  },
  {
    id: 'pete-surprise-party',
    title: "Pete's Surprise Party",
    description: "쉿! 피트가 깜짝 파티를 준비했어요. 누가 주인공일까요?",
    coverEmoji: "🎉",
    segments: [
      { id: 'party1', text: "Pete is planning a surprise party for his friend.", illustration: "🤫🎉", context: "Planning", trickyWords: [{ word: "Planning", guide: "P와 L을 연결해 '플래닝'." }] },
      { id: 'party2', text: "He invites Callie, Gus, and Grumpy Toad.", illustration: "✉️🐱🐸", context: "Inviting", trickyWords: [{ word: "Invites", guide: "V 소리를 넣어 '인바이츠'." }] },
      { id: 'party3', text: "Surprise! Everyone yells when the lights go on.", illustration: "💡🔥", context: "Celebration", trickyWords: [{ word: "Yells", guide: "Y 발음을 위해 '옐-즈'." }] },
      { id: 'party4', text: "Parties are groovy when you share them with friends.", illustration: "🥳🐱✨", context: "Ending", trickyWords: [{ word: "Share", guide: "SH 소리를 '쉐어'." }] }
    ]
  },
  {
    id: 'pete-supermarket',
    title: "Trip to the Supermarket",
    description: "피트와 함께 시장을 봐요. 리스트에 있는 물건들을 찾아볼까요?",
    coverEmoji: "🛒",
    segments: [
      { id: 'market1', text: "Pete goes to the supermarket. He has a long grocery list.", illustration: "🛒📄", context: "Shopping", trickyWords: [{ word: "Grocery", guide: "'그로우-서리'라고 발음해요." }] },
      { id: 'market2', text: "He buys apples, bananas, and a big carton of milk.", illustration: "🍎🍌🥛", context: "Items", trickyWords: [{ word: "Carton", guide: "T 소리를 강조해 '카-튼'." }] },
      { id: 'market3', text: "Pete finds some fish crackers. They are his favorite snack.", illustration: "🥨🐱", context: "Snack", trickyWords: [{ word: "Favorite", guide: "F 소리를 살려 '페이보릿'." }] },
      { id: 'market4', text: "The cart is full. Pete is ready to go home and eat.", illustration: "🛒🏡", context: "Ending", trickyWords: [{ word: "Ready", guide: "R 소리를 굴려 '레디'." }] }
    ]
  },
  {
    id: 'pete-camping',
    title: "Pete the Cat Goes Camping",
    description: "숲속에서 텐트를 치고 캠핑을 해요. 마시멜로를 구워 먹어요!",
    coverEmoji: "⛺",
    segments: [
      { id: 'camp1', text: "Pete goes camping in the woods. He sets up a big tent.", illustration: "⛺🌲", context: "Setup", trickyWords: [{ word: "Woods", guide: "W 발음을 동그랗게 '우-즈'." }] },
      { id: 'camp2', text: "He goes for a hike. He sees a bird and a squirrel.", illustration: "🥾🐿️", context: "Hiking", trickyWords: [{ word: "Squirrel", guide: "'스쿼-럴'이라고 천천히 발음해요." }] },
      { id: 'camp3', text: "He toasts marshmallows over the campfire. Yummy!", illustration: "🔥🍢", context: "Eating", trickyWords: [{ word: "Marshmallows", guide: "'마쉬-멜로우즈'!" }] },
      { id: 'camp4', text: "Sleeping under the stars is so groovy. Goodnight, Pete.", illustration: "🌙⭐", context: "Night", trickyWords: [{ word: "Stars", guide: "S와 T를 연결해 '스타-즈'." }] }
    ]
  },
  {
    id: 'pete-cavecat',
    title: "Cavecat Pete",
    description: "옛날 아주 먼 옛날, 원시인 피트가 살았어요. 공룡 친구를 만나요!",
    coverEmoji: "🦴",
    segments: [
      { id: 'cave1', text: "Cavecat Pete lives in a cave. He has a pet dinosaur.", illustration: "🦴🦕", context: "History", trickyWords: [{ word: "Dinosaur", guide: "'다이노-소어'라고 읽어요." }] },
      { id: 'cave2', text: "They go for a walk. The world is very big and green.", illustration: "🌿🦕", context: "Walk", trickyWords: [{ word: "World", guide: "R과 L 발음을 주의해 '워-ㄹ드'." }] },
      { id: 'cave3', text: "Pete plays music on a rock. It sounds like rock and roll!", illustration: "🎸🪨", context: "Music", trickyWords: [{ word: "Sounds", guide: "S 소리를 챙겨 '사운즈'." }] },
      { id: 'cave4', text: "Being a cavecat is groovy! Pete loves his dino friend.", illustration: "🐱🦕✨", context: "Ending", trickyWords: [{ word: "Friend", guide: "f 소리를 살려 '프렌드'." }] }
    ]
  },
  {
    id: 'pete-bad-banana',
    title: "Pete and the Bad Banana",
    description: "으악! 맛없는 바나나를 먹었어요. 피트는 이제 바나나를 싫어할까요?",
    coverEmoji: "🍌",
    segments: [
      { id: 'banana1', text: "Pete eats a bad banana. It tastes mushy and gross.", illustration: "🍌🤢", context: "Tasting", trickyWords: [{ word: "Mushy", guide: "SH 소리를 내며 '머-쉬'." }] },
      { id: 'banana2', text: "Pete says, 'I do not like bananas anymore!'", illustration: "🚫🍌", context: "Reaction", trickyWords: [{ word: "Anymore", guide: "'애니-모어'!" }] },
      { id: 'banana3', text: "Pete tries a new fruit. He likes apples much better.", illustration: "🍎👍", context: "Discovery", trickyWords: [{ word: "Better", guide: "T를 부드럽게 '베러'!" }] },
      { id: 'banana4', text: "One bad banana is okay. There are many other yummy fruits.", illustration: "🍉🍇🐱", context: "Ending", trickyWords: [{ word: "Other", guide: "TH 소리를 넣어 '아-더'." }] }
    ]
  },
  {
    id: 'pete-robo',
    title: "Pete the Cat: Robo-Pete",
    description: "피트가 로봇을 만들었어요. 로봇 피트가 대신 숙제를 해줄까요?",
    coverEmoji: "🤖",
    segments: [
      { id: 'robo1', text: "Pete builds a robot named Robo-Pete. It can do anything.", illustration: "🤖🛠️", context: "Build", trickyWords: [{ word: "Anything", guide: "TH 발음을 잊지 마세요." }] },
      { id: 'robo2', text: "The robot goes wild! It tries to paint the whole house.", illustration: "🎨💥", context: "Chaos", trickyWords: [{ word: "Wild", guide: "L 소리를 넣어 '와일드'." }] },
      { id: 'robo3', text: "Pete has to fix his metal friend. He turns it off.", illustration: "🔧🤖", context: "Repair", trickyWords: [{ word: "Metal", guide: "T를 부드럽게 '메-럴'." }] },
      { id: 'robo4', text: "Doing it yourself is more groovy than using a robot.", illustration: "🐱✨", context: "Ending", trickyWords: [{ word: "Yourself", guide: "F 소리를 살려 '유어-셀프'." }] }
    ]
  },
  {
    id: 'pete-construction',
    title: "Construction Destruction",
    description: "피트가 놀이터를 지어요. 뚝딱뚝딱 공사 현장 소리를 들어봐요!",
    coverEmoji: "🏗️",
    segments: [
      { id: 'construct1', text: "Pete is at the construction site. He sees the bulldozer.", illustration: "🏗️🚜", context: "Site", trickyWords: [{ word: "Bulldozer", guide: "'불-도우저'라고 발음해요." }] },
      { id: 'construct2', text: "He wears a hard hat. He helps build a big tower.", illustration: "🏗️👷", context: "Work", trickyWords: [{ word: "Tower", guide: "'타우-어'라고 읽어요." }] },
      { id: 'construct3', text: "They build a brand-new playground for all the kids.", illustration: "🎡🧒", context: "Done", trickyWords: [{ word: "Playground", guide: "'플레이-그라운드'." }] },
      { id: 'construct4', text: "Building things is groovy! Pete loves to help out.", illustration: "🔨🐱✨", context: "Ending", trickyWords: [{ word: "Building", guide: "U는 묵음! '빌딩'." }] }
    ]
  },
  {
    id: 'pete-new-guy',
    title: "Pete and the New Guy",
    description: "새로운 친구가 이사를 왔어요! 피트와 친구가 될 수 있을까요?",
    coverEmoji: "👋",
    segments: [
      { id: 'new1', text: "There is a new guy in town. His name is Barnaby.", illustration: "📦🏠", context: "Moving", trickyWords: [{ word: "Town", guide: "OW를 입을 크게 벌려 '타운'." }] },
      { id: 'new2', text: "He is a platypus. He looks a little different.", illustration: "🦆🏠", context: "Appearance", trickyWords: [{ word: "Platypus", guide: "'플래티-퍼스'라고 읽어요." }] },
      { id: 'new3', text: "Pete and Barnaby play together. They like the same music.", illustration: "🐱🦆🎸", context: "Friends", trickyWords: [{ word: "Together", guide: "TH 소리를 챙기세요." }] },
      { id: 'new4', text: "Different is cool! New friends are always groovy.", illustration: "👋🐱💖", context: "Ending", trickyWords: [{ word: "Always", guide: "L 소리를 넣어 '올-웨이즈'." }] }
    ]
  },
  {
    id: 'hungry-caterpillar',
    title: "The Very Hungry Caterpillar",
    description: "배고픈 애벌레와 함께 요일과 음식 이름을 배워보세요!",
    coverEmoji: "🐛",
    segments: [
      { id: 'hc1', text: "In the light of the moon, a little egg lay on a leaf.", illustration: "🌕🍃🥚", context: "The Egg", trickyWords: [{ word: "Light", guide: "L 발음을 윗니 안쪽에!" }, { word: "Leaf", guide: "F 발음을 시원하게!" }] },
      { id: 'hc2', text: "On Sunday morning, the warm sun came up and -pop!- out of the egg came a tiny and very hungry caterpillar.", illustration: "☀️🐛", context: "Birth", trickyWords: [{ word: "Hungry", guide: "H 소리를 깊게 '헝-그리'." }, { word: "Caterpillar", guide: "'캐터-필러'!" }] },
      { id: 'hc3', text: "On Monday he ate through one apple. But he was still hungry.", illustration: "🍎🐛", context: "Monday", trickyWords: [{ word: "Through", guide: "th 발음을 위해 혀를 내미세요." }] },
      { id: 'hc4', text: "On Tuesday he ate through two pears, but he was still hungry.", illustration: "🍐🍐🐛", context: "Tuesday", trickyWords: [{ word: "Tuesday", guide: "'튜-즈데이'!" }] },
      { id: 'hc5', text: "He built a small house, called a cocoon, around himself.", illustration: "🏠🐛", context: "The Cocoon", trickyWords: [{ word: "Cocoon", guide: "'커-쿤'이라고 발음해요." }] },
      { id: 'hc6', text: "He stayed inside for more than two weeks. Then he was a beautiful butterfly!", illustration: "🦋✨", context: "Butterfly", trickyWords: [{ word: "Beautiful", guide: "T를 부드럽게 '뷰리-풀'." }] }
    ]
  }
];

export const PETE_STORY = STORIES[0].segments;
