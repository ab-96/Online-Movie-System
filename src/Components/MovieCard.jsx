import React from "react";

const MovieCard = (props) => {
  return (
    <div className=" w-52 h-60 drop-shadow-md ">
      <img
        src={props.img}
        alt={props.title}
        className="object-cover w-full h-full  rounded-t-md hover:border-2 border-white hover:cursor-pointer"
      />
      <div className="bg-dBlue p-1 gap-y-2 flex flex-col">
        <p className="text-white text-xs text-center"> {props.genre}</p>
        <p className="text-white text-center overflow-hidden overflow-ellipsis whitespace-nowrap">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
