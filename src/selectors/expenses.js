import moment from 'moment';

export default (expense, {text,sortBy,startDate,endDate}) => {
    return expense.filter((expense)=>{
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch =  startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'):true;
        const endDateMatch =  endDate? endDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'Date'){
            return a.createdAt !== a.createdAt ? 1 : -1;
        }
        if(sortBy ==='Amount'){
            return a.Amount > b.Amount ? 1 : -1;
        }
    });
};

