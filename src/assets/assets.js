import farofa from './farofa-banana.jpeg';
import fricasse from './fricasse.jpeg';
import mousse from './mousse-maracuja.jpeg';
import pao from './pao-caseiro.jpeg';
import pudim from './pudim.jpeg';


export const assets = {
    farofa,
    fricasse,
    mousse,
    pao,
    pudim
}

export const food_list = [
    {
        _id: "1",
        name: "Farofa banana",
        image: farofa,
        info: "../components/Pages/Receitas/Farofa/FarofaBanana.js"
    },
    {
        _id: "2",
        name: "Fricasse de frango",
        image: fricasse,
        info: "../components/Pages/Receitas/Fricasse/Fricasse.js"
    },
    {
        _id: "3",
        name: "Mousse de maracuja",
        image: mousse,
        info: "../components/Pages/Receitas/Mousse/Mousse.js"
    },
    {
        _id: "4",
        name: "Pão caseiro",
        image: pao,
        info: "../components/Pages/Receitas/Pao/PaoCaseiro.js"
    },
    {
        _id: "5",
        name: "Pudim de leite",
        image: pudim,
        info: "../components/Pages/Receitas/Pudim/Pudim.js"
    }
]