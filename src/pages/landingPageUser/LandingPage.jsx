import React from 'react'
import AuthLayout from '../../components/Layout/UserLayout'
import './LandingPage.style.css'
import ServiceContent from '../../components/Fragment/ServiceContent'
import { appstore, arrowRight, book, businesCentre, client1, doctor1, doctor2, doctor3, flame, houseFill, logoEmpathiCare, love, mentalHealthAmico, pending, periority, person, playstore, quote, register, repeat, star, youngHappy } from '../../../image'
import ButtonConselor from '../../components/Elements/ButtonConselor'
import { services } from '../../components/DataComponent/dataComponents'
import { conselorsButton } from '../../components/DataComponent/dataComponents'
import { conselors, sponsors, tentangKami, lainnyaFooter } from '../../components/DataComponent/dataComponents'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import SplideList from '../../components/Fragment/SplideList'
import Input from '../../components/Elements/Input'
import FooterList from '../../components/Elements/FooterList'


function LandingPage() {
    const stars = [{ star }, { star }, { star }, { star }, { star },];
    return (
        <AuthLayout>
            <section className='home' id='home'>
                <div className="row d-flex align-items-center row-cols-lg-2 row-cols-1">
                    <div className="col d-grid ">
                        <h1>Apakah Anda <br />
                            <span className='typing-animation' >Merasa Stres?</span>
                        </h1>
                        <p>Temukan solusi terbaik untuk masalah kesehatan mental Anda. Capai kesejahteraan dan kebahagiaan yang Anda inginkan bersama kami.</p>
                        <button className='btn mt-3' >Mulai Perjalanan Kesehatan Mental Anda</button>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src={mentalHealthAmico} alt="" />
                    </div>
                </div>
            </section>

            <section className="daftar-sekarang" id='daftar-sekarang'>
                <div className="row ">
                    <div className="col d-grid justify-content-center">z
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
            </section>




            <section className="services " id='services'>
                <div className='text-center' >
                    <h1>Ruang Aman & Nyaman untuk Ceritakan Masalahmu</h1>
                    <p>Beragam pilihan ruang aman sesuai kenyamanan dan kebutuhanmu : </p>
                </div>
                <div className="row d-flex justify-content-between justify-content-lg-evenly mb-5 ">
                    {services.map((service, index) => (
                        <div className="col col-md-3 col-12" key={index}>
                            <ServiceContent title={service.title} img={service.Image} text={service.text} metode={service.metode} />
                        </div>
                    ))}

                </div>
            </section>

            <section className="conselors" id='conselors'>
                <div className="conselors-content ">
                    <h5 className='text-center' >Lebih Kenal dengan Psikolog dan Konselor EmpathiCare</h5>
                    <p className='text-center'>Semua Psikolog dan Konselor terbaik EmpathiCare telah berlisensi dan diakui oleh HIMPSI. Mereka siap mendengarkan dan mengatasi setiap masalah seputar : </p>
                    <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-3 d-n g-3 align-items-center ">

                        {conselorsButton.map((conselorButton, index) => (
                            <ButtonConselor key={index} img={conselorButton.image} text={conselorButton.text} />
                        ))}

                    </div>


                    <div className="caraosel-conselor mt-5">
                        <Splide options={{
                            arrows: true,
                            autoWidth: true,
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
                                }
                            }
                        }}>
                            {conselors.map((conselor, index) => (
                                <SplideList key={index} name={conselor.name} specialist={conselor.specialist} img={conselor.image} />
                            ))}

                        </Splide>
                    </div>
                </div>
            </section>

            <section className="testimonies" id='testimonies'>
                <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                    <div className="col col-lg-4 d-grid justify-content-center">
                        <div className="profile">
                            <img src={client1} alt="" />
                            <p className='text-center mt-2' >K.A, 25 Tahun</p>

                            <div className="d-flex justify-content-center gap-1" >
                                {stars.map((itemStar, index) => (
                                    <img src={itemStar.star} key={index} />
                                ))}
                            </div>


                        </div>
                    </div>
                    <div className=" col col-lg-8  d-grid justify-content-center align-items-center">
                        <div className="respons-client">
                            <h1>Yang Client Kami Katakan Tentang Kami</h1>
                            <img src={quote} alt="" />
                            <p>Beyond my expectationn!! Semua masalah dibuat jadi lebih ringan, dibawakan dengan cara komedi dan tidak terlalu formal jadi enjoy
                                to talk. Setelah bbrp kali Konsul psikolog baru kali ini yang suantai sekali, bener² kayak
                                ngobrol sama temen dan kayak udah akrab
                                lamaaa. God Bless you Kak Cahrlie!! deserve much love!</p>
                        </div>
                        <div className="button-testimoni w-100">
                            <button className='btn float-end' >Selanjutnya <img src={arrowRight} alt="" /></button>
                        </div>

                    </div>
                </div>

            </section>

            <section className="register" id='register'>
                <div className="text-center">
                    <h1>Capai Bahagiamu Sekarang</h1>
                    <h5>Seperti yang lain, Kamu juga Berhak Bahagia</h5>
                </div>
                <div className="row mt-5 d-flex align-items-center row-cols-lg-2 row-cols-1">
                    <div className="col d-flex justify-content-center">
                        <img src={register} alt="" />
                    </div>
                    <div className="col">
                        <form>
                            <Input title={'Nama'} name={'name'} type={'text'} />
                            <Input title={'No. Telepon'} name={'noPhone'} type={'number'} />

                            <div className="row">
                                <div className="col">
                                    <Input title={' Date'} name={'date'} type={'date'} />
                                </div>
                                <div className="col">
                                    <label className="form-label">
                                        Conselor
                                    </label>
                                    <div className="input-group mb-3">
                                        <select className="form-select" aria-label="Example select with button addon" defaultValue="none">
                                            <option value="none">Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="">
                                    Message
                                </label>
                                <textarea className="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Buat Janji Temu
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className='sponsors' id='sponsors' >
                <div className="text-center">
                    <h3>Telah Dipercaya oleh Berbagai Industri</h3>
                </div>
                <div className="sponsor-content d-grid align-items-center">
                    <div className="row row-cols-md-4 row-col-2 d-flex justify-content-center">
                        {sponsors.map((sponsor, index) => (
                            <div className="col d-flex justify-content-center" key={index}>
                                <img src={sponsor.image} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className='footer' id='footer' >
                <div className="container p-5">
                    <div className="row d-flex justify-content-between ">
                        <div className="col col-lg-2 col-12 mb-lg-0 mb-4 ">
                            <img className=" empathiCarefooter mb-2 me-2" src={logoEmpathiCare} alt="" />
                            <div className="d-grid mt-4">
                                <img className="mb-2 me-2" src={playstore} alt="" />
                                <img className="mb-2 me-2" src={appstore} alt="" />
                            </div>
                        </div>

                        <div className="col d-flex flex-column col-lg-2 col-12 mb-lg-0 mb-4 ">
                            <h5 className="fw-bold">Layanan Kami</h5>
                            <FooterList title={'Konseling'} />

                        </div>

                        <div className="col d-flex flex-column col-lg-2 col-12">
                            <h5 className="fw-bold  ">Tentang Kami</h5>
                            {tentangKami.map((item, index) => (
                                <FooterList key={index} title={item.title} />
                            ))}
                        </div>

                        <div className="col d-flex flex-column col-lg-2 col-12">
                            <h5 className="fw-bold  ">Lainnya</h5>
                            {lainnyaFooter.map((item, index) => (
                                <FooterList key={index} title={item.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>



        </AuthLayout >
    )
}

export default LandingPage