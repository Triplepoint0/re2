function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/
 var material_prices = new Array();
 material_prices["Papers"]=.58;
 material_prices["Plastics"]=.135;
 material_prices["Metals"]=.48;
 
 var pounds= new Array();
 pounds["none"]=0;
 pounds["one"]=1;
 pounds["two"]=2;
 pounds["three"]=3;
 pounds["four"]=4;
 pounds["five"]=5;
 pounds["six"]=6;
 pounds["seven"]=7;
 pounds["eight"]=8;
 pounds["nine"]=9;
 pounds["ten"]=10;

function getMaterialPrice()
{  
    var totalPrice=0;

    var theForm = document.forms["calcform"];

    var selectedMaterial = theForm.elements["selectedmat"];

    for(var i = 0; i < selectedMaterial.length; i++)
    {

        if(selectedMaterial[i].checked)
        {

            totalPrice = material_prices[selectedMaterial[i].value];

            break;
        }
    }
    
    return totalPrice;
}

function getWeight()
{
    var weightinlbs=0;
   
    var theForm = document.forms["calcform"];
  
    var selectedFilling = theForm.elements["filling"];

    weightinlbs = pounds[selectedFilling.value];

    return weightinlbs;
}



 function calculateTotal()
{
  
    var finalPrice = getMaterialPrice() * getWeight();
    

    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Payout: $"+finalPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}