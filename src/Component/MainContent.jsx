
import React, { useState } from "react";

const MainContent = () => {
     const [count, setCount] = useState(5);
     const add = () => {
          setCount(count + 5);
     };
     return (
          <div className="border border-danger w-75 my-5 m-auto text-center pt-2 " >

               <h3 className="border-bottom  border-danger pt-1 pb-1">  Increment And  Decrement </h3>
               <h4> Count is : {count}</h4>
               <button className="btn btn-danger mx-4 mb-3 fw-bold" onClick={add}>
                    {" "}
                    Increment{" "}
               </button>
               <button class="btn btn-danger mb-3 fw-bold" onClick={() => setCount(count - 5)}>
                    Decrement
               </button>{" "}
          </div>
     );
};

export default MainContent;
