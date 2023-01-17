console.log("hello");
var currentval
function getvalue(event){
    currentval =event.target.innerText
    const display = document.getElementById("upperleft")
    display.innerHTML +=currentval
    currentval= display.innerHTML 
    display.style.fontSize ="25px"



    

}

// document.addEventListener('keypress',(event)=>{
//     currentval =event.key
//     const display = document.getElementById("upperleft")
//     display.innerHTML +=currentval
//     currentval= display.innerHTML 
//     display.style.fontSize ="25px"
//     console.log(event)
// })

function value(event){
    const display = document.getElementById("upperleft")
    display.innerHTML=""
    display.innerHTML=eval(currentval)


}
function cleardisplay(event){
    const display = document.getElementById("upperleft")
    display.innerHTML=""

}