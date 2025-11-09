export default function Main(props) {
    const { data } = props
    return (
        <div className="imgContainer">
            <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" />
        </div>
    )
}





// const {data}: props  ; props is an object that hold all the properties paased from a 
// parent to a child.  { } and the propety in the curely brackets is extracted among
// all the properties.