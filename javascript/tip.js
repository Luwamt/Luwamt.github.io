function calcTip(){
    
        let subtotal1=document.getElementById("subtotal").value;
        let tip2=document.getElementById("tip").value;
       

        document.getElementById("total").innerHTML= Number(subtotal1* Number(tip2/100))+ Number(subtotal1);
    
}