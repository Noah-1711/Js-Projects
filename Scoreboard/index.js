
let objectdeatils = []

var deletekey=0
function adduser() {
    let data= document.getElementById("data")

    var table=document.getElementById("table")
   
    
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var country = document.getElementById("country").value
    var score = +document.getElementById("score").value




    //  if(fname==""||lname==""||country==""||score==""){
    //     table.innerHTML = ""
    //     table.innerHTML = " <h1>please input data </h1> "
    //  }
    //  else{
        table.innerHTML = ""
       console.log("clicked")
         const details = 
        {
            fullname: "",
            country: "",
            score: "",
        
        }
    


    // console.log(fname)
    // console.log(lname)
    // console.log(country)
    // console.log(score)
  
    details.fullname = fname+" "+lname
    details.country = country
    details.score = score

    objectdeatils.push(details)
     console.log(objectdeatils)
     

   
    objectdeatils.map((ele)=>{
        table.innerHTML +=`
        <tr id="tr${deletekey}">
        <td id="full">${ele.fullname}</td>
        <td id="coun">${ele.country}</td>
        <td id="scr">${ele.score}</td>
        <td id="del${deletekey}" onclick="deleteuser(${deletekey})"><button >delete</button></td>
        <td id="plus5"><button >+5</button></td>
        <td id="minus5"><button >-5</button></td>

        </tr>`

        deletekey= deletekey+1;

    })


    document.getElementById("fname").value=""
    document.getElementById("lname").value=""
    document.getElementById("country").value=""
    document.getElementById("score").value=""

     }


// }



function deleteuser(deletekey){
 var trdel= document.getElementById(`tr${deletekey}`)
// console.log("delete is clicked")
trdel.remove()
console.log(deletekey)
//  delete objectdeatils[deletekey]
 var sliceobject= objectdeatils.slice(0,deletekey)+objectdeatils.slice(deletekey+1,objectdeatils.length)

console.log(sliceobject)

//  let  objecfilter=objectdeatils.filter((ele, index)=>{
//     if(index == deletekey){
//         console.log( objectdeatils[index])
//         delete objectdeatils[index]
//         return true
//     }

// })
console.log("objectdeatils",objectdeatils)



}




