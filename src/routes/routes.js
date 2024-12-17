import React from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes=()=>{
//Aqui preciso saber o estado do usuario, se está logado ou não.
//Se ele estiver logado, vou carregar o AppROute, se não AuthRoutes

    return <AuthRoutes></AuthRoutes>

}
export default Routes;