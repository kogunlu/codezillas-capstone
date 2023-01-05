import React from "react";
import TeamCard from "./TeamCard";
import team1 from "./team/team1.jpg"
import team2 from "./team/team2.jpg"
import team3 from "./team/team3.jpg"
import team4 from "./team/team4.jpg"
import team5 from "./team/team5.jpg"
import team6 from "./team/team6.jpg"

// About Page- Meet the Team. TeamCards.jsx called there
function Team() {
    return (
    <div className="pb-40">
        <div className="w-full h-full px-5 py-20 md:px-24 lg:pb-20 lg:px-32 xl:px-64 flex flex-col  gap-20 xl:gap-40">
        <h1 className="text-4xl font-normal 2xl:text-6xl 2xl:pt-24">WE ARE HEALING, NICE TO MEET YOU!</h1>
        <p className="text-2xl  text-gray-800 2xl:text-4xl">Meet the Team!</p>
        </div>

        <div className="flex flex-wrap justify-center">
            <TeamCard img={team1} name="Allan Saleh" content="Lead Engineer & Web Developer"/>
            <TeamCard img={team2} name="Payam Abubakr" content="Junior Designer & FE Developer"/>
            <TeamCard img={team3} name="Ahmed Mohammed" content="Junior Designer & FE Developer"/>
            <TeamCard img={team4} name="Abdulmajeed Jaafer" content="Junior Designer & FE Developer"/>
            <TeamCard img={team5} name="Snoor Madih" content="Junior Designer & FE Developer"/>
            <TeamCard img={team6} name="Avraz Zebary" content="Junior Designer & FE Developer"/>
        </div>


    </div>
    )
}

export default Team