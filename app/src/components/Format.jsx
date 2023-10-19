function formatedate({ date }) {
  var hours = date.getHours() % 12 || 12; // 12h instead of 24h, with 12 instead of 0.
  var minutes = date.getMinutes();
  var sec = hours >= 12 ? "pm" : "am";

  minutes = minutes < 10 ? "0" + minutes : minutes;
  var time = hours + ":" + minutes + "" + sec;
  return (
    date.getDate() +
    ":" +
    (date.getMonth() + 1) +
    ":"(date.getFullYear()) +
    "/" +
    time
  );
}
export default formatedate;
