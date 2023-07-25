import React from "react";


class Search extends React.Component {
    // usestate
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }


    getinput = (thing) => {
        console.log(thing.target.value);
        this.setState({ search: thing.target.value });
    }
    getenter = (thing) => {
        if (thing.key === "Enter") {
            console.log("Enter");
            console.log(this.state.search);
            //redirect to search page : googld
            window.location.href = "https://www.google.com/search?q=" + this.state.search;

        }
    }

    render() {
        return (
            <div class="search-thing" id="search-thing">
                <input type="text" placeholder="Search for a game" onChange={this.getinput} onKeyDown={this.getenter}></input>
                <div class="search-button" id="search-button"></div>
                <div id="change-search-button"></div>
            </div>
        );
    }
}
export default Search;