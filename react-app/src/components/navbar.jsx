import "../styles/navbar.css";
export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <p>Lawrence Oyor's Logo</p>
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
        </>
    )
}