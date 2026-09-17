const usersKey = 'agrivision-users';
const sessionKey = 'agrivision-session';
const roleKey = 'agrivision-role';

function getUsers() {
  return JSON.parse(localStorage.getItem(usersKey) || '[]');
}

function saveUsers(users) {
  localStorage.setItem(usersKey, JSON.stringify(users));
}

function loginUser(email, password) {
  const users = getUsers();
  return users.find((user) => user.email === email && user.password === password);
}

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const roleCards = document.querySelectorAll('.role-card');

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const user = loginUser(email, password);
    if (!user) {
      alert('Invalid email or password.');
      return;
    }
    localStorage.setItem(sessionKey, JSON.stringify({ name: user.name, email: user.email }));
    window.location.href = localStorage.getItem(roleKey) ? 'dashboard.html' : 'role.html';
  });
}

if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirm').value;

    if (!name || !email || !password || !confirm) {
      alert('Please fill in all fields.');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      alert('Passwords do not match.');
      return;
    }

    const users = getUsers();
    if (users.some((user) => user.email === email)) {
      alert('An account with this email already exists.');
      return;
    }

    users.push({ name, email, password });
    saveUsers(users);
    localStorage.setItem(sessionKey, JSON.stringify({ name, email }));
    window.location.href = 'role.html';
  });
}

roleCards.forEach((card) => {
  card.addEventListener('click', () => {
    const role = card.getAttribute('data-role');
    localStorage.setItem(roleKey, role);
    window.location.href = 'dashboard.html';
  });
});
