const moment = require("moment");
const fs = require("fs");

let states = {};
let originalStatesList = Array.from(Array(58).keys());
let queue = [];

console.log({ originalStatesList });
let today = moment().format("M/DD/YYYY");
for (let i = 0; i < 365 * 3; i++) {
    let newDay = moment(today).add(i, "days");

    //   console.log({ nd: newDay.format("L") });

    let randomElementIndex = Math.floor(
        Math.random() * originalStatesList.length
    );

    let randomElement = originalStatesList[randomElementIndex];

    queue.push(randomElement);

    if (queue.length === 50) {
        let popped = queue.shift();
        originalStatesList.push(popped);
        console.log({
            pushedValue: randomElement,
            popped,
        });
    }

    states[newDay.format("L")] = randomElement;

    originalStatesList.splice(randomElementIndex, 1);
}

console.log({
    states,
});

let distribution = {};
Object.values(states).forEach((num) => {
    if (distribution[num]) {
        distribution[num] = distribution[num] + 1;
    } else {
        distribution[num] = 1;
    }
});

console.table({ distribution });

fs.writeFile("states_dist.txt", JSON.stringify(states, null, 4), (e) => {
    if (e) {
        return console.error(e);
    }
    console.log("file saved!");
});
