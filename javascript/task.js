
window.onload = onLoadEvent;

function onLoadEvent() {

    var addBtn = document.getElementById("addBtn");
    var clearBTn = document.getElementById("clearBtn");
    //let mainTask = document.getElementById("textField");
    //let task = document.getElementById("task");

    //mainTask.textContent += localStorage.getItem("name1");
    //if (localStorage.getItem("name1") === null) mainTask.textContent = "";

    //addBtn.onclick = 
    addBtn.onclick = function  addingTask() {

        //document.getElementById("textField").innerHTML += mainTask;
        var taskKey = document.getElementById("task").value;
        var mainTask = document.getElementById("textField");

        //if (oldTask === null) oldTask = "";
        //saving the user input
        localStorage.setItem( taskKey,taskKey);
        var storedKey = localStorage.getItem(taskKey);
        console.log(taskKey);

        document.getElementById("textField").value += storedKey+ "\n";
        mainTask.textContent = localStorage.getItem(storedKey);
        // document.getElementById("task").value = "";
    }
    // clearBTn.onclick = 
    //clearing given task
    clearBTn.onclick = function clearTask() {
        localStorage.clear();
        document.getElementById("task").value = "";
        document.getElementById("textField").value = "";
    }
}
// function fun(){
// var addbtn=document.getElementById("task1").value;
// var clearbtn=document

// function addTask(){
//     let add= document.getElementById("task1").value;
//     let textArea=document.getElementById("rightbox").value;

// localStorage.setItem(add,textArea);

// document.getElementById("task1").value=" ";
// document.getElementById("rightbox").value="";

// }




// function clearTask(){
//     localStorage.clear();

//     document.getElementById("task1").value=" ";
//     document.getElementById("rightbox").value=""
    
// 
