import "../styles/pillBtn.css";
export default function PillButton(props) {
    return (
        <>
        {props.isImg ? (
            <button className="pillBtn">
                <img src={props.imgUrl} alt={props.imgAlt}/>
                {props.btnValue}
            </button>
        ) : (
            <button className="pillBtn">
                {props.btnValue}
            </button>
        )}
        </>
    )
}