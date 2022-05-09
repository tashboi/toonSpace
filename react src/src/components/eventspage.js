import './Kris/kris.css';
import {SliderData} from './Kris/SliderData';
import ImageSlider from './Kris/ImageSlider';
import sideImage from './Kris/sideImage.jpg';
import React from "react";
import SearchBox from "./Tom/searchbox";

class eventspage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: "",
            search: "",
            eventid: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch = (e) => {
        this.setState({search:e.target.value})
    }

    handleEventID = (e) => {
        this.setState({language:e.target.value})
    }



    render(){

    return (
        <div id="gridContainer">
            <header>

            </header>

            <main>
                <ImageSlider slides={SliderData}/>
            </main>

            <aside id="searchBar">
                <SearchBox search={this.state.search} handleSearch={this.handleSearch} />
            </aside>

            <aside id="sideImageSect">
                <img src={sideImage} className="sideImage" alt="Man Exploring Street"/>
            </aside>

            <footer className="EventsFooter">

            </footer>

        </div>
    );
}
}

export default eventspage;
