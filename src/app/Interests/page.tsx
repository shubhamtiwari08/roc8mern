import React from "react";
import { api } from "~/trpc/react";

const Interests: React.FC = () => {

  type Category = {id:string, name:string}[]

  const categories: Category = [
    {id:"1", name:"shoes"},
    {id:"2", name:"furniture"},
    {id:"3", name:"jewellery"},
    {id:"4", name:"women T-shirts"}
  ]
 
  return (
    <div className="mt-10 flex justify-center">
      <div className="h-3/4 w-[30rem] rounded-lg border-2 bg-white px-16 py-10">
      <h2 className="text-2xl text-center font-semibold mb-6">Create your account</h2>
      <p className="text-center text-xs">The next gen business Marketplace</p>
      <h3 className="text-center font-semibold">My saved Interes</h3>
      


      </div> 
    </div>
  );
};

export default Interests;
