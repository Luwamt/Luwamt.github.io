function booyah1(){
    alert("BOOYAH1");

}  
    function booyah2(){
        
        return (function x(){
            alert("BOOYAH2");
        })
        
    }

    setTimeout(booyah1,2000);
    setTimeout(booyah2(),2000);