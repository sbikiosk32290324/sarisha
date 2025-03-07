function multiply()
    {
	
	var final_data= document.getElementById("note1").value;
      var qnt=document.getElementById("Quantity1").value;
        var amt=final_data*qnt;
      document.getElementById("total1").value=amt;

	  var note3= document.getElementById("note3").value;
      var qnt3=document.getElementById("Quantity3").value;
        var amt3=note3*qnt3;
      document.getElementById("total3").value=amt3;
	 
	  var note5= document.getElementById("note5").value;
      var qnt5=document.getElementById("Quantity5").value;
        var amt5=note5*qnt5;
      document.getElementById("total5").value=amt5;
	  
	
	  
	  var note7= document.getElementById("note7").value;
      var qnt7=document.getElementById("Quantity7").value;
        var amt7=note7*qnt7;
      document.getElementById("total7").value=amt7;
	  
	
	  
	  var note9= document.getElementById("note9").value;
      var qnt9=document.getElementById("Quantity9").value;
        var amt9=note9*qnt9;
      document.getElementById("total9").value=amt9;
	  
	
	  
	  var note11= document.getElementById("note11").value;
      var qnt11=document.getElementById("Quantity11").value;
        var amt11=note11*qnt11;
      document.getElementById("total11").value=amt11;
	  
	
	  
	  var note13= document.getElementById("note13").value;
      var qnt13=document.getElementById("Quantity13").value;
        var amt13=note13*qnt13;
      document.getElementById("total13").value=amt13;
	  
	  var note14= document.getElementById("note14").value;
      var qnt14=document.getElementById("Quantity14").value;
        var amt14=note14*qnt14;
      document.getElementById("total14").value=amt14;
	  
	  var note15= document.getElementById("note15").value;
      var qnt15=document.getElementById("Quantity15").value;
        var amt15=note15*qnt15;
      document.getElementById("total15").value=amt15;
	  
	  var note16= document.getElementById("note16").value;
      var qnt16=document.getElementById("Quantity16").value;
        var amt16=note16*qnt16;
      document.getElementById("total16").value=amt16;
	
	  
	  var total1= document.getElementById("total1").value;
	    var total1= document.getElementById("total3").value;
	    var total1= document.getElementById("total5").value;
	    var total1= document.getElementById("total7").value;
	    var total1= document.getElementById("total9").value;
	    var total1= document.getElementById("total11").value;
	    var total1= document.getElementById("total13").value;
	    var total1= document.getElementById("total14").value;
	    var total1= document.getElementById("total15").value;
	    var total1= document.getElementById("total16").value;
	  
	  
	 
	
	  
	  var amtg=+(total1)+ +(total3)+ +(total5)+ +(total7)+ +(total9)+ +(total11)+ +(total13)+ +(total15)+ +(total14)+ +(total16)  ;
	  document.getElementById("all_total").value=amtg;
	  
	  
	document.getElementById("Quantity1").max = "100";
	    document.getElementById("Quantity3").max = "300";
	    document.getElementById("Quantity5").max = "500";
	    document.getElementById("Quantity7").max = "500";
	    document.getElementById("Quantity9").max = "500";
	     document.getElementById("Quantity11").max = "500";
	     document.getElementById("Quantity13").max = "100";
	     document.getElementById("Quantity14").max = "100";
	     document.getElementById("Quantity15").max = "100";
	     document.getElementById("Quantity16").max = "100";
	    
	    
	
	    
	  } 
