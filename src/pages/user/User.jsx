
import {
  AddCircleOutline,
  CalendarToday,
  CardTravelSharp,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="usere">
      <div className="userTitleContainere">
        <h1 className="userTitlee">Edit Customer Details</h1>
        <Link to="/newUser">
          <button className="CreateButtone">Add New</button>
        </Link>
      </div>
      <div className="userContainere">
        <div className="userShowe">
          <div className="userShowTope">
            <img
              src="https://media.istockphoto.com/photos/young-businessman-with-beard-smiling-towards-camera-picture-id660150716?k=20&m=660150716&s=612x612&w=0&h=8jOsv-5u9yxEBrnSq56B83YLmEv28wZZ6Di7FrBNd1k="
              alt=""
              className="userShowImge"
            />
            <div className="userShowTopTitlee">
              <span className="userShowUsernamee">Anna Becker</span>
            
            </div>
          </div>
          <div className="userShowBottome">
            <span className="userShowTitlee">Account Details</span>
            <div className="userShowInfoe">
              <PermIdentity className="userShowIcone" />
              <span className="userShowInfoTitlee">annabeck99</span>
            </div>
            <div className="userShowInfoe">
              <CalendarToday className="userShowIcone" />
              <span className="userShowInfoTitlee">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfoe">
              <AddCircleOutline className="userShowIcone" />
              <span className="userShowInfoTitlee">active</span>
            </div>
            <div className="userShowInfoe">
              <PhoneAndroid className="userShowIcone" />
              <span className="userShowInfoTitlee">+940073346</span>
            </div>
            <div className="userShowInfoe">
              <CardTravelSharp className="userShowIcone" />
              <span className="userShowInfoTitlee">first party</span>
            </div>
           
          </div>
        </div>
        <div className="userUpdatee">
          <span className="userUpdateTitlee">Edit</span>
          <form className="userUpdateForme">
            <div className="userUpdateLefte">
              <div className="userUpdateIteme">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateIteme">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateIteme">
                <label>Status</label>
                <input
                  type="text"
                  placeholder="active/not"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateIteme">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateIteme">
                <label>Type</label>
                <input
                  type="text"
                  placeholder="first/third"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRighte">
              <div className="userUpdateUploade">
                <img
                  className="userUpdateImg"
                  src="https://media.istockphoto.com/photos/young-businessman-with-beard-smiling-towards-camera-picture-id660150716?k=20&m=660150716&s=612x612&w=0&h=8jOsv-5u9yxEBrnSq56B83YLmEv28wZZ6Di7FrBNd1k="
                  alt=""
                />
               <label htmlFor="file">
                  <Publish className="userUpdateIcone" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              
              <button className="UpdateButtone">Update</button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
