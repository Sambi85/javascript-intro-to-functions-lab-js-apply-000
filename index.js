
var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false




function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
   
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

<<<<<<< HEAD

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}



function sayHiToGrandma(string) {
 if (string === string.toLowerCase()) {
  return `I can't hear you!`;

 } else if (string === string.toUpperCase()){
  return `YES INDEED!`;
    
  } else {
        string === "I love you,Grandma.";
        return 'I love you, too.';
}
 }
          

 function sayHiToGrandma(string) {
  return `I can't hear you!`;
}

function sayHiToGrandma(string) {
  return `YES INDEED!`;
}

function sayHiToGrandma(string) {
  return `I love you, too.`;    
}

