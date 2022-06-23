import Report from "../../components/report/report";
import Chart from "../../components/chart/Chart";
import Chart2 from "../../components/chart/chart2";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import { userData2 } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";


export default function week() {
    return (
        <div className="home">

            <Report />
            <FeaturedInfo />
            <Chart data={userData} title="Earning of Trip" grid dataKey="Cash In" dataKey2="Cash Out" />
            <Chart2 data={userData2} title="Accident Count" grid dataKey="Accident" dataKey2="Trips" />





            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>

        </div>

    );
}
