const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const rainbowColor = document.querySelectorAll('h1 span');
console.log(rainbowColor);

const colorRainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

document.querySelector('h1').style.display = 'flex'
document.querySelector('h1').style.justifyContent = 'center'
document.querySelector('h1').style.fontSize = '100px'


for (let i = 0; i < rainbowColor.length; i++) {
    console.log(rainbowColor[i]);
    rainbowColor[i].style.color = colorRainbow[i]
}

