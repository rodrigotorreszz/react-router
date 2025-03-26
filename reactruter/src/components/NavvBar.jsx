import React from "react";
import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/calculadora">Calculadora</Link>
                </li>
                <li>
                    <Link to="/formulario-estudiantes">Formulario Estudiantes</Link>
                </li>
                <li>
                    <Link to="/componentes">Componentes</Link>
                </li>
                <li>
                    <Link to="/props">Props</Link>
                </li>
                <li>
                    <Link to="/todo">Todo</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
