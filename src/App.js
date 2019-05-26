// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Action  from  './Action.js';
// import Options from  './Options.js';
// import Test from './Test.js';
// import Test2 from './Test2.js';
// import AddOption from './AddOption.js';
// import {isAdult , canDrink} from './person.js';
// import validator from 'validator';
// import './styles/styles.scss';
// import 'normalize.css/normalize.css';
// import { BrowserRouter, Route } from 'react-dom';
// // const numbers = [12,44,22];
// const apps ={
//   option:['react','php','react native']
// };

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
//     this.addOptions = this.addOptions.bind(this);
//     this.state = {
//       options : []
//     };
//   }
//   componentDidMount(){
//     try{
//       console.log("ComponentsDidMount");
//       const json = localStorage.getItem("items");
//       const options = JSON.parse(json);

//       if(options){
//         this.setState( () => ( {options : options }) );
//       }
      
//     }catch(e){
//       console.log("catch");

//     }
//   }
//   componentDidUpdate(prevProps, prevState){
//     if(prevState.options.length !== this.state.options.length){
//         const json = JSON.stringify(this.state.options);
//         localStorage.setItem("items",json);
//         console.log("Saving Data");
//     }
//   }
//   componentWillUnmount(){
//     console.log("Unmount");
//   }
//   handelDeleteOptions(){
//     // this.setState(()=>{
//     //   return{
//     //     options : []
//     //   }
//     // });
//     this.setState( () => ({ options : [] }));
//   }
//   addOptions(option){
   
//     if(!option){
//       return 'Error not value!';
//     }else if(this.state.options.indexOf(option)>-1){
//       return 'value already exists';
//     }
//     // this.setState((prevState)=>{
//     //   return{
//     //     options: prevState.options.concat(option)
//     //   };
//     // });
//     this.setState((prevState) => ({ options : prevState.options.concat(option)}));

//   }
//   render() {
//     const title = "First App";
//     const subtitle = "This is subtitle";
//     return (
      
//       <div className="App"> 
//         <header className="App-header">
//           <div className="container">
//             <Action title={title}  subtitle={subtitle}/>
//             <Options 
//               option ={this.state.options}
//               handelDeleteOptions={this.handelDeleteOptions}
//             />
//             <AddOption addOptions={this.addOptions} />
//             <Test />
//             <Test2 />
//           </div>
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p><h1>Hello React Lets change the world!!!!!!{1+45}</h1>
//           <a 
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           <h2>{counter}</h2>
//           <form onSubmit={onFormSubmit}>
//             <input type="text" name="option_field"></input>
//             <button>submit</button>
//           </form>
//           {
//             apps.option.map((option)=>{
//               return <p key={option}> options: {option}</p>
//             })
//           }
//           <button className="btn" onClick={subtract}> -1</button>
//           <button className="btn" onClick={add}> +1</button>
//           <button className="btn2" onClick={reset}> reset</button>
//           <button disabled={apps.option.length ===0} className="btn2" onClick={reset}> what</button>

//         </header>
//       </div>
//     );
//   }
// }



// App.defaultProps ={
//   options : []
// }; 

// const onFormSubmit = (e)=>{
//   e.preventDefault();
//   console.log('Form submittted');
//   const options = e.target.elements.option_field.value;
//   apps.option.push(options);

//   console.log(validator.isEmail('ahmed.com'));
//   isAdult(22);
//   canDrink(21);
//   if(options){
//     e.target.elements.option_field.value = "";
//   }
// };
// let counter = 0;
// const subtract = ()=>{
//   apps.option.push();

//     counter--;
// };
// const add = ()=>{
//   apps.option.push();
//   counter++;
// };
// const reset = ()=>{
//   apps.option=[];
//   counter=0;
// };
// // const templatetwo = (
// //   <div>
// //     <button className="btn" onClick={subtract}> -1</button>
// //   </div>
// // );

// export default App;
