import "./featuredInfo.css";
import {ArrowLeftSharp } from "@material-ui/icons";


export default function FeaturedInfo() {
  return (
    <div className="container">
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Accident Reported</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415</span>
          <span className="featuredMoneyRate">
             <ArrowLeftSharp className="featuredIcon1"/>
          </span>
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Numbe of Trips</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4,415</span>
          <span className="featuredMoneyRate">
             <ArrowLeftSharp className="featuredIcon2"/>
          </span>
        </div>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Trips without Earning</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,225</span>
          <span className="featuredMoneyRate">
          <ArrowLeftSharp className="featuredIcon3"/>
          </span>
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Cash In</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            <ArrowLeftSharp className="featuredIcon4"/>
          </span>
        </div>
        
      </div>
    </div>
    </div>
  );
}
