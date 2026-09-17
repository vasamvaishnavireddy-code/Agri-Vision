const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
}

const currentUser = JSON.parse(localStorage.getItem('agrivisionCurrentUser') || '{}');
const selectedRole = JSON.parse(localStorage.getItem('agrivisionSelectedRole') || '{}');
const profileNameEls = document.querySelectorAll('.profile-menu strong');
const profileRoleEls = document.querySelectorAll('.profile-menu p');

if (profileNameEls.length) {
  const firstName = currentUser.fullName?.split(' ')[0] || 'Farmer';
  profileNameEls.forEach((el) => {
    el.textContent = firstName;
  });
}

if (profileRoleEls.length) {
  const roleTitle = selectedRole.roleTitle || 'Farmer';
  profileRoleEls.forEach((el) => {
    el.textContent = roleTitle;
  });
}
