

// var sec = 15;
// var time = setInterval(myTimer, 1000);
// var time2 = setInterval(finish,2000)

// function myTimer() {
//     document.getElementById('start').innerHTML = sec + "sec left";
//     sec--;
//     if (sec == -1) {
//         clearInterval(time);
//         alert("Time out!! :(");
//     }
//     function finish(){
//         document.getElementById("submit").innerHTML="Thank you! your questions are submitted";
//        setInterval(time2);
       
//     }
function booyah1(){
    alert("BOOYAH1");

}  
    function booyah2(){
        
        return (function x(){
            alert("BOOYAH2");
        });
        
    }

    setTimeout(booyah1,2000);
    setTimeout(booyah2(),2000);