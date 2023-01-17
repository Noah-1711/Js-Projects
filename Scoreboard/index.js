let objectdeatils = [];

var deletekey = 0;
function adduser() {
  
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var country = document.getElementById("country").value;
var score = +document.getElementById("score").value;

  let para = document.getElementById("para");

  var table = document.getElementById("table");


   if(fname==""||lname==""||country==""||score==""){
      para.innerHTML = ""
      para.innerHTML = " <h1>please input data </h1> "
   }
   else{
    para.innerHTML = "";
  console.log("clicked");
  const details = {
    fullname: "",
    country: "",
    score: "",
  };

  // console.log(fname)
  // console.log(lname)
  // console.log(country)
  // console.log(score)

  details.fullname = fname + " " + lname;
  details.country = country;
  details.score = score;

  objectdeatils.push(details);
  console.log(objectdeatils);

  objectdeatils.map((ele) => {
    table.innerHTML += `
        <tr id="tr${deletekey}">
        <td id="full">${ele.fullname}</td>
        <td id="coun">${ele.country}</td>
        <td id="scr${deletekey}">${ele.score}</td>
        <td id="del${deletekey}"><button onclick="deleteuser(${deletekey})">delete</button></td>
        <td id="plus5"><button onclick="plusfive(${deletekey})">+5</button></td>
        <td id="minus5"><button  onclick="subfive(${deletekey})">-5</button></td>

        </tr>`;
        console.log(deletekey);

        deletekey = deletekey + 1;

  });

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("country").value = "";
  document.getElementById("score").value = "";
}

}



function deleteuser(deletekey) {
  var trdel = document.getElementById(`tr${deletekey}`);
  trdel.remove()
  


//   let arr=[{name:"Swati", age:'20'}, {name:'Priya', age:'21'}, {name:'tannu', age:'19'}];
        console.log(objectdeatils);
        // let idx=1
        objectdeatils=objectdeatils.slice(0,deletekey).concat(objectdeatils.slice(deletekey+1,objectdeatils.length))
        console.log(objectdeatils)

   

}

function plusfive(deletekey){
  var addfive = document.getElementById(`scr${deletekey}`);

  console.log("plus5")
  
  addfive.innerHTML= +addfive.innerHTML+5



}

function subfive(deletekey){
  var addfive = document.getElementById(`scr${deletekey}`);

  console.log("sub")
  
  addfive.innerHTML= +addfive.innerHTML-5



}