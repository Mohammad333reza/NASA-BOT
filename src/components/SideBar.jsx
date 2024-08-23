export default function SideBar(props) {
    const { handleToggleModal, data } = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                       <i className="fa-solid fa-arrow-rotate-right"></i>
                </button>
            </div>
        </div>
    )
}
//Destructuring in this context is used to extract the handleToggleModal function from the props object. 
//This makes it easier to use handleToggleModal directly without needing to reference props.handleToggleModal each time.