import React from 'react'
import Navbar from './Navbar'  // Import the Navbar component
import Footer from './Footer';
import Body from './body';


function App() {
  return (
    <div className='w-full h-screen bg-zinc-900'>
      <Navbar />  
      <Body />
      <Footer />
    </div>
  )
}

export default App
