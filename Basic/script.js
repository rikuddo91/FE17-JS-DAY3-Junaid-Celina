// exercise 1
let tempArray = [27, 52, 1, 76, 42, 24, 112, 86, 59];
let max = 0 ;

for (let i=0 ; i < tempArray.length; i++) {
    if (max < tempArray[i]) {
        max = tempArray[i];
    }
   
}
 console.log(max);



 //Basic Exercise 2 - Temperature

 let temp = (Math.floor(Math.random()*72))-32;
console.log(temp);

let paragraph = document.getElementById("paragraph");
let meteo = document.getElementById ("meteo");
let image = document.createElement ("img");


   if (temp >35 ){
        paragraph.innerHTML =`<h1>The weather is extremely hot: ${temp} °C</h1>`;
        image.setAttribute("src", "https://cdn.pixabay.com/photo/2018/11/25/05/43/forest-fire-3836834_960_720.jpg");
        image.setAttribute("width", "300");
        image.setAttribute("height", "227");
        document.body.appendChild(image);
        
        console.log ("It is extremely hot");
    };

    if (temp < 35  && temp >9){
        paragraph.innerHTML = `<h1>The weather is moderate: ${temp} °C</h1>`
        image.setAttribute("src", "https://cdn.pixabay.com/photo/2017/10/31/23/48/thermometer-2906817_960_720.jpg");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        document.body.appendChild(image);
       console.log("The weather is moderate");
    };

    if (temp < 10 && temp > -1){
        paragraph.innerHTML = `<h1>The weather is cold: ${temp} °C</h1>`;
        image.setAttribute("src", "https://cdn.pixabay.com/photo/2017/07/02/19/18/tree-2465450_960_720.jpg");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        document.body.appendChild(image);
        console.log("The weather is cold");
    };
     if (temp <0 && temp > -6){
        paragraph.innerHTML = `<h1>The weather is too cold: ${temp} °C</h1>`;
        image.setAttribute("src", "https://cdn.pixabay.com/photo/2017/12/17/21/04/winter-3024952_960_720.jpg");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        document.body.appendChild(image);
        console.log("The weather is too cold");
    };
     if (temp < -6){
        paragraph.innerHTML = `<h1>The weather is way too cold: ${temp} °C</h1>`;
        image.setAttribute("src", "https://cdn.pixabay.com/photo/2013/07/18/14/51/winter-163815_960_720.jpg");
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        document.body.appendChild(image);
        console.log("The weather is freezing");
    };