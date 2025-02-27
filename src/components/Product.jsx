import React from "react";

const product = () => {
  return (
    <div>
      <div className="p-3 bg-neutral-500 w-60 rounded-md">
        <div className="h-35 w-full bg-blue-500">
          <img
            className="h-full w-full object-cover object-top"
            src="https://tse1.mm.bing.net/th?id=OIP.nvdM5sEm4DqG8oZb8nNStQHaHa&pid=Api&rs=1&c=1&qlt=95&w=112&h=112"
            alt=""
          />
        </div>

        <h3 className="text-white text-xl font-bold capitalize">smart phone</h3>
        <p className="mt-1 text-white text-start">
          Adjustable aluminum stand compatible with all smartphones and tablets.
        </p>
        <p className="font-bold text-white mt-2"> $15.99</p>
        <div className="flex mt-3 gap-5 ">
          <button className="px-5 py-2 bg-blue-900 rounded-md text-white ">
            Edit
          </button>
          <button className="px-5 py-2 bg-red-500 rounded-md text-white ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default product;
