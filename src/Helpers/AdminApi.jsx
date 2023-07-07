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
    const resdata = await AdminApi.post("/location", getToken,data)
    return resdata
}
export const AddBandApi = async(data)=>{
    const resdata = await AdminApi.post("/band", getToken,data)
    return resdata
}
export const getLocationAndBandApi = async(data)=>{
    const resdata = await AdminApi.get("/location-and-bands", getToken,data)
    return resdata
}
export const findBandApi = async(data)=>{
    const resdata = await AdminApi.post("/find-band", getToken,data)
    return resdata
}
export const findLocationApi = async(data)=>{
    const resdata = await AdminApi.post("/find-location", getToken,data)
    return resdata
}

export const editBandApi=async(data)=>{
    const resData=await AdminApi.post("/edit-band", getToken,data)
    return resData
}
export const editLocationApi=async(data)=>{
    const resData=await AdminApi.post("/edit-location", getToken,data)
    return resData
}
export const blockBandApi=async(id)=>{
    const resData=await AdminApi.patch(`/block-band?id=${id}`, getToken)
    return resData
}

export const blockLocationApi = async(id)=>{
    const resdata = await AdminApi.patch(`/block-location?id=${id}`, getToken)
    return resdata
}
