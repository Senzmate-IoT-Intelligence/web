import "./report.css";
import { Link } from "react-router-dom";

export default function Report() {
  return (
    <div className="report">
      <div className="reportItem">
        <Link to="/" Link style={{ textDecoration: "none" }}>
          <span className="reportTitle"> Daily</span>
        </Link>
      </div>

      <div className="reportItem">
        <Link to="/weeklyreport" Link style={{ textDecoration: "none" }}>
          <span className="reportTitle"> Weekly</span>
        </Link>
      </div>

      <div className="reportItem">
        <Link to="/monthly_report" Link style={{ textDecoration: "none" }}>
          <span className="reportTitle">Monthly</span>
        </Link>
      </div>
    </div>
  );
}
