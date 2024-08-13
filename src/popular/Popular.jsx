import React from 'react'
import favorite from '../assets/favorite.svg'
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'
import car4 from '../assets/car4.png'
import car5 from '../assets/car5.png'
import gasolines from '../assets/gasoline.svg'
import types from '../assets/type.svg'
import capacityc from '../assets/capacity.svg'
import { Button } from 'antd';

const Popular = () => {
    return (
        <section className='popular'>
            <div className="container m-auto max-w-[1440px] pl-[64px] pr-[64px]">
                <div className="popular__wrapper">
                    <div className='flex mb-[20px] justify-between py-[20px] px-[10px]' >
                        <p className='text-[#90A3BF] font-jakarta font-semibold text-sm' >
                            Popular Car
                        </p>
                        <p className='text-[#3563E9] font-jakarta text-sm font-semibold' >
                            View All
                        </p>
                    </div>
                    <div className='popular__cars grid grid-cols-4 gap-[32px]' >
                        <div className='popular__car bg-[#FFFFFF] p-[24px] rounded-xl text-center' >
                            <div className='flex justify-between  '>
                                <div className='text-left' >
                                    <p className='font-jakarta text-[#1A202C] font-bold text-xl' >
                                        Koenigsegg
                                    </p>
                                    <p className='text-[#90A3BF] ' >
                                        Sport
                                    </p>
                                </div>
                                <img src={favorite} />
                            </div>
                            <div className='flex justify-center' >
                                <img className='py-[68px]' src={car1} alt="" />
                            </div>
                            <div className='flex align-center gap-[16px]' >
                                <p className='gasoline flex  align-center gap-[6px] font-jakarta font-medium text-[#90A3BF]' >
                                    <img src={gasolines} alt="" />
                                    90L
                                </p>
                                <p className='gasoline flex  align-center gap-[4px] font-jakarta font-medium text-[#90A3BF]' >
                                    <img src={types} alt="" />
                                    Manual
                                </p>
                                <p className='gasoline flex  align-center gap-[6px] font-jakarta font-regular text-[#90A3BF]' >
                                    <img src={capacityc} alt="" />
                                    2
                                </p>
                            </div>
                            <div className='flex justify-between items-center py-[24px]' >
                                <strong className='text-[#1A202C] font-jakarta font-bold text-xl' >
                                    $99.00/ <span className='text-[#90A3BF] text-lg' >day</span>
                                </strong>
                                <Button className='bg-[#3563E9] w-[114px] h-[44px] rounded-[4px] font-jakarta font-semibold text-lg' type="primary" >
                                Rent Now
                                </Button>
                            </div>
                        </div>
                        <div className='popular__car bg-[#FFFFFF] p-[24px] rounded-xl text-center' >
                            <div className='flex justify-between  '>
                                <div className='text-left' >
                                    <p className='font-jakarta text-[#1A202C] font-bold text-xl' >
                                    Nissan GT - R
                                    </p>
                                    <p className='text-[#90A3BF] ' >
                                        Sport
                                    </p>
                                </div>
                                <img src={favorite} />
                            </div>
                            <div className='flex justify-center' >
                                <img className='py-[68px]' src={car2} alt="" />
                            </div>
                            <div className='flex align-center gap-[16px]' >
                                <p className='gasoline flex  align-center gap-[6px] font-jakarta font-medium text-[#90A3BF]' >
                                    <img src={gasolines} alt="" />
                                    80L
                                </p>
                                <p className='gasoline flex  align-center gap-[4px] font-jakarta font-medium text-[#90A3BF]' >
                                    <img src={types} alt="" />
                                    Manual
                                </p>
                                <p className='gasoline flex  align-center gap-[6px] font-jakarta font-regular text-[#90A3BF]' >
                                    <img src={capacityc} alt="" />
                                    2
                                </p>
                            </div>
                            <div className='flex justify-between items-center py-[24px]' >
                                <strong className='text-[#1A202C] font-jakarta font-bold text-xl' >
                                    $99.00/ <span className='text-[#90A3BF] text-lg' >day</span>
                                </strong>
                                <Button className='bg-[#3563E9] w-[114px] h-[44px] rounded-[4px] font-jakarta font-semibold text-lg' type="primary" >
                                Rent Now
                                </Button>
                            </div>
                        </div>
                        <div className='popular__car bg-[#FFFFFF] p-[24px] rounded-xl text-center' >
                            <div className='flex justify-between  '>
                                <div className='text-left' >
                                    <p className='font-jakarta text-[#1A202C] font-bold text-xl' >
                                    Rolls - Royce
                                    </p>
                                    <p className='text-[#90A3BF] ' >
                                        Sport
                                    </p>
                                </div>
                                <img src={favorite} />
                            </div>
                            <div className='flex justify-center' >
                                <img className='py-[68px]' src={car3} alt="" />
                            </div>
                            <div className='flex align-center gap-[16px]' >
                                <p className='gasoline flex  align-center gap-[6px] font-jakarta font-medium text-[#90A3BF]' >
                                    <img src={gasolines} alt="" />
                                    70L
                                </p>
                                <p className='gasoline flex  align-center gap-[4px] font-jakarta font-medium text-[#90A3BF]' >
                                    <img src={types} alt="" />
                                    Manual
                                </p>
                                <p className='gasoline flex  align-center gap-[6px] font-jakarta font-regular text-[#90A3BF]' >
                                    <img src={capacityc} alt="" />
                                    4
                                </p>
                            </div>
                            <div className='flex justify-between items-center py-[24px]' >
                                <strong className='text-[#1A202C] font-jakarta font-bold text-xl' >
                                    $96.00/ <span className='text-[#90A3BF] text-lg' >day</span>
                                </strong>
                                <Button className='bg-[#3563E9] w-[114px] h-[44px] rounded-[4px] font-jakarta font-semibold text-lg' type="primary" >
                                Rent Now
                                </Button>
                            </div>
                        </div>
                        <div className='popular__car bg-[#FFFFFF] p-[24px] rounded-xl text-center' >
                            <div className='flex justify-between  '>
                                <div className='text-left' >
                                    <p className='font-jakarta text-[#1A202C] font-bold text-xl' >
                                    Nissan GT - R
                                    </p>
                                    <p className='text-[#90A3BF] ' >
                                        Sport
                                    </p>
                                </div>
                                <img src={favorite} />
                            </div>
                            <div className='flex justify-center' >
                                <img className='py-[68px]' src={car4} alt="" />
                            </div>
                            <div className='flex align-center gap-[16px]' >
                                <p className='gasoline flex  align-center gap-[6px] font-jakarta font-medium text-[#90A3BF]' >
                                    <img src={gasolines} alt="" />
                                    80L
                                </p>
                                <p className='gasoline flex  align-center gap-[4px] font-jakarta font-medium text-[#90A3BF]' >
                                    <img src={types} alt="" />
                                    Manual
                                </p>
                                <p className='gasoline flex  align-center gap-[6px] font-jakarta font-regular text-[#90A3BF]' >
                                    <img src={capacityc} alt="" />
                                    2
                                </p>
                            </div>
                            <div className='flex justify-between items-center py-[24px]' >
                                <strong className='text-[#1A202C] font-jakarta font-bold text-xl' >
                                    $99.00/ <span className='text-[#90A3BF] text-lg' >day</span>
                                </strong>
                                <Button className='bg-[#3563E9] w-[114px] h-[44px] rounded-[4px] font-jakarta font-semibold text-lg' type="primary" >
                                Rent Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular