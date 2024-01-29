import './App.css';
import MyBarGraph from "./bargraph.js";
import * as React from 'react';
import Header from "./header.js";
import Tex2SVG from "react-hook-mathjax";
import Footer from './footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='blurb'><span class="bolded">The importance of red wine quality lies in its dual impact on health and taste, creating a delightful and satisfying experience that enhances both well-being and enjoyment.</span></div>
      <MyBarGraph />
      <div className="row">
        <div className='Col1'>
          <h1>Alcohol</h1>
          <div className="item">Remember to take hydrometer readings throughout the process to estimate alcohol content. If necessary, adjust sugar levels or dilute the wine to achieve your desired alcohol percentage</div>
          <div className="item">Initial Specific Gravity: Before fermentation begins, measure the specific gravity of the wine must using a hydrometer. Float the hydrometer in a sample of the wine must in a graduated cylinder or sample jar. Note the reading where the hydrometer's scale intersects the liquid level.</div>
          <div className="item">Fermentation: Allow the wine to ferment. During fermentation, the yeast will convert sugars into alcohol and carbon dioxide. The specific gravity will decrease as the sugar is consumed.</div>
          <div className="item">Fine Specific Gravity: After fermentation is complete, measure the final specific gravity using the same method as in step 1.</div>
          <div className="item">Tips: 
Adding sugar to a liquid will increase its specific gravity, while diluting the liquid with water will decrease the specific gravity. Specific gravity is a measure of the density of a substance compared to the density of water.</div>
        </div>
        <div className='Col1'>
          <h1>Sulphate</h1>
          <div className="item">
            <Tex2SVG display="inline" latex="Alcohol=(((InitialSG - FinalSG) x 131.25) / 7.362" />
          </div>
          <div className="item">In potassium sulfate (g/liter)</div>
          <div className="item">These compounds release sulfur dioxide when added to wine, helping to protect it from spoilage, oxidation, and unwanted microbial activity.</div>
          <div className="item">Based on the difference between the current sulfite level and the desired level, calculate the amount of potassium metabisulfite needed for adjustment. The calculation will depend on the volume of wine and the desired increase in SO2.</div>
          <div className="item">Crush campden tablets or measure the appropriate amount of potassium metabisulfite powder. Dissolve it in a small amount of warm water to create a sulfite solution. Stir until fully dissolved.</div>
          <div className="item">Slowly add the sulfite solution to the red wine, stirring gently to ensure even distribution. It's essential not to overshoot the desired sulfite level, so add the sulfite solution incrementally and retest if necessary.</div>
          <div className="item">After making the sulfite adjustment, wait for some time to allow the sulfites to fully integrate into the wine. Retest the sulfur dioxide level using the testing kit to ensure that it meets the desired target.</div>
        </div>
        <div className='Col1'>
          <h1>Citric Acid</h1>
          <div className="item">In winemaking, citric acid is sometimes used as an additive to adjust the acidity of the wine. The acidity of wine is an essential factor that influences its taste, balance, and stability.</div>
          <div className="item">Citric acid can be added to the must (crushed grapes or juice) to increase the overall acidity of the wine. This is particularly relevant if the grapes used for winemaking are low in natural acidity. Adjusting acidity is crucial for achieving a balanced and harmonious flavor profile in the finished wine.</div>
          <div className="item">Citric acid has antioxidant properties, which means it can help prevent oxidation in wine. While sulfur dioxide (SO2) is the primary antioxidant used in winemaking, citric acid can contribute to the overall antioxidant capacity of the wine.</div>
          <div className="item">In small amounts, citric acid can enhance the fruitiness and brightness of the wine's flavors. It can be used to lift the overall flavor profile, especially in wines made from low-acid grapes.</div>
          <div className="item">Measure the calculated amount of citric acid powder. Dissolve it in a small amount of water to create a citric acid solution. Stir until fully dissolved.</div>
          <div className="item">(g/liter)</div>
        </div>
        <div className='Col1'>
          <h1>Volatile Acidity</h1>
          <div className="item">In acetic acid (g/liter)</div>
          <div className="item">Volatile acidity (VA) in wine refers to the presence of volatile acids, primarily acetic acid, which can contribute to the perception of sourness and vinegar-like aromas. While a certain level of volatile acidity is normal in wine and can contribute to its complexity, excessively high levels can be undesirable, leading to off-flavors and aromas.</div>
          <div className="item">Volatile acidity is a natural component of wine and is typically present in small amounts. It can arise during the fermentation process and from the metabolism of certain microorganisms present in the winemaking environment.</div>
          <div className="item">Acetic acid is the primary volatile acid responsible for the vinegar-like character associated with volatile acidity. While acetic acid can contribute to the complexity of some wines, high levels can be a sign of spoilage or microbial issues.</div>
          <div className="item">Winemakers use various methods to monitor and measure volatile acidity in wine. This may involve using specialized equipment such as a VA meter</div>
          <div className="item">Volatile acidity can be influenced by factors such as the cleanliness of winemaking equipment, the health of the grapes, the presence of acetic acid bacteria, and the winemaking practices employed. Controlling hygiene, preventing contamination, and maintaining a healthy fermentation can help manage volatile acidity.</div>
          <div className="item">Excessive volatile acidity can lead to wine faults, including a sharp or vinegary taste and a pungent aroma resembling vinegar. Wines with high volatile acidity may lack balance and harmony.</div>
          <div className="item">Adding an appropriate amount of SO2 can help inhibit the growth of acetic acid bacteria and prevent the development of excessive volatile acidity.</div>
          <div className="item">Ensure that all winemaking equipment, containers, and utensils are thoroughly cleaned and sanitized to prevent contamination. Proper hygiene practices can help reduce the risk of acetic acid bacteria and other spoilage microorganisms. Acetic acid bacteria thrive in the presence of oxygen. Minimize oxygen exposure and ensure that containers are properly sealed. If you suspect contamination, consider adding sulfites and resealing containers.</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
