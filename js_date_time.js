//date and time

let mydate = new  Date();
console.log(mydate);

console.log(mydate.getDate());

console.log(mydate.getDay());
console.log(mydate.toDateString());

console.log(mydate.toLocaleDateString());

console.log(mydate.toISOString());
console.log(mydate.toLocaleString());


console.log(mydate.toLocaleTimeString());

console.log(mydate.toString());
console.log(mydate.toJSON());

// 2024-08-19T06:29:43.831Z
// 19
// 1
// Mon Aug 19 2024
// 8/19/2024
// 2024-08-19T06:29:43.831Z
// 8/19/2024, 11:59:43 AM
// 11:59:43 AM
// Mon Aug 19 2024 11:59:43 GMT+0530 (India Standard Time)
// 2024-08-19T06:29:43.831Z



//create time 
let newZone=new Date(2024,4,23,5,3,24,23,24);//Date(year,month,day,hour,minute,second,milisecond);
console.log(newZone.toString());//Thu May 23 2024 05:03:24 GMT+0530 (India Standard Time)
console.log(newZone.toLocaleString());