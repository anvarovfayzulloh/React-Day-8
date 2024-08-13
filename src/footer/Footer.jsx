import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-white' >
            <div className="container max-w-[1440px] px-[60px] m-auto w-full ">
                <div className="footer__wrapper  py-[70px]">
                    <div  className='flex justify-between ' >
                    <div className='max-w-[330px] ' >
                        <h1 className='font-jakarta font-bold text-[#3563E9] text-3xl' >
                            MORENT
                        </h1>
                        <p className='font-jakarta text-[#13131399] font-medium text-lg pt-[16px]' >
                            Our vision is to provide convenience and help increase your sales business.
                        </p>
                    </div>
                    <div className='flex gap-[58px]' >
                        <ul className='flex flex-col gap-[24px] w-[160px] ' >
                            <li className='text-[#1A202C] pb-[8px] font-jakarta font-semibold text-xl '  >
                                About
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                How it works
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Featured
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Partnership
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Bussiness Relation
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-[24px] w-[160px] ' >
                            <li className='text-[#1A202C] pb-[8px] font-jakarta font-semibold text-xl '  >
                                Community
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Events
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Blog
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Podcast
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Invite a friend
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-[24px] w-[160px] ' >
                            <li className='text-[#1A202C] pb-[8px] font-jakarta font-semibold text-xl '  >
                                Community
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Events
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Blog
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Podcast
                            </li>
                            <li className='text-[#13131399] font-jakarta font-medium text-lg ' >
                                Invite a friend
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className='copyright flex justify-between pt-[76px]' >
                        <p className='font-jakarta text-[#1A202C]text-lg font-semibold ' >
                            ©2022 MORENT. All rights reserved
                        </p>
                        <div className='flex gap-[60px]' >
                            <p className='font-jakarta text-[#1A202C]text-lg font-semibold ' >
                            Privacy & Policy
                            </p>
                            <p className='font-jakarta text-[#1A202C]text-lg font-semibold ' >
                            Terms & Condition
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer