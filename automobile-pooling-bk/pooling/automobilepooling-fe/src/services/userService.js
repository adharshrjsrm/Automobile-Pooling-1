import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9000/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getOwnerBoard = () => {
  return axios.get(API_URL + "owner", { headers: authHeader() });
};

const getPassengerBoard = () => {
    return axios.get(API_URL + "passenger", { headers: authHeader() });
  };


export default {
  getPublicContent,
  getOwnerBoard,
  getPassengerBoard
};