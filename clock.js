
let h=document.getElementById("h");
let m=document.getElementById("m");
let s=document.getElementById("s");

setInterval(()=>{
 let d=new Date();
 h.innerHTML=(d.getHours()<10?"0":"")+d.getHours();
 m.innerHTML=(d.getMinutes()<10?"0":"")+d.getMinutes();
 s.innerHTML=(d.getSeconds()<10?"0":"")+d.getSeconds();
},1000);
var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
let d=document.getElementById("date");
let d1= new Date();
console.log(d1)
d.innerHTML=(days[d1.getDay()]+" "+d1.getDate()+" "+months[d1.getMonth()]+" "+d1.getFullYear());


