const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const periods = [
    "Period 1",
    "Period 2",
    "Period 3",
    "Period 4",
    "Period 5",
    "Period 6",
    "Period 7"
];

function createTimetable() {
    const grid = document.getElementById("timetableGrid");
    if (!grid) return;

    grid.innerHTML = "";

    days.forEach(day => {

        const column = document.createElement("div");
        column.className = "day-column";

        const title = document.createElement("h3");
        title.textContent = day;
        column.appendChild(title);

        periods.forEach((period, index) => {

            const key = day + "-period-" + index;
            const saved = JSON.parse(localStorage.getItem(key));

            const card = document.createElement("div");
            card.className = "class-card";

            if (saved) {
                card.innerHTML = `
                    <h4>${saved.code} - ${saved.name}</h4>
                    <p><strong>Faculty:</strong> ${saved.faculty}</p>
                    <p><strong>Time:</strong> ${saved.time}</p>
                    <p><strong>Room:</strong> ${saved.room}</p>
                `;
            } else {
                card.innerHTML = `<p>${period}</p>`;
            }

            card.onclick = () => editPeriod(day, index);

            column.appendChild(card);
        });

        grid.appendChild(column);
    });
}

function editPeriod(day, index) {

    const key = day + "-period-" + index;

    const code = prompt("Subject Code:");
    if (!code) return;

    const name = prompt("Subject Name:");
    if (!name) return;

    const faculty = prompt("Faculty:");
    if (!faculty) return;

    const time = prompt("Time (e.g. 08:50 - 09:45):");
    if (!time) return;

    const room = prompt("Room / Class Code:");
    if (!room) return;

    const data = { code, name, faculty, time, room };

    localStorage.setItem(key, JSON.stringify(data));

    createTimetable();
}

document.addEventListener("DOMContentLoaded", createTimetable);
