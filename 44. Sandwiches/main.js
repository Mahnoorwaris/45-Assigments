"use strict";
function makeSandwich(items) {
    console.log("Making a sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!\n");
}
makeSandwich(["Bread ", "Capsicum", "Cheese", "Hard boiled-eggs", "Chicken Patie", "barbque sauce"]);
makeSandwich(["Bread", "Onions", "Mayonnise", 'Beef patie']);
makeSandwich(["Bread", "Tomatos", "Green Chilies", "Mutton patie", "Tanduri sauce"]);
