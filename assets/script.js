// Creating and iterating through an array with a for loop
// var topics = ["HTML", "CSS", "Git", "JavaScript"];
// var randomTopic = Math.floor(Math.random()*topics.length);

// function listOfTopics() {

//     for (x = 0; x < topics.length; x++) {
//         console.log(topics[x]);
//     }
// }

// function selectTopic() {
//     if (randomTopic === 'HTML') {
//         console.log("Let's study HTML!");
//     } else if (randomTopic === 'CSS') {
//         console.log("Let's study CSS!");
//     } else if (randomTopic === 'Git') {
//         console.log("Let's study Git!");
//     } else if (randomTopic === 'JavaScript') {
//         console.log("Let's study JavaScript!");
//     } else {
//         console.log('Please try again!');
//     }
// }
// console.log(selectTopic(topics));
// console.log(randomTopic);
// console.log(listOfTopics());


//Creating the Variable and Arrays
var topics2 = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic2 = Math.floor(Math.random() * topics2.length);
var topicSelect = topics2[randomTopic2];

//Iterate through the topics array to display what we have available to learn
console.log("Here are the topics availabe to study:");
for (var x = 0; x < topics2.length; x++) {
    console.log(topics2[x]);
}

//Create a function to display the message of what topic we are going to be studying
function selectTopic2() {
    console.log("Not sure what to study?");
    console.log("Lets study " + topicSelect + "!");
}


// Console Testing
console.log(selectTopic2());

// console.log(topics2.length);
// console.log(randomTopic2);
// console.log(topicSelect);