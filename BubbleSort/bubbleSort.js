let c = new GameCanvas();
createCanvas('FULLSCREEN');

let numbers = [];
let numbersInArray = c.width;

let numberRange = 100;

for (let i = 0; i < numbersInArray; i++) {
  numbers.push(Math.random() * numberRange);
}

let higestNumber = Math.max(...numbers);
let lowestNumber = Math.min(...numbers);

loop();
function loop() {
  clearScreen();
  rectangle(0, 0, c.width, c.height, 'black');

  //Sorting here
  bubbleSort();

  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    let mappedNumber = map(n, lowestNumber, higestNumber, 0, c.height);
    let color = `hsl(${map(n, lowestNumber, higestNumber, 0, 255)}, 100%, 50%)`;
    rectangle(i, c.height - mappedNumber, 1, mappedNumber, color);
  }

  requestAnimationFrame(loop);
}

function bubbleSort() {
  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    let n2 = numbers[i + 1];
    if (n > n2) {
      let tmp = n2;
      numbers[i + 1] = n;
      numbers[i] = tmp;
    }
  }
}
