import React from "react";
import founderpic from "./founder/founderpic.jpg";

function About() {
    return (
        <div className="mx-52 my-14">
        <div className=" h-72 md:h-64">
            <div className="h-full w-full flex flex-col justify-between">
            <h1 className="text-4xl font-normal pt-24 pb-4">HEALING!</h1>
            <p className="text-lg text-gray-400">some cool one liner!</p>

            <div className="pt-14">At Healing, we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We are obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It is one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We are excited to simplify SEO for everyone through our software, education, and community.</div>
            </div>
        </div>

<div className="bg-cyan-50 ">
        <div className="pt-40 pb-4 my-14 grid grid-cols-2 ">
           <div className="pl-32"> <img src={founderpic} alt="Our Founder" /></div>
           
           <div>
            <h1 className="text-4xl font-normal my-8">Our Founding</h1>
            <div>Healing was founded by Payam Abubakr in 2021. It was called Healing Online, and started as a blog and an online community where some of the world s therapists shared their research and ideas. We launched the Beginner s Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!</div>
            </div>

        </div>
</div>





        </div>
    )
}

export default About