import axios from "axios";
import services from "./services";

/** @type {AxiosInstance} */
const createdAxios = axios.create({baseURL: "http://192.168.0.135:5000/maquina-velha/"});

const configs = JSON.parse(JSON.stringify(services));

Object.keys(services).forEach((module) => {
  Object.keys(services[module]).forEach((service) => {
    services[module][service] = ({params = null, query = null, data = null}) => {
      const finalUrl = configs[module][service].url.replace(/:(\w+)/g, (match, paramName) => {
        if (params?.[paramName] !== undefined) {
          return params[paramName];
        }

        return "";
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
