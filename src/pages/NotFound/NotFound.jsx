
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="flex items-center flex-col gap-3 justify-center min-h-lvh border-2">
            <div className="text-5xl font-bold">Error 404</div>
            <Link to={'/'} className='btn btn-info'>Back to home</Link>
        </div>
    );
};

export default NotFound;