import axios from 'axios';
import config from '../config/config';

export const userService = {
    get,
    post,
    put,
    deleteDetail
};
function get(apiEndpoint){
    console.log(config.apiUrl+apiEndpoint);
    return axios.get(config.apiUrl+apiEndpoint, getOptions())
    .then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}
function post(apiEndpoint, payload){
    let Url = '';
    if(apiEndpoint === '/save'){ Url = config.apiUrl } else { Url = config.baseUrl };
    return axios.post(Url+apiEndpoint, payload, getOptions())
    .then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}
function put(apiEndpoint, payload){
    return axios.put(config.apiUrl+apiEndpoint, payload, getOptions())
    .then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}
function deleteDetail(apiEndpoint){
    return axios.delete(config.apiUrl+apiEndpoint, getOptions())
    .then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}
function getOptions(){
    let options = {};
    if(localStorage.getItem('token')){
        options.headers = { 'x-access-token': localStorage.getItem('token') };
    }
    return options;
}