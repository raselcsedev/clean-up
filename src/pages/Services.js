import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import fetcher from "../api";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    /* axios.get("http://localhost:5000/service")
            .then((res) => setServices(res)); */

    (async () => {
      const res = await fetcher.get("/service");
      setServices(res.data);
    })();
  }, []);
  return (
    <div className="grid mt-5 justify-center mx-auto p-12 w-100">
      <h1 className="text-3xl m-3 font-bold text-success text-center">
        Manage Services
      </h1>
      <div className="grid lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <section key={service._id}>
            <div class="card  bg-base-100 shadow-xl">
              <figure class="pt-4">
                <div class="avatar">
                  <div class="w-36 rounded">
                    <img src={service.image} alt="" />
                  </div>
                </div>
              </figure>
              <div class="card-body items-center text-center">
                <h4 class="card-title">Service Name: {service.serviceName}</h4>
                <p>Price :<span className="font-bold">{service.serviceCharge}</span> </p>
                {/* <div class="card-actions">
                  <button class="btn btn-primary">Buy Now</button>
                </div> */}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
