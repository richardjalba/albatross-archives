const base_url = 'https://api.rawg.io/api/';

// Get the proper dates for api use
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else return month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentMonth}/${currentDay}/${currentYear} `;
const lastYear = `${currentMonth}/${currentDay}/${currentYear - 1} `;
const nextYear = `${currentMonth}/${currentDay}/${currentYear + 1} `;
console.log(currentDate);

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcoming_games = `games?dates=${nextYear},${currentDate}&ordering=-rating&page_size=20`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
