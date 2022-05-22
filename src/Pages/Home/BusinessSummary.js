import React from 'react';
import { AiOutlineFlag } from 'react-icons/ai';

const BusinessSummary = () => {
    return (
        <div className='mx-20 my-32'>
            <h1 class="text-4xl text-center text-blue-900 font-bold  my-10">Millions Business Trust Us</h1>

            <div className='flex text-white font-bold text-center'>

                <div className='flex-1 bg-primary py-5 mr-5 rounded'>
                    {/* <p className='px-auto text-5xl'><AiOutlineFlag></AiOutlineFlag></p> */}
                    <div className='ml-32 my-5'>
                        <img src="https://kinforce.net/peint/wp-content/uploads/2021/05/Used_elements-tools-modern-single-line-icons-set-FBKWU6.png" alt="" />
                    </div>
                    <h4 className='text-3xl'>88K+</h4>
                    <p className='text-xl my-3'>Satisfied Clients</p>
                </div>

                <div className='flex-1 bg-secondary mr-5 rounded  py-3'>
                    <div className='ml-32 my-5'>
                        <img src="https://kinforce.net/peint/wp-content/uploads/2021/05/Used_elements-tools-modern-single-line-icons-set-FBKWU6_2.png" alt="" />
                    </div>
                    <h4 className='text-3xl'>100 K+</h4>
                    <p className='text-xl my-3'>Active Clients</p>
                </div>

                <div className='flex-1 bg-accent mr-5 rounded py-3'>
                    <div className='ml-32 my-5'>
                        <img src="https://kinforce.net/peint/wp-content/uploads/2021/05/Used_elements-tools-modern-single-line-icons-set-FBKWU6_3.png" alt="" />
                    </div>
                    <h4 className='text-3xl'>6543 +</h4>
                    <p className='text-xl my-3'>Industry Solutions</p>
                </div>

                <div className='flex-1 bg-green-500 mr-5 rounded py-3'>
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