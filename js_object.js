//object 

//declare symbole
const mysym=Symbol("key1");
const man={
    name:"Rajveer",
    lastname:"doriya",
     [mysym]:"mykey1",
    age:20,
    loacation:"indore"
   
}
 
console.log(typeof man["name"]);
console.log(typeof man[mysym]);

//change object values 

man.age=21;

//freeze object values after than no change 
Object.freeze(man)
man.age=23;
console.log(man);


