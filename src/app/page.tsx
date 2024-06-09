import Image from "next/image";
import CatholicWebHosting from "@/images/catholic-web-hosting-hereo.png";
import CustomButton from "@/components/CustomButton";
import Card from "@/components/Card";
import LogoCloud from "@/components/LogoCloud";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="max-w-[1440px] justify-between p-12 pt-32 m-auto">
      <FadeIn>
        <div className="flex flex-col md:flex md:flex-row">
          <div className="full-width md:w-2/5">
            <h1 className="text-white text-4xl md:pr-8 font-extrabold">Catholic web hosting solutions for your parish, ministry or business</h1>
            <p className="text-white md:pr-8 mt-6 font-thin text-sm text-justify"><strong><i>Catholic Web Hosting</i></strong>, is dedicated to supporting the Church's mission on the internet by providing reliable and top-notch web hosting services. Our user-friendly tools are designed to help you effectively spread God's word online. Trust us to be your dependable partner for Catholic Web Hosting, ensuring your online ministry is powerful, efficient, and impactful.

            </p>
            <div className="sm:flex-col md:flex-row mt-8">
              <CustomButton
                href="/contact"
                className="mt-12 bg-[#0d6f89] text-white p-4 px-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition duration-300 transform hover:scale-105"
              >
                <i className="text-xl">Get started</i>
              </CustomButton>
              <CustomButton href="/pricing" className="mt-12 ml-4 bg-transparent text-white p-4 px-4 text-left hover:underline"><i className="text-xl">View plans</i></CustomButton>
            </div>
          </div>
          <div className="hidden md:inline flex-1 ml-20 mt-6 text-center">
            <Image width={700} height={190} src={CatholicWebHosting} alt="Catholic Web Hosting" />
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="max-w-[1440px]">
          <h2 className="text-white text-4xl font-extrabold text-center mt-28">Why choose <strong><i>catholic web hosting</i></strong>?</h2>
          <p className="text-white pr-8 mt-6 font-thin text-sm max-w-2xl m-auto text-center">We are the right service for you. We guarantee it, not just our awesome infrastructure, but our commitment to be the best web hosting company. You are at the fore-front of our mission.</p>
        </div>
      </FadeIn>
      <FadeInStagger>
        <div className="flex space-x-4 mt-16">
          <FadeIn>
            <Card title="Our faith motivates us" description="Don’t let our faith based approach to business turn you away–This is what binds us to pursue excellence! We strive to provide you with the best Catholic Web Site Hosting possible!" />
          </FadeIn>
          <FadeIn>
            <Card title="We share your values" description="Our goal is quite honestly to help evangelize what Pope Emeritus Benedict XVI called the digital continent. We are trying to make that as easy as possible! We’re here for Christ and His Church!" />
          </FadeIn>
          <FadeIn>
            <Card title="Extremely Reliable" description="Our goal is quite honestly to help evangelize what Pope Emeritus Benedict XVI called the digital continent. We are trying to make that as easy as possible! We’re here for Christ and His Church!" />
          </FadeIn>
          <FadeIn>
            <Card title="99.9% Uptime Guaranteed!" description="Our goal is quite honestly to help evangelize what Pope Emeritus Benedict XVI called the digital continent. We are trying to make that as easy as possible! We’re here for Christ and His Church!" />
          </FadeIn>
        </div >
      </FadeInStagger>
      <FadeInStagger>
        <div className="flex space-x-4 mt-8">
          <FadeIn>
            <Card title="Money back guaranteed!" description="Our goal is quite honestly to help evangelize what Pope Emeritus Benedict XVI called the digital continent. We are trying to make that as easy as possible! We’re here for Christ and His Church!" />
          </FadeIn>
          <FadeIn>
            <Card title="Easily transfer your site" description="Our goal is quite honestly to help evangelize what Pope Emeritus Benedict XVI called the digital continent. We are trying to make that as easy as possible! We’re here for Christ and His Church!" />
          </FadeIn>
          <FadeIn>
            <Card title="Amazing support. always!" description="Our goal is quite honestly to help evangelize what Pope Emeritus Benedict XVI called the digital continent. We are trying to make that as easy as possible! We’re here for Christ and His Church!" />
          </FadeIn>
          <FadeIn>
            <Card title="Share and Save Money!" description="Our goal is quite honestly to help evangelize what Pope Emeritus Benedict XVI called the digital continent. We are trying to make that as easy as possible! We’re here for Christ and His Church!" />
          </FadeIn>
        </div>
      </FadeInStagger>
      <FadeIn>
        <div className="max-w-[1440px]">
          <h2 className="text-white text-4xl font-extrabold text-center mt-28"> Everything needed to help you achieve your goals!</h2>
          <p className="text-white pr-8 mt-6 font-thin text-sm max-w-2xl m-auto text-center">We are the right service for you. We guarantee it, not just our awesome servers,
            But our commitment to be the best web hosting company, religious based or
            otherwise, you are at the fore-front!</p>
        </div>
      </FadeIn>
      <div className="max-w-[1440px]">
        <FadeInStagger className="flex space-x-4 mt-16">
          <FadeIn>
            <Card classes="flex-1" title="Free Domain" description="We offer a free domain with all our hosting plans." withIcon />
          </FadeIn>
          <FadeIn>
            <Card classes="flex-1" title="Free SSL Certificate" description="We offer a free SSL certificate with all our hosting plans." withIcon />
          </FadeIn>
          <FadeIn>
            <Card classes="flex-1" title="Free Website Builder" description="We offer a free website builders with all our hosting plans." withIcon />
          </FadeIn>
          <FadeIn>
            <Card classes="flex-1" title="Free Email" description="We offer free email with all our hosting plans." withIcon />
          </FadeIn>
        </FadeInStagger>
      </div>
      <LogoCloud />
    </div >
  );
}
