import React from "react";

// Blog Page-Meet the Team Cards function starts
function TeamCard({img,name,content}) {
   const props={img,name,content}
    return (

    <div className="flex flex-col m-3 w-36  xl:w-36 2xl:w-80 hover:scale-105 hover:shadow-lg rounded-3xl">
       <img src={props.img} alt="Team Member" className="object-contain"/>

       <div className="bg-cyan-50 rounded-b-3xl">
        <p className="h-20 pt-8 text-center border-t-green-400 text-lg 2xl:text-3xl">{props.name}</p>
        <p className="pt-8 pb-20 text-center text-base 2xl:text-2xl">{props.content}</p>
       </div>
    </div>

    )
}

export default TeamCard