import axios from "axios";
import services from "./services";

/** @type {AxiosInstance} */
const createdAxios = axios.create({baseURL: "http://localhost:8080/"});

const configs = JSON.parse(JSON.stringify(services));

Object.keys(services).forEach((module) => {
  Object.keys(services[module]).forEach((service) => {
    services[module][service] = ({params = null, data = null}) => {
      return createdAxios.request({
        params,
        data,
        ...configs[module][service],
      });
    }
  });
});

export default services;
