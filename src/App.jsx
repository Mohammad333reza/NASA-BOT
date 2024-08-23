
import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      // const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const NASA_KEY = 't0ZfCqyRvOlMsPzJJahRFKQamzQkOtGwyzIkZd5m'
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      // const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`


      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      {data ? (<Main data={data} />) : (

        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  )
}

export default App
// < > : react fragment, every component is a function & function return what is known as a jsx
// { } chnnages the HtML environemnt to JS
// useEffect & useState are called react hooks
// ! invertes the value
// passing the 'handleToggleModal' is like passing the whole function.
//when passing attributes as props in React, both the property name and the value are required.
//The res variable is assigned the response received from the fetch request to the url.
//parsing to JSON means converting the response body into a JavaScript object. 
//setData(apiData) :This line means that the current state is being updated with the value of apiData.
// whenever the js block is conditioned, it goes inside ( )
// NASA-: This is a static string part.
//${today}: This is a dynamic part where the value of the variable today will be inserted.
/* localStorage is a built-in web API that allows you to store key-value pairs in a web browser, 
with data persistence across sessions. The code checks if data associated with localKey exists in 
localStorage using localStorage.getItem(localKey). If data is found, it parses the JSON string into 
a JavaScript object using JSON.parse and assigns it to apiData. This enables efficient data retrieval 
and caching, reducing the need for repeated network requests.*/
// localStorage.claer()  EX: reset & log out
/* useEffect, two ways to run the function: 1-blank dependency 
array( run this function whenever our page loads)
 2-a avariable inside the array: the function is executed 
 whenever the variable changes. */
 //api_key=${NASA_KEY}    >>>>  api_key is vriable name & NASA_KEY is the value
