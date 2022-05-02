function p01Func() {
	
  /* in Ex2, add a getElementById here to get the "probelm" div and 
     set its innerHTML to <p>I'm looking for a type of ...</p>
  */


 document.getElementById("problem");
  document.getElementById("problem").innerHTML="<p>I'm looking for a type of pancake originating from the Indian subcontinent, made from a fermented batter. It is somewhat similar to a crepe in appearance.</p>"
  
  
  /* in Ex2, add a getElementById here to get "flowchart" img and 
     set its attribue src to dosaDesign.jpg. Note that dosa images are 
	 in subfolder dosa inside images folder.
  */

   document.getElementById("flowchart").setAttribute("src","dosaDesign.jpg");

  /* in Ex2, add a getElementById here to get "flowchart" img and 
     set the display property of its style to none
  */

   document.getElementById("flowchart").style.display="none";
  
  /* in Ex2, repeat the above two steps for "js" img here
     for the image that is shown for "js", use dosa1.jpg 
  */
  
  document.getElementById("js").setAttribute("src","dosa1.jpg");
  document.getElementById("js").style.display="none";
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
}




/* in Ex3, uncomment the following function and complete it*/


function checkUncheck1(){
  if (document.getElementById("check1").checked==true)
   {
      document.getElementById("flowchart").style.display="inline"; 
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to "inline"


	 
   }
  else
   {
      document.getElementById("flowchart").style.display="none";
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to "none"	 
	  
	  
  }
}

function checkUncheck2(){
  if (document.getElementById("check2").checked==true)
   {
      document.getElementById("js").style.display="inline";
     // add a getElementById here to get "js" img and 
     // set the display property of its style to "inline"	 
	 
	 
  }
  else 
  {
   document.getElementById("js").style.display="none";
     // add a getElementById here to get "js" img and 
     // set the display property of its style to "none"	 
	  
	  
  }
}

function checkUncheck3(){
   if (document.getElementById("check3").checked==true)
    {
       document.getElementById("another").style.display="inline";
       
   }
  else 
   {
   document.getElementById("another").style.display="none"; 
   }

}


function p02Func()
{
   document.getElementById("problem");
   document.getElementById("problem").innerHTML="<p>I'm looking for an Iranian dish that consists of grilled chunks of chicken which are sometimes with bone and other times without bone. It'ss one of the most popular dishes of Iran. It is common to marinate the chunks in minced onion, lemon juice and sometimes saffron.</p>"

   document.getElementById("flowchart").setAttribute("src","jujehDesign.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","jujeh1.jpg");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","jujeh2.jpg");
   document.getElementById("another").style.display="none";

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
   
}
/* in Ex4, or step 4 of Ex2, you need to create function
   checkUncheck3, which is similar to checkUncheck 1 and 2
*/



/* in Ex4, create function p02Func similar to p01Func */

/* in Ex5, create functions zoomIn() and zoomOut() */
