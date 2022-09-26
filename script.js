//Basic exercise 1 :Create a program to find the highest value in an array
let num = [1, 7, -3, 9];
for(let i =0; i < num.length; i++){
    console.log(num[3]);
}

//Exercise 2:

let temp = (Math.floor(Math.random()*26))+20;
console.log(temp);
if (temp >= 32 ){
    
    var button = document.getElementById('button')
    button.addEventListener('click',function(event){
        var imgurl = document.getElementById('url').value
        var img = document.createElement('img')
        img.setAttribute("src", "http://en.ammonnews.net/img/big/20121030big18691.jpeg?medium");
    img.setAttribute("width", "300");
    img.setAttribute("height", "200");
    document.body.appendChild(img)
    }) 

console.log ("The weather is moderate");
}
else {
console.log("The weather is hot");
}

let temp1 = (Math.floor(Math.random()*26))-5;
console.log(temp1);
if (temp1 > 32 ){
    image.setAttribute("src", "http://en.ammonnews.net/img/big/20121030big18691.jpeg?medium");
    image.setAttribute("width", "300");
    image.setAttribute("height", "200");
    document.body.appendChild(image);
console.log ("The weather is cold");
}
else {
    console.log("The weather is moderate");
    }

    let temp2 = (Math.floor(Math.random()*26))-15;
console.log(temp2);
if (temp2 > 40 ){
    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3OdkdIdVutiXdsR9FWyTyLfjQWAw-VTmBxxzZ9YEZgL8i2eg49SpX6L0h3bsxES8GTOM&usqp=CAU");
    image.setAttribute("width", "300");
    image.setAttribute("height", "200");
    document.body.appendChild(image);
console.log ("The weather is moderate");
}
else {
console.log("The weather is cold");
}

//----------------------END-----------------------------------




//Intermediate
//Exercise 2: FizzBuzz while loop

var output = [];
var count = 1;
function fizzBuzz() {
    while(count <= 100) {
        if (count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz");
        }else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else { output.push(count);
        count ++;
        }
        console.log(output);
    }
}


  
//Exrcise 2. Average Grade
//steps: Work out the sum of the numbers in array
const students = ["Martin", "Thomas", "Klaus", "Maria", "David"];
let grades = [76, 85, 65, 93, 81];
var totalSum = 0;
for(var i in grades) {
    totalSum += grades[i];
}
//Work out how many numbers are in array.
var numsCnt = numsCnt.length;
var average = totalSum / numsCnt;

console.log('Average: ' + average);

if (average < 60) {
    console.log("Grade : F");
}
else if (average > 70) {
    console.log("Grade : C");
}
    
