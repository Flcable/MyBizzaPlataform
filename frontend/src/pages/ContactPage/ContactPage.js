import React from 'react';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb';
import Header from '../../components/Header/Header';

const ContactPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb title={"Contact"} />
            <div>Contact Page</div>
            <div className='page-wrapper'> <h1>Contact Page</h1></div>
            <Footer />
        </>

    )
}

export default ContactPage