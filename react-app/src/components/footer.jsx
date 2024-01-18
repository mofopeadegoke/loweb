import "../styles/footer.css";
export default function Footer() {
    return (
        <>
            <footer>
                <article className="copyright">
                    <p>&copy; Copyright 2024. Pastor Lawrence Oyor International.</p>
                    <article className="usefulLinks">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#home">
                                        Home
                                    </a>
                                </li>
                                <li><a href="#about">About me</a></li>
                                <li><a href="#media">Media Library</a></li>
                                <li><a href="#invite">Invite me</a></li>
                                <li><a href="#partner">Parthner with us</a></li>
                            </ul>
                        </nav>
                    </article>
                </article>
            </footer>
        </>
    )
}