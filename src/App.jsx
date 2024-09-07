import './App.css'
import AddProducts from './pages/Addproducts'
import Routes from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Routes />
      <ToastContainer/>
    </>
  )
}

export default App
