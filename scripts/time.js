document.addEventListener("DOMContentLoaded", () => {
    function updateDateTimeBoracay() {
        const dateEl = document.getElementById("current-date");
        const timeEl = document.getElementById("current-time");

        const now = new Date();

        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const boracayTime = new Date(utc + (8 * 60 * 60 * 1000));

        const formattedDate = (boracayTime.getMonth() + 1) + "/" + boracayTime.getDate() + "/" + boracayTime.getFullYear();

        let hours = boracayTime.getHours();
        let minutes = boracayTime.getMinutes();
        let ampm = hours >= 12 ? "pm" : "am";

        hours = hours % 12 || 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        dateEl.innerText = formattedDate;
        timeEl.innerText = hours + ":" + minutes + " " + ampm;
    }

    updateDateTimeBoracay();
    setInterval(updateDateTimeBoracay, 1000);
});
