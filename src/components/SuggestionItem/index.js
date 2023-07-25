import './index.css'

const SuggestionItem = ({suggestion, onClick}) => (
  <li className="suggestion-item" onClick={() => onClick(suggestion)}>
    <p>{suggestion}</p>
    <img
      src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      alt="arrow"
      className="arrow-icon"
    />
  </li>
)

export default SuggestionItem
