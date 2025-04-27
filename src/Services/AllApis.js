import commonApi from "./CommonApi";

export const CivilianRegister=async(requestbody,requestHeader)=>{
  return await  commonApi("post","/register",requestbody,requestHeader)
}


export const civilianLogin=async(requestbody)=>{
  return await  commonApi('post','/login',requestbody)

}