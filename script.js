/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  let search1=arr.map((item )=>{
    if(item.profession==='developer'){
      console.log(item.name);
    }
  });
  
}

function PrintDeveloperbyForEach() {
  //Write your code here
  let search2=arr.forEach(item=>{
    if(item.profession==='developer')
    console.log(item.name);
  });
  

} 

function addData() {
  //Write your code here
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);

}

function removeAdmin() {
  //Write your code here
 function removeValue(profession){
  if(profession==='admin'){
  arr.splice()
  return true;
 }
 return false;
}
let x=arr.filter(removeValue);
console.log(x);
}
function concatenateArray() {
  //Write your code here
let arr2=[
  {id:5,name:"kumar",age:"22",profession:"business man"}
]
let arr3=arr.concat(arr2);
console.log(arr3);
}
