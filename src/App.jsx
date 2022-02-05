import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Layout from './layout/Layout'
import NuevoCliente from './pages/NuevoCliente'
import EditarClientes from './pages/EditarClientes'
import VerCliente from './pages/VerCliente'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />}/>
          <Route path="nuevo" element={<NuevoCliente />}/>
          <Route path="editar/:id" element={<EditarClientes />}/>
          <Route path=":id" element={<VerCliente />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
