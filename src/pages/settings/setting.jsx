
import "./setting.css";



export default function Settings() {
  return (
    <div className="forms">

    <div className="form-body1s">
      
    
      <h2 style={{textAlign: "center",color:"white",marginTop:"50px"}}>Change Password</h2>
      

     <form className="newUserForms">
 
  <div className="newUserItems">
    <label>Current Password</label>
    <input type="text" placeholder="enter your current password here" />
  </div>
  <div className="newUserItems">
    <label>New Password</label>
    <input type="text" placeholder="enter your new password here" />
  </div>
  <div className="newUserItems">
    <label>Comfirm Password</label>
    <input type="text" placeholder="again comfirm your password" />
  </div>

  <div className="newUserItems">
        <button className="newUserButtones">Update</button>
        </div>
        
  
 
</form>
</div>
    
    </div>
   
  );
}