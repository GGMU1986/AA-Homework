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

// Elephant.prototype.addTrick(trick) = function() {
//     this.tricks.push(trick)
// }

// Elephant.prototype.play = function() {
//     randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
//     console.log(randomTrick);
// }

console.log(joey.height)
joey.grow()
console.log(joey.height)