const form = document.getElementById('loginForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('loginEmail')?.value?.trim() || '';
    const password = document.getElementById('loginPassword')?.value || '';

    if (!email || !password) return;

    const storedUser = JSON.parse(localStorage.getItem('agrivisionUser') || 'null');

    if (storedUser && storedUser.email === email) {
      localStorage.setItem('agrivisionSession', JSON.stringify({ email, loggedIn: true }));
      const savedRole = localStorage.getItem('agrivisionRole');
      window.location.href = savedRole ? 'dashboard.html' : 'role.html';
      return;
    }

    localStorage.setItem('agrivisionUser', JSON.stringify({ email, password }));
    localStorage.setItem('agrivisionSession', JSON.stringify({ email, loggedIn: true }));
    window.location.href = 'role.html';
  });
}
