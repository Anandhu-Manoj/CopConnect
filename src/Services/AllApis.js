import commonApi from "./CommonApi";

export const CivilianRegister = async (requestbody, requestHeader) => {
  return await commonApi("post", "/register", requestbody, requestHeader);
};

export const civilianLogin = async (requestbody) => {
  return await commonApi("post", "/login", requestbody);
};

//posting services
export const onserviceApplication = async (requestbody, requestHeader) => {
  return await commonApi(
    "post",
    "/serviceRegister",
    requestbody,
    requestHeader
  );
};

//gettingservices

export const getServices = async (requestHeader) => {
  return await commonApi("get", "/getServices", "", requestHeader);
};

//admin login

export const onAdminlogin = async (requestbody) => {
  return await commonApi("post", "/adminLogin", requestbody);
};

//add police officer

export const AdddPoliceOfficer = async (requestbody, requestHeader) => {
  return await commonApi("post", "/addPolice", requestbody, requestHeader);
};

//getting all officers in the table
export const GetallOfficers = async (requestHeader,SearchCircle) => {
  return await commonApi("get", `/getPolice?search=${SearchCircle}`, "", requestHeader);
};

//delete officer details
export const deleteOfficers = async (id, requestHeader) => {
  return await commonApi("delete", `/officers/${id}/delete`, {}, requestHeader);
};

//addingCriminals
export const AddCriminals = async (requestbody, requestHeader) => {
  return await commonApi("post", "/addCriminals", requestbody, requestHeader);
};

//gettingCriminals
export const getCriminals = async (requestHeader,searchKey) => {
  return await commonApi("get", `/getAllCriminals?search=${searchKey}`, "", requestHeader);
};

//deleteCriminals

export const deleteCriminals = async (id, requestHeader) => {
  return await commonApi("delete", `/criminal/${id}/delete`, {}, requestHeader);
};

//deleteServices
export const deleteServices = async (id, reqbody,requestHeader) => {
  return await commonApi("delete", `/Services/${id}/delete`, reqbody, requestHeader);
};

//getLoggedOfficer
export const getLoggedOfficer = async (requestHeader) => {
  return await commonApi("get", "/getLoggedOfficer", "", requestHeader);
};

//addLeaves
export const addLeaves = async (requestbody, requestHeader) => {
  return await commonApi("post", "/postLeaves", requestbody, requestHeader);
};

//getAllLeaves
export const getAllLeaves = async (requestHeader) => {
  return await commonApi("get", "/getAllLeaves", {}, requestHeader);
};

//postingPoliceServices
export const bookSportsFacility = async (requestbody, requestHeader) => {
  return await commonApi(
    "post",
    "/postPoliceServices",
    requestbody,
    requestHeader
  );
};

//gettingPoliceServices

export const getPoliceServices = async (requestHeader,) => {
  return await commonApi("get", "/getPoliceServices", "", requestHeader);
};

//acceptingPoliceServices

export const onAcceptingNotification = async (requestbody, requestHeader) => {
  return await commonApi(
    "post",
    "/acceptingPoliceServices",
    requestbody,
    requestHeader
  );
};
//clearingNotification
export const onClearingNotification = async (requestHeader) => {
  return await commonApi("patch", "/ClearingPoliceServices", {}, requestHeader);
};

//updateOfficer
export const onUpdateOfficer = async (id, requestbody, requestHeader) => {
  return await commonApi(
    "patch",
    `/updateOfficer/${id}`,
    requestbody,
    requestHeader
  );
};

//editCriminals
export const editCriminals = async (id, requestbody, requestHeader) => {
  return await commonApi(
    "patch",
    `/updateCriminals/${id}`,
    requestbody,
    requestHeader
  );
};

//assigning casses

export const assignCasses = async (id, requestbody, requestHeader) => {
  return await commonApi(
    "patch",
    `/asignCasses/${id}`,
    requestbody,
    requestHeader
  );
};
//dismmissed casses
export const dismissedCasses=async(requestbody,requestHeader)=>{
  return await commonApi('patch','/dismissedcassses',requestbody,requestHeader)

};

//getServicesNotifivcation
export const getCivillanNotification=async(requestHeader)=>{
  return await commonApi('get','/getServiceNotification','',requestHeader)
}

//clearingCivilianNotification

export const clearNotify=async(requestHeader)=>{
  return await commonApi('patch','/ClearingCivilianNotification',{},requestHeader)
}


//onaccepoting local services

export const acceptingLocalService=async(reqBody,reqHeader)=>{
  return await commonApi('patch','/onAcceptingLocalServices',reqBody,reqHeader)
}


//onAccepting leaves
export const acceptingLeaves=async(reqBody,reqHeader)=>{
  return await commonApi('patch','/onacceptingleaves',reqBody,reqHeader)
}
//ondeleting leaves
export const rejectingLeaves=async(reqBody,reqHeader)=>{
  return await commonApi('patch','/onrejectleaves',reqBody,reqHeader)
}

//ondeletingpoliceservice

export const onrejectingpoliceServ=async(reqBody,reqHeader)=>{
  return await commonApi('patch','/onRejectPoliceService',reqBody,reqHeader)
}


//apontmentStatus

export const onApointmentStatus=async(reqBody,reqHeader)=>{
  return await commonApi('patch','/notifyAppointmentStatus',reqBody,reqHeader)
}


//updateProfilePic

export const uploadProPic=async(reqBody,reqHeader)=>{
  return await commonApi('patch','/updataPropic',reqBody,reqHeader)

}