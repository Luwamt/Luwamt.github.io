// class Bank{
//     constructor(accountName, deposit);
// }

// window.onload = function () {
//   let clickbtn = document.getElementById("btn");
//   clickbtn.onclick = createAccount;
//   function createAccount() {
//     let accName = document.getElementById("acct1");
//     let depost = document.getElementById("create");
//     let textInput = document.getElementById("textA");
//     textInput.innerHTML = accName.value;
//     textInput.innerHTML = textInput.innerHTML + " " + depost.value;
//   }
// };

window.onload=fn;


function fn(){
 let depDepo=''
  document.getElementById('btn').onclick=clickHandler;
  document.getElementById('deposit').onclick=depoHandler;
  document.getElementById('debit').onclick=debitHandler;

    class Bank{
        // #name;
            constructor(name,depo){
                this.name=name;
                this.depo=depo
            }

        }
    const accountInfoList =[]
   function depoHandler(){
    depDepo='deposit'
    createDropDown()
   }

   function debitHandler(){
    depDepo='debit'
    createDropDown()

   }
   function createDropDown(){
    const myDiv = document.getElementById('dropDown')

    myDiv.removeChild(myDiv.lastChild)

    const lastChild = document.createElement('div')
    myDiv.appendChild(lastChild)

    const mySelect = document.createElement('select')
    mySelect.id='select'
    mySelect.style.marginRight='5px'
    for(let x of accountInfoList){
        const myOption = document.createElement('option')
        myOption.innerHTML=x.name
        mySelect.appendChild(myOption)
    }
    lastChild.appendChild(mySelect)
 
    const myInp = document.createElement('input')
    myInp.id='myInp'
    myInp.style.marginRight='5px'
    lastChild.appendChild(myInp)
    const myBtn = document.createElement('button')
    myBtn.id='myBtn'
    myBtn.innerHTML='Submit'
    lastChild.appendChild(myBtn)
    document.getElementById('myBtn').onclick=handleSubmit

   }
   function handleSubmit(){
      const amount = Number(document.getElementById('myInp').value)
      const acc =document.getElementById('select').value;
     const index = accountInfoList.findIndex(x=>x.name===acc)
     if(depDepo==='deposit'){
        accountInfoList[index].depo= accountInfoList[index].depo+amount
        console.log(accountInfoList);
     }else{
         const finalAmount =accountInfoList[index].depo-amount
         if(finalAmount>=0){
            accountInfoList[index].depo= finalAmount

         }else{
             alert('cannot debit more than balance')
             return;
         }
     }
     fill()
    
   }
   function fill(){
    let txtA = document.getElementById('textA')
    //    let pTag = document.createElement('p')
      let str=""
    
      for(let acc of accountInfoList ){
       str+= `Account name:${acc.name} Balance :${acc.depo} &#13;&#10;`
    
      }
      txtA.innerHTML=str
   }
function clickHandler(){
    console.log('calling.....')
   let acc= document.getElementById('accInp').value;
   let depo= Number(document.getElementById('depoInp').value);
   let isNumber = Number(depo)
   console.log(isNumber);
   if(isNumber){
      
    let newBank = new Bank(acc,depo)
    const exist =accountInfoList.find((acc)=>acc.name===newBank.name)
    if(!exist){
     accountInfoList.push(newBank);
     fill()
    //  let txtA = document.getElementById('textA')
    //  //    let pTag = document.createElement('p')
    //    let str=""
     
    //    for(let acc of accountInfoList ){
    //     str+= `Account name:${acc.name} Balance :${acc.depo} &#13;&#10;`
     
    //    }
    //    txtA.innerHTML=str
   
   }else{
    alert(`account ${acc} already exists` )

   }
   }else if(!acc||!depo){
       
    alert('deposit and name are required !!!!')
   }else{
    alert('deposit should be number !!!!')
}

//   txtA.innerHTML= `Account name:${newBank.name} Balance :${newBank.depo} &#13;&#10; xxxxxxx`


//    txtA.appendChild(pTag)
//    console.log(txtA,pTag)

}






    
}






// class Bank{
//     constructor(){

//     }
// }


