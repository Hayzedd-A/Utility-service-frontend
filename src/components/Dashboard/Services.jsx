import React from "react";
import EachService from "./EachService";
import dataIcon from "../../assets/data.svg";
import airtimeIcon from "../../assets/airtime.svg";
import bilIIcon from "../../assets/bill.svg";
import tvIcon from "../../assets/tv.svg";
import interneIcon from "../../assets/internet.svg";

function Services() {
  const ApiServices = [
    {
      id: 1,
      name: "Airtime",
      code: "AIRTIME",
      description:
        "Recharge your mobile device with airtime for calls and messages.",
      country_code: "NG",
      icon: airtimeIcon,
    },
    {
      id: 2,
      name: "Mobile Data Service",
      code: "MOBILEDATA",
      description:
        "Purchase mobile data for browsing, streaming, and online activities.",
      country_code: "NG",
      icon: dataIcon,
    },
    {
      id: 3,
      name: "Cable Bill Payment",
      code: "CABLEBILLS",
      description: "Pay for cable TV services with fast and secure payments.",
      country_code: "NG",
      icon: bilIIcon,
    },
    {
      id: 4,
      name: "Internet Service",
      code: "INTSERVICE",
      description: "Pay for your home or office internet service with ease.",
      country_code: "NG",
      icon: interneIcon,
    },
    {
      id: 5,
      name: "Utility Bills",
      code: "UTILITYBILLS",
      description:
        "Settle electricity, water, and other utility bills quickly online.",
      country_code: "NG",
      icon: tvIcon,
    },
    {
      id: 6,
      name: "Utility Bills",
      code: "UTILITYBILLS",
      description:
        "Settle electricity, water, and other utility bills quickly online.",
      country_code: "NG",
      icon: tvIcon,
    },
  ];

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
