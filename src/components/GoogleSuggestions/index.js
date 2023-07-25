// components/GoogleSuggestions/index.js
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  handleInputChange = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  handleArrowClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  filterSuggestions = () => {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchInputLowerCase = searchInput.toLowerCase()
    return suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(searchInputLowerCase),
    )
  }

  render() {
    const {searchInput} = this.state
    const filteredSuggestions = this.filterSuggestions()

    return (
      <div className="google-suggestions-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-box">
          <input
            type="search"
            className="search-input"
            value={searchInput}
            onChange={this.handleInputChange}
            placeholder="Type to search..."
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="suggestions-list">
          {filteredSuggestions.length === 0 ? (
            <li>No suggestions found</li>
          ) : (
            filteredSuggestions.map(suggestion => (
              <SuggestionItem
                key={suggestion.id}
                suggestion={suggestion.suggestion}
                onClick={this.handleArrowClick}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
