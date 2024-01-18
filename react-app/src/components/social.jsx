import "../styles/social.css";
export default function Social(props) {
    return (
        <>
            <a className="socialArticle" href={props.url}>
                <img src={props.imgUrl} alt={props.altText}/>
            </a>
        </>
    )
}