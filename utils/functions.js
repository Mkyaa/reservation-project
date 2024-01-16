// readableDate function is used to convert date to readable format.
const readableDate = (date) => {
  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const day = date.split("-")[2].split("T")[0];
  const hour = date.split("-")[2].split("T")[1].split(":")[0];
  const minute = date.split("-")[2].split("T")[1].split(":")[1];
  const second = date.split("-")[2].split("T")[1].split(":")[2];
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const readableDate = `${day} ${
    months[month - 1]
  } ${year} ${hour}:${minute}:${second}`;
  return readableDate;
};

// readableTime function is used to convert time to readable format.
const readableTime = (date) => {
  const hour = date.split("-")[2].split("T")[1].split(":")[0];
  const minute = date.split("-")[2].split("T")[1].split(":")[1];
  const readableTime = `${hour}:${minute}`;
  return readableTime;
};


export { readableDate, readableTime };