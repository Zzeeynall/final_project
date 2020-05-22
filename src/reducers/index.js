
const initialState = {
    coins: [],
    coinsByType: [],
    coinById: [],
    loading: false,
    filter: false,
    login: false,
    typeId: null,
    search: true,
    modal: false,
    coinEdit: {
        name: ' ',
        face_value: ' ',
        short_desc: ' ',
        obverse_img: ' ',
        reverse_img: ' ',
        year_issue: ' ',
        price: ' ',
        long_desc: ' ',
        typeId: ' ',
        country: ' ',
        quality: ' ',
        weight: ' ',
        metal: ' '
    }
  };

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_COINS':
            return {
                ...state,
                coins: action.payload
            };
        case 'GET_COINS_BY_TYPE':
            return {
                ...state,
                coinsByType: action.payload
            };
        case 'GET_COIN_BY_ID':
            return {
                ...state,
                coinById: action.payload
            };
        case 'DELETE_COIN':
            return {
                ...state,
                coins: state.coins.filter(coin => coin.id != action.payload)
            };
        case 'ADD_COIN':
            return {
                ...state
            };
        case 'UPDATE_COIN':
            return {
                ...state
            };
        case 'SEARCH_COIN':
            return {
            ...state,
            coinsByType: action.payload
            };
        case 'FILTER':
            return {
                ...state,
                filter: !state.filter
            };
        case 'LOADING':
            return {
                ...state,
                loading: !state.loading
            };
        case 'MODAL':
            return {
                ...state,
                modal: !state.modal
            };
        case 'SEARCH':
            return {
                ...state,
                search: !state.search
            };
        case 'LOGIN':
            return {
                ...state,
                login: true
            };
        case 'CLEAR_LIST':
            return {
                ...state,
                coinsByType: []
            };
        case 'EDIT_FORM':
            return {
                ...state,
                coinEdit: {...state.coinEdit, ...action.payload}
            };
        case 'GET_COIN_FOR_EDIT':
            return {
                ...state,
                coinEdit: {...state.coinEdit, ...action.payload}
            };
        default:
            return state;
    }
};

export default reducer;