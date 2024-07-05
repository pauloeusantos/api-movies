import { BarLoader, FadeLoader } from 'react-spinners';
import './Loading.css'

export default function Loading() {

    return (
        <>
            <div className="sweet-loading">
                <BarLoader color="#36D7B7" style={{display: 'block', margin: '0 auto', border_color: 'red'}} size={20}  />
            </div>
        </>
    )
}