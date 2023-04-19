
export const addEvent = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  console.log(`${value} added on ${key}`);
};

export const deleteEvent = (key) => {
  localStorage.removeItem(key);
}

export const getKey = (date, hour) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${hour}`;
}