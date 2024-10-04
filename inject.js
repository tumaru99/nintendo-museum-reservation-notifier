const { contextBridge } = require("electron");

const TRIGGER_DELAY = 2000;
const RELOAD_INTERVAL = 10000;

contextBridge.exposeInMainWorld("electron", {
  inject: (date, endpoint) => {
    setTimeout(() => {
      // Check capacity.
      const td = document.querySelector(`td[data-date="${date}"]`);
      if (td) {
        const name =
          td?.children?.[0]?.children?.[1]?.children?.[0]?.children?.[0]
            ?.children?.[0]?.children?.[0]?.className;
        if (name === "sale") {
          fetch(
            `${endpoint.replace(
              /\/$/,
              ""
            )}/Nintendo%20Museum%20Reservation%20Notifier/Here%20is%20a%20seat.%20Tap%20here%20to%20reserve.?url=https://museum-tickets.nintendo.com/en/calendar`
          );
        }
      }

      setTimeout(() => {
        window.location.reload();
      }, RELOAD_INTERVAL);
    }, TRIGGER_DELAY);
  },
});
