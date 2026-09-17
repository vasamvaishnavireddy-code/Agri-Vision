const registerForm = document.getElementById('registerForm');

if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('registerName')?.value?.trim() || '';
    const email = document.getElementById('registerEmail')?.value?.trim() || '';
    const password = document.getElementById('registerPassword')?.value || '';
    const confirmPassword = document.getElementById('registerConfirm')?.value || '';

    if (!name || !email || !password || password !== confirmPassword) return;

    localStorage.setItem('agrivisionUser', JSON.stringify({ name, email, password }));
    localStorage.setItem('agrivisionSession', JSON.stringify({ name, email, loggedIn: true }));
    localStorage.removeItem('agrivisionRole');
    window.location.href = 'role.html';
  });
}
