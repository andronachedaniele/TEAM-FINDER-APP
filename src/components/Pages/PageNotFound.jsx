import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';  
export default function PageNotFound(){
    return (
        <div className="flex flex-col gap-2">
            <Link to="/">Press to go back to Home Page</Link>
        </div>
    );
}