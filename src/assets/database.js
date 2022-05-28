import pizza from './img/pizza.jpg';
import lavash from './img/lavash.jpg';
import cheeseburger from './img/cheeseburger.jpg';
import hamburger from './img/hamburger.jpg';
import shaurma from './img/shaurma.jpg';
import tea from './img/tea.jpg';
import coffee from './img/coffee.jpg';
import cocaCola from './img/coca-cola.jpg';
import pepsi from './img/pepsi.jpg';
import fanta from './img/fanta.jpg';

export const products = [
    {
        id: 1,
        title: 'pizza',
        category: 'kitchen',
        photo: pizza,
        price: 40000
    },
    {
        id: 2,
        title: 'lavash',
        category: 'kitchen',
        photo: lavash,
        price: 20000
    },
    {
        id: 3,
        title: 'cheeseburger',
        category: 'kitchen',
        photo: cheeseburger,
        price: 23000
    },
    {
        id: 4,
        title: 'hamburger',
        category: 'kitchen',
        photo: hamburger,
        price: 18000
    },
    {
        id: 5,
        title: 'shaurma',
        category: 'kitchen',
        photo: shaurma,
        price: 12000
    },
    {
        id: 6,
        title: 'tea',
        category: 'kitchen',
        photo: tea,
        price: 5000
    },
    {
        id: 7,
        title: 'coffee',
        category: 'kitchen',
        photo: coffee,
        price: 5000
    },

    {
        id: 8,
        title: 'coca-cola',
        category: 'storehouse',
        photo: cocaCola,
        price: 12000
    },
    {
        id: 9,
        title: 'fanta',
        category: 'storehouse',
        photo: fanta,
        price: 12000
    },
    {
        id: 10,
        title: 'pepsi',
        category: 'storehouse',
        photo: pepsi,
        price: 11000
    },
]

export const categories = [
    {
        id: 1,
        category: 'kitchen',
        title: 'Кухня',
    },
    {
        id: 2,
        category: 'storehouse',
        title: 'Склад',
    }
]

export const types = ['В зал', 'С собой', 'Доставка'];