import { useState } from "react";
import styles from "./Main.module.css";
import { Markup } from "interweave";
import CountUp from "react-countup";
const Main = ({ data }) => {
  const [selected, setSelected] = useState("USD");
  const changeCurrency = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className={styles.main}>
      <h1>WELCOME TO THE {data?.chartName} EXCHANGE RATES</h1>
      <div className={`form-group ${styles.form__wraper}`}>
        <p>
          <span className="badge badge-warning">Disclaimer </span>{" "}
          <small>{data?.disclaimer}</small>
        </p>
        <p className={styles.date}>
          Updated Date:{" "}
          <span className="badge badge-dark">{data?.time.updated}</span>
        </p>
        <label htmlFor="sel1" className={styles.label}>
          Select Currency
        </label>
        <select
          className={`form-control ${styles.select}`}
          id="sel1"
          onChange={(e) => changeCurrency(e)}
        >
          <option value={data?.bpi.USD.code}>{data?.bpi.USD.code}</option>
          <option value={data?.bpi.EUR.code}>{data?.bpi.EUR.code}</option>
          <option value={data?.bpi.GBP.code}>{data?.bpi.GBP.code}</option>
        </select>
        <div className={styles.infomation}>
          <ul className="list-group">
            {selected === "USD" ? (
              <>
                <li className={`list-group-item ${styles.list_item}`}>
                  Rate{" "}
                  <span className={`${styles.badge} badge badge-primary`}>
                    <Markup content={data?.bpi.USD.symbol} />{" "}
                    <CountUp
                      className={styles.count_up}
                      start={0}
                      end={data?.bpi.USD.rate_float}
                      duration={2.75}
                      separator=" "
                      decimals={2}
                      decimal=","
                      prefix=" "
                    ></CountUp>
                  </span>
                </li>
                <li className={`list-group-item ${styles.list_item}`}>
                  Description
                  <span className={`${styles.badge} badge badge-success`}>
                    {data?.bpi.USD.description}
                  </span>
                </li>
                <li className={`list-group-item ${styles.list_item}`}>
                  Symbol{" "}
                  <span className={`${styles.badge} badge badge-warning`}>
                    {<Markup content={data?.bpi.USD.symbol} />}
                  </span>
                </li>
              </>
            ) : selected === "EUR" ? (
              <>
                <li className={`list-group-item ${styles.list_item}`}>
                  Rate{" "}
                  <span className={`${styles.badge} badge badge-primary`}>
                    <Markup content={data?.bpi.EUR.symbol} />{" "}
                    <CountUp
                      start={0}
                      end={data?.bpi.EUR.rate_float}
                      duration={2.75}
                      separator=" "
                      decimals={2}
                      decimal=","
                      prefix=" "
                    ></CountUp>
                  </span>
                </li>
                <li className={`list-group-item ${styles.list_item}`}>
                  Description
                  <span className={`${styles.badge} badge badge-success`}>
                    {data?.bpi.EUR.description}
                  </span>
                </li>
                <li className={`list-group-item ${styles.list_item}`}>
                  Symbol{" "}
                  <span className={`${styles.badge} badge badge-warning`}>
                    {<Markup content={data?.bpi.EUR.symbol} />}
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className={`list-group-item ${styles.list_item}`}>
                  Rate{" "}
                  <span className={`${styles.badge} badge badge-primary`}>
                    <Markup content={data?.bpi.GBP.symbol} />{" "}
                    <CountUp
                      start={0}
                      end={data?.bpi.GBP.rate_float}
                      duration={2.75}
                      separator=" "
                      decimals={2}
                      decimal=","
                      prefix=" "
                    ></CountUp>
                  </span>
                </li>
                <li className={`list-group-item ${styles.list_item}`}>
                  Description
                  <span className={`${styles.badge} badge badge-success`}>
                    {data?.bpi.GBP.description}
                  </span>
                </li>
                <li className={`list-group-item ${styles.list_item}`}>
                  Symbol{" "}
                  <span className={`${styles.badge} badge badge-warning`}>
                    {<Markup content={data?.bpi.GBP.symbol} />}
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Main;
