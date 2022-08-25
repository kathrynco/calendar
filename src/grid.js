import React, { useState } from "react";
import {
  WEEKDAYS, getCalendarGrid
} from "./constants";
import "./index.css"


export const CalendarGrid = (props) => {
  const [select, setSelect] = useState(null);
  const selectItem = (d) => {
    setSelect(d);
  };
  const grid = getCalendarGrid(props.month, props.year);

 
  const weekDays = WEEKDAYS.map((wkday) => (
    <span className="wkday">{wkday}</span>
  ));


  let matrix = [];

  
  matrix = grid.map((week, wI) => {
    const Weeks = week.map((day, dI) => {
      const handleEvent = (e) => {
        selectItem((prev) => (prev === { day }.day ? null : { day }.day));
      };
      return props.month === new Date().getMonth() &&
        props.year === new Date().getFullYear() &&
        day === new Date().getDate() ? (
        <div
          className={select === { day }.day ? "selected day" : "day"}
          id="today"
          onClick={handleEvent}
          value={day}
          key={`_${wI}${dI}`}
          index={dI}
        >
          <h5>{day}</h5>
        </div>
      ) : day === "x" ? (
        <div className="blank">{""}</div>
      ) : (
        <div
          className={select === { day }.day ? "selected" : "day"}
          value={day}
          day={day}
          onClick={handleEvent}
        >
          <h5 className="num">{day}</h5>
        </div>
      );
    });
    return (
      <div className="week" onClick={props.onClick} key={wI}>
        {Weeks}
      </div>
    );
  });
 

  return (
    <section class="grid">
      <div class="row">{weekDays}</div>
      {matrix}
    </section>
  );
};


