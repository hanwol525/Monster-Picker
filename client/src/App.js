import {React, useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Generator from './components/generator/Generator';
import './style/app.scss';

export default function App() {
  return (
    <div style={{width: '100%', margin: 0}}>
      <app-toast aria-live="polite" aria-atomic="true"></app-toast>
      <Header />
      <Generator />
      <Footer />
    </div>
  );
};
