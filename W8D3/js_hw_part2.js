// let callback = function(names) {
//     names.forEach(name => {
//         console.log(name);
//     }) 
// };

// function titleize(names, callback) {
//     callback(names.map(name => `Mx. ${name} Jingleheimer Schmidt`)); 
// };

// titleize(["Mary", "Brian", "Leo"], callback);

function Elephant(name, height, tricks) {
    this.name = name
    this.height = height
    this.tricks = tricks
};

let joey = new Elephant('joey', 72, ['playing the guitar', 'eating all the food']);

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes phrRRRRRRRRRRR!!!!!!!`);
};

Elephant.prototype.grow = function () {
    this.height += 12;
};

Elephant.prototype.addTrick(trick) = function() {
    this.tricks.push(trick)
}

// Elephant.prototype.play = function() {
//     randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
//     console.log(randomTrick);
// }

console.log(joey.tricks)
joey.addTrick('juggling bowling pins')
console.log(joey.tricks)

const readline = require('readline'); 

const reader = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

function teaAndBiscuits() { 
    reader.question('Would you like some tea?', function (res) { console.log(`You replied ${res}.`); 
    reader.question('Would you like some biscuits?', function (res2) { console.log(`You replied ${res2}.`); 
    const first = (res === 'yes') ? 'do' : 'don\'t'; 
    const second = (res2 === 'yes') ? 'do' : 'don\'t'; console.log(`So you ${first} want tea and you ${second} want biscuits.`); 
    reader.close(); }); }); }

