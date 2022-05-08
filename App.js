import './App.css';
import {SliderData} from './components/SliderData';
import ImageSlider from './components/ImageSlider';
import sideImage from './sideImage.jpg';

function App() {
  return (
	<div id="gridContainer">
		<header>
			
		</header>
		
		<main>
			<ImageSlider slides={SliderData}/>	
		</main>
		
		<aside id="searchBar">
			<p> This is the search bar area </p>
			
			
		</aside>
		
		<aside id="sideImageSect">
			<img src={sideImage} className="sideImage" alt="Man Exploring Street"/>
		</aside>
		
		<footer className="EventsFooter">
			
		</footer>
		
	</div>
  );
}

export default App;
