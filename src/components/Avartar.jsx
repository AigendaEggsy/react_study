export default function Avartar({image, isNew}) {
    return (
        <div className="avatar">
            <img className="photo" src={image} alt='avatar'/>
            {isNew && <div className="new">New</div>}
        </div>
    );
}

