import "./profil.css";

export default function Profile() {
  return (
   

<div className="newUsercp">
      <h1 className="newUserTitlecp">Update Profile</h1>
      <form className="newUserFormcp">
        <div className="newUserItemcp">
          <label>Username</label>
          <input type="text" placeholder="0001A" />
        </div>
        <div className="newUserItemcp">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItemcp">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
       
        <div className="newUserItemcp">
          <label>Address</label>
          <select className="newUserSelectc" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
       
       
        <div className="newUserItemcp">
          <label>Phone</label>
          <input type="text" placeholder="+94760073341" />
        </div>
        
        <div className="newUserItemcp">
          <label> Insurance Type</label>
          <input type="text" placeholder="Thirdparty/..." />
        </div>

        <div className="newUserItempp">
          <label>Gender</label>
          <div className="newUserGenderp">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
          </div>
        
          
   
        <div className="newUserItemcp">
        <button className="newUserButtoncp">Update</button>
        </div>
      </form>
    
    </div>
 
   
  );
}