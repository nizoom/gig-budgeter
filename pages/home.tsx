import { NextPage } from "next";
import ActionDropdown from "../components/action-drpdwn";

const HomePage: NextPage = () => {
  return (
    <div className="homepage-page-wrapper">
      <h1 className="current-total"> Current total: 0</h1>
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
                in order to stay above your threshhold you will need to make an
                average of ___ for ___ days
              </p>
            </li>
          </ul>
        </section>
      </div>
      <section className="chart-wrapper">
        <button className="filter-time-btn"> Weekly</button>
        <div className="chart"></div>
      </section>
    </div>
  );
};

export default HomePage;
