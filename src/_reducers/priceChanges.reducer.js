const initialState = { 
    anchor: 'left',
    priceChanges: [],
    open: false,
    id: '',
    itemNum: '',
    itemName: '',
    itemPrice: '',
    location: '',
    analyticsInfo: '',
    merchantDecision: ''
};
export function priceChanges(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_PRICE_CHANGES':
            return {
                ...state,
                priceChanges: action.priceChanges
            };
         case 'PRICE_CHANGE_DETAIL':
            return {
                ...state,
                id: action.id,
                itemNum: action.itemNum,
                itemName: action.itemName,
                itemPrice: action.itemPrice,
                location: action.location,
                analyticsInfo: action.analyticsInfo,
                merchantDecision: action.merchantDecision
            };
        case "PRICE_CHANGE_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };
        default:
            return state
     }
}