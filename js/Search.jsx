import React from 'react';
import Showcard from './Showcard';
import preload from '../data/data.json';

class Search extends React.Component {
    state = { searchTerm: '' };

    searchTermChange = e => this.setState({ searchTerm: e.target.value });

    render() {
        return (
            <div className="search">
                <header>
                    <h1>svideo</h1>
                    <input onChange={this.searchTermChange} type="text" placeholder="Search" />
                </header>
                <div>
                    {preload.shows
                        .filter(
                            show =>
                                show.title.toUpperCase().includes(this.state.searchTerm.toUpperCase()) ||
                                show.description.toUpperCase().includes(this.state.searchTerm.toUpperCase())
                        )
                        .map(show => <Showcard key={show.imdbID} details={show} />)}
                </div>
            </div>
        );
    }
}

export default Search;
