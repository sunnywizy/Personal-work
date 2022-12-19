//let numberOfseasons = 6;
//let numberOfEpisodes = 12;

//let totalCDs = 67;
//let totalVinls = 34;

//let totalMusic = totalCDs + totalVinls

//let cookiesInJar = 20;
//cookiesInJar += 12;
//let cookiesRemoved = 5;

//let cookiesLeftInJar = cookiesInJar * cookiesRemoved;

//let averageCostPerProduct = cookiesLeftInJar / cookiesRemoved;

//let episodeTime = 45;
//let commercialTime = 5;

//let totalShowTime = (episodeTime + commercialTime) * numberOfseasons * numberOfEpisodes

//let paragragh = document.querySelector("#info");
//paragragh.innerText = `${numberOfseasons} season, ${numberOfEpisodes}, episodes per season, the total veiwning time for this show ${totalShowTime} minutes`

//Learning how to use javascript object notation(JSON) in javascript
// ==============================================
let episodes = {
    title: "Dark Beginning",
    duration: 45,
    hasBeenWatched: false
  };
  
  let epsiodeTitle = episodes.title;
  let episodeDuration = episodes.duration;
  let episodeHasBeenWatched = episodes.hasBeenWatched;
  
  let episode = document.querySelector("#episode-info")
  episode.innerText = `Episode: ${epsiodeTitle}, Duration: ${episodeDuration} min, ${episodeHasBeenWatched ? 'Already watched': 'Not yet watched'}`;
  //  ================================================
  
  
  //Learning how to usines classes in Javascript
  //Classes is very useful because you can use it over and over again and also is good when creating something like account etc. And when working with class make sure that name of the class must start with capital letter.
  // ==============================================================
  class Book {
    constructor(title, author, pages){
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  }
  
  let myBook = new Book("The Story of Tau", "Obasi Sunday", 280);
  // =====================================================================
  
  class Episode {
    constructor(tilte, duration, hasBeenWatched) {
      this.title = tilte;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  
  firstEpisode = new Episode("The Story of Tau", 45, true);
  secondEpisode = new Episode("The Story of Tau", 60, false);
  thirdEpisode = new Episode("The Story of Tau", 45, false);
  
  document.querySelector("#first-episode-info").innerText = `Episode: ${firstEpisode
  .title} Duration: ${firstEpisode.duration} min ${firstEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;
  document.querySelector("#second-episode-info").innerText = `Episode: ${secondEpisode
  .title} Duration: ${secondEpisode.duration} min ${secondEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;
  document.querySelector("#third-episode-info").innerText = `Episode: ${thirdEpisode
  .title} Duration: ${thirdEpisode.duration} min ${thirdEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;
  // Note: OBJECTS: This key/value pars in JSON notation which allow you to stroe multiple pieces of related data in one variable. DOT NOTATION: This allow you to access and modify the value in an object. CLASSES: This allow you to create more easily, and in a more readcable way.
  
  // Learfning how to use arrays in javascript
  // ============================================================
  let episodes = [firstEpisode, secondEpisode, thirdEpisode];
  // ============================================================
  const body = document.querySelector('body');
  for(let i = 0; i < 12; i++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('series-frame');
    let newTitle = document.createElement('h2');
    newTitle.innerText = "The Story of Tau";
    let newParagraph = document.createElement('p');
    newParagraph.innerText = `${episodes[i].tilte} ${episodes[i].duration} minutes ${episodes[i].hasBeenWatched ? "Already been watched" : "Not yet watched"}`;
    newDiv.append(newTitle);
    newDiv.append(newParagraph);
    body.append(newDiv);
  }
  // Note: This has to with arrays and for loop and also how to create HTML Element from Javascript and also how to add class of CSS. And also if u want to add new element into your array u have call the name of array and Dot Notaion follow by the name of the element you want to add to  the array and the value yoou want to asign to it.
  
  
  
  // Create constants here
  // =============================================================
  
  const hoursPerDay = 24;
  const minutesPerHour = 60;
  const secondsPerMinute = 60;
  
  // =====================================
  
  const dayInput = document.querySelector('#day-input');
  const calculateButton = document.querySelector('#calculate-button');
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');
  
  calculateButton.addEventListener('click', () => {
    let days = dayInput.value;
    let calcHours = days * hoursPerDay;
    let calcMinutes = calcHours * minutesPerHour;
    let calcSeconds = calcMinutes * secondsPerMinute;
    
    hours.innerText = `${calcHours} hours`;
    minutes.innerText = `${calcMinutes} minutes`;
    seconds.innerText = `${calcSeconds} seconds`;
  });
  
  
  
  // Learning IF/ELSE STATEMENT and how to use it and solve some logic questions.
   let userLoggedIn = true;
   if(userLoggedIn) {
    console.log("User logged in!s");
    } else{
      console.log("Intruder alert!");
    }
   
    class Episode {
      constructor(title, duration, minutesWatched) {
        this.title = title;
        this.duration = duration;
        
        // Add conditions here
        // =================================
        if (duration === minutesWatched) {
          this.hasBeenWatched = true;
        } else if (minutesWatched < duration) {
          this.hasBeenWatched = false;
        }
        // =================================
      }
    };
    
    let firstEpisode = new Episode('Dark Beginnings', 45, 45);
    let secondEpisode = new Episode('The Mystery Continues', 45, 10);
    let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);
    
    let episodes = [firstEpisode, secondEpisode, thirdEpisode];
    
    const body = document.querySelector('body');
    
    for(let i = 0; i < 3; i++) {
      let newDiv = document.createElement('div');
      newDiv.classList.add('series-frame');
      let newTitle = document.createElement('h2');
      newTitle.innerText = 'The Story of Tau';
      let newParagraph = document.createElement('p');
      newParagraph.innerText = `${episodes[i].title}
      ${episodes[i].duration} minutes
      ${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
      newDiv.append(newTitle);
      newDiv.append(newParagraph);
      body.append(newDiv);
    }
  
    let firstUser = {
      name: 'Will Alexander',
      age: 33,
      accountLevel: 'normal'
  };
  
  let secondUser = {
      name: 'Sarah Kate',
      age: 21,
      accountLevel: 'premium'
  };
  
  let thirdUser = {
      name: 'Audrey Simon',
      age: 27,
      accountLevel: 'mega-premium'
  };
  
  switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
  }
  
  const numberOfPassengers = 10;
  
  for (let i = 0; i < numberOfPassengers; i++) {
      console.log('Passenger boarded!');
  }
  
  console.log('All passengers boarded!');
  
  
  const passengers = [
      'Will Alexander',
      'Sarah Kate',
      'Audrey Simon',
      'Tau Perkington'
  ]
  
  for (let i in passengers) {
      console.log('Boarding passenger ' + passengers[i]);
  }
  
  const passengers = [
    {
        name: 'Will Alexander',
        ticketNumber: 209542
    },
    {
        name: 'Sarah Kate',
        ticketNumber: 169336
    },
    {
        name: 'Audrey Simon',
        ticketNumber: 779042
    },
    {
        name: 'Tau Perkington',
        ticketNumber: 703911
    }
  ]
  
  for (let passenger of passengers) {
    console.log('Boarding passenger ' + passenger.name + ' with ticket number ' + passenger.ticketNumber);
  }
  
  let seatsLeft = 10;
  let passengersStillToBoard = 8;
  
  let passengersBoarded = 0;
  
  while (seatsLeft > 0 && passengersStillToBoard > 0) {
      passengersBoarded++; // one passenger boards
      passengersStillToBoard--; // so there is one fewer still to board
      seatsLeft--; // and one fewer seat
  }
  
  console.log(passengersBoarded); // prints 8, as there are 8 passengers for 10 seats
  
  class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    showBalance() {
        console.log('Balance: ' + this.balance + ' EUR');
    }
    
    deposit(amount) {
        console.log('Depositing ' + amount + ' EUR');
        this.balance += amount;
        this.showBalance();
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Withdrawal denied!');
        } else {
            console.log('Withdrawing ' + amount + ' EUR');
            this.balance -= amount;
            this.showBalance();
        }
    }
  }
  
  class BePolite {
    static sayHello() {
        console.log('Hello!');
    }
    static sayHelloTo(name) {
        console.log('Hello ' + name + '!');
    }
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
  }
  
  BePolite.sayHello(); // prints 'Hello!'
  BePolite.sayHelloTo('Will'); // prints 'Hello Will!'
  const sum = BePolite.add(2, 3); // sum = 5
  
  const randomNumber = Math.random(); // creates random number on the interval [0, 1)
  const roundMeDown = Math.floor(495.966); // rounds down to nearest whole number, returns 495
  
  
  const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    return wordArray.length;
  }
  
  const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    let totalLetters = 0;
    for (let word of wordArray) {
      // remove punctuation so as to only count letters
      word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      totalLetters += word.length;
    }
    return totalLetters;
  }
  
  /*
  ** returns average word length to 
  ** two decimal places
  */
  const getAverageWordLength = (stringToTest) => {
    return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
  }
  
  const printStringStats = (stringToTest) => {
    console.log({
      wordCount: getWordCount(stringToTest),
      letterCount: getLetterCount(stringToTest),
      averageWordLength: getAverageWordLength(stringToTest)
    })
  }
  