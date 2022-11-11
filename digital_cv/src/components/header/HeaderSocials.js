import React from 'react'
import {CiLinkedin} from 'react-icons/ci'
import {TbBrandDiscord} from 'react-icons/tb'
import {VscGithub} from 'react-icons/vsc'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com'target='_blank'>
             <CiLinkedin/>
        </a>
        <a href='https://github.com'target='_blank'>
            <VscGithub/>
        </a>
        <a href='https://discord.com'target='_blank'>
            <TbBrandDiscord/>
        </a>
    </div>
  )
}

export default HeaderSocials