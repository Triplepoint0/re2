function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
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

 //Set up an associative array
 //The keys represent the size of the cake
 //The values represent the cost of the cake i.e A 10" cake cost's $35
 var material_prices = new Array();
 material_prices["Papers"]=.58;
 material_prices["Plastics"]=.135;
 material_prices["Metals"]=.48;
 
 
 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
 //We use this this array when the user selects a filling from the form
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

 
	 
	 
// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getMaterialPrice()
{  
    var materialPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["calcform"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedMaterial = theForm.elements["selectedmat"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedMaterial.length; i++)
    {
        //if the radio button is checked
        if(selectedMaterial[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            totalPrice = material_prices[selectedMaterial[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return totalPrice;
}

//This function finds the filling price based on the 
//drop down selection
function getWeight()
{
    var cakeFillingPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["calcform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["filling"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    weightinlbs = pounds[selectedFilling.value];

    //finally we return cakeFillingPrice
    return weightinlbs;
}

//candlesPrice() finds the candles price based on a check box selection

 function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var finalPrice = getMaterialPrice() * getWeight();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Payout: $"+finalPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}