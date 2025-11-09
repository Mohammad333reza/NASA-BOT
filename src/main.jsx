import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* main.jsx more of the JS file, it reads in the app component; it selects the div with id of root
that is founded in the index.html and basically  JSX inserts all the React components into that div,
which are then displayed on the screen.
 */