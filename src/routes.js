import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./components/Pages/Home/Home";
import Favorites from "./components/Pages/Favorites/index";

import FarofaBanana from "./components/Pages/Receitas/Farofa/FarofaBanana";
import Fricasse from "./components/Pages/Receitas/Fricasse/Fricasse";
import Mousse from "./components/Pages/Receitas/Mousse/Mousse";
import PaoCaseiro from "./components/Pages/Receitas/Pao/PaoCaseiro";
import Pudim from "./components/Pages/Receitas/Pudim/Pudim";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/favorites" element={<Favorites />} ></Route>

                <Route path='/farofa' element={<FarofaBanana />} />
                <Route path='/fricasse' element={<Fricasse />} />
                <Route path='/mousse' element={<Mousse />} />
                <Route path='/pao' element={<PaoCaseiro />} />
                <Route path='/pudim' element={<Pudim />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;


