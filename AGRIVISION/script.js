const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

window.addEventListener('load', () => {
  if (document.getElementById('splashScreen')) {
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 3000);
  } else {
    document.body.classList.add('loaded');
  }
});

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const getUsers = () => JSON.parse(localStorage.getItem('agrivisionUsers') || '[]');
const saveUsers = (users) => localStorage.setItem('agrivisionUsers', JSON.stringify(users));

const authForm = document.querySelector('.auth-form');
const messageBox = document.querySelector('.auth-message');

if (authForm) {
  authForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formType = authForm.dataset.type;
    const fields = Object.fromEntries(new FormData(authForm));

    if (formType === 'login') {
      const users = getUsers();
      const user = users.find(
        (entry) => entry.email.toLowerCase() === fields.email.toLowerCase() && entry.password === fields.password
      );

      if (!user) {
        messageBox.textContent = 'Invalid email or password.';
        messageBox.className = 'auth-message error';
        return;
      }

      localStorage.setItem('agrivisionCurrentUser', JSON.stringify(user));
      messageBox.textContent = 'Signing in...';
      messageBox.className = 'auth-message success';
      window.location.href = 'role-selection.html';
      return;
    }

    const { fullName, email, password, confirmPassword } = fields;

    if (!fullName || !email || !password || !confirmPassword) {
      messageBox.textContent = 'Please fill in all fields.';
      messageBox.className = 'auth-message error';
      return;
    }

    if (password.length < 6) {
      messageBox.textContent = 'Password must be at least 6 characters.';
      messageBox.className = 'auth-message error';
      return;
    }

    if (password !== confirmPassword) {
      messageBox.textContent = 'Passwords do not match.';
      messageBox.className = 'auth-message error';
      return;
    }

    const users = getUsers();
    if (users.some((entry) => entry.email.toLowerCase() === email.toLowerCase())) {
      messageBox.textContent = 'An account with this email already exists.';
      messageBox.className = 'auth-message error';
      return;
    }

    users.push({ fullName, email, password });
    saveUsers(users);
    messageBox.textContent = 'Registration successful. Redirecting to login...';
    messageBox.className = 'auth-message success';
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 900);
  });
}

document.querySelectorAll('.role-card').forEach((card) => {
  card.addEventListener('click', () => {
    const roleName = card.dataset.role;
    const roleTitle = card.dataset.title;
    const dashboardPage = card.dataset.dashboard || 'dashboard.html';
    localStorage.setItem('agrivisionSelectedRole', JSON.stringify({ roleName, roleTitle }));
    window.location.href = dashboardPage;
  });
});

const dashboardName = document.getElementById('dashboardName');
const dashboardRole = document.getElementById('dashboardRole');
const dashboardMessage = document.getElementById('dashboardMessage');

if (dashboardName && dashboardRole && dashboardMessage) {
  const currentUser = JSON.parse(localStorage.getItem('agrivisionCurrentUser') || '{}');
  const selectedRole = JSON.parse(localStorage.getItem('agrivisionSelectedRole') || '{}');

  dashboardName.textContent = currentUser.fullName || 'Welcome';
  dashboardRole.textContent = selectedRole.roleTitle || 'Connected Stakeholder';
  dashboardMessage.textContent = `Your ${selectedRole.roleTitle || 'role'} workspace is ready for smarter agricultural operations.`;
}

const themeToggle = document.getElementById('themeToggle');
const profileName = document.getElementById('profileName');
const profileRole = document.getElementById('profileRole');
const sidebarRole = document.getElementById('sidebarRole');
const sidebarRoleHint = document.getElementById('sidebarRoleHint');
const roleModulesGrid = document.getElementById('roleModulesGrid');

const roleModules = [
  {
    title: 'Precision Advisory',
    description: 'Receive weather-driven crop recommendations and daily action plans.',
    roles: ['Farmer', 'Research & Innovation']
  },
  {
    title: 'Equipment Leasing',
    description: 'List and book farm equipment with transparent availability.',
    roles: ['Equipment Owner', 'Logistics Partner']
  },
  {
    title: 'Supply Coordination',
    description: 'Route inventory and fulfill supplier commitments with live visibility.',
    roles: ['Supplier', 'Retailer']
  },
  {
    title: 'Buyer Marketplace',
    description: 'Connect buyers and sellers through reliable demand signals.',
    roles: ['Retailer', 'Consumer']
  },
  {
    title: 'Public Procurement',
    description: 'Monitor government demand, schemes, and compliance updates.',
    roles: ['Government Officer']
  },
  {
    title: 'R&D Lab',
    description: 'Access trials, innovation insights, and collaborative experiments.',
    roles: ['Research & Innovation']
  },
  {
    title: 'Field Logistics',
    description: 'Track transport, routes, and delivery checkpoints in real time.',
    roles: ['Logistics Partner']
  },
  {
    title: 'Crop Insurance',
    description: 'Streamline claims and safeguard agricultural operations.',
    roles: ['Farmer', 'Government Officer']
  },
  {
    title: 'Direct Consumer Connect',
    description: 'Share trusted produce and consumer-focused agricultural offerings.',
    roles: ['Consumer', 'Retailer']
  }
];

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
}

if (profileName && profileRole && sidebarRole && sidebarRoleHint) {
  const currentUser = JSON.parse(localStorage.getItem('agrivisionCurrentUser') || '{}');
  const selectedRole = JSON.parse(localStorage.getItem('agrivisionSelectedRole') || '{}');
  const title = selectedRole.roleTitle || 'Connected Stakeholder';
  profileName.textContent = currentUser.fullName?.split(' ')[0] || 'Aarav';
  profileRole.textContent = title;
  sidebarRole.textContent = title;
  sidebarRoleHint.textContent = `${title} workspace`; 
}

if (roleModulesGrid) {
  const selectedRole = JSON.parse(localStorage.getItem('agrivisionSelectedRole') || '{}');
  const currentRole = selectedRole.roleTitle || 'Farmer';

  roleModulesGrid.innerHTML = roleModules
    .map((module) => {
      const isUnlocked = module.roles.includes(currentRole);
      return `
        <article class="module-card glass-card ${isUnlocked ? '' : 'locked'}">
          <h4>${module.title}</h4>
          <p>${module.description}</p>
        </article>
      `;
    })
    .join('');
}
