import React from 'react';
import { AiOutlineFlag } from 'react-icons/ai';

const BusinessSummary = () => {
    return (
        <div className='lg:mx-20 my-32'>
            <h1 className="text-4xl text-center text-blue-900 font-bold  my-10">Millions Business Trust Us</h1>

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
        </div>
    );
};

export default BusinessSummary;