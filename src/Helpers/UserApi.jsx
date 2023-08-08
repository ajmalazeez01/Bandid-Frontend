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

export const categoryApi = () => {
  const resdata = UserApi.get("/category",getToken);
  return resdata;
};
export const SearchApi = (data) => {
  console.log(data);
  const resdata = UserApi.post("/search",data);
  return resdata;
};
export const categoryListApi = (location) => {
  const resdata = UserApi.get(`/category-list/${location}`,getToken);
  return resdata;
};
export const categoryDetailApi = (name) => {
  console.log(name);
  const resdata = UserApi.get(`/band-detail/${name}`,getToken);
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
  const resdata = UserApi.get(`/check-location?location=${location}&band=${band}`,getToken);
  return resdata;
};
export const profileDetailsApi = (email,formData) => {
  const resdata = UserApi.post(`/profile/${email}`, formData);
  return resdata;
};
export const profileDetailFetchApi = (email,sortBy,sortOrder) => {
  const resdata = UserApi.get(`/profile-detailfetch?email=${email}&sortBy=${sortBy}&sortOrder=${sortOrder}`,getToken);
  return resdata;
};

export const detailListApi = (id) => {
  const resdata = UserApi.get(`/detail-list/${id}`,getToken);
  return resdata;
};
export const rateListApi = (email,id,data) => {
  const resdata = UserApi.post(`/rate-list?email=${email}&id=${id}`,data);
  return resdata;
};
export const reviewListFetchApi = (id) => {
  const resdata = UserApi.get(`/review-fetch/${id}`,getToken);
  return resdata;
};
export const detailFetchApi = (email) => {
  const resdata = UserApi.get(`/detail-fetch/${email}`,getToken);
  return resdata;
};
export const bookingApi = (id,data) => {
  const resData = UserApi.post(`/booking-detail?fromdate=${data.fromdate}&todate=${data.todate}&id=${id}`,data);
  return resData;
};
export const bookingDetailFetchApi = (email) => {
  const resdata = UserApi.get(`/booking-detailfetch/${email}`,getToken);
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
///messenger
export const getConversationApi = (id) => {
  const resdata = UserApi.get(`/conversation/${id}`,getToken);
  return resdata;
};
export const messageApi = (message,id) => {
  const resdata = UserApi.post(`/message/${id}`,message);
  return resdata;
};
export const getmessageApi = (email) => {
  const resdata = UserApi.get(`/message/${email}`,getToken);
  return resdata;
};
export const getvendormessageApi = () => {
  const resdata = UserApi.get(`/vendormessage`,getToken);
  return resdata;
};

