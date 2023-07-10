import BandApi from "../Config/BandBaseApi"



const token = localStorage.getItem('vendor');
const getToken = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    role: 'vendor',
  },
};




// console.log(getToken)
// console.log(token);

export const allLocationApi=(data)=>{
    const resData= BandApi.get("/all-location",data)
    return resData
}
export const BandSignupApi = (data)=>{
    const resdata = BandApi.post("/signup",data)
    return resdata
}
export const bandOtpApi=(data)=>{
    const resData = BandApi.post("/otp",data)
    return resData
}
export const BandLoginApi = (data)=>{
    const resdata = BandApi.post("/login",data)
    return resdata
}
export const BandDetailsApi = (data)=>{
    const resdata = BandApi.post("/band-detail",data,getToken)
    return resdata
}
export const categoryApi = (data)=>{
    const resdata = BandApi.get("/category",data)
    return resdata
}
