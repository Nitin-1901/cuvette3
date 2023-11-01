const data=require("./food.json")
// list all the food items
console.log(data);

// list all the food items with category vegetables
let veggies=data.filter((vegetables)=>{
    vegetables.category="Vegetable";
    return vegetables;

})
console.log(veggies);

// list all the food items with category fruit
let fruity=data.filter((fruits)=>{
    fruits.category="Fruit";
    return fruits;

})
console.log(fruity);

//list all the food items with category protein
let protein=data.filter((proteins)=>{
    proteins.category="Protein";
    return proteins;

})
console.log(protein);

// list all the food items with category nuts
let nuut=data.filter((nuts)=>{
    nuts.category="Nuts";
    return nuts;

})
console.log(nuut);

// list all the food items with category grains
let grain=data.filter((grains)=>{
    grains.category="Grain";
    return grains;

})
console.log(grain);

// list all the food items with category dairy
let diary=data.filter((dairies)=>{
    dairies.category="Dairy";
    return dairies;

})
    console.log(diary);

        // list all the food items with calorie above 100
const above_cal=data.filter(s => s.calorie > 100);
console.log(above_cal);

    // list all the food items with calorie below 100
const below_calorie=data.filter(s => s.calorie < 100);
console.log(below_calorie);



    // list all the food items with highest protien content to lowest
const hightolow=data.sort((p1,p2)=>p2.protiens-p1.protiens);
console.log(hightolow);

    // list all the food items with lowest protein content to highest
const lowtohigh=data.sort((c1,c2)=>c1.cab-c2.cab);
console.log(lowtohigh)