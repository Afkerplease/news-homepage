import React from "react";
import web3mobile from "../assets/images/image-web-3-mobile.jpg";
import web3pc from "../assets/images/image-web-3-desktop.jpg";

function Grid() {
  return (
    <div className="mt-5 md:grid md:grid-cols-grid-speciale md:mt-10 gap-4">
      <div className=" col-start-1 col-end-3 ">
        <picture className=" ">
          <source media="(min-width:768px )" srcSet={web3pc} sizes="" />
          <img src={web3mobile} alt="" />
        </picture>
        {/* bright future grid */}
        <div className="mt-4 md:grid md:grid-cols-2 gap-4 md:mt-8  ">
          <div>
            <h1 className=" text-[2.9rem] font-[800] text-Verydarkblue leading-[3rem] md:text-[4.7rem] md:leading-[4.2rem] mb-4 ">
              The Bright Future of web 3.0?
            </h1>
          </div>
          <div className="  ">
            <p className=" md:text-[23px] text-Darkgrayishblue ">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-Softred py-4 px-10 text-white uppercase font-[400] tracking-[0.2rem] hover:bg-Verydarkblue  mt-5 ">
              Read More
            </button>
          </div>
        </div>
        {/* bright future grid */}
      </div>
      {/* New div information */}
      <div className=" bg-Verydarkblue p-5 mt-20 col-start-3 col-end-4 row-start-1 row-end-2 md:mt-0 ">
        <h2 className="text-Softorange text-[2rem] mb-2 font-[800] md:text-[3rem]  ">
          New
        </h2>
        {/*  */}
        <div className=" mt-8 border-b-[1px] border-Darkgrayishblue md:mt-10">
          <h3 className=" text-Offwhite text-[1.4rem] font-[700] md:text-[1.6rem] hover:text-Softorange cursor-pointer   ">
            Hydrogen VS Electric Cars
          </h3>
          <p className=" text-Darkgrayishblue pb-8 text-[15px] mt-2 md:mt-5 md:text-[18px] ">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className=" mt-8 border-b-[1px] border-Darkgrayishblue">
          <h3 className=" text-Offwhite text-[1.4rem] font-[700] md:text-[1.6rem] hover:text-Softorange cursor-pointer ">
            The Downsides of AI Artistry
          </h3>
          <p className=" text-Darkgrayishblue pb-8 text-[15px] mt-2 md:mt-5 md:text-[18px] ">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className=" mt-8  ">
          <h3 className=" text-Offwhite text-[1.4rem] font-[700] md:text-[1.6rem] hover:text-Softorange cursor-pointer  ">
            Is VC Funding Drying Up?
          </h3>
          <p className=" text-Darkgrayishblue  pb-2 text-[15px] mt-2 md:mt-5 md:text-[18px] ">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
        {/*  */}
      </div>
      {/* End of New div information */}
    </div>
  );
}

export default Grid;
