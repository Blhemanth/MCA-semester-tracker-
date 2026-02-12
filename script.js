console.log("Academic Hub Loaded");

// ============================
// Navigation
// ============================

function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove("hidden");
    }
}

// ============================
// TIMETABLE (Vertical Planner)
// ============================

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timeSlots = ["9-10", "10-11", "11-12", "1-2", "2-3"];

function createTimetable() {
    const grid = document.getElementById("timetableGrid");
    if (!grid) return;
    document.addEventListener("DOMContentLoaded", function() {
    createTimetable();
});
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

            slot.onclick = () => {
                const subject = prompt("Enter subject for " + day + " " + time);
                if (subject !== null) {
                    slot.textContent = subject || time;
                    localStorage.setItem(key, subject);
                }
            };

            column.appendChild(slot);
        });

        grid.appendChild(column);
    });
}

// ============================
// EXAMS
// ============================

function addExam() {
    const name = document.getElementById("examName").value;
    const marks = document.getElementById("marks").value;

    if (!name || !marks) return;

    const li = document.createElement("li");
    li.textContent = name + " : " + marks;

    document.getElementById("examList").appendChild(li);

    document.getElementById("examName").value = "";
    document.getElementById("marks").value = "";
}

// ============================
// NOTES
// ============================

function addNote() {
    const note = document.getElementById("noteText").value;

    if (!note) return;

    const li = document.createElement("li");
    li.textContent = note;

    document.getElementById("noteList").appendChild(li);
    document.getElementById("noteText").value = "";
}

// ============================
// REMINDERS
// ============================

function addReminder() {
    const reminder = document.getElementById("reminderText").value;

    if (!reminder) return;

    const li = document.createElement("li");
    li.textContent = reminder;

    document.getElementById("reminderList").appendChild(li);
    document.getElementById("reminderText").value = "";
}

// Load timetable on page load
createTimetable();
