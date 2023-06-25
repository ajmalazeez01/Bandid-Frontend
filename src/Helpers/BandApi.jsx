import BandApi from "../Config/BandBaseApi"

export const BandLoginApi = async(data)=>{
    const resdata = await BandApi.post("/login",data)
    return resdata
}