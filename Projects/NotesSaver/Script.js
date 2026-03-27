const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const noteInput = document.getElementById("noteInput");
const saveNote = document.getElementById("saveNote");
const clearNote = document.getElementById("clearNote");
const selectedDateText = document.getElementById("selectedDateText");
const popupMsg = document.getElementById("popupMsg");

let currentDate = new Date();
let selectedDateKey = null;

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getDateKey(year, month, day) {
  return `${year}-${month + 1}-${day}`;
}

function getNotes() {
  return JSON.parse(localStorage.getItem("notes")) || {};
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderCalendar() {
  calendar.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  monthYear.textContent = `${currentDate.toLocaleString("default", {
    month: "long"
  })} ${year}`;

  const days = getDaysInMonth(year, month);
  const notes = getNotes();

  for (let day = 1; day <= days; day++) {
    const dateKey = getDateKey(year, month, day);

    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.dataset.date = dateKey;

    // Sunday
    const dayOfWeek = new Date(year, month, day).getDay();
    if (dayOfWeek === 0) {
      dayDiv.classList.add("sunday");
    }

    // Highlight today
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayDiv.style.border = "2px solid #1976d2";
    }

    dayDiv.innerHTML = `<strong>${day}</strong>`;

    if (notes[dateKey]) {
      const noteDiv = document.createElement("div");
      noteDiv.classList.add("note");
      noteDiv.textContent = notes[dateKey];
      dayDiv.appendChild(noteDiv);
    }

    calendar.appendChild(dayDiv);
  }
}

calendar.addEventListener("click", (e) => {
  const dayBox = e.target.closest(".day");
  if (!dayBox) return;

  document.querySelectorAll(".day").forEach(d =>
    d.classList.remove("selected")
  );

  dayBox.classList.add("selected");

  selectedDateKey = dayBox.dataset.date;

  const notes = getNotes();
  noteInput.value = notes[selectedDateKey] || "";

  selectedDateText.textContent = `Notes for: ${selectedDateKey}`;
});

// save notes
saveNote.addEventListener("click", () => {
  if (!selectedDateKey) {
    alert("Please select a date first!");
    return;
  }

  const notes = getNotes();
  notes[selectedDateKey] = noteInput.value;

  saveNotes(notes);
  renderCalendar();

  alert("✅ Note saved!");
});

// clear notes
clearNote.addEventListener("click", () => {
  if (!selectedDateKey) {
    alert("Please select a date first!");
    return;
  }

  const confirmDelete = confirm("Delete this note?");
  if (!confirmDelete) return;

  const notes = getNotes();
  delete notes[selectedDateKey];

  saveNotes(notes);
  noteInput.value = "";

  renderCalendar();

  alert("🗑️ Note deleted!");
});


prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();