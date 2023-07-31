import { Form } from "react-hook-form";
import BandApi from "../Config/BandBaseApi";

const token = localStorage.getItem("vendor");
const getToken = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    role: "vendor",
  },
};

export const allLocationApi = (data) => {
  const resData = BandApi.get("/all-location", data);
  return resData;
};
export const BandSignupApi = (data) => {
  const resdata = BandApi.post("/signup", data);
  return resdata;
};
export const bandOtpApi = (data) => {
  const resData = BandApi.post("/otp", data);
  return resData;
};
export const BandLoginApi = (data) => {
  const resdata = BandApi.post("/login", data);
  return resdata;
};
export const BandDetailsApi = (email,formData) => {
  console.log(email);
  console.log(formData);
  const resdata = BandApi.post(`/band-detail/${email}`, formData);
  return resdata;
};
export const categoryApi = () => {
  const resdata = BandApi.get("/category");
  return resdata;
};
export const getreviewApi = async()=>{
  const resdata = await BandApi.get("/band-Review",getToken)
  return resdata
}
