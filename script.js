function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
}

/* Timetable */
function addTimetable() {
    let subject = document.getElementById("subject").value;
    let time = document.getElementById("time").value;

    let li = document.createElement("li");
    li.textContent = subject + " - " + time;

    document.getElementById("timetableList").appendChild(li);
}

/* Exams */
function addExam() {
    let exam = document.getElementById("examName").value;
    let marks = document.getElementById("marks").value;

    let li = document.createElement("li");
    li.textContent = exam + " : " + marks;

    document.getElementById("examList").appendChild(li);
}

/* Notes */
function addNote() {
    let note = document.getElementById("noteText").value;

    let li = document.createElement("li");
    li.textContent = note;

    document.getElementById("noteList").appendChild(li);
}

/* Reminders */
function addReminder() {
    let reminder = document.getElementById("reminderText").value;

    let li = document.createElement("li");
    li.textContent = reminder;

    document.getElementById("reminderList").appendChild(li);
}
