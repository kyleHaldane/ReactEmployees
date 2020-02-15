import React, { Component } from "react";
import SearchForm from "../SearchForm";
import ResultList from "../ResultList/";
import API from "../../utils/API";

class SearchResultContainer extends Component {

    state = {
        search: "",
        results: []
    };

    //When the component mounts, get a list of all available base employees and update this.state.results
    componentDidMount() {
        API.search(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.results, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    //Working on searching the api
    handleFormSubmit = event => {
        event.preventDefault();
        API.search(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.results, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    initiate = event =>{
        event.preventDefault();
        API.search(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.results, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    }

    

    render() {
        return (
            //Renders the search form on the page
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultList results={this.state.results} />
            </div>
        );
    }
}

export default SearchResultContainer;