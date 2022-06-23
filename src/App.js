import React from 'react';
import "./components/FontawsomeIcons";
import './App.css';
import { Routes,Route } from 'react-router';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import RegisterUserPage from './components/auth/RegisterUserPage';
import Footer from './components/Footer';
import Products from './components/Products';
import IndexPage from './components/IndexPage';

// REDUX
import { Provider } from "react-redux"
import store from './redux/store';
import UploadFile from './components/upload/UploadFile';


function App() {
  return (

    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterUserPage/>} />
        <Route path="/userinfo" element={<Products/>} />
        <Route path="/uploadfile" element={<UploadFile/>} />

        <Route path="/" element={<IndexPage/>} />

      </Routes>
        <Footer/>
        </Provider>
    </div>


  );
}

export default App;
