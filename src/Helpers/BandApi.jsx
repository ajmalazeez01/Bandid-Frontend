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

export const allLocationApi = () => {
  const resData = BandApi.get("/all-location");
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
  const resdata = BandApi.get("/category",getToken);
  return resdata;
};
export const getreviewApi = async(email)=>{
  const resdata = await BandApi.get(`/band-Review/${email}`,getToken)
  return resdata
}
export const getBookingApi = async(userEmail, searchQuery, sortBy, sortOrder, currentPage, itemsPerPage)=>{
  const resdata = await BandApi.get(`/band-booking?userEmail=${userEmail}&searchQuery=${searchQuery}&sortBy=${sortBy}&sortOrder=${sortOrder}&currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`,getToken)
  return resdata
}
export const dashboardDetailsApi = (email) => {
  const resdata = BandApi.get(`/dashbord-details/${email}`,getToken);
  return resdata;
};
export const BookingdetailApi = async(id)=>{
  const resdata = await BandApi.get(`/booking-fetch/${id}`,getToken)
  return resdata
}
export const getConversationApi = (id) => {
  const resdata = BandApi.get(`/conversation`,getToken);
  return resdata;
};
export const messageApi = (message) => {
  const resdata = BandApi.post(`/message`,message);
  return resdata;
};
export const getmessageApi = (email) => {
  const resdata = BandApi.get(`/message/${email}`,getToken);
  return resdata;
};
export const getusermessageApi = () => {
  const resdata = BandApi.get(`/usermessage`,getToken);
  return resdata;
};
