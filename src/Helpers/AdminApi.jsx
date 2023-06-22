import AdminApi from "../Config/AdminBaseApi";

export const AdminLoginApi = async(data)=>{
    const resdata = await AdminApi.post("/login",data)
    return resdata
}
export const AddLocationApi = async(data)=>{
    const resdata = await AdminApi.post("/location",data)
    return resdata
}
export const AddBandApi = async(data)=>{
    const resdata = await AdminApi.post("/band",data)
    return resdata
}
export const getLocationAndBandApi = async(data)=>{
    const resdata = await AdminApi.get("/location-and-bands",data)
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
    console.log('api');
    const resData=await AdminApi.patch(`/block-band?id=${id}`)
    return resData
}
// export const blockLocationApi = async(data)=>{
//     const resdata = await AdminApi.post("/block-location",data)
//     return resdata
// }
