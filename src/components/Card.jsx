import Button from "./Button";

function Card(props) {
    return <>
        <div className="card">
            <div className="card_top">
                <img src={props.imgSrc} alt="" />
            </div>
            <div className="card_body">
                <div className="item_box">
                <p className="name">{props.iName}</p>
                </div>
                <div className="item_box">
                    <i className="bi bi-balloon-heart"></i>
                    <p className="follower_count">Follower Count: {props.fc}</p>
                </div>  
                <div className="item_box">
                    <i className="bi bi-mortarboard"></i>
                    <p className="expertise"> {props.expertise}</p>
                </div>
                <div className="socials">
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-threads"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter-x"></i>
                </div>
                <Button name="Explore" padding="0.4rem 2rem"/>
            </div>
    </div>
    </>
}

export default Card;