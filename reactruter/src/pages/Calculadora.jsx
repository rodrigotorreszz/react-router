import React, { useState } from 'react';
import './calculadora.css';

const Calculadora = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };
    const handleRestar = () => {
        const restar = parseFloat(num1) - parseFloat(num2);
        setResultado(restar);
    };
    const handleMultipolicar = () => {
        const multiplicación = parseFloat(num1) * parseFloat(num2);
        setResultado(multiplicación);
    };
    const handleDividir = () => {
        const divición = parseFloat(num1) / parseFloat(num2);
        setResultado(divición);
    };

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleSumar}>Sumar</button>
            <br />
            <button onClick={handleRestar}>Restar</button>
            <br />
            <button onClick={handleMultipolicar}>Multiplicar</button>
            <br />
            <button onClick={handleDividir}>Dividir </button>

            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    );
};

export default Calculadora;