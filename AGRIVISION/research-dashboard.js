const themeToggle = document.getElementById('themeToggle');
const profileName = document.getElementById('profileName');
const profileRole = document.getElementById('profileRole');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const currentUser = JSON.parse(localStorage.getItem('agrivisionCurrentUser') || '{}');
const selectedRole = JSON.parse(localStorage.getItem('agrivisionSelectedRole') || '{}');
const title = selectedRole.roleTitle || 'Research & Innovation';
profileName.textContent = currentUser.fullName?.split(' ')[0] || 'Research';
profileRole.textContent = title;
