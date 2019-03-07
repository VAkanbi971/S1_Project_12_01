"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Victor Akanbi
   Date:   2.28.19
   
   Filename: tc_cart.js
	
*/
// give the variblle of total a valaue of 0
var orderTotal = 0;
// var cartHTML is the starting of the table as its value
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
// for loop for cart items and descriptions 
for (var i = 0; i < item.length; i++) {

    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "'/></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";

    var itemCost = itemPrice[i] * itemQty[i];

    cartHTML += "<td>$" + itemCost + "</td></tr>";

    orderTotal += itemCost;
}

// finishing off the cart table
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";
// gets a element by id 
document.getElementById('cart').innerHTML = cartHTML;