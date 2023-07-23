;
import {Router,Routes,Route} from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/About" element={About} />
                <Route path="/signin" element={Signin} />
                <Route path="/signup" element={Signup} />
                <Route path="/services" element={Services} />
                <Route path="/contact" element={Contact} />
                
                
                
            </Routes>
        </BrowserRouter>
    );
};

export default Routes;