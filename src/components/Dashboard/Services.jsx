import React from "react";
import EachService from "./EachService";

import { productServices } from "../../config/variables";

function Services() {
  const ApiServices = productServices;
  const handleServiceClick = e => {
    console.log(e.target);
  };

  return (
    <div id="services" className="services">
      {ApiServices.map(service => (
        <EachService
          key={service.id}
          services={service}
          onclick={handleServiceClick}
        />
      ))}
    </div>
  );
}

export default Services;
