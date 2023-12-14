const inputB = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");

function addTask()  {
  if(inputB.value === ''){
    alert("Enter the task")
  }else{
  let li = document.createElement("li");
    li.innerHTML = inputB.value;
    listCont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputB.value = '';
  seveData();

}
listCont.addEventListener("click" , function(e){
  if(e.target.tagName.toLowerCase() == "li"){
      e.target.classList.toggle("checked"); 
  }
  else if(e.target.tagName.toLowerCase() === "span") {
      e.target.parentElement.remove();
      seveData();
  }
}, false);
  
function seveData(){
  localStorage.setItem("Data", listCont.innerHTML);
}
function showTask(){
  listCont.innerHTML = localStorage.getItem("Data");
}
showTask();