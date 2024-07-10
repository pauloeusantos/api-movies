import './Home.css'
import Conteudo from '../../components/Conteudo/Conteudo'
import logo from '../../assets/logo.webp'
import { useState } from 'react'

export default function Home(){
    const [option, setOption] = useState('now_playing')

    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><img src={logo} alt="" width={50 + 'px'}/></li>
                    </ul>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Login</a></li>
                        <li><a href="/">Register</a></li>
                    </ul>
                </nav>
                <div className="nav-options">
                    <ul>
                        <li><button onClick={() => setOption('now_playing')}>New</button></li>
                        <li><button onClick={() => setOption('popular')}>Popular</button></li>
                        <li><button onClick={() => setOption('top_rated')}>Top Rated</button></li>
                        <li><button onClick={() => setOption('upcoming')}>Upcoming</button></li>
                    </ul>
                </div>
            </header>
            <Conteudo option={option} />
        </>
    )
}