// class Bank{
//     constructor(accountName, deposit);
// }

window.onload = function(){
let clickbtn = document.getElementById("btn");
clickbtn.onclick = createAccount;
function createAccount(){
let accName = document.getElementById("acct1");
let depost = document.getElementById("create");
let textInput = document.getElementById("textA");
textInput.innerHTML = accName.value;
textInput.innerHTML = textInput.innerHTML + " "+ depost.value;
}
}