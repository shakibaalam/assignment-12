import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='lg:mx-20 my-32 py-20'>
            <h1 className="text-4xl text-center text-blue-900 font-bold  mt-10 mb-2">Millions Business Trust Us</h1>
            <p className='text-xl text-center mb-10'>Try to understand users expectation</p>

            <div className='lg:flex grid-cols-1 text-white font-bold text-center'>

                <div className='flex-1 bg-primary py-5 lg:mr-5 rounded mt-6'>
                    <div className='ml-32 my-5'>
                        <img src="https://kinforce.net/peint/wp-content/uploads/2021/05/Used_elements-tools-modern-single-line-icons-set-FBKWU6.png" alt="" />
                    </div>
                    <h4 className='text-3xl'>88K+</h4>
                    <p className='text-xl my-3'>Satisfied Clients</p>
                </div>

                <div className='flex-1 bg-secondary lg:mr-5 rounded mt-6 py-3'>
                    <div className='ml-32 my-5'>
                        <img src="https://kinforce.net/peint/wp-content/uploads/2021/05/Used_elements-tools-modern-single-line-icons-set-FBKWU6_2.png" alt="" />
                    </div>
                    <h4 className='text-3xl'>100 K+</h4>
                    <p className='text-xl my-3'>Active Clients</p>
                </div>

                <div className='flex-1 bg-accent lg:mr-5 rounded mt-6 py-3'>
                    <div className='ml-32 my-5'>
                        <img src="https://kinforce.net/peint/wp-content/uploads/2021/05/Used_elements-tools-modern-single-line-icons-set-FBKWU6_3.png" alt="" />
                    </div>
                    <h4 className='text-3xl'>6543 +</h4>
                    <p className='text-xl my-3'>Industry Solutions</p>
                </div>

                <div className='flex-1 bg-green-500 lg:mr-5 mt-6 rounded py-3'>
                    <div className='ml-32 my-5'>
                        <img src="https://kinforce.net/peint/wp-content/uploads/2021/05/Used_elements-tools-modern-single-line-icons-set-FBKWU6_5.png" alt="" />
                    </div>
                    <h4 className='text-3xl'>110K +</h4>
                    <p className='text-xl my-3'>Team Members</p>
                </div>
            </div>
            <div className='lg:grid lg:grid-cols-2 mt-10 py-5 mx-32 hidden shadow-lg'>
                <div className='p-5 justify-center'>
                    <h3 className='text-2xl font-semibold text-blue-900 mb-2'>Have any question about us or get a products request?</h3>
                    <p>Don't hesitate to contact us</p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='btn btn-accent py-3 px-8 text-white'>Request for Quote</button>
                    <button className='btn btn-primary py-3 px-8 ml-4 text-white'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;