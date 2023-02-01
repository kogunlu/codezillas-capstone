import React from 'react';
import meditation from './images/meditation.png';
import trauma from './images/trauma.png';
import anxiety from './images/anxiety.png';
import SubsInput from '../../shared/subsInput/SubsInput';
import Footer from '../../shared/footer/Footer';

function Blog() {
  return (
    <>
      <div className=" lg:mx-auto text-lg  lg:text-justify px-5 ">
        <img
          className=" items-start lg:justify-center rounded mx-auto py-7  "
          src={meditation}
          alt="meditation"
        />
        <div className="max-w-[800px]  w-full  mx-auto  flex flex-col justify-center px-3">
          <h1 className=" my-3 text-bold text-3xl">
            MENTAL HEALTH AND TECHNOLOGY
          </h1>
          <p className="uppercase mb-4">
            Technology and mental well-being might seem like profoundly
            antagonistic terms. However, there are excellent digital tools to
            help you reach mindfulness and to practice meditation. You can even
            use smartphone apps, virtual reality solutions and digital devices
            as a form of relieving stressing and achieving digital detox – as,
            after a while, you will be able to practice all types of
            anti-anxiety skills on your own. So, let The Medical Futurist show
            you how you can enhance your mental and emotional health with the
            help of technology.
          </p>
          <h3 className="uppercase text-bold py-5 text-xl ">
            THE NEED FOR TAKING CARE OF OUR EMOTIONAL HEALTH
          </h3>
          <p className="uppercase">
            “Just as we observe physical hygiene to stay well, we need to
            cultivate a kind of emotional hygiene too,” wrote the Dalai Lama on
            his Twitter-feed. There are three crucial points around His
            Holiness’ statement. First and foremost, the popularity of
            health-enhancing, physically active lifestyle is soaring worldwide.
            Nevertheless, there’s always room for improvement: the WHO says that
            globally, 23 percent of adults and 81 percent of school-going
            adolescents are not active enough. According to the organization,
            adults aged 18-64 should do at least 150 minutes of moderately
            intense physical activity each week, which is not unaccomplishable.
            Moreover, the numerically and statistically driven 21st-century mind
            could take a great inspiration and power from the various fitness
            trackers and wearables.
          </p>{' '}
          <p className="uppercase py-6">
            Secondly, emotional hygiene seems to be thrown into the shade
            nowadays. Somehow, the culture of busyness prevents us from
            squeezing some time for mental health into our packed schedules.
            Information is pouring on us from millions of communication
            channels; we are connecting with hundreds of ‘friends’ on social
            media, we are obsessed with data due to the fear of missing out and
            time management slices up our days into meetings and to-do-lists.
          </p>
          <p className="uppercase">
            The pressure to perform and the stress to achieve is the air every
            busy-bee is breathing. However, turbulent lifestyle comes with a
            price. No wonder so many people have mental health issues. In the
            US, that means one in five adults – more than 40 million Americans!
            On the old continent, 27 percent of the population has to cope with
            mental disorders, which means 83 million struggling Europeans. In
            Asia, the prevalence of depression is 20 percent in Thailand, 19.9
            percent in Taiwan, 19.4 percent in Korea, 17.5 in Malaysia and 16.5
            percent in China.
          </p>
        </div>
        <div className=" w-full max-w-[800px] mx-auto mt-12 mb-24 flex flex-col justify-center px-3">
          <h3 className="uppercase lg:text-xl text-bold  sm:m-0">
            Sign up for The Healing blog
          </h3>
          <h6 className="uppercase mb-4 py-2 text-bold">
            A weekly, ad-free Blog that helps you stay in the know.
          </h6>

          <SubsInput className="" />
          
        </div>
        <h3 className="uppercase lg:text-xl max-w-[800px]  w-full  mx-auto  flex flex-col justify-center px-3 mb-10 ">
           Recommended for you
          </h3>
        <div className="flex justify-center mb-20 ">
          <div className=" flex flex-col lg:flex-row justify-between gap-4">
          <span className=" flex justify-end  relative">
              <img
                className=""
                title="HEAL FROM TRAUMA"
                src={trauma}
                alt="trauma"
              /> 
              <span className="absolute right-3/4 bottom-1/4 2xl:right-[430px] w-max ">
                <p className="text-white  text-lg  font-bold bg-slate-400 opacity-90  ">
                  HEAL FROM
                </p>
                <p className="text-white  text-lg  font-bold bg-slate-400 opacity-90 mt-1 ">
                  TRAUMA
                </p>
              </span>
            </span>
            <div className="  relative">
              <img className="" src={anxiety} alt="anxiety" />
              <span className="absolute top-5 left-3 w-2/6">
                <p className="font-medium text-sm md:text-lg text-start">
                  TELL ME ALL I NEED TO KNOW ABOUT ANXIETY
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
