import Bruchetta from "../../assets/bruchetta.jpg";
import GreekSalad from "../../assets/greek salad.jpg";
import LemonDesset from "../../assets/lemon-dessert.jpg";

const MenuData = [
    {
        title: "Bruchetta",
        description: "Grilled bread with garlic and topped with olive oil",
        price: "12.50",
        img: Bruchetta
    },
    {
        title: "Greek Salad",
        description: "Fresh salad, onion, olives, feta cheese, dressing",
        price: "15.50",
        img: GreekSalad
    },
    {
        title: "Lemon Dessert",
        description: "Freshly baked. Light, fluffy, and deliciously tangy",
        price: "10.50",
        img: LemonDesset
    }
]

const StartersDataLeft = [
    {
        title: "Caprese Wrap",
        description: "Crispy wheat tortilla stuffed with cheese, cherry tomatoes, Iceberg lettuce, rucola and basil pesto.",
        price: "12.50",
    },
    {
        title: "Chicken Wings",
        description: "Chicken wings served with Da Graso garlic and BBQ sauce ",
        price: "15.50",
    },
    {
        title: "Chicken breaded strips",
        description: "Baked breaded chicken tenderloin served with garlic sauce and barbecue sauce decorated with a fresh basil leaf 310g",
        price: "10.50",
    }
]

const StartersDataRight = [
    {
        title: "Nacho Cheese",
        description: "Triangles with cheese in crispy coating with pieces of nachos served with BBQ and garlic sauce.",
        price: "12.50",
    },
    {
        title: "Tortilla with breaded chicken tender",
        description: "Crispy tortilla stuffed with chicken tender, cheese, iceberg lettuce, cucumber, tomato and garlic sauces.",
        price: "15.50",
    },
    {
        title: "Quesadilla Cheese",
        description: "Two tortillas baked with a lot of cheese, breaded chicken tender and BBQ sauce served with garlic sauce.",
        price: "10.50",
    }
]

const PastaDataLeft = [
    {
        title: "Crema Fungo",
        description: "Tagiatelle pasta in cream and mushroom sauce based on white wine with roasted chicken breast and parsley leaves",
        price: "12.50",
    },
    {
        title: "Arrabbiata",
        description: "Penne pasta in tomato sauce with basil, onion, fresh pepper, garlic and parmesan cheese – spicy",
        price: "15.50",
    },
    {
        title: "Bolognese",
        description: "BlSpaghetti pasta in tomato sauce with meat, garlic and parmesan cheesea",
        price: "10.50",
    }
]

const PastaDataRight = [
    {
        title: "Carbonara",
        description: "Spaghetti pasta in cream sauce based on white wine with bacon, onion and parmesan cheese",
        price: "12.50",
    },
    {
        title: "Spinaci",
        description: "Penne pasta in blue cheese sauce based on white wine with spinach, onion, garlic and parmesan cheese",
        price: "15.50",
    },
    {
        title: "Gambero Bianco",
        description: "Tagliatelle in cream sauce based on white wine with fried onion, shrimps, garlic and parsley, decorated with cherry tomatoes",
        price: "10.50",
    }
]

const PizzaData = [
    {
        title: "Margherita",
        description: "cheese, tomato pizza sauce, oregano",
        price: "12.50",
    },
    {
        title: "Capriciosa",
        description: "cheese, tomato pizza sauce, ham, mushrooms, oregano",
        price: "15.50",
    },
    {
        title: "Parma",
        description: "dough, tomato pizza sauce, mozzarella cheese, maturing ham, fresh basil, oregano",
        price: "10.50",
    },
    {
        title: "Napoletana",
        description: "cheese, tomato pizza sauce, salami, green olives, jalapeno peppers, oregano",
        price: "15.50",
    },
    {
        title: "Roma",
        description: "cheese, tomato pizza sauce, salami, thin smoked pork sausages, pickled peppers, oregano",
        price: "10.50",
    },
    {
        title: "Pepperoni",
        description: "cheese, tomato pizza sauce, salami pepperoni, oregano",
        price: "10.50",
    }
]

const BeveragesDataLeft = [
    {
        title: "Water",
        description: "Still/Sparkling",
        price: "2.50",
    },
    {
        title: "Pepsi",
        description: "330/500 ml",
        price: "3.00/5.00",
    },
    {
        title: "Sprite",
        description: "330/500 ml",
        price: "3.00/5.00",
    }
]

const BeveragesDataMiddle = [
    {
        title: "Espresso",
        description: "30 ml",
        price: "2.50",
    },
    {
        title: "Americano",
        description: "200 m",
        price: "5.50",
    },
    {
        title: "Cappucino",
        description: "160 ml",
        price: "4.50",
    }
]

const BeveragesDataRight = [
    {
        title: "Orange juice",
        description: "300 ml",
        price: "4.50",
    },
    {
        title: "Apple juice",
        description: "300 ml",
        price: "4.50",
    },
    {
        title: "Lemonade",
        description: "300ml",
        price: "6.50",
    }
]

export {
    MenuData,
    StartersDataLeft,
    StartersDataRight,
    PastaDataLeft,
    PastaDataRight,
    PizzaData,
    BeveragesDataLeft,
    BeveragesDataMiddle,
    BeveragesDataRight
};