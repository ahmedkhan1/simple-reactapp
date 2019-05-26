import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, setStartDate, sortbyAmountFilter,setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilter extends React.Component{
    state={
        calenderFocuse: ''
    };
    onDateChange = ({startDate, endDate}) =>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calenderFocuse)=>{
        this.setState(()=>({calenderFocuse}));
    };
    render(){
        return(
            <div>
                <input type="text" value={this.props.filter.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value ={this.props.filter.sortBy} onChange={(e)=>{
                    if(e.target.values ==='date'){
                        this.props.dispatch(sortbyDateFilter(e.target.values));
                    }else{
                        this.props.dispatch(sortbyAmountFilter(e.target.value));
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filter.startDate}
                    endDate= {this.props.filter.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocuse}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
       filters: state.filters 
    };
};
export default connect(mapStateToProps)(ExpenseListFilter);