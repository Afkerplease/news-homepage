import React from "react";
import pc from "../assets/images/image-top-laptops.jpg";
import keyboard from "../assets/images/image-gaming-growth.jpg";
import arcade from "../assets/images/image-retro-pcs.jpg";
function Pictures() {
  return (
    <div className="mt-10 flex flex-col gap-10 pb-10 md:flex-row">
      {/* first one */}
      <div className="flex gap-5">
        <img src={arcade} className=" w-[120px] " alt="" />
        <div>
          <h3 className=" text-Grayishblue text-4xl font-[800] ">01</h3>
          <a
            href="#"
            className="text-Verydarkblue text-xl font-[600]  hover:text-Softred "
          >
            {" "}
            Reviving Retro PCs{" "}
          </a>
          <p className="mt-4 text-Darkgrayishblue ">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      {/*  End of first one */}
      {/* second one */}
      <div className="flex gap-5">
        <img src={pc} className=" w-[120px] " alt="" />
        <div>
          <h3 className=" text-Grayishblue text-4xl font-[800] ">02</h3>
          <a
            href="#"
            className="text-Verydarkblue text-xl font-[600]  hover:text-Softred "
          >
            {" "}
            Top 10 Laptops of 2022{" "}
          </a>
          <p className="mt-4 text-Darkgrayishblue ">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      {/*  End of second one */}
      {/* third one */}
      <div className="flex gap-5">
        <img src={keyboard} className=" w-[120px] " alt="" />
        <div>
          <h3 className=" text-Grayishblue text-4xl font-[800] ">03</h3>
          <a
            href="#"
            className="text-Verydarkblue text-xl font-[600] hover:text-Softred "
          >
            {" "}
            The Growth of Gaming{" "}
          </a>
          <p className="mt-4 text-Darkgrayishblue ">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
      {/*  End of third one */}
    </div>
  );
}

export default Pictures;
