import React, {useState} from 'react';
import styels from  './regstyle.css'
function RegistrationForm() {
    return(
     
    

             
    
      <div className="formr">

          <div className="form-bodyr">
            
          <h2 style={{textAlign: "center",color:"white",marginLeft:"-300px"}}>WELCOME </h2>
            <h3 style={{textAlign: "left",color:"rgb(151, 150, 150)",marginLeft:"-150px"}}>Please Enter Your Info</h3>
            
   
           <form className="newUserFormr">
       
        <div className="newUserItemr">
          <label>User Role </label>
          <input type="text" placeholder="admin/monitoring officer/custom officer" />
        </div>
        <div className="newUserItemr">
          <label>User Name</label>
          <input type="text" placeholder="JohnSmith_admin" />
        </div>
        <div className="newUserItemr">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        
        <div className="newUserItemr">
          <label> Password</label>
          <input type="text" placeholder="enter your password..." />
        </div>

        <div className="newUserItemr">
          <label> Re Enter the Password</label>
          <input type="text" placeholder="re enter here..." />
        </div>
        
   
        <div className="newUserItemr">
        <button className="newUserButtonr">Create</button>
        </div>
        
      </form>
      </div>
          
          </div>
         
          
          
    )       
}
export default RegistrationForm;