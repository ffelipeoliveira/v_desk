import React from 'react'
import ReactDOM from 'react-dom/client'

//Components
import Navbar from './components/Navbar';
import Canvas from './components/Canvas';

//CSS
import '../src/assets/css/Body.css';
import '../src/assets/css/Colors.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </head>
      <Navbar></Navbar>
      <Canvas></Canvas>
  </React.StrictMode>,
)
