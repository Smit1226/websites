function equation()
 {
   //precondition: 
   //	num1 represents a Real number. num2 represents a Real number
   //Postcondition:
   //	The sum of num1 and num2 has been outputted                                


   var a =parseInt (document.getElementById("num1").value);
   var b =parseInt (document.getElementById("num2").value);
   var c =parseInt (document.getElementById("num3").value);
   
      var x1 = b*b;
      var x2 = 4*a*c;
      if( x1 == x2)
      {
         roots = "its root are identical ";
      }
      else if(x1 > x2)
      {
         roots = "it has two distict roots ";
      }
      
      else
      {    
         roots= "it has no roots in real number ";
      }
    
 
      document.getElementById("output").innerHTML = roots;
      
         
}
