// importiamo il componente segnaposto della libreria di router
import { Outlet } from "react-router-dom";

// importiamo i componenti che formano il layout
import Header from "./../components/Header";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}