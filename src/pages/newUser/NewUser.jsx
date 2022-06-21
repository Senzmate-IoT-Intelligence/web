import "./newUser.css";

export default function NewUser() {
  return (

    <div className="newUserc">
      <h1 className="newUserTitlec">Add New Customer</h1>
      <form className="newUserFormc">
        <div className="newUserItemc">
          <label>ID</label>
          <input type="text" placeholder="0001A" />
        </div>
        <div className="newUserItemc">
          <label>User Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItemc">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
       
        <div className="newUserItemc">
          <label>status</label>
          <select className="newUserSelectc" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
       
       
        <div className="newUserItemc">
          <label>Phone</label>
          <input type="text" placeholder="+94760073341" />
        </div>
        
        <div className="newUserItemc">
          <label> Insurance Type</label>
          <input type="text" placeholder="Thirdparty/..." />
        </div>
        
   
        <div className="newUserItemc">
        <button className="newUserButtonc">Create</button>
        </div>
      </form>
    </div>
  );
}
