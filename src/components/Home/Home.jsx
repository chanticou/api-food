import React from "react";
import { Carrousel } from "../Carrousel/Carrousel";
import bento1 from "../../assets/images/home_image.jpg";
import chanti from "../../assets/images/chanti-image.jpg";

import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="content_home">
        <h1>BENTO IN ARGENTINA</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
          corrupti, velit veritatis, perferendis dolorem eos distinctio fuga
          perspiciatis quasi exercitationem modi necessitatibus reiciendis
          expedita consectetur fugit sit atque natus?
        </p>
      </div>
      <Carrousel></Carrousel>
      <div className="content_secondPart">
        <h3>Hace tuya una tradicion Japonesa</h3>
        <h2>Hagamos del bento una costumbre</h2>
        <div className="content_description">
          <img className="home_image" src={bento1} />
          <div className="content_p">
            <img className="me" src={chanti} alt=""></img>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              blanditiis minus facilis explicabo quam. Doloremque sequi
              perspiciatis vitae, quaerat tenetur ipsum at deleniti,
              reprehenderit sed quae odit temporibus explicabo unde.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
