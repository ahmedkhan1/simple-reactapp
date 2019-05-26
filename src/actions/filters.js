
//Set Filter Action generator
export const sortbyDateFilter = ()=>({
    type: 'SORTBY_DATE'
});

//SortbyAmount Filter Action generator
export const sortbyAmountFilter = () => ({
    type: 'SORTBY_AMOUNT'
});

export const setTextFilter = ({ text = '' } = {} ) => ({
    type : 'SET_TEXT',
    text
});

export const setStartDate = ({startDate = undefined} = {}) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = ({endDate = undefined}={}) =>({
    type: 'SET_END_DATE',
    endDate
});
