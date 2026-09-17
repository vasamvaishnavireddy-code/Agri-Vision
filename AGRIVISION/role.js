const roleButtons = document.querySelectorAll('.role-card');

roleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedRole = button.dataset.role || 'User';
    localStorage.setItem('agrivisionRole', selectedRole);
    window.location.href = 'dashboard.html';
  });
});
