import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCii7djgZeGX7_D31wDFlD8kTPnH0zvahs'

// Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}
// Take this component's generated HTMl and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
