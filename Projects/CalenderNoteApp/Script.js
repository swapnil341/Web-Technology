let currentDate = new Date();
let selectedDate = null;

// Render Calendar
function renderCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  const monthYear = document.getElementById("monthYear");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  monthYear.innerText = `${month + 1} / ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Empty spaces
  for (let i = 0; i < firstDay; i++) {
    calendar.innerHTML += `<div></div>`;
  }

  // Days
  for (let day = 1; day <= totalDays; day++) {
    const div = document.createElement("div");
    div.classList.add("day");

    const dateKey = `${year}-${month}-${day}`;

    const savedNote = localStorage.getItem(dateKey);

    div.innerHTML = `
      <strong>${day}</strong>
      <div class="note-preview">
        ${savedNote 
          ? (savedNote.length > 20 
              ? savedNote.substring(0, 20) + "..." 
              : savedNote)
          : ""
        }
      </div>
    `;

    div.onclick = () => selectDate(year, month, day, div);

    calendar.appendChild(div);
  }
}

// Select Date
function selectDate(year, month, day, element) {
  selectedDate = `${year}-${month}-${day}`;

  document.querySelectorAll(".day").forEach(d => d.classList.remove("active"));
  element.classList.add("active");

  document.getElementById("selectedDate").innerText = `Notes for ${selectedDate}`;

  const savedNote = localStorage.getItem(selectedDate);
  document.getElementById("noteInput").value = savedNote || "";
}

// Save Note
function saveNote() {
  if (!selectedDate) {
    alert("Select a date first!");
    return;
  }

  const note = document.getElementById("noteInput").value;

  localStorage.setItem(selectedDate, note);

  alert("Note saved!");

  renderCalendar(); // 🔥 re-render to update UI
}

// Navigation
function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

// Initial Load
renderCalendar();