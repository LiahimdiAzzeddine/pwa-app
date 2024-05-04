import React from 'react';
import './App.css';
import {LoginPage} from './pages/LoginPage';
import {DashboardPage} from './pages/DashboardPage'
import { Navbar } from './components/Navbar';
import {IndexedDbTest} from './pages/IndexedDbTest'
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/dashboard' element={<DashboardPage/>}></Route>
          <Route path='/IndexedDbTest' element={<IndexedDbTest/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
