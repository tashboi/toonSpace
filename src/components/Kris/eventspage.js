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
            filter: "cheapest",
            search: "",
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleFilterSelect = this.handleFilterSelect.bind(this);
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

            <main>
                <ImageSlider slides={SliderData}/>
            </main>

            <aside id="searchBar">
				<SearchBox search={this.state.search} handleSearch={this.handleSearch} />
				<SelectFilter filter={this.state.filter} handleFilterSelect={this.handleFilterSelect} />
				<Events search={this.state.search} filter={this.state.filter}/>
            </aside>
            <aside id="sideImageSect">
                <img src={sideImage} className="sideImage" alt="Man Exploring Street"/>
            </aside>

        </div>
    );
}
}

export default eventspage;
