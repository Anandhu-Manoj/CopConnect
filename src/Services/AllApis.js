import commonApi from "./CommonApi";

export const CivilianRegister=async(requestbody,requestHeader)=>{
  return await  commonApi("post","/register",requestbody,requestHeader)
}


export const civilianLogin=async(requestbody)=>{
  return await  commonApi('post','/login',requestbody)

}



//posting services
export const onserviceApplication=async(requestbody,requestHeader)=>{
  return await commonApi('post','/serviceRegister',requestbody,requestHeader)
}

//gettingservices

export const getServices=async()=>{
  return await commonApi('get','/getServices','')
}


//admin login

export const onAdminlogin=async(requestbody)=>{
  return await commonApi('post','/adminLogin',requestbody)

}


//add police officer

export const AdddPoliceOfficer=async(requestbody)=>{
  return await commonApi('post',"/addPolice",requestbody)
}

//getting all officers in the table
export const GetallOfficers=async()=>{
  return await commonApi('get',"/getPolice",'')

}

//delete officer details
export const  deleteOfficers=async(id)=>{
 return await commonApi('delete',`/officers/${id}/delete`,{})
}

//addingCriminals
export const AddCriminals=async(requestbody,requestHeader)=>{
  return await commonApi('post','/addCriminals',requestbody,requestHeader)

}


//gettingCriminals
export const getCriminals=async()=>{
return  await commonApi('get','/getAllCriminals','')
}

//deleteCriminals

export const deleteCriminals=async(id)=>{
  return await commonApi('delete',`/criminal/${id}/delete`,{})
}

