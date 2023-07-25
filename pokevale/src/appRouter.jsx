import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { Pokemons } from "./Pages/Pokemons";
import { Home, Search } from "./Pages";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="pokemon/:id" element={<Pokemons/>}/>
                <Route path="/search" element={<Search/>}/>
            </Route>

            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>

    )


}

export default AppRouter