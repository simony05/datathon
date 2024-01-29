import React from 'react';
import './footer.css'


const Footer = () => {
  return <div>
      <footer className='footer-style'>
        <p style={{color:"black", fontSize:"60"}}><span>Wine quality prediction model is trained on <a href="https://www.kaggle.com/datasets/uciml/red-wine-quality-cortez-et-al-2009">Red Wine Quality </a> in <a href="https://www.singlestore.com/">SingleStore</a> by Simon and Kenneth</span></p>   
    </footer>
  </div>;
};

export default Footer;
