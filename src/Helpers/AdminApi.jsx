import AdminApi from "../Config/AdminBaseApi";


const token = localStorage.getItem('admin');
const getToken = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    role: 'admin',
  },
};

export const AdminLoginApi = async(data)=>{
    const resdata = await AdminApi.post("/login",data)
    return resdata
}
export const AddLocationApi = async(data)=>{
    const resdata = await AdminApi.post("/location",data,getToken)
    return resdata
}
export const AddBandApi = async(data)=>{
    const resdata = await AdminApi.post("/band",data,getToken)
    return resdata
}
export const getLocationAndBandApi = async()=>{
    const resdata = await AdminApi.get("/location-and-bands",getToken)
    return resdata
}
export const findBandApi = async(data)=>{
    const resdata = await AdminApi.post("/find-band",data)
    return resdata
}
export const findLocationApi = async(data)=>{
    const resdata = await AdminApi.post("/find-location",data)
    return resdata
}
export const editBandApi=async(data)=>{
    const resData=await AdminApi.post("/edit-band",data)
    return resData
}
export const editLocationApi=async(data)=>{
    const resData=await AdminApi.post("/edit-location",data)
    return resData
}
export const blockBandApi=async(id)=>{
    const resData=await AdminApi.patch(`/block-band?id=${id}`)
    return resData
}

export const blockLocationApi = async(id)=>{
    const resdata = await AdminApi.patch(`/block-location?id=${id}`)
    return resdata
}
export const getUserApi = async()=>{
    const resdata = await AdminApi.get("/userManage",getToken)
    return resdata
}
export const blockUserApi=async(id)=>{
    const resData=await AdminApi.patch(`/block-user?id=${id}`)
    return resData
}