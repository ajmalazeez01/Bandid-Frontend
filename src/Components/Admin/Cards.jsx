import React from "react";

function Cards({ colour, head, body }) {
  return (
    <div
      className={`rounded-lg ${colour} flex-col p-2 md:p-5 mb-2 w-52 self-center md:w-56 shadow-2xl`}
    >
      <h1 className="text-white text-1xl text-center md:text-xl ">{head}</h1>
      <h2 className="text-white text-1xl text-center font-bold mt-1 md:text-xl ">
        {body}
      </h2>
    </div>
  );
}

export default Cards;