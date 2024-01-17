import Navbar from "../components/navbar"
import introImg from "../images/LOprofilebg.png";
import "../styles/home.css"
export default function HomePage() {
    return (
        <>
            <Navbar />
            <article className="introSect">
                <article className="content">
                    <h1>Pastor Lawrence Oyor</h1>
                    <p>I am a Catalyst of Hunger, Love and Passion for Jesus.</p>
                </article>
                <img src={introImg} alt="A picture of Lawrence Oyor" />
            </article>
            <article className="aboutSect">
                <article className="header">
                    <h2>ABOUT ME</h2>
                    <p>Pastor Lawrence Oyor Gomba is a teacher, evangelist, prophet, preacher and Gospel Music Minister. He was born as a twin to a Christian home based in Ibadan, Oyo State, Nigeria. Pastor Lawrence Oyor is happily married to his heartthrob, Pastor Mrs. Darasimi Lawrence-Oyor (Nee Mike-Bamiloye). They got married on 10th October, 2020 and are blessed with a son, Elijah Lawrence-Oyor who was born on 16th, July, 2021.</p>
                </article>
            </article>
            <article className="mediaSect">
                <article className="header">
                    <h2>My Messages</h2>
                    <p>With Pastor Lawrence Oyor, every minute counts as God has placed His Wisdom, and that which is needed to navigate the body of Christ in this season on him. Listen attentively to these messages and you will not lack light and direction.</p>
                </article>
                <article className="mainCont">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IjsAOpDXWxY?si=tLlzHPM_k6fSo5-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/K49f2qNFiqI?si=QJIDmqz98LhMJm6C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IjsAOpDXWxY?si=tLlzHPM_k6fSo5-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/K49f2qNFiqI?si=QJIDmqz98LhMJm6C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </article>
            </article>
        </>
    )
}