import Hero from './components/Hero';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { GlobalStyle } from './globalStyle';
import Product from './components/Product';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { menuSpecial, menuRamen, menuSide, menuDessert } from './components/Product/productData';

function App() {

  return (
    <Router>
        <GlobalStyle />
        <Hero />
        <Product id='special' heading='Weekly Special' data={menuSpecial} />
        <Feature />
        <Product id='ramen' heading='Ramen' data={menuRamen} />
        <Product id='sides' heading='Sides' data={menuSide} />
        <Product id='dessert' heading='Dessert' data={menuDessert} />
        <Footer />
    </Router>
  );
}

export default App;
