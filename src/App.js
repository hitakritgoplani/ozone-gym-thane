import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cards from './components/Cards';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
		<Header />
		<Home />
		<span className='rate'>~ Rates ~</span>
		<Cards />
		<span className='rate'>~ Photos ~</span>
		<Gallery />
		<Footer />
    </div>
  );
}

export default App;
