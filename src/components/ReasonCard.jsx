function ReasonCard(props) {
    return <>
        <div className="reason">
                        <div className="reason_front">
                        <i className={props.icon}></i>
                        <h3>{props.title}</h3>
                        </div>
                        <div className="reason_back">
                        <p>{props.desc}</p>
                        </div>
                    </div>
    </>
}

export default ReasonCard;