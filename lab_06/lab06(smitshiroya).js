function problem_1() 
{

  var num = parseInt(prompt("Please enter a number: ", ""));
  prime = true;
 var d = 2;

 while(prime == true && d <= num/2)
 {
     if(num % d == 0)
     {
         prime = false;
     }
     else
     {
         d = d + 1;
     }
 }
    if(prime == true)
    {
        alert(num + " is prime");
    }
    else{
        alert("it is not prime");
    }
}

function problem_2()
{
    var sum1 = 0;
    var sum2 = 0;

    for(i = 1; i <= 4; i ++)
    {
        var num = parseInt(prompt("enter a number: "));
        sum1 = sum1 + num;
    }
    for(i = 1; i <= 4; i ++)
    {
        var num = parseInt(prompt("enter a number: "));
        sum2 = sum2 + num;
    }
    if(sum1 == sum2)
    {
        alert("yes");
    }
    else
    {
        alert("no");
    }
}

function problem_3()
{
    var p = 0;
    var n = 0;

    do {
         var num = parseInt(prompt("Enter a number:"));
        
         if(num > 0)
        {
            p = p + 1;
        }
        else if(num < 0)
        {
            n = n + 1;
        }
    }

    while(num !=0 && p <= 2*n )
    
}

function problem_4()
{
    var cnt1 = 0;
    var cnt2 = 0;

    for(i = 1; i <= 4; i ++)
    {
        var num = parseInt(prompt("enter a number: "));
        if(num < 0)
        {
            cnt1 = cnt1 + 1;
        }
    }

    for(i = 1; i <= 4; i ++)
    {
        var num = parseInt(prompt("enter a number: "));
        if(num > 0)
        {
            cnt2 = cnt2 + 1;
        }
    
        }

        if(cnt1 == cnt2)
        {
            alert("yes");

        }
        else
        {
            alert("no");
        }
}

function problem_5()
{
    var num = parseInt(prompt("enter a number: ")); 
    var outputObj=document.getElementById("output");
    outputObj.innerHTML = "output:";

    for(i = 2;i <= num; i ++)
    {
        if(prime(i) == true)
        {
            outputObj.innerHTML = outputObj.innerHTML + i + ", ";
        }
    }

}

function prime(i)
{
    flag = true;
    var d = 2;

    while(flag == true && d <= i/2)
    {
        if(i % d == 0)
        {
            flag = false;
        }
        d = d + 1;
    }
    return flag;
}

function problem_6()
{
    var num = parseInt(prompt("enter a number: ")); 
    var outputObj=document.getElementById("output");
    outputObj.innerHTML = "output:";

    for(i = 2;i <= num; i ++)
    {
        if(prime(i) == true && i == has7(i))
        {
            outputObj.innerHTML = outputObj.innerHTML + i + ", ";
        }
    }
}


function has7(i)
{
    var p = i;
    var r = 0;
    var cnt=0;

    while(i != 0)
    {
        r = i % 10;

        if(r == 7)
        {
            cnt = cnt + 1;
        }
        i = Math.floor(i/10) ;
    }

    if(cnt > 0)
    {
        return p;
    }
}