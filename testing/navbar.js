export default  function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li>
                <a href="/pricing">Pricing</a>
                <a href="/about">about</a>
            </li>
        </ul>
    </nav>
}