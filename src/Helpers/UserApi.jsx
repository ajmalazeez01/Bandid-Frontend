import UserApi from "../Config/UserBaseApi";

const token = localStorage.getItem("user");
const getToken = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    role: "user",
  },
};

export const categoryApi = (data) => {
  const resdata = UserApi.get("/category", data);
  return resdata;
};
export const categoryListApi = (location) => {
  const resdata = UserApi.get(`/category-list/${location}`);
  return resdata;
};
export const categoryDetailApi = (name) => {
  console.log(name);
  const resdata = UserApi.get(`/band-detail/${name}`);
  return resdata;
};
export const UserSignupApi = (data) => {
  const resdata = UserApi.post("/signup", data);
  return resdata;
};
export const userOtpApi = (data) => {
  const resData = UserApi.post("/otp", data);
  return resData;
};
export const userloginApi = (data) => {
  const resData = UserApi.post("/login", data);
  return resData;
};
export const bandDetailApi = () => {
  const resData = UserApi.get("/band-detail", getToken);
  return resData;
};
export const checkLocationApi = (location,band) => {
  console.log(location,band);
  const resdata = UserApi.get(`/check-location?location=${location}&band=${band}`);
  return resdata;
};
export const profileDetailsApi = (email,formData) => {
  const resdata = UserApi.post(`/profile/${email}`, formData);
  return resdata;
};
export const profileDetailFetchApi = (email) => {
  const resdata = UserApi.get(`/profile-detailfetch/${email}`);
  return resdata;
};

export const detailListApi = (id) => {
  const resdata = UserApi.get(`/detail-list/${id}`);
  return resdata;
};
export const rateListApi = (email,data) => {
  const resdata = UserApi.post(`/rate-list/${email}`,data);
  return resdata;
};
export const reviewListFetchApi = () => {
  const resdata = UserApi.get("/review-fetch");
  return resdata;
};
export const detailFetchApi = (email) => {
  const resdata = UserApi.get(`/detail-fetch/${email}`);
  return resdata;
};
export const bookingApi = (id,data) => {
  const resData = UserApi.post(`/booking-detail?fromdate=${data.fromdate}&todate=${data.todate}&id=${id}`,data);
  return resData;
};
// export const bookingFetchApi = (data) => {
//   const resdata = UserApi.get(`/booking-fetch?fromdate=${data.fromdate}&todate=${data.todate}&email=${data.email}`);
//   return resdata;
// };
export const bookingDetailFetchApi = (email) => {
  const resdata = UserApi.get(`/booking-detailfetch/${email}`);
  return resdata;
};
export const cancelApi = (id) => {
  const resdata = UserApi.patch(`/cancel/${id}`);
  return resdata;
};
export const buybandInCheckOut = (id) => {
  const resdata = UserApi.post(`/online-payment/${id}`);
  return resdata;
};
export const verifyApi = (id,data) => {
  const resdata = UserApi.post(`/verify-payment/${id}`,data);
  return resdata;
};


