import { BarLoader } from 'react-spinners';
import './Loading.css';

export default function Loading() {
    return (
        <div className="loading-container">
            <BarLoader color='#BDD7EE' height={4} width={150} />
        </div>
    );
}
