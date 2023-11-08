import React from 'react'
import AuthLayout from '../../components/Layout/UserLayout'
import './LandingPage.style.css'
import ServiceContent from '../../components/Fragment/ServiceContent'
import { book, businesCentre, chat, doctor1, doctor2, doctor3, flame, houseFill, love, mentalHealthAmico, pending, periority, person, phone, repeat, vidioCall, youngHappy } from '../../../image'
import ButtonConselor from '../../components/Elements/ButtonConselor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import SplideList from '../../components/Fragment/SplideList'


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
                        <img src={youngHappy} alt="" />
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
                <div className="row d-flex justify-content-between justify-content-lg-evenly mb-5 ">
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

            <div className="conselors" id='conselors'>
                <div className="conselors-content ">
                    <h5 className='text-center' >Lebih Kenal dengan Psikolog dan Konselor EmpathiCare</h5>
                    <p>Semua Psikolog dan Konselor terbaik EmpathiCare telah berlisensi dan diakui oleh HIMPSI. Mereka siap mendengarkan dan mengatasi setiap masalah seputar : </p>
                    <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-3 d-n g-3 ">
                        <ButtonConselor img={flame} text={'Kendali Emosi'} />
                        <ButtonConselor img={person} text={'Kesepian'} />
                        <ButtonConselor img={periority} text={'Kecemasan '} />
                        <ButtonConselor img={businesCentre} text={'Pekerjaan'} />
                        <ButtonConselor img={book} text={'Pendidikan'} />
                        <ButtonConselor img={houseFill} text={'Keluarga'} />
                        <ButtonConselor img={love} text={'Percintaan'} />
                        <ButtonConselor img={person} text={'Social'} />
                        <ButtonConselor img={repeat} text={'Kecanduan'} />
                        <ButtonConselor img={pending} text={'Lainnya'} />
                    </div>


                    <div className="caraosel-conselor mt-5">
                        <Splide options={{
                            arrows: true,
                            autoWidth: true,
                            autoplay: true,
                            perPage: 3,
                            pagination: false,
                            focus: 'center',
                            gap: 50,
                            autoplay: true,
                            type: 'loop',
                            breakpoints: {
                                1450: {
                                    gap: 0,
                                    focus: false
                                },
                                894: {
                                    arrows: false
                                },
                                692: {
                                    gap: 0,
                                },
                                640: {
                                    perPage: 2,
                                    // focus: false,
                                    // pagination: true
                                }
                            }
                        }}>
                            <SplideList name={'Charlie Philips, M.Psi.'} specialist={'Psikolog Klinis | Spesialis Keluarga'} img={doctor1} />
                            <SplideList name={'Miracle Culhane, S.Psi.'} specialist={'Konselor | Spesialis Hubungan Interpersonal'} img={doctor2} />
                            <SplideList name={'Maria Mango, S. Psi.'} specialist={'Psikolog | Spesialis Menejemen Stress dan Emosi'} img={doctor3} />

                        </Splide>
                    </div>
                </div>


            </div>

        </AuthLayout>
    )
}

export default LandingPage