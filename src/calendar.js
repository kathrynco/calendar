import React, { useState} from "react";
import { CalendarGrid } from "./grid";
import './index.css'
import { Heading } from "./header";


export default function Calendar() {
  //const [date, setDate] = useState({month, year})
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [menu, setMenu] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
 

  const addMonth = (current) => {
    if (current >= 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  const removeMonth = (current) => {
    if (current <= 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };
  const chooseMonth = (newMonth) => {
    setMonth(newMonth);
    setMenu(false);
  };
  const showMenu = () => {
    setMenu((prev) => (prev === true ? false : true));
  };

  const selectDay = (day) => {
    setSelectedDay((prev) => [day, ...prev]);
    console.log(selectedDay);
  };

  return (
    <main>
      <Heading
        month={month}
        year={year}
        chooseMonth={chooseMonth}
        addMonth={addMonth}
        removeMonth={removeMonth}
        menu={menu}
        showMenu={showMenu}
      />
      <CalendarGrid
        month={month}
        year={year}
        selectedDay={selectedDay}
        selectDay={selectDay}
      />
    </main>
  );
}
