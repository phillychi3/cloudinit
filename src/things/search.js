import React from "react";


class Search extends React.Component {
    render() {
        return (
            <div class="search-thing" id="search-thing">
                <input type="text" placeholder="Search for a game" />
                <div class="search-button" id="search-button">
                </div>
                <div id="change-search-button">
                </div>
            </div>
        );
    }
}
export default Search;