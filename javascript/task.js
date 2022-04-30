function addTask(){
    let add= document.getElementById("task1").value;
    let textArea=document.getElementById("rightbox").value;

localStorage.setItem(add,textArea);

document.getElementById("task1").value=" ";
document.getElementById("rightbox").value=""

}

function clearTask(){
    localStorage.clear();

    document.getElementById("task1").value=" ";
    document.getElementById("rightbox").value=""
    
}