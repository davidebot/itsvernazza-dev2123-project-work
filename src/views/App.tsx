import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RouteEnum from "../constants/RouteEnum";
import GestionePage from "./gestione/GestionePage";
import ListaMovimenti from "./ListaMovimenti";
import FormInserimento from "./movimenti/formInserimento/FormInserimento";
import Template from "./Template";
import UserLoginPage from "./user/UserLoginPage";

const App: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />}>
                    <Route path="/" element={<Navigate to={RouteEnum.Login} replace={true} />} />
                    <Route path={RouteEnum.Login} element={<UserLoginPage />} />
                    <Route path={RouteEnum.Rubrica} element={<>TODO</>} />
                    <Route path={RouteEnum.Movimenti} element={<ListaMovimenti />} />
                    <Route path={RouteEnum.InserimentoBonifico} element={<FormInserimento />} />
                    <Route path={RouteEnum.AtmSimulato} element={<>TODO</>} />
                    <Route path={RouteEnum.Gestione} element={<GestionePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
