var display = document.getElementById('event');
const car1 = {url:"./image/car-1.jpg",name:"Name : Audi",color:"Color:white cream",price:"Price:4500000$" };
const car2 = {url:"./image/car-2.jpg",name:"Name : Ferrari",color:"Color:Red",price:"Price:2500000$" };
const car3 = {url:"./image/car-3.jpg",name:"Name : GTR R36",color:"Color:white",price:"Price:2500000$" };
const car4 = {url:"./image/car-4.jpg",name:"Name : GT-R",color:"Color:Blue Cream",price:"Price:2500000$" };
const car5 = {url:"./image/car-6.jpg",name:"Name : GTR R35",color:"Color:Gold-Black",price:"Price:2500000$" };
const car6 = {url:"./image/car-7.jpg",name:"Name : GTR50",color:"Color:Gold-Black",price:"Price:2500000$" };
const car7 = {url:"./image/car-8.jpg",name:"Name : Nissan GTR",color:"Color:Dark Blue",price:"Price:2500000$" };
const car8 = {url:"./image/car-9.jpg",name:"Name : Lamborghini",color:"Color:black",price:"Price:2500000$" };
const car9 = {url:"./image/car-10.jpg",name:"Name : Ferrari",color:"Color:Yellow cream",price:"Price:2500000$" };
const car10 = {url:"./image/car.jpg",name:"Name : Ferrari",color:"Color:light blue",price:"Price:2500000$" };
const car11 = {url:"./image/car-013.jpg",name:"Name : Bugatti",color:"Color:Black",price:"Price:2500000$" };
const car12 = {url:"./image/car-012.jpg",name:"Name : Benz",color:"Color:Red",price:"Price:2500000$" };
const cars = [car1, car2,car3,car4,car5,car6,car7,car8,car9,car10,car11,car12];

function car()

{
    for(var i=0; i<=cars.length; i++){
    display.innerHTML+="<div>"+ "<img src='"+cars[i].url + "'>"+"<p>"+cars[i].name + "</p>"+"<p>"+cars[i].color + "</p>"+"<p>"+cars[i].price + "</p>" +"</div>";

    }
   
}

// BIKE

var screen = document.getElementById('event');
const bike1 = {url:"./image/honda-bike.jpg",name:"Name : Honda",color:"Color : Red-Black",price:"Price : 4500000$" };
const bike2 = {url:"./image/duckKTM-bike.jpg",name:"Name :  KTM - Duck",color:"Color : Red",price:"Price : 210000$" };
const bike3 = {url:"./image/kawasaki-bike.jpg",name:"Name : Kawasaki",color:"Color : Green",price:"Price : 5500000$" };
const bike4 = {url:"./image/royal gt-650.jpg",name:"Name : Royal - GT650",color:"Color : Black",price:"Price : 1100000$" };
const bike5 = {url:"./image/yamaha rx100.jpg",name:"Name : Yamaha - RS100",color:"Color : Black",price:"Price:20000$" };
const bike6 = {url:"./image/yamaha-mt15-v2-bike.jpg",name:"Name : GTR50",color:"Color : Black",price:"Price : 480000$" };
const bike7 = {url:"./image/bmw-bike01.jpg",name:"Name : BMW",color:"Color : Dark Blue",price:"Price :350000$" };
const bike8 = {url:"./image/bmw-bike.jpg",name:"Name : BMW",color:"Color : black",price:"Price : 530000$" };
const bike9 = {url:"./image/bmws1000r.jpg",name:"Name : BMW - S1000",color:"Color : Yellow cream",price:"Price : 100000$" };
const bike10 = {url:"./image/BMW G310GS.jpg",name:"Name : BMW - G310S",color:"Color : light blue",price:"Price : 790000$" };
const bike11 = {url:"./image/bmW.jpg",name:"Name : BMW",color:"Color : Cream Gray",price:"Price : 580000$" };
const bike12 = {url:"./image/ROYAL ENFIELD.jpg",name:"Name : ROYAL ENFIELD",color:"Color : black",price:"Price : 205000$" };
const bikes = [bike1, bike2,bike3,bike4,bike5,bike6,bike7,bike8,bike9,bike10,bike11,bike12];

function bike()

{
    for(var i=0; i<=bikes.length; i++){
    screen.innerHTML+="<div>"+ "<img src='"+bikes[i].url + "'>"+"<p>"+bikes[i].name + "</p>"+"<p>"+bikes[i].color + "</p>"+"<p>"+bikes[i].price + "</p>" +"</div>";

    }
   
}
