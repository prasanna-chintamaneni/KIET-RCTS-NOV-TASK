import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Cards from './components/Cards/Cards'; 
import PieCharts from './components/PieCharts/PieCharts';
import Table from './components/Table/Table';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/cards" element={<Cards />} />
          <Route path="/piechart" element={<PieCharts />} />
          <Route path="/table" element={<Table />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Sidebar>
      <Footer />
    </div>
  );
}
export default HomePage;
