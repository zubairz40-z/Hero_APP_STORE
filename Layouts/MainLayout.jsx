import React from 'react';
import { Outlet } from 'react-router';
import Footer from './../src/Components/Footer/Footer';
import Navbar from '../src/Components/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-11/12">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
