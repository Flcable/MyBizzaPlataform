import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Common/Breadcrumb/Breadcrumb';

const EventsPage = () => {
    return (
        <>
            <Header />
            <Breadcrumb title={"Events"} />
            <div className='page-wrapper'> <h1>Events Page</h1></div>
            <Footer />
        </>

    )
}
export default EventsPage;