import React from "react";

const product = ({data,deleteHandler,idx,updateHandler}) => {
 

  
  
  
  return (
    <div>
      <div className="p-3 bg-neutral-500 w-60 rounded-md">
        <div className="h-35 w-full bg-blue-500">
          <img
            className="h-full w-full object-cover object-top"
            src={data.url}
            alt={data.name}
          />
        </div>

        <h3 className="text-white text-xl font-bold capitalize">{data.name}</h3>
        <p className="mt-1 text-white text-start">
          {data.discription}
        </p>
        <p className="font-bold text-white mt-2"> ${data.price}</p>
        <div className="flex mt-3 gap-5 ">
          <button onClick={()=>updateHandler(idx)} className="px-5 py-2 bg-blue-900 rounded-md text-white ">
            Edit
          </button>
          <button onClick={()=>deleteHandler(idx)} className="px-5 py-2 bg-red-500 rounded-md text-white ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default product;
