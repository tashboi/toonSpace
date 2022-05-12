import React from "react";

class SelectFilter extends React.Component {

    render() {
        return (
            <label>
                Filter:
                <select value={this.props.filter} onChange={this.props.handleFilterSelect}>
                    <option value="">None</option>
                    <option value="cheapest">Cheapest</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </label>

        )
    }
}

export default SelectFilter;