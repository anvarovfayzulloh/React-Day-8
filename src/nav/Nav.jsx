import React from 'react'
import { Input, Space } from 'antd';
import favorites from '../assets/favorites.svg'
import update from '../assets/update.svg'
import settings from '../assets/settings.svg'
import user from '../assets/user.png'


const { Search } = Input;

const Nav = () => {
  return (
    <nav className='bg-white' > 
      <div className="nav__container border-solid border-1 border-[#C3D4E966] m-auto max-w-[1440px] w-full pl-[60px] pr-[32px] font-jakarta text-[#3563E9] font-bold text-2xl">
        <div className="nav__wrapper py-10 flex align-center gap-[400px]">
          <div className='nav__info flex align-center gap-[64px]' >
            <h1 className='' >
              MORENT
            </h1>
            <Search className='nav__search font-jakarta font-medium ' placeholder="Search something here"  style={{ width: 492 }} />
          </div>
          <div className='nav__action flex align-center gap-[20px]' >
            <img src={favorites} alt="" />
            <img src={update} alt="" />
            <img src={settings} alt="" />
            <img src={user} alt="" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav