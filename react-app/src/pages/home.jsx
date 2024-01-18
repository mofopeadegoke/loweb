import Navbar from "../components/navbar"
import introImg from "../images/LOprofilebg.png";
import PillButton from "../components/pillBtn";
import spotifyLogo from "../images/spotify.svg";
import telegramLogo from "../images/telegram.svg";
import brownTelelgram from "../images/telegramBrown.svg";
import brownInstagram from "../images/square-instagram.svg";
import brownYoutube from "../images/youtube.svg";
import brownX from "../images/x-twitter.svg";
import Social from "../components/social";
import Footer from "../components/footer";
import { useEffect } from "react";
import "../styles/home.css"
export default function HomePage() {
    const smoothScrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Add event listeners to the navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        smoothScrollTo(targetId);
      });
    });
  }, []);
    return (
        <>
            <Navbar />
            <article className="introSect" id="home">
                <article className="content">
                    <h1>Pastor Lawrence Oyor</h1>
                    <p>I am a Catalyst of Hunger, Love and Passion for Jesus.</p>
                </article>
                <img src={introImg} alt="A picture of Lawrence Oyor" />
            </article>
            <article className="aboutSect" id="about">
                <article className="header">
                    <h2>ABOUT ME</h2>
                    <p>Pastor Lawrence Oyor Gomba is a teacher, evangelist, prophet, preacher and Gospel Music Minister. He was born as a twin to a Christian home based in Ibadan, Oyo State, Nigeria. Pastor Lawrence Oyor is happily married to his heartthrob, Pastor Mrs. Darasimi Lawrence-Oyor (Nee Mike-Bamiloye). They got married on 10th October, 2020 and are blessed with a son, Elijah Lawrence-Oyor who was born on 16th, July, 2021.</p>
                </article>
            </article>
            <article className="mediaSect" id="media">
                <article className="header">
                    <h2 role="heading">My Messages</h2>
                    <p>With Pastor Lawrence Oyor, every minute counts as God has placed His Wisdom, and that which is needed to navigate the body of Christ in this season on him. Listen attentively to these messages and you will not lack light and direction.</p>
                </article>
                <article className="mainCont">
                    <iframe src="https://www.youtube.com/embed/IjsAOpDXWxY?si=tLlzHPM_k6fSo5-0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/K49f2qNFiqI?si=QJIDmqz98LhMJm6C" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/IjsAOpDXWxY?si=tLlzHPM_k6fSo5-0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe src="https://www.youtube.com/embed/K49f2qNFiqI?si=QJIDmqz98LhMJm6C" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
                <article className="moreBtns">
                    <PillButton btnValue="Get more on spotify" isImg={true} imgUrl={spotifyLogo} imgAlt="The spotify logo"/>
                    <PillButton btnValue="Get more on telegram" isImg={true} imgUrl={telegramLogo} imgAlt="The telegram logo"/>
                </article>
            </article>
            <article className="invtSect" id="invite">
                <article className="headerSect">
                    <h2 role="heading">Invitation to Meetings</h2>
                    <p>Please note that if your invitation is accepted, a round trip flight has to be booked for two people.</p>
                </article>
                <form action="">
                    <fieldset>
                        <label htmlFor="">
                            <span>Ministry Name</span>
                            <input type="text" name="Ministry Name"/>
                        </label>
                        <label htmlFor="">
                            <span>
                                Location
                            </span>
                            <input type="text" name="Location"/>
                        </label>
                        <label htmlFor="">
                            <span>Meeting Date</span>
                            <input type="date" name="Meeting Date" />                        
                        </label>
                        <label htmlFor="">
                            <span>Phone Number</span>
                            <input type="text" name="Phone Number"/>
                        </label>
                        <label htmlFor="" className="emailLabel">
                            <span>Email</span>
                            <input type="email" name="Email Address"/>
                        </label>
                    </fieldset>
                    <article className="btn">
                        <PillButton isImg={false} btnValue="Send Invite"/>
                    </article>
                </form>
            </article>
            <article className="partnerSect" id="partner">
                <article className="abt">
                    <h3 role="heading">Pastor Lawrence Oyor</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae asperiores corporis velit sit, fugiat, omnis deleniti est perspiciatis ducimus expedita adipisci praesentium quam, doloremque mollitia atque ullam ex quae! Corporis maiores in deleniti quas mollitia saepe sit harum nulla cumque sunt iusto obcaecati, aut quod? Illo quas deserunt minima porro?</p>
                </article>
                <article className="partner">
                    <h3 role="heading">Partner with us</h3>
                    <p>Kindly use the following account details to partner with Pastor Lawrence Oyor's Ministry</p>
                    <article className="dets">
                        <article className="naira">
                            <h4 role="heading">Naira Account</h4>
                            <p><span className="bold">Account Name: </span> Femi Lazarus Ministries</p>
                            <p><span className="bold">Bank Name: </span>UBA</p>
                            <p><span className="bold">Account Number: </span>2215005289</p>
                        </article>
                        <article className="dollar">
                            <h4 role="heading">Dollar Account</h4>
                            <p><span className="bold">Account Name: </span> Femi Lazarus Ministries</p>
                            <p><span className="bold">Bank Name: </span>UBA</p>
                            <p><span className="bold">Account Number: </span>3003979764</p>
                            <p><span className="bold">Swift Code: </span>UNAFNGLA</p>
                        </article>
                    </article>
                    <p>Connect with Pastor Lawrence Oyor on every social media platform</p>
                    <article className="socials">
                        <Social imgUrl={brownTelelgram} altText="The Telegram logo" url="https://t.me/chantforum"/>
                        <Social imgUrl={brownInstagram} altText="The Instagram logo" url="https://www.instagram.com/lawrenceoyor/"/>
                        <Social imgUrl={brownX} altText="The Twitter(X) logo" url="https://twitter.com/lawrenceoyor"/>
                        <Social imgUrl={brownYoutube} altText="The youtube logo" url="https://www.youtube.com/@LawrenceOyor"/>
                    </article>
                </article>
            </article>
            <Footer />
        </>
    )
}