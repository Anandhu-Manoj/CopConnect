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
export const GetallOfficers = async (requestHeader) => {
  return await commonApi("get", "/getPolice", "", requestHeader);
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
export const getCriminals = async (requestHeader) => {
  return await commonApi("get", "/getAllCriminals", "", requestHeader);
};

//deleteCriminals

export const deleteCriminals = async (id, requestHeader) => {
  return await commonApi("delete", `/criminal/${id}/delete`, {}, requestHeader);
};

//deleteServices
export const deleteServices = async (id, requestHeader) => {
  return await commonApi("delete", `/Services/${id}/delete`, {}, requestHeader);
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

export const getPoliceServices = async (requestHeader) => {
  return await commonApi("get", "/getPoliceServices", "", requestHeader);
};

//acceptingPoliceServices

export const onAcceptingNotification=async(requestbody,requestHeader)=>{
  return await commonApi('post','/acceptingPoliceServices',requestbody,requestHeader)
}
