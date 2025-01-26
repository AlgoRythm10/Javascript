let mydate=new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toTimeString());
console.log(typeof(mydate));
// let mycreatedate=new Date(2025,0,23);
// console.log(mycreatedate);
// //creatimg timestamp
// let MyTimestamp=Date.now();
// console.log(MyTimestamp);
// console.log(mycreatedate.getTime());

console.log(Math.floor(Date.now()/1000));//in seconds
let newDate=new Date();
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"narrow",
})