import "../styles/navbar.css";
export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <p>Lawrence Oyor's Logo</p>
                <ul>
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Media Library</a></li>
                    <li><a href="#">Book a session</a></li>
                    <li><a href="#">Invite me</a></li>
                    <li><a href="#">Parthner with us</a></li>
                </ul>
            </nav>
        </>
    )
}