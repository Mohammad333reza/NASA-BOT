export default function Footer(props) {
    const { showModal, handleToggleModal, data } = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>Night Sky Marvels</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal}>
                   <i className="fa-solid fa-question"></i>
            </button>
        </footer>
    )
}
//in react, class is used instaed of className
// inset represents the space from each side(top, buttom, right, & left)
//In React, each component returns a JSX element, which represents what should be rendered on the screen.
//When we talk about "exporting" a function in the context of React and JavaScript modules, 
//we are referring to making that function available for import in other files
//The whole showModal={showModal} is called props
//the property is not imported, actually is defined
//"?.": The optional chaining operator. It allows you to read the title property from data if data is not null or undefined. 
//If data is null or undefined, it short-circuits and returns undefined without throwing an error.