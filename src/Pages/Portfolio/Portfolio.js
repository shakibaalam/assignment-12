import React from 'react';

const Portfolio = () => {
    return (
        <div className='container font-serif'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/nMvmP4y/IMG-20220504-215404.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='lg:mr-10'>
                        <p className='font-semibold mb-5 text-lg text-purple-400 uppercase'>mern stack web developer</p>
                        <h1 className="text-5xl font-bold mb-2 ">Hello, I'm <span className='text-primary'>Shakiba</span></h1>

                        <p>Email : shakibaalam092@gmail.com</p>

                        <p className="py-6">Passionate to work as a MERN Stack Web Developer for a software firm where I can leverage my talents in Web Design , Front-End and Back-End Web Developer to give excellent customer service</p>

                        <p className='mt-5'><span className='text-xl text-accent'>Educational qualification <hr /></span>
                            <li className='mt-3 font-semibold text-lg'>Studied at Dhaka City College dept.of CSE (running 6Th semester) , CGPA: 3.80(4th)</li>
                            <li className='mt-2'>Passed HSC from Ideal School & College, Motijheel in 2016 (GPA : 5.00)</li>
                            <li className='mt-2'>Passed SSC from Motijheel Model School & College in 2014 (GPA : 5.00)</li>
                        </p>

                        <p className='mt-8'><span className='text-xl text-accent'>Technological Skills <hr /></span>
                            <li className='mt-2'>MONGODB</li>
                            <li className='mt-2'>NODE</li>
                            <li className='mt-2'>EXPRESS</li>
                            <li className='mt-2'>REACT</li>
                            <li className='mt-2'>ES6</li>
                            <li className='mt-2'>JAVASCRIPT</li>
                            <li className='mt-2'>CSS3</li>
                            <li className='mt-3'>HTML5</li>

                        </p>


                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center font-bold text-3xl mt-10 mb-4 text-blue-900'>My Projects</h2><hr />
                <div className='grid lg:grid-cols-3  lg:gap-5 lg:mx-20 my-10'>
                    <div class="card w-96 bg-base-100 shadow-xl ">
                        <figure class="px-10 pt-10">
                            <img src="https://i.ibb.co/jH9gZKn/2022-05-26.png" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title font-bold"><a href="https://assignment-11-7321c.web.app/">Grab Grocers</a></h2>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src="https://i.ibb.co/NT7WBfw/2022-05-26-6.png" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title font-bold"><a href="https://assignment-10-c4025.web.app/"> Dream Tour</a></h2>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src="https://i.ibb.co/G3sxPkB/2022-05-26-5.png" alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title font-bold"><a href="https://sparkling-beignet-a7484c.netlify.app"> Uno Wear</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;