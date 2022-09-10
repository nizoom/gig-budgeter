import { NextPage } from "next";
import ActionDropdown from "../components/action-drpdwn";
import WeeklyBtn from "../components/weeklybtn";

const HomePage: NextPage = () => {
  return (
    <div className="homepage-page-wrapper">
      <div className="left-half">
        <div className="add-sub-btn-div">
          <div className="action-wrapper">
            {" "}
            <button className="action-btn"> Add $</button>
            <ActionDropdown />
          </div>
          <div className="action-wrapper">
            {" "}
            <button className="action-btn"> Spent $</button>
            <ActionDropdown />
          </div>
        </div>
        <div className="forecast-div">
          <button className="action-btn">Forecast</button>
          <section className="forecast-dropdown">
            <div className="calendar-div">
              {" "}
              <label htmlFor="date"> Pick a date: </label>
              <input type="date" />
            </div>
            <ul>
              <li>
                {" "}
                <p className="forecast-result">
                  {/* add highlights for amount and date */}
                  Based on your recurring income and costs your total will be:
                  $___ on 01/01/2023
                </p>
              </li>
              <li>
                {" "}
                <p className="forecast-result">
                  in order to stay above your threshhold you will need to make
                  an average of ___ for ___ days
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="right-half">
        <h1 className="current-total"> Current total: 0</h1>
        <section className="chart-wrapper">
          <WeeklyBtn />
          <div className="chart"></div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
