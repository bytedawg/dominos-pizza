export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'AUD'
    })
}

export const foodItems = [
    {
        name: 'Loaded Supreme',
        img: './images/Loaded_Supreme.png',
        submenu: 'Pizza',
        price: 10
    },
    {
        name: 'Loaded Burger',
        img: './images/Loaded_Burger.png',
        submenu: 'Pizza',
        price: 9
    },
    {
        name: 'Chicken, Bacon & Avocado',
        img: './images/Chicken_Bacon_Avocado.png',
        submenu: 'Pizza',
        price: 9
    },
    {
        name: 'Chicken and Camembert',
        img: './images/Chicken_Camembert.png',
        submenu: 'Pizza',
        price: 8
    },
    {
        name: 'Mega Meatlover',
        img: './images/Mega_MeatLover.png',
        submenu: 'Pizza',
        price: 10
    },
    {
        name: 'Taco Fiesta',
        img: './images/Taco_Fiesta.png',
        submenu: 'Pizza',
        price: 8
    },
    {
        name: 'Cheese and Garlic',
        img: './images/cheese_and_garlic.png',
        submenu: 'Favorites',
        price: 8
    },
    {
        name: 'Choco Lava',
        img: './images/chocolava.png',
        submenu: 'Favorites',
        price: 9
    },
    {
        name: 'Value Box',
        img: './images/value_box.jpg',
        submenu: 'Favorites',
        price: 7
    },
    {
        name: 'Value Chicken',
        img: './images/value_chicken.jpg',
        submenu: 'Favorites',
        price: 17
    }
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.submenu]){
        res[food.submenu] = [];
    }
    res[food.submenu].push(food);
    return res;
}, {});