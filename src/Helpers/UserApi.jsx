import UserApi from "../Config/UserBaseApi"


const token = localStorage.getItem('user');
const getToken = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    role: 'user',
  },
};

export const categoryApi = (id,data)=>{
  console.log(id);
    const resdata = UserApi.get("/category",data);
    return resdata
}
export const UserSignupApi = (data)=>{
    const resdata = UserApi.post("/signup",data)
    return resdata
}
export const userOtpApi=(data)=>{
    const resData = UserApi.post("/otp",data)
    return resData
}
export const userloginApi=(data)=>{
    const resData = UserApi.post("/login",data)
    return resData
}
export const bandDetailApi=(data)=>{
    const resData = UserApi.get("/band-detail",getToken)
    return resData
}

