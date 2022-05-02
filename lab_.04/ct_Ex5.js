// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function mapping()
 {
   //precondition: 
   //	num1 represents a Real number. num2 represents a Real number
   //Postcondition:
   //	The sum of num1 and num2 has been outputted                                
   /* in Ex1, change the following two lines such that 
      num1 and num2 are parsed to integer before be 
      assigned to w and h, respectively.                   */
   /* in Ex 2, rename w and h to a and b, respectively.    */
   
   var a =parseInt (document.getElementById("num1").value);

   if (a>89) 
   {
      answer="A+";
   }
      
   else if (a>79) 
   {
      answer="A";
   }
       
   else if(a>69)
   { 
       answer="B+";
   }
   else if(a>64)
   { 
       answer="B";
   }
   else if(a>59)
   { 
       answer="c+";
   }
   else if(a>54)
   { 
       answer="c";
   }
   else if(a>49)
   { 
       answer="D+";
   }
   else if(a>44)
   { 
       answer="D";
   }
   else if(a>39)
   { 
       answer="E";
   }
   else
   {
       answer="F";
   }
   

   /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
      to those problems, you may also need to rename s to a better 
      varibale that you have in your formulas above */
      document.getElementById("output").innerHTML = answer;     
}
