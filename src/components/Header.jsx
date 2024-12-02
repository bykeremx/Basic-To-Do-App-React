import React from 'react'
import {FaNewspaper} from 'react-icons/fa6'


const Header = () => {






    return (
        <>
            <div className="container mt-6 ">
                <section class="hero is-dark">
                    <div class="hero-body">
                        <p class="title">
                            <FaNewspaper className='mr-3'/>
                            Task Yönetimi By React </p>
                        <p class="subtitle">
                            <b>Yapılacaklar Listesi</b>
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Header






