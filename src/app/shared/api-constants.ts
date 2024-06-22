import { environment } from "../../environment/environments";

const apiUrl = environment.apiUrl;
export const urls = {
    addEnquiry : apiUrl+'/candidate/addCandidateInfo',
    getEnquiry : apiUrl+'/candidate/getCandidates',
    addImage : apiUrl+'/banner/upload',
    getAllImage : apiUrl+'/banner/get',
    deleteImage : apiUrl+'/banner/delete/',
    loginPage : apiUrl+'/users/authenticate',
}