import { userService } from '../_services/';
import { history } from '../_helpers';

export const priceChangesAction = {
    getPriceChanges,
    getPriceChangesById,
    onChangeProps,
    editPriceChangesInfo,
    createPriceChanges,
    deletePriceChangesById
};
function getPriceChanges(){
    return dispatch => {
        let apiEndpoint = '/';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changePriceChangesList(response.data));
        }).catch((err)=>{
            console.log(err);
        })
    };
}

function createPriceChanges(payload){
    return dispatch => {
        let apiEndpoint = '/save';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createPriceChangeInfo());
            history.push('/priceChanges');
        })
    }
}
function getPriceChangesById(id){
    return dispatch => {
        let apiEndpoint = '/fetch/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editPriceChangesDetails(response.data));
        })
    };
}
function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}
function editPriceChangesInfo(payload){
    return dispatch => {
        let apiEndpoint = '/update';
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedPriceChangeInfo());
            history.push('/priceChanges');
        })
    }
}
function deletePriceChangesById(id){
    return dispatch => {
        let apiEndpoint = '/delete/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
             dispatch(deletePriceChangesDetails());
             dispatch(priceChangesAction.getPriceChanges());
        })
    };
}

export function changePriceChangesList(priceChanges){
    return{
        type: "FETECHED_ALL_PRICE_CHANGES",
        priceChanges: priceChanges
    }
}


export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}
export function editPriceChangesDetails(priceChanges){
    return{
        type: "PRICE_CHANGE_DETAIL",
        id: priceChanges.id,
        itemNum: priceChanges.itemNum,
        itemName: priceChanges.itemName,
        itemPrice: priceChanges.itemPrice,
        location: priceChanges.location,
        analyticsInfo: priceChanges.analyticsInfo,
        merchantDecision: priceChanges.merchantDecision
    }
}
export function updatedPriceChangeInfo(){
    return{
        type: "PRICE_CHANGE_UPDATED"
    }
}
export function createPriceChangeInfo(){
    return{
        type: "PRICE_CHANGE_CREATED_SUCCESSFULLY"
    }
}
export function deletePriceChangesDetails(){
    return{
        type: "DELETED_PRICE_CHANGE_DETAILS"
    }
}