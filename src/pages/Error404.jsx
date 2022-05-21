import React from 'react'
import error404 from '../assets/error404.gif'
import NavBar from '../components/NavBar';

const Error404 = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-8 offset-lg-2">
                        <img className='img-error404' src={error404} alt="error404" />
                    </div>
                </div>
            </div>

            {/* aqui va el componente footer */}

        </>

    );
};

export default Error404