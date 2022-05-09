import './kris.css';
import {SliderData} from './SliderData';
import ImageSlider from './ImageSlider';
import sideImage from './sideImage.jpg';
import React from "react";
import SearchBox from "../Tom/searchbox";
import Events from "./events";
import SelectFilter from "./selectFilter";

class eventspage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filter: "",
            search: "",
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch = (e) => {
        this.setState({search:e.target.value})
    }

    handleFilterSelect = (e) => {
        this.setState({filter:e.target.value})
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
                <SelectFilter filter={this.state.filter} handleFilterSelect={this.handleFilterSelect} />
                <Events search={this.state.search}/>
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
