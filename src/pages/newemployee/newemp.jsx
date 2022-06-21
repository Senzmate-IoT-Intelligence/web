import "./newemp.css";

export default function New_Employee() {
  return (

    <div className="newUsere">
      <h1 className="newUserTitlee">Add New Employee Details</h1>
      <form className="newUserForme">
        <div className="newUserIteme">
          <label>ID</label>
          <input type="text" placeholder="0001A" />
        </div>
        <div className="newUserIteme">
          <label>User Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserIteme">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
       
        <div className="newUserIteme">
          <label>status</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
       
       
        <div className="newUserIteme">
          <label>Department</label>
          <input type="text" placeholder="IT/h/HR/DF.." />
        </div>
        
        <div className="newUserIteme">
          <label> Job Position</label>
          <input type="text" placeholder="SE/DA/GM..." />
        </div>
        
   
        <div className="newUserIteme">
        <button className="newUserButtone">Create</button>
        </div>
      </form>
    </div>
  );
}
