const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const times = ["9-10", "10-11", "11-12", "1-2", "2-3"];

function createTimetable() {
    const grid = document.getElementById("timetableGrid");
    grid.innerHTML = "";

    // Empty corner
    grid.appendChild(createCell("", "header"));

    // Day headers
    days.forEach(day => {
        grid.appendChild(createCell(day, "header"));
    });

    times.forEach(time => {
        // Time column
        grid.appendChild(createCell(time, "time"));

        days.forEach(day => {
            const key = day + "-" + time;
            const saved = localStorage.getItem(key) || "";

            const cell = createCell(saved, "cell");
            cell.onclick = () => editCell(cell, key);

            grid.appendChild(cell);
        });
    });
}

function createCell(text, className) {
    const div = document.createElement("div");
    div.className = className + " cell";
    div.textContent = text;
    return div;
}

function editCell(cell, key) {
    const subject = prompt("Enter Subject:");
    if (subject !== null) {
        cell.textContent = subject;
        localStorage.setItem(key, subject);
    }
}

createTimetable();
