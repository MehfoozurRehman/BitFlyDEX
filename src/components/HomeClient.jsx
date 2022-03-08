import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";

export default function HomeClient() {
  return (
    <div className="home__clients">
      <a href="#" className="home__clients__entry">
        <img src={client1} alt="client" />
      </a>
      <a href="#" className="home__clients__entry">
        <img src={client2} alt="client" />
      </a>
      <a href="#" className="home__clients__entry">
        <img src={client1} alt="client" />
      </a>
      <a href="#" className="home__clients__entry">
        <img src={client1} alt="client" />
      </a>
      <a href="#" className="home__clients__entry">
        <img src={client2} alt="client" />
      </a>
    </div>
  );
}
