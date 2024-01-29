import './App.css';
import MyBarGraph from "./bargraph.js";
import * as React from 'react';
import Header from "./header.js";
import Footer from './footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='blurb'><span class="bolded">The importance of red wine quality lies in its dual impact on health and taste, creating a delightful and satisfying experience that enhances both well-being and enjoyment.</span></div>
      <MyBarGraph />
      
      <Footer/>
    </div>
  );
}

export default App;
