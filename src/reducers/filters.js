import moment from 'moment';

//Filter Reducer Seciton
const filterDefaultReducer = {
    sortBy : undefined,
    text:'',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filterReducer = (state = filterDefaultReducer, action) =>{
    switch(action.type){
        case 'SORTBY_DATE':
            return {
                ...state,
                sortBy: 'Date'
            };
        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'Amount'
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case '':
        default:
            return state;
    }
};

export default filterReducer;