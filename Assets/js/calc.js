 //add values of selected to check boxes and display totals
 function calcTotal() {
     var itemTotal = 0;
     var items = document.getElementsByTagName("input");
     //js variable items for all HTML elements w the input tag

     for (var i = 0; i < 24; i++) {
         if (items[i].checked) //if the item is checked
         {
             itemTotal += (items[i].value * 1); //then item total is updated to the previous total + value of checked item. Mutplied by 1 so that JS knows that it is a num
         }

         document.getElementById("total").innerHTML = "Your order total is:  ₹" + itemTotal;
         //inner HTML fills in the space between the opening and closing <p> tags with the total
     }
 }

 function quanitychanged(event) {
     var input = event.target
     if (isNaN(input.value) || input.value <= 0) {
         input.value = 1
     }
     calcTotal()
 }
 //backwards compatibility for event listener submit button
 var calcButton = document.getElementById("calcButton"); //sButton HTML element is assign JS value of submitButton
 if (calcButton.addEventListener) //now you can add event listener
 {
     calcButton.addEventListener("click", calcTotal, false); //event is click, action is calctotal, false for bwc
 } else if (calcButton.attachEvent) {
     calcButton.attachEvent("onclick", calcTotal);
 }