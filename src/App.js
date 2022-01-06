import React, { useState } from 'react';
import Header from './components/Header';
import MainCards from './components/MainCards';
import Overview from './components/Overview';
import "./stylesheets/main.scss"
function App() {
  //setting dark mode state and passing to the Header
  const [darkmode, setDarkmode] = useState(false);

  const handleToggle = () => {
    //console.log("foo")
    setDarkmode(!darkmode)
  }

  return (
    <>
    <Header 
    mode={darkmode} 
    toggle={handleToggle}
     />
    <MainCards mode={darkmode} />
    <Overview mode={darkmode} />
    </>
  );
}

export default App;