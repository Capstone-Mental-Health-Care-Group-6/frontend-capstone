import React from "react";
import AuthLayout from "../../components/Layout/UserLayout";
import "./LandingPage.style.css";
import ServiceContent from "../../components/Fragment/ServiceContent";
import {
  appstore,
  arrowRight,
  client1,
  logoEmpathiCare,
  mentalHealthAmico,
  playstore,
  quote,
  register,
  star,
  youngHappy,
} from "../../../image";
import ButtonConselor from "../../components/Elements/ButtonConselor";
import { services, sponsors2, testimonies } from "../../components/DataComponent/dataComponents";
import { conselorsButton } from "../../components/DataComponent/dataComponents";
import {
  conselors,
  sponsors,
  tentangKami,
  lainnyaFooter,
} from "../../components/DataComponent/dataComponents";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SplideList from "../../components/Fragment/SplideList";
import FooterList from "../../components/Elements/FooterList";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import Aos from "aos";

function LandingPage() {
  const stars = [{ star }, { star }, { star }, { star }, { star }];

  const [typeAnimation] = useTypewriter({
    words: ["Merasa Stres?", "Merasa Depresi?", "Mengalami Kecemasan?"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });


  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <AuthLayout>
      <section className="home" id="home" data-aos="fade-up">
        <div className="row d-flex align-items-center row-cols-lg-2 row-cols-1">
          <div className="col d-grid ">
            <h1>
              Apakah Anda <br />
              <span className="typing-animation">
                {typeAnimation}
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <p>
              Temukan solusi terbaik untuk masalah kesehatan mental Anda. Capai
              kesejahteraan dan kebahagiaan yang Anda inginkan bersama kami.
            </p>
            <button className="btn border border-primary btn-mulaiPerjalnan mt-3">
              Mulai Perjalanan Kesehatan Mental Anda
            </button>
          </div>
          <div className="col d-flex justify-content-center">
            <img src={mentalHealthAmico} alt="" />
          </div>
        </div>
      </section>

      <section className="daftar-sekarang" id="daftar-sekarang" data-aos="fade-up" >
        <div className="row d-flex align-items-center row-cols-lg-2 row-cols-1">
          <div className="col d-grid justify-content-center" >
            <img src={youngHappy} alt="" />
          </div>
          <div className="col d-grid align-items-center justify-content-center">
            <h1>Bahagia juga Milikmu</h1>
            <p>
              Daftar <span>Gratis</span> untuk solusi segala masalahmu. Jadikan
              kami #TemanMelangkah di perjalanan kesehatan mentalmu!
            </p>
            <button className="btn border border-primary btn-daftarSekarang">
              Download Sekarang
            </button>
          </div>
        </div>
      </section>

      <section className="services " id="services">
        <div className="text-center">
          <h1>Ruang Aman & Nyaman untuk Ceritakan Masalahmu</h1>
          <p>Beragam pilihan ruang aman sesuai kenyamanan dan kebutuhanmu : </p>
        </div>
        <div className="row d-flex justify-content-between justify-content-lg-evenly mb-5 ">
          {services.map((service, index) => (
            <div className="col col-md-12 col-lg-4 col-12" key={index}>
              <ServiceContent
                title={service.title}
                img={service.Image}
                text={service.text}
                metode={service.metode}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="conselors" id="conselors" >
        <div className="conselors-content ">
          <h5 className="text-center">
            Lebih Kenal dengan Psikolog dan Konselor EmpathiCare
          </h5>
          <p className="text-center">
            Semua Psikolog dan Konselor terbaik EmpathiCare telah berlisensi dan
            diakui oleh HIMPSI. Mereka siap mendengarkan dan mengatasi setiap
            masalah seputar :{" "}
          </p>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-3 d-n g-3 align-items-center ">
            {conselorsButton.map((conselorButton, index) => (
              <ButtonConselor
                key={index}
                img={conselorButton.image}
                text={conselorButton.text}
              />
            ))}
          </div>

          <div className="caraosel-conselor mt-5">
            <Splide
              options={{
                arrows: true,
                autoWidth: true,
                perPage: 3,
                pagination: false,
                focus: "center",
                gap: 50,
                autoplay: true,
                type: "loop",
                breakpoints: {
                  1450: {
                    gap: 0,
                    focus: false,
                  },
                  894: {
                    arrows: false,
                  },
                  692: {
                    gap: 0,
                  },
                  640: {
                    perPage: 2,
                  },
                },
              }}
            >
              {conselors.map((conselor, index) => (
                <SplideList
                  key={index}
                  name={conselor.name}
                  specialist={conselor.specialist}
                  img={conselor.image}
                />
              ))}
            </Splide>
          </div>
        </div>
      </section>

      <section className="testimonies" id="testimonies">
        <div className="row justify-content-center row-cols-lg-2 row-cols-1">
          <div className="col col-lg-4 d-grid justify-content-center">
            <div className="profile">
              <img src={testimonies[currentIndex].image} alt="" />
              <p className="text-center mt-2">{testimonies[currentIndex].age}</p>
              <div className="d-flex justify-content-center gap-1">
                {stars.map((itemStar, index) => (
                  <img src={itemStar.star} key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="col col-lg-8  d-grid justify-content-center align-items-center">
            <div className="respons-client">
              <h1>Yang Client Kami Katakan Tentang Kami</h1>
              <img src={quote} alt="" />
              <p>{testimonies[currentIndex].response}</p>
            </div>
            <div className="button-testimoni w-100">
              <button className="btn float-end border-0" onClick={handleNextClick}>
                Selanjutnya <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>



              <div className="mb-3">
                <label htmlFor="">Message</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-konsulSekarang border border-primary btn-primary w-100"
              >
                Konsul Sekarang
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="sponsors" id="sponsors">
        <div className="text-center">
          <h3>Telah Dipercaya oleh Berbagai Industri</h3>
        </div>
        <div className="sponsor-content d-grid align-items-center">
          <div className="row  d-flex justify-content-center mt-4 gap-5">
            {sponsors.map((sponsor, index) => (
              <div className="col col-lg-1 col-md-4  col-4 d-flex justify-content-center" key={index}>
                <img src={sponsor.image} />
              </div>
            ))}
          </div>

          <div className="row  g-4 d-flex justify-content-center mt-5 mb-4">
            {sponsors2.map((sponsor, index) => (
              <div className="col col-lg-2 col-sm-6 col-6 d-flex justify-content-center" key={index}>
                <img src={sponsor.image} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="footer" id="footer">
        <div className="footer-content p-5">
          <div className="row  row-cols-lg-4 row-cols-md-2 row-cols-1 d-flex justify-content-between ">
            <div className="col d-grid justify-content-md-center mx-auto mb-4 ">
              <img
                className=" empathiCarefooter mb-2 me-2"
                src={logoEmpathiCare}
                alt=""
              />
              <div className="d-grid justify-content-md-center mt-4">
                <img className="mb-2 me-2" src={playstore} alt="" />
                <img className="mb-2 me-2" src={appstore} alt="" />
              </div>
            </div>

            <div className="col d-flex flex-column align-items-md-center  ">
              <div className="text-start">
                <h5 className="fw-bold">Layanan Kami</h5>
                <FooterList title={"Konseling"} />
              </div>
            </div>

            <div className="col d-flex flex-column align-items-md-center ">
              <div className="text-start">
                <h5 className="fw-bold  ">Tentang Kami</h5>
                {tentangKami.map((item, index) => (
                  <FooterList key={index} title={item.title} />
                ))}
              </div>
            </div>

            <div className="col d-flex flex-column align-items-md-center ">
              <div className="text-start">
                <h5 className="fw-bold  ">Lainnya</h5>
                {lainnyaFooter.map((item, index) => (
                  <FooterList key={index} title={item.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="company  d-flex justify-content-center align-items-center "
        id="company"
      >
        <p>
          PT. EmpathiCare Psikologi Indonesia | Everyone deserves to be happy
        </p>
      </section>
    </AuthLayout>
  );
}

export default LandingPage;
