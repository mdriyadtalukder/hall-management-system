import React from 'react';
import Banner from './Banner';
import Banners from './Banners';
import Products from './Products';
import './stylee.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <div id='acd'>
                <h1 className='text-center mb-5'>ACCOMMODATION</h1>
                <div className='d-flex justify-content-center align-items-center'>
                    <div>
                        <img src="https://5.imimg.com/data5/SELLER/Default/2021/11/IC/IC/BA/122204137/bedroom-interior-designing-1000x1000.jpg" className='imgg' alt="" />
                    </div>
                    <div className='iimg ms-5'>
                        <div>
                            <h3 className='text-center'>Room Details</h3>
                            <p>Three hundred square feet DIU hall rooms are spacious and convenient enough to accommodate four students at a time. The room is fully furnished with beds and under-bed drawers. Each student will have separate study tables and chairs from their first day at the hall. There is enough light in the room to ensure a comfortable study environment. Also, high-speed internet and wifi connection for each student is available in the hall. Along with a stable electricity supply, each hall has a generator connection in case of power failure. Housekeeping and pest control service is also available to keep the area clean & hygienic.</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='iimg'>
                        <div>
                            <h3 className='text-center'>Building 1 Block A</h3>
                            <p>To ensure comfortable accommodation for students, DIU has established three halls for male students on campus. Younus Khan scholar Garden 1 Block A has a total of 816 seats for students.The hall environment is friendly, supportive, and alcohol-free. 24/7 security and CCTV are available to ensure the safety of the students. The hall also has a newspaper reading area, prayer hall, medical facility, well-equipped gym, and canteen available for the students. The dedicated staff and hall in charge are responsible for maintaining a healthy and clean environment in the hall</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg" className='imgg ms-5' alt="" />
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div>
                        <img src="https://thefinancialexpress.com.bd/uploads/1550059260.jpg" className='imgg' alt="" />
                    </div>
                    <div className='iimg ms-5'>
                        <div>
                            <h3 className='text-center'>Building 1 Block B</h3>
                            <p>To ensure comfortable accommodation for students, DIU has established three halls for male students on campus. Younus Khan scholar Garden 1 Block A has a total of 816 seats for students.The hall environment is friendly, supportive, and alcohol-free. 24/7 security and CCTV are available to ensure the safety of the students. The hall also has a newspaper reading area, prayer hall, medical facility, well-equipped gym, and canteen available for the students. The dedicated staff and hall in charge are responsible for maintaining a healthy and clean environment in the hall</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>

                    <div className='iimg'>
                        <div>
                            <h3 className='text-center'>Building 2 Block A</h3>
                            <p>To ensure comfortable accommodation for students, DIU has established three halls for male students on campus. Younus Khan scholar Garden 1 Block A has a total of 816 seats for students.The hall environment is friendly, supportive, and alcohol-free. 24/7 security and CCTV are available to ensure the safety of the students. The hall also has a newspaper reading area, prayer hall, medical facility, well-equipped gym, and canteen available for the students. The dedicated staff and hall in charge are responsible for maintaining a healthy and clean environment in the hall</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://5.imimg.com/data5/YF/OF/GLADMIN-62199328/multi-storey-building-designing-service-500x500.jpg" className='imgg ms-5' alt="" />
                    </div>
                </div>
            </div>

            <section className='container' id='fac'>
                <h1 className='text-center fw-bold mt-3 mb-5 mt-5'>IN-ROOM FACILITIES</h1>
                <div className='row'>
                    <div className='col col-lg-4 col-md-6 col-sm-12 col-12 text-center'>
                        <p class='icn'><i class="fa-solid fa-bed"></i></p>
                        <h2>Separate Bed</h2>
                    </div>
                    <div className='col col-lg-4 col-md-6 col-sm-12 col-12 text-center'>
                        <p class='icn'><i class="fa-solid fa-store"></i></p>
                        <h2>Storage & Drawers</h2>
                    </div>
                    <div className='col col-lg-4 col-md-6 col-sm-12 col-12 text-center'>
                        <p class='icn'><i class="fa-solid fa-shower"></i></p>
                        <h2>Filter Water</h2>

                    </div>
                    <div className='col col-lg-4 col-md-6 col-sm-12 col-12 text-center'>
                        <p class='icn'><i class="fa-solid fa-lightbulb"></i></p>
                        <h2>Proper lighting & Fan</h2>
                    </div>
                    <div className='col col-lg-4 col-md-6 col-sm-12 col-12 text-center'>
                        <p class='icn'><i class="fa-solid fa-house"></i></p>
                        <h2>Fully furnished rooms</h2>
                    </div>
                    <div className='col col-lg-4 col-md-6 col-sm-12 col-12 text-center'>
                        <p class='icn'><i class="fa-duotone fa-soap"></i></p>
                        <h2>Housekeeping</h2>
                    </div>
                </div>
            </section>
            <Banners></Banners>
        </div>
    );
};

export default Home;