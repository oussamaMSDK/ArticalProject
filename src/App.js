import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Add, Article, ArticleDb, Home, HomeDb, Login } from './Pages/Index';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap';
import 'popper.js';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Article/:id' element={<Article/>}/>
        <Route path='/homedb' element={<HomeDb/>}/>
        <Route path='/ArticleDb/:id' element={<ArticleDb/>}/>
        <Route path='/Add' element={<Add/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
