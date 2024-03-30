import Welcome from './../../components/Welcome/Welcome';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Byteblaze | Home</title>
            </Helmet>
            <Welcome/>
        </div>
    );
};

export default Home;