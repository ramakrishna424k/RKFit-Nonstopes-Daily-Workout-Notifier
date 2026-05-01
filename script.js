let schedules = JSON.parse(localStorage.getItem('fitpulse_schedules') || '[]');

window.onload = () => {
  renderSchedules();
};

function requestPermission() {
  Notification.requestPermission().then(result => {
    if (result === "granted") {
      showToast("Notifications enabled");
    }
  });
}

function addSchedule() {
  const title = document.getElementById('notifTitle').value;
  const time = document.getElementById('notifTime').value;
  const body = document.getElementById('notifBody').value;

  const schedule = { id: Date.now(), title, time, body };
  schedules.push(schedule);

  localStorage.setItem('fitpulse_schedules', JSON.stringify(schedules));
  renderSchedules();
}

function renderSchedules() {
  const list = document.getElementById('scheduleList');

  if (schedules.length === 0) {
    list.innerHTML = "No reminders yet";
    return;
  }

  list.innerHTML = schedules.map(s => `
    <div>
      <strong>${s.title}</strong> - ${s.time}
    </div>
  `).join('');
}

function sendTestNotification() {
  if (Notification.permission === "granted") {
    new Notification("Test Notification", {
      body: "This is a test 💪"
    });
  }
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
}
