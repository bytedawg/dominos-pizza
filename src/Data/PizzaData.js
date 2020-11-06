export const foodItems = [
    {
        name: 'Loaded Supreme',
        img: './images/Loaded_Supreme.png',
        submenu: 'Pizza'
    },
    {
        name: 'Loaded Burger',
        img: './images/Loaded_Burger.png',
        submenu: 'Pizza'
    },
    {
        name: 'Chicken, Bacon & Avocado',
        img: './images/Chicken_Bacon_Avocado.png',
        submenu: 'Pizza'
    },
    {
        name: 'Chicken and Camembert',
        img: './images/Chicken_Camembert.png',
        submenu: 'Pizza'
    },
    {
        name: 'Mega Meatlover',
        img: './images/Mega_MeatLover.png',
        submenu: 'Pizza'
    },
    {
        name: 'Taco Fiesta',
        img: './images/Taco_Fiesta.png',
        submenu: 'Pizza'
    },
    {
        name: 'Cheese and Garlic',
        img: './images/cheese_and_garlic.png',
        submenu: 'Favorites'
    },
    {
        name: 'Choco Lava',
        img: './images/chocolava.png',
        submenu: 'Favorites'
    },
    {
        name: 'Value Box',
        img: './images/value_box.jpg',
        submenu: 'Favorites'
    },
    {
        name: 'Value Chicken',
        img: './images/value_chicken.jpg',
        submenu: 'Favorites'
    }
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.submenu]){
        res[food.submenu] = [];
    }
    res[food.submenu].push(food);
    return res;
}, {});