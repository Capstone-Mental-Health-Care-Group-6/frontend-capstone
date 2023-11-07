import React from 'react'
import AuthLayout from '../../components/Layout/UserLayout'
import './LandingPage.style.css'
import ServiceContent from '../../components/Fragment/ServiceContent'
import { chat, daftarSekarang, mentalHealthAmico, phone, vidioCall } from '../../../image'


function LandingPage() {
    return (
        <AuthLayout>
            <div className='home' id='home'>
                <div className="row d-flex align-items-center row-cols-lg-2 row-cols-1">
                    <div className="col d-grid ">
                        <h1>Apakah Anda <br />
                            Merasa Stres?
                        </h1>
                        <p>Temukan solusi terbaik untuk masalah kesehatan mental Anda. Capai kesejahteraan dan kebahagiaan yang Anda inginkan bersama kami.</p>
                        <button className='btn mt-3' >Mulai Perjalanan Kesehatan Mental Anda</button>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src={mentalHealthAmico} alt="" />
                    </div>
                </div>
            </div>

            <div className="daftar-sekarang" id='daftar-sekarang'>
                <div className="row">
                    <div className="col d-grid justify-content-center">
                        <img src={daftarSekarang} alt="" />
                    </div>
                    <div className="col d-grid align-items-center">
                        <div className="text-daftar">
                            <h1>Bahagia juga Milikmu</h1>
                            <p>Daftar <span>Gratis</span>  untuk solusi segala masalahmu. Jadikan kami #TemanMelangkah di perjalanan kesehatan mentalmu!</p>
                            <button className='btn' >Daftar Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services " id='services'>
                <div className='text-center' >
                    <h1>Ruang Aman & Nyaman untuk Ceritakan Masalahmu</h1>
                    <p>Beragam pilihan ruang aman sesuai kenyamanan dan kebutuhanmu : </p>
                </div>
                <div className="row d-flex justify-content-between justify-content-lg-evenly">
                    <div className="col col-md-3 col-12">
                        <ServiceContent title={'CHAT'} img={chat} text={<p>Sesi konseling melalui <span>Metode Chat</span> dengan Psikolog</p>} />
                    </div>
                    <div className="col col-md-3 col-12">
                        <ServiceContent title={'CALL'} img={phone} text={<p>Sesi konseling melalui <span>Metode Call</span> dengan Psikolog</p>} />
                    </div>
                    <div className="col col-md-3 col-12">
                        <ServiceContent title={'VIDIO CALL'} img={vidioCall} text={<p>Sesi konseling melalui <span>Metode vidio Call</span> dengan Psikolog</p>} />
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default LandingPage