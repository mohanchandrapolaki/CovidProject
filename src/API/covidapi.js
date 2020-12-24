// import React, { Component } from "react";
// import axios from "axios";
// import '../css/bootstrap.min.css';
// import App from '../App';

// //var Coviddata ='';


// var options = {
//     method: 'GET',
//     url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
//     headers: {
//       'x-rapidapi-key': '6266eb27d5msh4513b5e84f36933p1b50bdjsn2d3981b993e0',
//       'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com'
//     }
//   };

//   export class Covidapi extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { 
//         location : [],
//         active: '0',
//         confirmed: '0',
//         recovered: '0',
//         deaths: '0',
//         lastupdateddate: ''
//       };
//     }
   
    
    
//   componentDidMount() {

    
//     //let info = {};
//     // axios.request(options).then((response) => response).then(info => {
//     //   console.log(info.data["total_values"]);
//     //   this.setState({
//     //     active: info.data["total_values"].active,
//     //     deaths: info.data["total_values"].deaths,
//     //     confirmed: info.data["total_values"].confirmed,
//     //     recovered: info.data["total_values"].recovered,
//     //     lastupdateddate: info.data["total_values"].lastupdatedtime,
//     // });
//     // })

    
//     axios.request(options).then(function (response) {
//       console.log(response);
//       //covidInfo = response.data;
//       console.log(response.data["state_wise"]["Andhra Pradesh"].active);
//       return response; } ).then(info => { 

//         // Object.keys(info.data["state_wise"]).map(stte => {
//         //   console.log(info.data["state_wise"][stte].statecode);})

//       this.setState({
//             coviddata: info.data,
//             active: info.data["total_values"].active,
//             deaths: info.data["total_values"].deaths,
//             confirmed: info.data["total_values"].confirmed,
//             recovered: info.data["total_values"].recovered,
//             lastupdateddate: info.data["total_values"].lastupdatedtime,
//         });
//      })
//     .catch(function (error) {
//         console.error(error);
//     })

//   }

//   render() {
//     return (
//         <div className='container'>
//           <div className="jumbotron text-center">
//           <h4 className='txt-center'>Covid Information</h4>
//           </div>
            
//             <div className='row'>
//               <div className='col-md-3 txt-center'>
//                 <h3>Active</h3>
//                 <p> {this.state.active} </p>
//               </div>
            
//             <div className='col-md-3 txt-center'>
//                 <h3>Confirmed </h3>
//                 <p>{this.state.confirmed} </p>
//               </div>
           
//             <div className='col-md-3 txt-center'>
//                 <h3>Deaths</h3>
//                 <p>{this.state.deaths} </p>
//               </div>
            
//             <div className='col-md-3 txt-center'>
//                 <h3>Recovered </h3>
//                 <p>{this.state.recovered} </p>
//               </div>
              
//             </div>
//             <div className='row'>
//             <div className='col-md-12'>
//                 <p>Last updated date: {this.state.lastupdateddate} </p>
//               </div>
//             </div>
//             <App coviddata={this.state.coviddata} />
//         </div>
//     )
//   }
// }


// //import axios from 'axios';


// // var axios = require("axios").default;

// // var options = {
// //   method: 'GET',
// //   url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
// //   headers: {
// //     'x-rapidapi-key': '6266eb27d5msh4513b5e84f36933p1b50bdjsn2d3981b993e0',
// //     'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com'
// //   }
// // };

// // export function coviddata() {
// //     var data;
// //     axios.request(options).then(function (response) {
// //         data = response.data;
// //         console.log(response.data);
// //     }).catch(function (error) {
// //         console.error(error);
// //     });
// //     return data;
// // }

