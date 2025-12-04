   import React from 'react';
   import 'bootstrap/dist/css/bootstrap.min.css';

   function App() {
     return (
       <div className="container mt-5 text-center">
         <div className="card shadow-lg p-3 mb-5 bg-white rounded">
           <div className="card-body">
             <h1 className="text-primary fw-bold">Device Shield</h1>
             <p className="lead">System Status: Secure</p>
             <hr />
             <button className="btn btn-success btn-lg w-100 mb-3">
               🚀 Boost Network
             </button>
             <button className="btn btn-warning btn-lg w-100">
               🧹 Clean Junk
             </button>
           </div>
         </div>
         <p className="text-muted mt-3">Built on Termux (No Root)</p>
       </div>
     );
   }

   export default App;
