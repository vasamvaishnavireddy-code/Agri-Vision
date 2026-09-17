const dashboardName = document.getElementById('dashboardName');
const dashboardRole = document.getElementById('dashboardRole');
const session = JSON.parse(localStorage.getItem('agrivisionSession') || 'null');
const role = localStorage.getItem('agrivisionRole') || 'Farmer';
const user = JSON.parse(localStorage.getItem('agrivisionUser') || 'null');

if (dashboardName) {
  dashboardName.textContent = session?.name || user?.name || user?.email?.split('@')[0] || 'Farmer';
}
if (dashboardRole) {
  dashboardRole.textContent = role;
}
