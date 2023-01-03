import React from "react";


function TeamCard({img,name,content}) {
   const props={img,name,content}
    return (
<div className="">
    <div className="flex flex-col m-3 w-36">
       <img src={props.img} alt="Team Member" className="object-contain border-b-green-400"/>

       <div className="bg-cyan-50 rounded-b-lg ">
        <p className="p-5 text-center">{props.name}</p>
        <p className="p-9 text-center">{props.content}</p>
       </div>
    </div>
</div>
    )
}

export default TeamCard