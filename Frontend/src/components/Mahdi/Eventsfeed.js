import React from "react";
import Eventcomp from "./Eventcomp.js";
import "./mahdi.css";
class Eventsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  componentDidMount() {
    const url =
      "http://unn-w18017488.newnumyspace.co.uk/year3/assignment/api/events";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ results: data.results });
      })
      .catch((err) => {
        console.log("something went wrong ", err);
      });
  }

  render() {
    console.log(this.state.results);
    return (
      <div class="body">
          
        <div className="eventswindow">
        <h1>EventsFeed</h1>
          {this.state.results.map((event, i) => (
            <Eventcomp key={i} event={event} />
          ))}
        </div>
        <div class="pagetitle">
          <h1>EventsFeed page</h1>
        </div>

        <div class="itinarary-table">
            <h2>Itinarary</h2>
          <table>
            <tr>
              <th>event Name</th>
              <th>description</th>
              <th>event location</th>
              <th>event type</th>
            </tr>
            
          </table>
        </div>
      </div>
    );
  }
}
export default Eventsfeed;
