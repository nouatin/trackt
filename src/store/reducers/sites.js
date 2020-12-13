export default (state = {sites:[]}, action) => {
    switch (action.type) {
        case 'SET_SITES': 
            return{
                ...state,
                sites: action.sites
            };          
        default: return state;
    }
}