import React from "react";
import Eventcomp from "./Eventcomp.js";
import './mahdi.css';
class Eventsfeed extends React.Component{

    constructor(props){
        super(props)
        this.state = {results : []}
    
    }
componentDidMount(){
    const url ="http://unn-w18017488.newnumyspace.co.uk/year3/assignment/api/events"
     fetch(url)
    .then( (response) => { 
        return response.json() 
    })
    .then( (data) => {
        this.setState({results: data.results})
    })
    .catch ((err) => { 
        console.log("something went wrong ", err) 
    });
}

render (){
   
    console.log(this.state.results)
    return<div>

            <div className="eventswindow">
               <h1>events Feed</h1>
                {this.state.results.map( (event, i) => (<Eventcomp key={i} event={event}/>) )}
                </div>
                <div>
                <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
</div>


                </div>
           
  
    
}

}
export default Eventsfeed;
