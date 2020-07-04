var  btn = document.getElementById("button");
var interval;
var element = document.querySelectorAll(".counter p");
btn.addEventListener("click", function(){
    var number = parseInt(document.getElementById("number").value);
    console.log(number);
    var count=0;
    if(number>99999 || number<1){
        alert("Enter value from 1 to 99999");
        clearInterval(interval);
        return;
    }
    if(isNaN(number))
    {
        alert("Enter a Number");
        clearInterval(interval);
        return;
    }
    resetNumbers();
    clearInterval(interval);

    interval = setInterval(function() {
        if(count === number) {
            clearInterval(interval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(element,4);
        count++;
    }, 500);


});

function resetNumbers()
{ 
    for(var i=0;i<5;i++)
    {
        element[i].innerText=0;
    }
}

function increaseCount(element,index)
{let current = element[index];
    var no=parseInt(current.innerText);
    if(no == 9) {   
        current.innerText = 0;
        increaseCount(element, index-1);
    }
    else{
    var ans = no+1;
    current.innerText = ans;
    }
}