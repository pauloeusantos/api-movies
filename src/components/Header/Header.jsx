import './Header.css'
import logo from '../../assets/logo.webp'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><img src={logo} alt="" width={50 + 'px'}/></li>
                        <li>Search</li>
                    </ul>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Login</a></li>
                        <li><a href="">Register</a></li>
                    </ul>
                </nav>
                <div className="nav-options">
                    <ul>
                        <li><a href="">New</a></li>
                        <li><a href="">Popular</a></li>
                        <li><a href="">Top Rated</a></li>
                        <li><a href="">Upcoming</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}