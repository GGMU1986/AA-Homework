// window.setTimeout(() => {
//     alert('HAMMERTIME');
// }, 5000);

// function hammerTime(time) {

//     setTimeOut(() => {
//         alert(`${time} is hammertime!`);
//     }, 5000);
// }

// hammerTime();

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function teaAndBiscuits() {
    let first, second;

    reader.question('Would you like some tea?', (res) => {
        first = res;
        console.log(`You replied ${res}.`);
    });


    const firstRes = (first === 'yes') ? 'do' : 'don\'t';

    reader.question('Would you like some biscuits?', (res) => {
        second = res;
        console.log(`You replied ${res}.`);
    });

    const secondRes = (second === 'yes') ? 'do' : 'don\'t';
    console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);

    reader.close();
}

teaAndBiscuits();