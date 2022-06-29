import React, { Component, Suspense ,} from 'react'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/App.css'

const Home = React.lazy(() => import('./pages/Home'))
const Addcontact = React.lazy(() => import('./pages/AddContact'))
const Login = React.lazy(() => import('./pages/Login/login'))
const Register = React.lazy(() => import('./pages/Register'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense>
          <Navbar />
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="addcontact" element={<Addcontact />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App