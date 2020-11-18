import {useState} from 'react';

export function useToppings(defaultTop) {
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings())
}


    const toppingList = [
        "Extra  Cheese",
        "Pepperoni",
        "Sausage",
        "Onions",
        "Peppers",
        "Pineapple",
        "Ham",
        "Spinach",
        "Artichokes",
        "Mushrooms",
        "Anchovies"
    ];


    function getDefaultToppings() {
        return toppingsList.map(topping => ({
          name: topping,
          checked: false
        }));
      }
