import React from 'react'

const Footer = () => {
  return (
    <div className='pb-[2rem] pt-[7rem] bg-gray-100 '>
        <div className='w-[80%] mx-auto items-start grid grid-cols-1 border-b-2 pb-[2rem] md:grid-cols-2 lg:grid-cols-4 gap-[3rem]'>
            <div>
                <h1 className='footer__heading'>Support</h1>
                <div className=''>
                    <a className='footer__link' href="#">Help Center</a>
                    <a className='footer__link' href="#">Saferty information</a>
                    <a className='footer__link' href="#">Cancellation option</a>
                    <a className='footer__link' href="#">Medical Doctor</a>
                </div>
            </div>
            <div>
                <h1 className='footer__heading'>Company</h1>
                <div className=''>
                    <a className='footer__link' href="#">About us</a>
                    <a className='footer__link' href="#">Community Blog</a>
                    <a className='footer__link' href="#">Careers</a>
                    <a className='footer__link' href="#">Privaty policy</a>
                    <a className='footer__link' href="#">Terms of Services</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer