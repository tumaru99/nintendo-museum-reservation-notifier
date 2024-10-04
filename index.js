Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const now = new Date();
document.getElementById("date").value = now
  .addDays(1)
  .toISOString()
  .split("T")[0];

const endpoint = document.getElementById("endpoint");
endpoint.addEventListener("input", () => {
  endpoint.classList.remove("input-error");
});

const button = document.getElementById("start");
button.addEventListener("click", () => {
  const date = document.getElementById("date").value;

  if (endpoint.value.length === 0) {
    endpoint.classList.add("input-error");
    alert("The endpoint cannot be empty.");
    return;
  }

  window.electron.start(date, endpoint.value);
});
