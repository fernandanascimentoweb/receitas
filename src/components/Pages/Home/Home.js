import React from 'react';
import './Home.css';
import NavBar from '../../NavBar/NavBar';
import Card from '../../Card/Card';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


const Home = () => {
  return (
   <>
    <NavBar />
    <Header />
    <Card />
      <Footer />
   </>
  )
}

export default Home