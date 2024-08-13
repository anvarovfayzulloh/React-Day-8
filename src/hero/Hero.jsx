import Hero_1 from '../assets/Hero_1.png'
import Hero_2 from '../assets/Hero_2.png'
import staticPng from '../assets/static.png'
import { Button,} from 'antd';
const Hero = () => {
    return (
        <section className='hero' >
            <div className="hero__container my-[32px] m-auto max-w-[1440px] w-full pl-[64px] pr-[64px]">
                <div className="hero__wrapper flex flex-col">
                    <div className='hero__cards flex gap-[32px]' >
                        <div className='hero__card relative' >
                            <img className='h-[360px] w-[640px]' src={Hero_1} alt="" />
                            <div className='absolute top-6 left-6' >
                                <h2 className='font-jakarta text-white font-semibold text-3xl max-w-[272px]' >
                                    The Best Platform for Car Rental
                                </h2>
                                <p className='font-jakarta font-medium text-base max-w-[284px] text-white pt-[16px] pb-[20px]' >
                                    Ease of doing a car rental safely and reliably. Of course at a low price.
                                </p>
                                <Button type="primary" className='bg-[#3563E9] rounded-[4px] align-center'>Rental Car</Button>
                            </div>
                        </div>
                        <div className='hero__card relative' >
                            <img className='h-[360px] w-[640px]' src={Hero_2} alt="" />
                            <div className='absolute top-6 left-6' >
                                <h2 className='font-jakarta text-white font-semibold text-3xl max-w-[272px]' >
                                    Easy way to rent a car at a low price
                                </h2>
                                <p className='font-jakarta font-medium text-base max-w-[284px] text-white pt-[16px] pb-[20px]' >
                                    Providing cheap car rental services and safe and comfortable facilities.
                                </p>
                                <Button type="primary" className='bg-[#54A6FF] rounded-[4px] align-center'>Rental Car</Button>
                            </div>
                        </div>
                    </div>
                    <div className='hero__action' > 
                        <img className='pt-[32px] pb-[32px]' src={staticPng} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero