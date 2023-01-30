import React from 'react';
import Footer from '../../shared/footer/Footer';
import founderpic from './founder/founderpic.jpg';

function About() {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-between items-center ">
        <div className="w-full px-5 py-10 lg:pb-20 lg:px-32 xl:px-64 flex flex-col justify-evenly gap-5">
          <div className="h-full w-full flex flex-col md:items-center lg:items-start">
            <h1 className="text-4xl font-normal 2xl:text-6xl ">HEALING!</h1>
            <p className="text-lg text-gray-400 2xl:text-xl">
              some cool one liner!
            </p>
          </div>

          <p className="text-gray-800 2xl:text-xl">
            At Healing, we believe there is a better way to do things. A more
            valuable way where customers are earned rather than bought. We`re
            obsessively passionate about it, and our mission is to help people
            achieve it. We focus on search engine optimization. It`s one of the
            least understood and least transparent aspects of great marketing,
            and we see that as an opportunity. We`re excited to simplify SEO for
            everyone through our software, education, and community.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly lg:justify-between lg:items-center bg-cyan-50 px-5 py-10 gap-5 lg:px-32 lg:py-5 xl:px-64 xl:py-10 xl:gap-10 2xl:gap-5 xl:justify-start">
          <div className="w-full lg:w-5/12 xl:w-6/12 flex justify-center items-start lg:justify-start">
            <img src={founderpic} alt="Our Founder" />
          </div>

          <div className="flex flex-col gap-3 lg:w-6/12 xl:w-7/12 2xl:w-full xl:gap-5 xl:h-full 2xl:justify-start">
            <h1 className="text-4xl font-normal text-gray-800 md:text-center lg:text-left 2xl:text-6xl ">
              Our Founding
            </h1>
            <p className="text-gray-800 2xl:text-xl">
              Healing was founded by Payam Abubakr in 2021. It was called
              Healing Online, and started as a blog and an online community
              where some of the world`s therapists shared their research and
              ideas. We launched the Beginner`s Guide to Therapy and our first
              study, and that hub of industry expertise transformed into a small
              consulting firm and led us to create the Online Therapist of
              today!
            </p>
          </div>
        </div>
      </div>

      <Footer isShortContent />
    </>
  );
}

export default About;
