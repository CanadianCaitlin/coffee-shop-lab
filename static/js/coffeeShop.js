"use strict";

// function takes in an item name (string) and adding to the cart
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// deletes any items in the cart
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

// updating total amount in cart based on "price" input
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

// updates headline "We've proudly served X cups of coffee"
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

// takes in a number and a string
// converts number to a percent to update order status bar
// string is displayed at bottom of screen
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//


// const button = document.querySelector('.add-to-order');

$('.add-to-order').on('click', ()  => {
  addItemToCart('Coffee');
  incrementCartTotal(1.5);
  
  // console.log(evt.target);
});

$('#place-order').on('click', ()  => {
  let num = $('#cart-items').children().length
  incrementCoffeeSold(num);
  resetCart();
});