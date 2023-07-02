
import reportWebVitals from './reportWebVitals';



import React from 'react';
import ReactDOM from 'react-dom';
import './Components/PhoneNumberForm.css'; // Import the CSS file
import PhoneNumberForm from './Components/PhoneNumberForm';

ReactDOM.render(<PhoneNumberForm />, document.getElementById('root'));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
