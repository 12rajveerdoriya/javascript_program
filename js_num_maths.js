
const score=300;
console.log(score);//300


const scoreb=new Number(200);//[Number:200]
console.log(scoreb);
//tostring
console.log(scoreb.toString()); //200 in form of string 


//toFixed()
console.log(scoreb.toFixed(3));//200.000

//toPrecision()  ->(roundfigure)
const value=389.9721


console.log(value.toPrecision(4));//390.0

//toLocalString()

const value2=6832469862364;
console.log(value2.toLocaleString())//6,832,469,862,364[format in us ]
console.log(value2.toLocaleString('en-IN'));//68,32,46,98,62,364 [in the format of indian values]


//----------------maths------------------------


console.log(Math);

console.log(Math.abs(-4));
console.log(Math.ceil(4.1))//5
console.log(Math.floor(4.9));//4
console.log(Math.min(3,5,1,7,8,7,2));//1
console.log(Math.max(9,1,4,7,2,3));//9

console.log(Math.random);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.ceil(Math.random()*10)+1);

const min=20;
const max=50;

console.log(Math.floor(Math.random()*(max - min + 1)+min));



