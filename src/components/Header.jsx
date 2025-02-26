import NavBar from "./Navbar";

export default function Header() {

    //DATI RICAVATI PER LA GESTIONE DEI LINK DELLA NAVBAR
    const links = [
        { id: 1, text: 'Home', url: '/' },



    ];

    return (
        <header>
            <NavBar linksProp={links} />
        </header>
    );
}