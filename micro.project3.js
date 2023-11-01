const data=require("./food.json")
// list all the food items
for( let i of data){
    console.log(i.foodname);
   
}
console.log("-------------Second Question Answer----------- ");
// list all the food items with category vegetables


for(let i of data){
    if(i.category == "Vegetable"){
        console.log(i.foodname);
    }
}

console.log("-------------third Question Answer----------- ");


for(let i of data){
    if(i.category == "Fruit"){
        console.log(i.foodname);
    }
}
console.log("-------------Fourth  Question Answer----------- ");

for(let i of data){
    if(i.category == "Protein"){
        console.log(i.foodname);
    }
}

console.log("-------------fifth Question Answer----------- ");

for(let i of data){
    if(i.category == "Nuts"){
        console.log(i.foodname);
    }
}

console.log("-------------Sixth Question Answer----------- ");


for(let i of data){
    if(i.category == "Grain"){
        console.log(i.foodname);
    }
}
console.log("-------------Seventh Question Answer----------- ");


for(let i of data){
    if(i.category == "Dairy"){
        console.log(i.foodname);
    }
}
console.log("-------------Eighth Question Answer----------- ");



for(let i of data){
    if(i.calorie > 100 ){
        console.log(i.foodname);
    }
}
console.log("-------------Ninth Question Answer----------- ");


for(let i of data){
    if(i.calorie < 100 ){
        console.log(i.foodname);
    }
}


console.log("-------------tenth Question Answer----------- ");
    // list all the food items with highest protien content to lowest
const hightolow=data.sort((p1,p2)=>p2.protiens-p1.protiens);
for( let i of hightolow){
console.log(i.foodname)
}


console.log("-------------Eleventh Question Answer----------- ");

//     // list all the food items with lowest protein content to highest
const lowtohigh=data.sort((c1,c2)=>c1.cab-c2.cab);
for( let i of lowtohigh){
    console.log(i.foodname)
    }