import React, { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = (evt) => {
    const { value } = evt.target;

    this.setState({
      searchValue: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state.searchValue);
    this.reset();
  };

  reset = () => {
    this.setState({ searchValue: "" });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
