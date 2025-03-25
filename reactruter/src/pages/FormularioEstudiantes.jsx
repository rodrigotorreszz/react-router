import React, { useState } from 'react';
import './Trabajo.css';

const Registro = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [carnet, setCarnet] = useState("");
    const [estudiantes, setEstudiantes] = useState([]);

    const agregarEstudiante = () => {
        if (!nombre.trim() || !edad.trim() || !carnet.trim()) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        setEstudiantes([
            ...estudiantes,
            { id: Date.now(), nombre: nombre, edad: edad, carnet: carnet }
        ]);
        setNombre("");
        setEdad("");
        setCarnet("");
    };

    return (
        <div className="Agregar-Estudiantes">
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            <input
                type="text"
                placeholder="Carnet"
                value={carnet}
                onChange={(e) => setCarnet(e.target.value)}
            />
            <button onClick={agregarEstudiante}>Agregar</button>

            <h1>Listado</h1>

            <ul className="Mostrar-Estudiantes">
                {estudiantes.map((estudiante) => (
                    <li className='estudiante' key={estudiante.id}>
                        <span >
                            Nombre: {estudiante.nombre}, Edad: {estudiante.edad}, Carnet: {estudiante.carnet}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Registro;