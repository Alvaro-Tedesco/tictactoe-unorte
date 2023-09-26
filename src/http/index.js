import axios from "axios";
import services from "./services";

/** @type {AxiosInstance} */
const createdAxios = axios.create({baseURL: "http://localhost:5000/maquina-velha/"});

const configs = JSON.parse(JSON.stringify(services));

Object.keys(services).forEach((module) => {
  Object.keys(services[module]).forEach((service) => {
    services[module][service] = ({param = null, query = null, data = null}) => {
      const finalUrl = configs[module][service].url.replace(/:(\w+)/g, (match, paramName) => {
        if (param?.[paramName] !== undefined) {
          return param[paramName];
        } else {
          return "";
        }
      });

      return createdAxios.request({
        params: query,
        data,
        ...configs[module][service],
        url: finalUrl,
      });
    }
  });
});

export default services;
