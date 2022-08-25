export const DEFAULT = {
    THIS_DATE: new Date().getDate(),
    THIS_MONTH: new Date().getMonth(),
    THIS_YEAR: new Date().getFullYear(),
    THIS_WEEKDAY: new Date().getDay()
  };
  
  export const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  export const getTotalDays = (month, year) => {
    const totalDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return month === 1 && year % 4 === 0 ? 29 : totalDays[month];
  };
  
  export const getFirstDay = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  
  export const getPreviousMonth = (month, year) => {
    const previousMonth = month > 0 ? month - 1 : 12;
    const previousYear = month > 0 ? year : year - 1;
    return { month: previousMonth, year: previousYear };
  };
  
  export const getNextMonth = (month, year) => {
    const nextMonth = month < 12 ? month + 1 : 0;
    const nextYear = month < 12 ? year : year + 1;
    return { month: nextMonth, year: nextYear };
  };
  
  export const totalDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  export function getCalendarGrid(month, year) {
    const maxDays = month === 1 && year % 4 === 0 ? 29 : totalDays[month];
    const firstDay = new Date(year, month, 1).getDay();
  
    let rows = [];
    let num = 1;
  
    for (let i = 0; i < 6; i++) {
      rows[i] = [];
  
      for (let d = 0; d < 7; d++) {
        if ((d < firstDay && i === 0) || num > maxDays) {
          rows[i].push("x");
        } else {
          rows[i].push(num);
          num++;
        }
      }
    }
    return rows;
  }
  
  