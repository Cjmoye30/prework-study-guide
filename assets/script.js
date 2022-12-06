// Creating and iterating through an array with a for loop
var topics = ["HTML", "CSS", "Git", "JavaScript"];

function listOfTopics() {

    for (x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (topics === 'HTML') {
        console.log("Let's study HTML!");
    } else if (topics === 'CSS') {
        console.log("Let's study CSS!");
    } else if (topics === 'Git') {
        console.log("Let's study Git!");
    } else if (topics === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}
console.log(selectTopic(topics));
console.log(listOfTopics());