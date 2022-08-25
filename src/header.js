import React from "react";
import { MONTHS } from "./constants";
import './index'


export const Heading = (props) => {
  const MonthPicker = (props) => {
    const monthList = MONTHS.map((month, i) => (
      <li className="monthItem" value={i} key={`${month}`}>
        {month}
      </li>
    ));
    const handleEvent = (e) => {
      props.onClick(e.target.value);
    };
    return (
      <ul className="monthList" onClick={handleEvent}>
        {monthList}
      </ul>
    );
  };

  const Button = (props) => {
    const handleClick = (e) => {
      props.onClick(e.target.value);
    };
    return (
      <div>
        <button
          className="btn"
          value={props.value}
          name={props.name}
          onClick={handleClick}
        >
          {props.name}
        </button>
      </div>
    );
  };

  const MonthTitle = (props) => {
    const handleClick = () => {
      props.onClick();
    };
    return (
      <span className="titleText" onClick={handleClick} value={props.menu}>
        {MONTHS[props.month]}
      </span>
    );
  };

  const YearTitle = (props) => {
    return <span className="titleText">{props.year}</span>;
  };

  return (
    <>
      {props.menu === true && (
        <MonthPicker onClick={props.chooseMonth} menu={props.menu} />
      )}

      <header>
        <Button
          className="btn min"
          onClick={props.removeMonth}
          value={props.month}
          name="<"
        />
        <div className="title">
          <MonthTitle
            month={props.month}
            onClick={props.showMenu}
            menu={props.menu}
          />
          <YearTitle year={props.year} />
        </div>
        <Button
          className="btn plus"
          onClick={props.addMonth}
          value={props.month}
          name=">"
        />
      </header>
    </>
  );
};
