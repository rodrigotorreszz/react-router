import { BrowserRouter as Router, Route, Routes } from "react-router";
import NavVBar from "./components/NavvBar";
import Calculadora from "./pages/Calculadora";
import FormularioEstudiantes from "./pages/FormularioEstudiantes";
import Componentes from "./pages/Componentes";
import Props from "./pages/Props";
import Todo from "./pages/Todo";

const App = () => {
    return (
        <Router>
            <NavVBar />
            <Routes>
                <Route path="/calculadora" element={<Calculadora />} />
                <Route path="/formulario-estudiantes" element={<FormularioEstudiantes />} />
                <Route path="/componentes" element={<Componentes />} />
                <Route path="/props" element={<Props />} />
                <Route path="/todo" element={<Todo />} />
            </Routes>
        </Router>
    );
};

export default App;

