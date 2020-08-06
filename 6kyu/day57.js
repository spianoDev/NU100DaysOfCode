// https://www.codewars.com/kata/5d23d89906f92a00267bb83d
// Level 6kyu

/** Directions **/

// Some new cashiers started to work at your restaurant.
//
// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!
//
// All the orders they create look something like this:
//
// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
//
// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.
//
// Their preference is to get the orders as a nice clean string with spaces and capitals like so:
//
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
//
// The kitchen staff expect the items to be in the same order as they appear in the menu.
//
// The menu items are fairly simple, there is no overlap in the names of the items:
//
// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke
/** Function **/

function getOrder(input) {
    // variable to hold the order in
    let orderIn = [];
    // variable to hold remaining items
    let dishes = [];
    // first need to split up the input into the individual dishes
    // since each dish has a unique first letter, slice up the input accordingly
    while (input.length > 0) {
        if (input[0] === 'b') {
            dishes.push(input.slice(0, 6));
            input = input.slice(6);
        } else if (input[0] === 'f') {
            dishes.push(input.slice(0, 5));
            input = input.slice(5);
        } else if (input[0] === 'c' && input[1] === 'h') {
            dishes.push(input.slice(0, 7));
            input = input.slice(7);
        } else if (input[0] === 'p') {
            dishes.push(input.slice(0, 5));
            input = input.slice(5);
        } else if (input[0] === 's') {
            dishes.push(input.slice(0, 8));
            input = input.slice(8);
        } else if (input[0] === 'o') {
            dishes.push(input.slice(0, 10));
            input = input.slice(10);
        } else if (input[0] === 'm') {
            dishes.push(input.slice(0, 9));
            input = input.slice(9);
        } else if (input[0] === 'c' && input[1] === 'o') {
            dishes.push(input.slice(0, 4));
            input = input.slice(4);
        } else {
            console.log('This dish is not available today...');
        }
    }
    console.log(dishes);
    // now need to get the order put into the same order as the menu
    for (let dish of dishes) {
        if (dish[0] === 'b') {
            orderIn += dish[0].toUpperCase() + dish.slice(1) + " ";
        }
    }
    // since the order is not alphabetical, continue this looping until each menu item is added to the string
    for (let dish of dishes) {
        if (dish[0] === 'f') {
            orderIn += dish[0].toUpperCase() + dish.slice(1) + " ";
        }
    }
    for (let dish of dishes) {
        if (dish[0] === 'c' && dish[1] === 'h') {
            orderIn += dish[0].toUpperCase() + dish.slice(1) + " ";
        }
    }
    for (let dish of dishes) {
        if (dish[0] === 'p') {
            orderIn += dish[0].toUpperCase() + dish.slice(1) + " ";
        }
    }
    for (let dish of dishes) {
        if (dish[0] === 's') {
            orderIn += dish[0].toUpperCase() + dish.slice(1) + " ";
        }
    }
    for (let dish of dishes) {
        if (dish[0] === 'o') {
            orderIn += dish[0].toUpperCase() + dish.slice(1) + " ";
        }
    }
    for (let dish of dishes) {
        if (dish[0] === 'm') {
            orderIn += dish[0].toUpperCase() + dish.slice(1) + " ";
        }
    }
    for (let dish of dishes) {
        if (dish[0] === 'c' && dish[1] === 'o') {
            orderIn += dish[0].toUpperCase() + dish.slice(1) + " ";
        }
    }
    // return the orderIn value with the extra space on the end taken off
    console.log(orderIn.trim());
    return orderIn.trim();
}
// The above response is a 'brut force' answer and is not best practice.
/** Advanced Solution (Refactored) **/

// eventually I would like to return to this and refactor it...

/** Test Cases **/
getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza");
// => "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
// getOrder("pizzachickenfriesburgercokemilkshakefriessandwich");
// => "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"
// getOrder("burgerfries");
