/* eslint-disable */
import axios from 'axios';
const API_URL = 'http://localhost:8000'; /* replace with heroku url */

export class APIService {
  constructor() {

  }



   getCustomerList() {
    const url = `${API_URL}/api/customers/`;
    let jwtToken = localStorage.getItem('token');
    console.log(":::jwtToken:::::"+jwtToken);
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.get(url, {headers: headers});

  }

  addNewCustomer(customer){
   const url = `${API_URL}/api/customers/`;
   let jwtToken = localStorage.getItem('token');
   const headers = {Authorization: `jwt ${jwtToken}`};
   return axios.post(url, customer, {headers: headers});
  }

  updateCustomer(customer){
    const url = `${API_URL}/api/customers/${customer.pk}`;
    let jwtToken = localStorage.getItem('token');
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.put(url, customer, {headers: headers});
  }

  deleteCustomer(customer_Pk){
     const url = `${API_URL}/api/customers/${customer_Pk}`;
     let jwtToken = localStorage.getItem('token');
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.delete(url, {headers: headers});
  }

   getInvestment(param_pk) {
     const url = `${API_URL}/api/investments/${param_pk}`;
     let jwtToken = localStorage.getItem('token');
     console.log(":::jwtToken:::::"+jwtToken);
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
  }


   getInvestmentList() {
       const url = `${API_URL}/api/investments`;
       let jwtToken = localStorage.getItem('token');
       console.log(":::jwtToken:::::" + jwtToken);
       const headers = {Authorization: `jwt ${jwtToken}`};
       return axios.get(url, {headers: headers});

   }

    addNewInvestment(investment){
   const url = `${API_URL}/api/investments/`;
   let jwtToken = localStorage.getItem('token');
   const headers = {Authorization: `jwt ${jwtToken}`};
   return axios.post(url, customer, {headers: headers});
  }

  updateInvestment(investment){
    const url = `${API_URL}/api/investment/${investment.pk}`;
    let jwtToken = localStorage.getItem('token');
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.put(url, customer, {headers: headers});
  }

  deleteInvestment(investment_Pk){
     const url = `${API_URL}/api/customers/${investment_Pk}`;
     let jwtToken = localStorage.getItem('token');
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.delete(url, {headers: headers});
  }

   getStock(param_pk) {
     const url = `${API_URL}/api/stocks/${param_pk}`;
     let jwtToken = localStorage.getItem('token');
     console.log(":::jwtToken:::::"+jwtToken);
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.get(url, {headers: {Authorization: `jwt ${jwtToken}`}});
  }


   getStockList() {
       const url = `${API_URL}/api/stocks`;
       let jwtToken = localStorage.getItem('token');
       console.log(":::jwtToken:::::" + jwtToken);
       const headers = {Authorization: `jwt ${jwtToken}`};
       return axios.get(url, {headers: headers});

   }

    addNewStock(stock){
   const url = `${API_URL}/api/stocks/`;
   let jwtToken = localStorage.getItem('token');
   const headers = {Authorization: `jwt ${jwtToken}`};
   return axios.post(url, customer, {headers: headers});
  }

  updateStock(stock){
    const url = `${API_URL}/api/stock/${stock.pk}`;
    let jwtToken = localStorage.getItem('token');
    const headers = {Authorization: `jwt ${jwtToken}`};
    return axios.put(url, customer, {headers: headers});
  }

  deleteStock(stock_Pk){
     const url = `${API_URL}/api/customers/${stock_Pk}`;
     let jwtToken = localStorage.getItem('token');
     const headers = {Authorization: `jwt ${jwtToken}`};
     return axios.delete(url, {headers: headers});
  }
   authenticateLogin(credentials) {
    const url = `${API_URL}/auth/`;
    return axios.post(url, credentials);
  }
}
