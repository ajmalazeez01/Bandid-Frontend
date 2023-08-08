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
export const getUserApi = async( searchQuery, sortBy, sortOrder, currentPage, itemsPerPage)=>{
    const resdata = await AdminApi.get(`/userManage?searchQuery=${searchQuery}&sortBy=${sortBy}&sortOrder=${sortOrder}&currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`,getToken)
    return resdata
}
export const blockUserApi=async(id)=>{
    const resData=await AdminApi.patch(`/block-user/${id}`)
    return resData
}
export const getbandApi = async(searchQuery, sortBy, sortOrder, currentPage, itemsPerPage)=>{
    const resdata = await AdminApi.get(`/bandManage?searchQuery=${searchQuery}&sortBy=${sortBy}&sortOrder=${sortOrder}&currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`,getToken)
    return resdata
}
export const blockbandApi=async(id)=>{
    console.log(id);
    const resData=await AdminApi.patch(`/block-band/${id}`)
    return resData
}
export const getverifyApi = async(searchQuery, sortBy, sortOrder, currentPage, itemsPerPage)=>{
    const resdata = await AdminApi.get(`/band-verify?searchQuery=${searchQuery}&sortBy=${sortBy}&sortOrder=${sortOrder}&currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`,getToken)
    return resdata
}
export const blockVerifyApi=async(id)=>{
    console.log(id);
    const resData=await AdminApi.patch(`/block-verify/${id}`)
    return resData
}
export const dashboardDetailsApi = () => {
    const resdata = AdminApi.get(`/dashbord-details`);
    return resdata;
  };
