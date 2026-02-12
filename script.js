const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timeSlots = ["9-10", "10-11", "11-12", "1-2", "2-3"];

function createTimetable() {
    const grid = document.getElementById("timetableGrid");
    grid.innerHTML = "";

    days.forEach(day => {
        const column = document.createElement("div");
        column.className = "day-column";

        const title = document.createElement("div");
        title.className = "day-title";
        title.textContent = day;
        column.appendChild(title);

        timeSlots.forEach(time => {
            const key = day + "-" + time;
            const saved = localStorage.getItem(key) || "";

            const slot = document.createElement("div");
            slot.className = "slot";
            slot.textContent = saved || time;
            slot.onclick = () => editSlot(slot, key, time);

            column.appendChild(slot);
        });

        grid.appendChild(column);
    });
}

function editSlot(slot, key, time) {
    const subject = prompt("Enter subject for " + time);
    if (subject !== null) {
        slot.textContent = subject || time;
        localStorage.setItem(key, subject);
    }
}

createTimetable();
