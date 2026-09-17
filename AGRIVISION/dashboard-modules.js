(function () {
  const role = document.body.dataset.role || 'farmer';
  const catalogDefaults = [
    { name: 'Fresh Tomato', category: 'Vegetables', price: '₹40/kg', stock: '120 kg' },
    { name: 'Hybrid Seeds', category: 'Seeds', price: '₹260/pack', stock: '80 packs' },
    { name: 'NPK Fertilizer', category: 'Fertilizers', price: '₹850/bag', stock: '50 bags' }
  ];
  const roleConfig = {
    farmer: {
      storageKey: 'agrivisionFarmerData',
      defaults: {
        profile: {
          farmName: 'Green Valley Farm',
          ownerName: 'Ramesh Kumar',
          location: 'Karnal, Haryana',
          size: '12 acres',
          soilType: 'Loamy',
          cropType: 'Tomato'
        },
        recommendations: [
          { cropName: 'Tomato', soilType: 'Loamy', season: 'Monsoon', notes: 'Use drip irrigation' }
        ],
        diseaseReports: [
          { cropType: 'Tomato', symptom: 'Leaf curl', severity: 'Medium', remedy: 'Neem spray' }
        ],
        pestReports: [
          { cropType: 'Tomato', symptom: 'Aphids', severity: 'Low', remedy: 'Biological control' }
        ],
        soilReports: [
          { soilType: 'Loamy', ph: '6.7', nitrogen: 'Medium', phosphorus: 'Low', potassium: 'Medium' }
        ],
        fertilizerPlans: [
          { cropType: 'Tomato', stage: 'Flowering', recommendation: 'NPK 19:19:19' }
        ],
        calendarEvents: [
          { title: 'Sowing', date: '2026-07-10', status: 'Planned' }
        ],
        irrigationPlans: [
          { field: 'North Block', waterLiters: '4200', frequency: 'Every 3 days' }
        ],
        weather: [{ label: 'Humidity', value: '58%' }, { label: 'Rainfall', value: '12 mm' }],
        marketPrices: [
          { commodity: 'Tomato', price: '₹2,140/q', market: 'Local Mandi' }
        ],
        harvestPlans: [
          { crop: 'Tomato', date: '2026-10-12', quantity: '8 quintals' }
        ],
        yieldPredictions: [
          { crop: 'Tomato', acreage: '5 acres', prediction: '24 quintals/acre' }
        ],
        expenses: [
          { category: 'Seed', amount: '₹4200', note: 'Hybrid seed purchase' }
        ],
        activities: [
          { activity: 'Irrigation', date: '2026-07-09', status: 'Done' }
        ],
        marketplaceProducts: [
          { name: 'Fresh Tomato', category: 'Vegetables', price: '₹40/kg', stock: '80 kg' }
        ],
        equipmentBookings: [
          { equipment: 'Tractor', date: '2026-07-12', duration: '4 hrs', status: 'Pending' }
        ],
        notifications: [
          { title: 'Weather alert', detail: 'High wind in the evening', read: false }
        ]
      }
    },
    equipment: {
      storageKey: 'agrivisionEquipmentData',
      defaults: {
        equipmentList: [
          { name: 'Tractor XL', category: 'Tillage', price: '₹1800/day', availability: 'Available', image: 'tractor.jpg' },
          { name: 'Sprayer Pro', category: 'Spraying', price: '₹600/day', availability: 'Booked', image: 'sprayer.jpg' }
        ],
        bookings: [
          { customer: 'Asha Devi', equipment: 'Tractor XL', date: '2026-07-11', status: 'Pending' }
        ],
        rentalHistory: [
          { customer: 'Mahesh', equipment: 'Sprayer Pro', date: '2026-07-05', amount: '₹600' }
        ],
        ratings: [
          { customer: 'Anjali', rating: '5/5', comment: 'Reliable and clean equipment' }
        ],
        maintenance: [
          { equipment: 'Tractor XL', dueDate: '2026-08-01', note: 'Engine oil service' }
        ],
        earnings: [
          { label: 'Weekly', value: '₹24,800' },
          { label: 'Monthly', value: '₹96,500' }
        ]
      }
    },
    supplier: {
      storageKey: 'agrivisionSupplierData',
      defaults: {
        seeds: [{ name: 'Hybrid Tomato', category: 'Seeds', stock: '120 packets', price: '₹260' }],
        fertilizers: [{ name: 'NPK 19:19:19', category: 'Fertilizer', stock: '90 bags', price: '₹850' }],
        pesticides: [{ name: 'Neem Spray', category: 'Pesticide', stock: '70 bottles', price: '₹320' }],
        products: [{ name: 'Certified Seeds', category: 'Seeds', price: '₹260', stock: '120' }],
        categories: ['Seeds', 'Fertilizers', 'Pesticides'],
        inventory: [{ name: 'Hybrid Tomato', stock: '120', price: '₹260' }],
        orders: [{ orderId: 'ORD-100', buyer: 'Ravi', status: 'Pending', total: '₹7800' }],
        sales: [{ month: 'June', amount: '₹42,000' }]
      }
    },
    retailer: {
      storageKey: 'agrivisionRetailerData',
      defaults: {
        orders: [{ orderId: 'RET-01', buyer: 'Mohan', status: 'Delivered', total: '₹12,400' }],
        cart: [],
        suppliers: [{ name: 'Green Seeds Co.', category: 'Seeds' }, { name: 'AgriNutrients', category: 'Fertilizer' }]
      }
    },
    consumer: {
      storageKey: 'agrivisionConsumerData',
      defaults: {
        cart: [],
        wishlist: [],
        orders: [{ orderId: 'C-101', status: 'Packed', total: '₹3,400' }],
        reviews: [{ product: 'Fresh Tomato', rating: '4.8', note: 'Excellent quality' }],
        tracking: [{ orderId: 'C-101', eta: 'Tomorrow' }]
      }
    },
    logistics: {
      storageKey: 'agrivisionLogisticsData',
      defaults: {
        bookings: [{ bookingId: 'TR-001', from: 'Karnal', to: 'Delhi', vehicle: 'Truck A', status: 'Assigned' }],
        deliveries: [{ id: 'DL-001', order: 'ORD-100', status: 'In Transit' }],
        vehicles: [{ name: 'Truck A', capacity: '12 tons', status: 'Active' }],
        routes: [{ name: 'Karnal-Delhi', distance: '280 km', eta: '5 hrs' }],
        warehouses: [{ name: 'Warehouse 1', capacity: '800 pallets', status: 'Open' }],
        coldStorage: [{ name: 'Cold Hub 1', status: 'Booked' }],
        tracking: [{ id: 'DL-001', location: 'Panipat', status: 'Moving' }]
      }
    },
    government: {
      storageKey: 'agrivisionGovernmentData',
      defaults: {
        applications: [{ farmer: 'Ramesh Kumar', scheme: 'PM-KISAN', status: 'Pending' }],
        farmers: [{ name: 'Ramesh Kumar', district: 'Karnal', contact: '9876543210' }],
        analytics: [{ label: 'Pending', value: '24' }, { label: 'Approved', value: '96' }]
      }
    },
    research: {
      storageKey: 'agrivisionResearchData',
      defaults: {
        articles: [{ title: 'Drip irrigation impact', author: 'Dr. Sharma', status: 'Published' }],
        innovations: [{ title: 'AI pest sensing', detail: 'Low-cost camera-based detection' }],
        updates: [{ title: 'Weather alert models', detail: 'Improved forecasts for Punjab' }],
        feedback: [{ farmer: 'Ramesh', note: 'Useful crop planning tips' }],
        challenges: [{ title: 'Cost-sensitive irrigation', detail: 'Targeting smallholder farms' }]
      }
    }
  };

  function getState() {
    try {
      const stored = localStorage.getItem(roleConfig[role].storageKey);
      if (!stored) {
        localStorage.setItem(roleConfig[role].storageKey, JSON.stringify(roleConfig[role].defaults));
        return JSON.parse(JSON.stringify(roleConfig[role].defaults));
      }
      return JSON.parse(stored);
    } catch (error) {
      return JSON.parse(JSON.stringify(roleConfig[role].defaults));
    }
  }

  function saveState(state) {
    localStorage.setItem(roleConfig[role].storageKey, JSON.stringify(state));
  }

  function getCatalog() {
    try {
      const stored = JSON.parse(localStorage.getItem('agrivisionCatalog') || 'null');
      if (!stored || !stored.length) {
        localStorage.setItem('agrivisionCatalog', JSON.stringify(catalogDefaults));
        return catalogDefaults;
      }
      return stored;
    } catch {
      return catalogDefaults;
    }
  }

  function saveCatalog(items) {
    localStorage.setItem('agrivisionCatalog', JSON.stringify(items));
  }

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem('agrivisionCart') || '[]');
    } catch {
      return [];
    }
  }

  function saveCart(items) {
    localStorage.setItem('agrivisionCart', JSON.stringify(items));
  }

  function getWishlist() {
    try {
      return JSON.parse(localStorage.getItem('agrivisionWishlist') || '[]');
    } catch {
      return [];
    }
  }

  function saveWishlist(items) {
    localStorage.setItem('agrivisionWishlist', JSON.stringify(items));
  }

  function getOrders() {
    try {
      return JSON.parse(localStorage.getItem('agrivisionOrders') || '[]');
    } catch {
      return [];
    }
  }

  function saveOrders(items) {
    localStorage.setItem('agrivisionOrders', JSON.stringify(items));
  }

  function createModal(title, description, content) {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop active';
    backdrop.innerHTML = `
      <div class="modal-panel">
        <div class="modal-header">
          <div>
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
          <button class="icon-btn" type="button" data-close-modal>✕</button>
        </div>
        <div class="modal-body"></div>
      </div>
    `;
    backdrop.querySelector('.modal-body').innerHTML = content;
    backdrop.querySelector('[data-close-modal]').addEventListener('click', () => backdrop.remove());
    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) backdrop.remove();
    });
    return backdrop;
  }

  function addSettingsAndLogout() {
    const topbarActions = document.querySelector('.topbar-actions');
    if (!topbarActions) return;
    if (topbarActions.querySelector('[data-settings-btn]')) return;
    const settingsBtn = document.createElement('button');
    settingsBtn.className = 'icon-btn';
    settingsBtn.type = 'button';
    settingsBtn.dataset.settingsBtn = 'true';
    settingsBtn.textContent = '⚙️';
    settingsBtn.addEventListener('click', () => {
      const settingsContent = `
        <div class="card">
          <h4>Profile & Settings</h4>
          <p>Profile details are stored locally for this session.</p>
          <div class="inline-actions">
            <button class="btn btn-dark" type="button" data-save-profile>Save Settings</button>
            <button class="btn btn-light" type="button" data-close-modal>Cancel</button>
          </div>
        </div>
      `;
      document.body.appendChild(createModal('Settings', 'Manage role preferences', settingsContent));
    });
    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'btn btn-light';
    logoutBtn.type = 'button';
    logoutBtn.textContent = 'Logout';
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('agrivisionCurrentUser');
      localStorage.removeItem('agrivisionSelectedRole');
      window.location.href = 'login.html';
    });
    topbarActions.appendChild(settingsBtn);
    topbarActions.appendChild(logoutBtn);
  }

  function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (!searchInput) return;
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value.toLowerCase();
      document.querySelectorAll('.module-card').forEach((card) => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  function bindNavigationAndButtons() {
    document.querySelectorAll('.sidebar a').forEach((link) => {
      const label = link.textContent.trim().toLowerCase();
      let feature = null;
      if (role === 'farmer') {
        if (label.includes('overview')) feature = 'farmProfile';
        if (label.includes('weather')) feature = 'weather';
        if (label.includes('crop')) feature = 'cropRecommendation';
        if (label.includes('market')) feature = 'marketPrices';
        if (label.includes('scheme')) feature = 'notifications';
      }
      if (role === 'equipment') {
        if (label.includes('overview')) feature = 'addEquipment';
        if (label.includes('add')) feature = 'addEquipment';
        if (label.includes('booking')) feature = 'bookingRequests';
        if (label.includes('availability')) feature = 'availability';
        if (label.includes('earn')) feature = 'earnings';
      }
      if (role === 'supplier') {
        if (label.includes('product')) feature = 'uploadProducts';
        if (label.includes('inventory')) feature = 'inventory';
        if (label.includes('order')) feature = 'orders';
        if (label.includes('analytics')) feature = 'sales';
      }
      if (role === 'retailer') {
        if (label.includes('buy')) feature = 'browseProducts';
        if (label.includes('order')) feature = 'orderHistory';
        if (label.includes('inventory')) feature = 'inventory';
        if (label.includes('payment')) feature = 'payments';
      }
      if (role === 'consumer') {
        if (label.includes('buy')) feature = 'browseProducts';
        if (label.includes('search')) feature = 'searchProducts';
        if (label.includes('cart')) feature = 'cart';
        if (label.includes('order')) feature = 'orders';
      }
      if (role === 'logistics') {
        if (label.includes('booking')) feature = 'transportBooking';
        if (label.includes('driver')) feature = 'vehicleManagement';
        if (label.includes('tracking')) feature = 'tracking';
        if (label.includes('warehouse')) feature = 'warehouseBooking';
      }
      if (role === 'government') {
        if (label.includes('scheme')) feature = 'schemes';
        if (label.includes('application')) feature = 'applications';
        if (label.includes('report')) feature = 'analytics';
        if (label.includes('stat')) feature = 'analytics';
      }
      if (role === 'research') {
        if (label.includes('research')) feature = 'articles';
        if (label.includes('innovation')) feature = 'innovations';
        if (label.includes('feedback')) feature = 'feedback';
        if (label.includes('collaboration')) feature = 'challenges';
      }
      if (feature) {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          openFeature(feature);
        });
      }
    });

    document.querySelectorAll('button.btn').forEach((button) => {
      const label = button.textContent.trim().toLowerCase();
      let feature = null;
      if (role === 'farmer') {
        if (label.includes('crop planner')) feature = 'cropCalendar';
        if (label.includes('view crop')) feature = 'cropRecommendation';
        if (label.includes('check weather')) feature = 'weather';
        if (label.includes('upload')) feature = 'marketplaceProduct';
      }
      if (role === 'equipment') {
        if (label.includes('add new')) feature = 'addEquipment';
      }
      if (role === 'supplier') {
        if (label.includes('agricultural')) feature = 'uploadProducts';
      }
      if (role === 'retailer') {
        if (label.includes('buy products')) feature = 'browseProducts';
      }
      if (role === 'consumer') {
        if (label.includes('buy fresh')) feature = 'browseProducts';
      }
      if (role === 'logistics') {
        if (label.includes('transport')) feature = 'transportBooking';
      }
      if (role === 'government') {
        if (label.includes('scheme')) feature = 'schemes';
      }
      if (role === 'research') {
        if (label.includes('research')) feature = 'articles';
      }
      if (feature) {
        button.addEventListener('click', (event) => {
          event.preventDefault();
          openFeature(feature);
        });
      }
    });
  }

  function decorateCards() {
    const cards = document.querySelectorAll('.dashboard-grid .card, .dashboard-grid .hero-card, .hero-grid .card, .hero-grid .hero-card');
    cards.forEach((card) => {
      card.classList.add('module-card');
      card.style.cursor = 'pointer';
      const feature = resolveFeature(card.innerText);
      if (feature) {
        card.addEventListener('click', () => openFeature(feature));
      }
    });
  }

  function resolveFeature(text) {
    const label = text.toLowerCase();
    if (role === 'farmer') {
      if (label.includes('farm profile')) return 'farmProfile';
      if (label.includes('crop recommendation')) return 'cropRecommendation';
      if (label.includes('disease')) return 'diseaseDetection';
      if (label.includes('pest')) return 'pestDetection';
      if (label.includes('soil health')) return 'soilHealth';
      if (label.includes('fertilizer')) return 'fertilizer';
      if (label.includes('calendar')) return 'cropCalendar';
      if (label.includes('irrigation')) return 'irrigation';
      if (label.includes('weather')) return 'weather';
      if (label.includes('market')) return 'marketPrices';
      if (label.includes('harvest')) return 'harvestPlanner';
      if (label.includes('yield')) return 'yieldPrediction';
      if (label.includes('expense')) return 'expenses';
      if (label.includes('activity')) return 'activityPlanner';
      if (label.includes('product upload')) return 'marketplaceProduct';
      if (label.includes('equipment')) return 'equipmentBooking';
      if (label.includes('notification')) return 'notifications';
    }
    if (role === 'equipment') {
      if (label.includes('add equipment')) return 'addEquipment';
      if (label.includes('manage')) return 'editEquipment';
      if (label.includes('booking')) return 'bookingRequests';
      if (label.includes('availability')) return 'availability';
      if (label.includes('price')) return 'rentalPrice';
      if (label.includes('earnings')) return 'earnings';
      if (label.includes('history')) return 'rentalHistory';
      if (label.includes('rating')) return 'ratings';
      if (label.includes('maintenance')) return 'maintenance';
    }
    if (role === 'supplier') {
      if (label.includes('seeds')) return 'addSeeds';
      if (label.includes('fertilizer')) return 'addFertilizers';
      if (label.includes('pesticide')) return 'addPesticides';
      if (label.includes('product')) return 'uploadProducts';
      if (label.includes('category')) return 'categories';
      if (label.includes('inventory')) return 'inventory';
      if (label.includes('order')) return 'orders';
      if (label.includes('sales')) return 'sales';
    }
    if (role === 'retailer') {
      if (label.includes('buy products')) return 'browseProducts';
      if (label.includes('wholesale')) return 'bulkPurchase';
      if (label.includes('tracking')) return 'orderHistory';
      if (label.includes('supplier')) return 'supplierList';
      if (label.includes('inventory')) return 'inventory';
      if (label.includes('payment')) return 'payments';
    }
    if (role === 'consumer') {
      if (label.includes('buy fresh')) return 'browseProducts';
      if (label.includes('search')) return 'searchProducts';
      if (label.includes('category')) return 'categories';
      if (label.includes('cart')) return 'cart';
      if (label.includes('wishlist')) return 'wishlist';
      if (label.includes('orders')) return 'orders';
      if (label.includes('tracking')) return 'tracking';
      if (label.includes('review')) return 'reviews';
    }
    if (role === 'logistics') {
      if (label.includes('transport')) return 'transportBooking';
      if (label.includes('driver')) return 'vehicleManagement';
      if (label.includes('delivery')) return 'deliveryRequests';
      if (label.includes('warehouse')) return 'warehouseBooking';
      if (label.includes('cold')) return 'coldStorage';
      if (label.includes('route')) return 'routes';
      if (label.includes('completed')) return 'tracking';
    }
    if (role === 'government') {
      if (label.includes('scheme')) return 'schemes';
      if (label.includes('application')) return 'applications';
      if (label.includes('verification')) return 'approval';
      if (label.includes('subsidy')) return 'analytics';
      if (label.includes('report')) return 'analytics';
      if (label.includes('statistics')) return 'analytics';
      if (label.includes('announcement')) return 'announcements';
    }
    if (role === 'research') {
      if (label.includes('research')) return 'articles';
      if (label.includes('innovation')) return 'innovations';
      if (label.includes('feedback')) return 'feedback';
      if (label.includes('disease')) return 'articles';
      if (label.includes('collaboration')) return 'challenges';
    }
    return null;
  }

  function openFeature(feature) {
    const modalContent = role === 'farmer' ? buildFarmerFeature(feature) : role === 'equipment' ? buildEquipmentFeature(feature) : role === 'supplier' ? buildSupplierFeature(feature) : role === 'retailer' ? buildRetailerFeature(feature) : role === 'consumer' ? buildConsumerFeature(feature) : role === 'logistics' ? buildLogisticsFeature(feature) : role === 'government' ? buildGovernmentFeature(feature) : buildResearchFeature(feature);
    document.body.appendChild(createModal(getTitle(feature), getDescription(feature), modalContent));
  }

  function getTitle(feature) {
    const titles = {
      farmProfile: 'Farm Profile',
      cropRecommendation: 'AI Crop Recommendation',
      diseaseDetection: 'Disease Detection',
      pestDetection: 'Pest Detection',
      soilHealth: 'Soil Health Report',
      fertilizer: 'Fertilizer Recommendation',
      cropCalendar: 'Crop Calendar',
      irrigation: 'Smart Irrigation Calculator',
      weather: 'Weather Widget',
      marketPrices: 'Live Market Prices',
      harvestPlanner: 'Harvest Planner',
      yieldPrediction: 'Yield Prediction Calculator',
      expenses: 'Expense Tracker',
      activityPlanner: 'Farm Activity Planner',
      marketplaceProduct: 'Marketplace Product Upload',
      equipmentBooking: 'Equipment Booking',
      notifications: 'Notifications',
      addEquipment: 'Add Equipment',
      editEquipment: 'Edit equipment',
      bookingRequests: 'Booking Requests',
      availability: 'Equipment Availability',
      rentalPrice: 'Rental Price',
      earnings: 'Earnings Dashboard',
      rentalHistory: 'Rental History',
      ratings: 'Customer Ratings',
      maintenance: 'Maintenance Reminder',
      addSeeds: 'Add Seeds',
      addFertilizers: 'Add Fertilizers',
      addPesticides: 'Add Pesticides',
      uploadProducts: 'Upload Products',
      categories: 'Product Categories',
      inventory: 'Inventory Management',
      orders: 'Incoming Orders',
      sales: 'Sales Report',
      browseProducts: 'Browse Products',
      bulkPurchase: 'Bulk Purchase',
      orderHistory: 'Order History',
      supplierList: 'Supplier List',
      searchProducts: 'Search Products',
      categories: 'Categories',
      cart: 'Cart',
      wishlist: 'Wishlist',
      orders: 'Orders',
      tracking: 'Tracking',
      reviews: 'Reviews',
      transportBooking: 'Transport Booking',
      vehicleManagement: 'Vehicle Management',
      deliveryRequests: 'Delivery Requests',
      warehouseBooking: 'Warehouse Booking',
      coldStorage: 'Cold Storage Booking',
      routes: 'Route Details',
      schemes: 'Government Schemes',
      applications: 'Applications',
      approval: 'Approve Applications',
      analytics: 'Analytics',
      announcements: 'Announcements',
      articles: 'Research Articles',
      innovations: 'Farming Innovations',
      feedback: 'Farmer Feedback',
      challenges: 'Innovation Challenges'
    };
    return titles[feature] || 'Module';
  }

  function getDescription(feature) {
    const descriptions = {
      farmProfile: 'Create or update your farm profile and details.',
      cropRecommendation: 'Save AI-driven crop suggestions for your fields.',
      diseaseDetection: 'Track disease observations and recommended remedies.',
      pestDetection: 'Log pests and preventive actions quickly.',
      soilHealth: 'Monitor soil health and nutrient balance.',
      fertilizer: 'Plan a fertilizer schedule based on crop stage.',
      cropCalendar: 'Plan sowing and harvesting activities.',
      irrigation: 'Calculate the right water load for each field.',
      weather: 'View weather context and current farm advisories.',
      marketPrices: 'Track live mandi prices and update entries.',
      harvestPlanner: 'Schedule crop harvest and expected yields.',
      yieldPrediction: 'Estimate yields from area and crop assumptions.',
      expenses: 'Track spending across labor, seed and transport.',
      activityPlanner: 'Plan daily or weekly field activities.',
      marketplaceProduct: 'Upload produce for direct buyer visibility.',
      equipmentBooking: 'Book equipment for your field operations.',
      notifications: 'Keep up with alerts and advisories.'
    };
    return descriptions[feature] || 'Manage this module through the local store.';
  }

  function buildFarmerFeature(feature) {
    const state = getState();
    switch (feature) {
      case 'farmProfile':
        return `
          <form id="farmProfileForm" class="form-grid">
            <div class="field"><label>Farm Name</label><input name="farmName" value="${state.profile.farmName || ''}" required></div>
            <div class="field"><label>Owner Name</label><input name="ownerName" value="${state.profile.ownerName || ''}" required></div>
            <div class="field"><label>Location</label><input name="location" value="${state.profile.location || ''}"></div>
            <div class="field"><label>Farm Size</label><input name="size" value="${state.profile.size || ''}"></div>
            <div class="field"><label>Soil Type</label><input name="soilType" value="${state.profile.soilType || ''}"></div>
            <div class="field"><label>Primary Crop</label><input name="cropType" value="${state.profile.cropType || ''}"></div>
            <div class="field full inline-actions">
              <button class="btn btn-dark" type="submit">Save Profile</button>
              <button class="btn btn-light" type="button" data-close-modal>Cancel</button>
            </div>
          </form>
          <div class="table-wrap">
            <h4>Current Profile</h4>
            <table>
              <tr><th>Farm</th><td>${state.profile.farmName || '—'}</td></tr>
              <tr><th>Owner</th><td>${state.profile.ownerName || '—'}</td></tr>
              <tr><th>Location</th><td>${state.profile.location || '—'}</td></tr>
              <tr><th>Crop</th><td>${state.profile.cropType || '—'}</td></tr>
            </table>
          </div>
        `;
      case 'cropRecommendation':
        return `
          <form id="cropRecommendationForm" class="form-grid">
            <div class="field"><label>Crop Name</label><input name="cropName" required></div>
            <div class="field"><label>Soil Type</label><input name="soilType" required></div>
            <div class="field"><label>Season</label><input name="season" required></div>
            <div class="field"><label>Notes</label><input name="notes"></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Recommendation</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Crop</th><th>Soil</th><th>Season</th><th>Notes</th></tr></thead><tbody>${state.recommendations.map((item) => `<tr><td>${item.cropName}</td><td>${item.soilType}</td><td>${item.season}</td><td>${item.notes}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'diseaseDetection':
        return `
          <form id="diseaseForm" class="form-grid">
            <div class="field"><label>Crop Type</label><input name="cropType" required></div>
            <div class="field"><label>Symptom</label><input name="symptom" required></div>
            <div class="field"><label>Severity</label><select name="severity"><option>Low</option><option>Medium</option><option>High</option></select></div>
            <div class="field"><label>Image</label><input type="file" name="image"></div>
            <div class="field full"><label>Remedy</label><textarea name="remedy"></textarea></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Report</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Crop</th><th>Symptom</th><th>Severity</th><th>Remedy</th></tr></thead><tbody>${state.diseaseReports.map((item) => `<tr><td>${item.cropType}</td><td>${item.symptom}</td><td>${item.severity}</td><td>${item.remedy}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'pestDetection':
        return `
          <form id="pestForm" class="form-grid">
            <div class="field"><label>Crop Type</label><input name="cropType" required></div>
            <div class="field"><label>Symptom</label><input name="symptom" required></div>
            <div class="field"><label>Severity</label><select name="severity"><option>Low</option><option>Medium</option><option>High</option></select></div>
            <div class="field full"><label>Remedy</label><textarea name="remedy"></textarea></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Pest Alert</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Crop</th><th>Symptom</th><th>Severity</th><th>Remedy</th></tr></thead><tbody>${state.pestReports.map((item) => `<tr><td>${item.cropType}</td><td>${item.symptom}</td><td>${item.severity}</td><td>${item.remedy}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'soilHealth':
        return `
          <form id="soilForm" class="form-grid">
            <div class="field"><label>Soil Type</label><input name="soilType" required></div>
            <div class="field"><label>pH</label><input name="ph" required></div>
            <div class="field"><label>Nitrogen</label><input name="nitrogen" required></div>
            <div class="field"><label>Phosphorus</label><input name="phosphorus" required></div>
            <div class="field"><label>Potassium</label><input name="potassium" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Soil Report</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Soil</th><th>pH</th><th>N</th><th>P</th><th>K</th></tr></thead><tbody>${state.soilReports.map((item) => `<tr><td>${item.soilType}</td><td>${item.ph}</td><td>${item.nitrogen}</td><td>${item.phosphorus}</td><td>${item.potassium}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'fertilizer':
        return `
          <form id="fertilizerForm" class="form-grid">
            <div class="field"><label>Crop Type</label><input name="cropType" required></div>
            <div class="field"><label>Stage</label><input name="stage" required></div>
            <div class="field full"><label>Recommendation</label><textarea name="recommendation"></textarea></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Recommendation</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Crop</th><th>Stage</th><th>Recommendation</th></tr></thead><tbody>${state.fertilizerPlans.map((item) => `<tr><td>${item.cropType}</td><td>${item.stage}</td><td>${item.recommendation}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'cropCalendar':
        return `
          <form id="calendarForm" class="form-grid">
            <div class="field"><label>Title</label><input name="title" required></div>
            <div class="field"><label>Date</label><input name="date" type="date" required></div>
            <div class="field"><label>Status</label><select name="status"><option>Planned</option><option>Done</option><option>Delayed</option></select></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Event</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Title</th><th>Date</th><th>Status</th></tr></thead><tbody>${state.calendarEvents.map((item) => `<tr><td>${item.title}</td><td>${item.date}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'irrigation':
        return `
          <form id="irrigationForm" class="form-grid">
            <div class="field"><label>Field</label><input name="field" required></div>
            <div class="field"><label>Water Liters</label><input name="waterLiters" required></div>
            <div class="field"><label>Frequency</label><input name="frequency" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Plan</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Field</th><th>Water</th><th>Frequency</th></tr></thead><tbody>${state.irrigationPlans.map((item) => `<tr><td>${item.field}</td><td>${item.waterLiters}</td><td>${item.frequency}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'weather':
        return `
          <div class="summary-strip">
            ${state.weather.map((item) => `<div class="chip"><strong>${item.label}</strong><div>${item.value}</div></div>`).join('')}
          </div>
          <div class="table-wrap"><table><thead><tr><th>Alert</th><th>Advice</th></tr></thead><tbody><tr><td>Rain expected</td><td>Use covered storage for harvested produce.</td></tr><tr><td>Wind gust</td><td>Secure exposed irrigation pipes.</td></tr></tbody></table></div>
        `;
      case 'marketPrices':
        return `
          <form id="marketForm" class="form-grid">
            <div class="field"><label>Commodity</label><input name="commodity" required></div>
            <div class="field"><label>Price</label><input name="price" required></div>
            <div class="field"><label>Market</label><input name="market" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Price</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Commodity</th><th>Price</th><th>Market</th></tr></thead><tbody>${state.marketPrices.map((item) => `<tr><td>${item.commodity}</td><td>${item.price}</td><td>${item.market}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'harvestPlanner':
        return `
          <form id="harvestForm" class="form-grid">
            <div class="field"><label>Crop</label><input name="crop" required></div>
            <div class="field"><label>Date</label><input name="date" type="date" required></div>
            <div class="field"><label>Quantity</label><input name="quantity" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Plan</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Crop</th><th>Date</th><th>Quantity</th></tr></thead><tbody>${state.harvestPlans.map((item) => `<tr><td>${item.crop}</td><td>${item.date}</td><td>${item.quantity}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'yieldPrediction':
        return `
          <form id="yieldForm" class="form-grid">
            <div class="field"><label>Crop</label><input name="crop" required></div>
            <div class="field"><label>Acreage</label><input name="acreage" required></div>
            <div class="field"><label>Prediction</label><input name="prediction" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Estimate</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Crop</th><th>Acreage</th><th>Prediction</th></tr></thead><tbody>${state.yieldPredictions.map((item) => `<tr><td>${item.crop}</td><td>${item.acreage}</td><td>${item.prediction}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'expenses':
        return `
          <form id="expenseForm" class="form-grid">
            <div class="field"><label>Category</label><input name="category" required></div>
            <div class="field"><label>Amount</label><input name="amount" required></div>
            <div class="field full"><label>Note</label><textarea name="note"></textarea></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Expense</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Category</th><th>Amount</th><th>Note</th></tr></thead><tbody>${state.expenses.map((item) => `<tr><td>${item.category}</td><td>${item.amount}</td><td>${item.note}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'activityPlanner':
        return `
          <form id="activityForm" class="form-grid">
            <div class="field"><label>Activity</label><input name="activity" required></div>
            <div class="field"><label>Date</label><input name="date" type="date" required></div>
            <div class="field"><label>Status</label><select name="status"><option>Planned</option><option>Done</option><option>Pending</option></select></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Save Activity</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Activity</th><th>Date</th><th>Status</th></tr></thead><tbody>${state.activities.map((item) => `<tr><td>${item.activity}</td><td>${item.date}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'marketplaceProduct':
        return `
          <form id="productForm" class="form-grid">
            <div class="field"><label>Product Name</label><input name="name" required></div>
            <div class="field"><label>Category</label><input name="category" required></div>
            <div class="field"><label>Price</label><input name="price" required></div>
            <div class="field"><label>Stock</label><input name="stock" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Upload Product</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Stock</th></tr></thead><tbody>${state.marketplaceProducts.map((item) => `<tr><td>${item.name}</td><td>${item.category}</td><td>${item.price}</td><td>${item.stock}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'equipmentBooking':
        return `
          <form id="bookingForm" class="form-grid">
            <div class="field"><label>Equipment</label><input name="equipment" required></div>
            <div class="field"><label>Date</label><input name="date" type="date" required></div>
            <div class="field"><label>Duration</label><input name="duration" required></div>
            <div class="field"><label>Status</label><select name="status"><option>Pending</option><option>Approved</option></select></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Book Equipment</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Equipment</th><th>Date</th><th>Duration</th><th>Status</th></tr></thead><tbody>${state.equipmentBookings.map((item) => `<tr><td>${item.equipment}</td><td>${item.date}</td><td>${item.duration}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'notifications':
        return `
          <div class="table-wrap"><table><thead><tr><th>Title</th><th>Detail</th><th>Status</th></tr></thead><tbody>${state.notifications.map((item) => `<tr><td>${item.title}</td><td>${item.detail}</td><td>${item.read ? 'Read' : 'New'}</td></tr>`).join('')}</tbody></table></div>
        `;
      default:
        return '<p>No additional details available.</p>';
    }
  }

  function buildEquipmentFeature(feature) {
    const state = getState();
    switch (feature) {
      case 'addEquipment':
        return `
          <form id="equipmentForm" class="form-grid">
            <div class="field"><label>Name</label><input name="name" required></div>
            <div class="field"><label>Category</label><input name="category" required></div>
            <div class="field"><label>Price</label><input name="price" required></div>
            <div class="field"><label>Availability</label><select name="availability"><option>Available</option><option>Booked</option><option>Maintenance</option></select></div>
            <div class="field full"><label>Upload Image</label><input type="file" name="image"></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Add Equipment</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Availability</th></tr></thead><tbody>${state.equipmentList.map((item) => `<tr><td>${item.name}</td><td>${item.category}</td><td>${item.price}</td><td>${item.availability}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'bookingRequests':
        return `
          <div class="table-wrap"><table><thead><tr><th>Customer</th><th>Equipment</th><th>Date</th><th>Status</th><th>Action</th></tr></thead><tbody>${state.bookings.map((item) => `<tr><td>${item.customer}</td><td>${item.equipment}</td><td>${item.date}</td><td>${item.status}</td><td><span class="action-link" data-accept-booking="${item.customer}">Accept</span> / <span class="action-link" data-reject-booking="${item.customer}">Reject</span></td></tr>`).join('')}</tbody></table></div>
        `;
      case 'availability':
        return `
          <div class="table-wrap"><table><thead><tr><th>Equipment</th><th>Status</th><th>Next Slot</th></tr></thead><tbody>${state.equipmentList.map((item) => `<tr><td>${item.name}</td><td>${item.availability}</td><td>${item.availability === 'Available' ? 'Today' : 'Tomorrow'}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'rentalPrice':
        return `
          <div class="table-wrap"><table><thead><tr><th>Equipment</th><th>Rental Price</th></tr></thead><tbody>${state.equipmentList.map((item) => `<tr><td>${item.name}</td><td>${item.price}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'earnings':
        return `
          <div class="summary-strip">${state.earnings.map((item) => `<div class="chip"><strong>${item.label}</strong><div>${item.value}</div></div>`).join('')}</div>
        `;
      case 'rentalHistory':
        return `
          <div class="table-wrap"><table><thead><tr><th>Customer</th><th>Equipment</th><th>Date</th><th>Amount</th></tr></thead><tbody>${state.rentalHistory.map((item) => `<tr><td>${item.customer}</td><td>${item.equipment}</td><td>${item.date}</td><td>${item.amount}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'ratings':
        return `
          <div class="table-wrap"><table><thead><tr><th>Customer</th><th>Rating</th><th>Comment</th></tr></thead><tbody>${state.ratings.map((item) => `<tr><td>${item.customer}</td><td>${item.rating}</td><td>${item.comment}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'maintenance':
        return `
          <div class="table-wrap"><table><thead><tr><th>Equipment</th><th>Due Date</th><th>Note</th></tr></thead><tbody>${state.maintenance.map((item) => `<tr><td>${item.equipment}</td><td>${item.dueDate}</td><td>${item.note}</td></tr>`).join('')}</tbody></table></div>
        `;
      default:
        return '<p>No further details available.</p>';
    }
  }

  function buildSupplierFeature(feature) {
    const state = getState();
    switch (feature) {
      case 'addSeeds':
        return `
          <form id="seedForm" class="form-grid">
            <div class="field"><label>Name</label><input name="name" required></div>
            <div class="field"><label>Stock</label><input name="stock" required></div>
            <div class="field"><label>Price</label><input name="price" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Add Seed</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Name</th><th>Stock</th><th>Price</th></tr></thead><tbody>${state.seeds.map((item) => `<tr><td>${item.name}</td><td>${item.stock}</td><td>${item.price}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'addFertilizers':
        return `
          <form id="fertilizerForm" class="form-grid">
            <div class="field"><label>Name</label><input name="name" required></div>
            <div class="field"><label>Stock</label><input name="stock" required></div>
            <div class="field"><label>Price</label><input name="price" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Add Fertilizer</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Name</th><th>Stock</th><th>Price</th></tr></thead><tbody>${state.fertilizers.map((item) => `<tr><td>${item.name}</td><td>${item.stock}</td><td>${item.price}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'addPesticides':
        return `
          <form id="pesticideForm" class="form-grid">
            <div class="field"><label>Name</label><input name="name" required></div>
            <div class="field"><label>Stock</label><input name="stock" required></div>
            <div class="field"><label>Price</label><input name="price" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Add Pesticide</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Name</th><th>Stock</th><th>Price</th></tr></thead><tbody>${state.pesticides.map((item) => `<tr><td>${item.name}</td><td>${item.stock}</td><td>${item.price}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'uploadProducts':
        return `
          <form id="productUploadForm" class="form-grid">
            <div class="field"><label>Name</label><input name="name" required></div>
            <div class="field"><label>Category</label><input name="category" required></div>
            <div class="field"><label>Price</label><input name="price" required></div>
            <div class="field"><label>Stock</label><input name="stock" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Upload Product</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Name</th><th>Category</th><th>Price</th><th>Stock</th></tr></thead><tbody>${state.products.map((item) => `<tr><td>${item.name}</td><td>${item.category}</td><td>${item.price}</td><td>${item.stock}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'categories':
        return `
          <div class="table-wrap"><table><thead><tr><th>Category</th></tr></thead><tbody>${state.categories.map((item) => `<tr><td>${item}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'inventory':
        return `
          <div class="table-wrap"><table><thead><tr><th>Name</th><th>Stock</th><th>Price</th></tr></thead><tbody>${state.inventory.map((item) => `<tr><td>${item.name}</td><td>${item.stock}</td><td>${item.price}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'orders':
        return `
          <div class="table-wrap"><table><thead><tr><th>Order ID</th><th>Buyer</th><th>Status</th><th>Total</th></tr></thead><tbody>${state.orders.map((item) => `<tr><td>${item.orderId}</td><td>${item.buyer}</td><td>${item.status}</td><td>${item.total}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'sales':
        return `
          <div class="table-wrap"><table><thead><tr><th>Month</th><th>Amount</th></tr></thead><tbody>${state.sales.map((item) => `<tr><td>${item.month}</td><td>${item.amount}</td></tr>`).join('')}</tbody></table></div>
        `;
      default:
        return '<p>No further details available.</p>';
    }
  }

  function buildRetailerFeature(feature) {
    const state = getState();
    const catalog = getCatalog();
    switch (feature) {
      case 'browseProducts':
        return `
          <div class="table-wrap"><table><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Action</th></tr></thead><tbody>${catalog.map((item) => `<tr><td>${item.name}</td><td>${item.category}</td><td>${item.price}</td><td><span class="action-link" data-add-cart="${item.name}">Add to Cart</span></td></tr>`).join('')}</tbody></table></div>
        `;
      case 'bulkPurchase':
        return `
          <form id="bulkPurchaseForm" class="form-grid">
            <div class="field"><label>Product</label><input name="product" required></div>
            <div class="field"><label>Quantity</label><input name="quantity" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Place Bulk Order</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Order ID</th><th>Status</th><th>Total</th></tr></thead><tbody>${state.orders.map((item) => `<tr><td>${item.orderId}</td><td>${item.status}</td><td>${item.total}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'orderHistory':
        return `
          <div class="table-wrap"><table><thead><tr><th>Order ID</th><th>Status</th><th>Total</th></tr></thead><tbody>${state.orders.map((item) => `<tr><td>${item.orderId}</td><td>${item.status}</td><td>${item.total}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'supplierList':
        return `
          <div class="table-wrap"><table><thead><tr><th>Name</th><th>Category</th></tr></thead><tbody>${state.suppliers.map((item) => `<tr><td>${item.name}</td><td>${item.category}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'inventory':
        return `
          <div class="table-wrap"><table><thead><tr><th>Product</th><th>Price</th><th>Stock</th></tr></thead><tbody>${catalog.map((item) => `<tr><td>${item.name}</td><td>${item.price}</td><td>${item.stock}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'payments':
        return `
          <div class="table-wrap"><table><thead><tr><th>Order ID</th><th>Amount</th></tr></thead><tbody>${state.orders.map((item) => `<tr><td>${item.orderId}</td><td>${item.total}</td></tr>`).join('')}</tbody></table></div>
        `;
      default:
        return '<p>No further details available.</p>';
    }
  }

  function buildConsumerFeature(feature) {
    const catalog = getCatalog();
    const cart = getCart();
    const wishlist = getWishlist();
    const orders = getOrders();
    const state = getState();
    switch (feature) {
      case 'browseProducts':
        return `
          <div class="table-wrap"><table><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Action</th></tr></thead><tbody>${catalog.map((item) => `<tr><td>${item.name}</td><td>${item.category}</td><td>${item.price}</td><td><span class="action-link" data-add-cart="${item.name}">Add Cart</span> / <span class="action-link" data-add-wishlist="${item.name}">Wishlist</span></td></tr>`).join('')}</tbody></table></div>
        `;
      case 'searchProducts':
        return `
          <div class="field"><label>Search</label><input id="consumerSearch" placeholder="Type product or category"></div>
          <div class="table-wrap"><table><thead><tr><th>Product</th><th>Category</th><th>Price</th></tr></thead><tbody>${catalog.map((item) => `<tr><td>${item.name}</td><td>${item.category}</td><td>${item.price}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'categories':
        return `
          <div class="table-wrap"><table><thead><tr><th>Category</th></tr></thead><tbody>${[...new Set(catalog.map((item) => item.category))].map((item) => `<tr><td>${item}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'cart':
        return `
          <div class="table-wrap"><table><thead><tr><th>Product</th><th>Price</th><th>Action</th></tr></thead><tbody>${cart.map((item) => `<tr><td>${item.name}</td><td>${item.price}</td><td><span class="action-link" data-remove-cart="${item.name}">Remove</span></td></tr>`).join('')}</tbody></table></div>
          <div class="inline-actions"><button class="btn btn-dark" type="button" data-checkout>Checkout</button></div>
        `;
      case 'wishlist':
        return `
          <div class="table-wrap"><table><thead><tr><th>Product</th><th>Price</th></tr></thead><tbody>${wishlist.map((item) => `<tr><td>${item.name}</td><td>${item.price}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'orders':
        return `
          <div class="table-wrap"><table><thead><tr><th>Order ID</th><th>Status</th><th>Total</th></tr></thead><tbody>${orders.map((item) => `<tr><td>${item.orderId}</td><td>${item.status}</td><td>${item.total}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'tracking':
        return `
          <div class="table-wrap"><table><thead><tr><th>Order ID</th><th>ETA</th></tr></thead><tbody>${state.tracking.map((item) => `<tr><td>${item.orderId}</td><td>${item.eta}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'reviews':
        return `
          <div class="table-wrap"><table><thead><tr><th>Product</th><th>Rating</th><th>Note</th></tr></thead><tbody>${state.reviews.map((item) => `<tr><td>${item.product}</td><td>${item.rating}</td><td>${item.note}</td></tr>`).join('')}</tbody></table></div>
        `;
      default:
        return '<p>No further details available.</p>';
    }
  }

  function buildLogisticsFeature(feature) {
    const state = getState();
    switch (feature) {
      case 'transportBooking':
        return `
          <form id="transportForm" class="form-grid">
            <div class="field"><label>Booking ID</label><input name="bookingId" required></div>
            <div class="field"><label>From</label><input name="from" required></div>
            <div class="field"><label>To</label><input name="to" required></div>
            <div class="field"><label>Vehicle</label><input name="vehicle" required></div>
            <div class="field full inline-actions"><button class="btn btn-dark" type="submit">Book Transport</button></div>
          </form>
          <div class="table-wrap"><table><thead><tr><th>Booking</th><th>From</th><th>To</th><th>Vehicle</th><th>Status</th></tr></thead><tbody>${state.bookings.map((item) => `<tr><td>${item.bookingId}</td><td>${item.from}</td><td>${item.to}</td><td>${item.vehicle}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'vehicleManagement':
        return `
          <div class="table-wrap"><table><thead><tr><th>Vehicle</th><th>Capacity</th><th>Status</th></tr></thead><tbody>${state.vehicles.map((item) => `<tr><td>${item.name}</td><td>${item.capacity}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'deliveryRequests':
        return `
          <div class="table-wrap"><table><thead><tr><th>Delivery</th><th>Order</th><th>Status</th></tr></thead><tbody>${state.deliveries.map((item) => `<tr><td>${item.id}</td><td>${item.order}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'warehouseBooking':
        return `
          <div class="table-wrap"><table><thead><tr><th>Warehouse</th><th>Capacity</th><th>Status</th></tr></thead><tbody>${state.warehouses.map((item) => `<tr><td>${item.name}</td><td>${item.capacity}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'coldStorage':
        return `
          <div class="table-wrap"><table><thead><tr><th>Cold Hub</th><th>Status</th></tr></thead><tbody>${state.coldStorage.map((item) => `<tr><td>${item.name}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'routes':
        return `
          <div class="table-wrap"><table><thead><tr><th>Route</th><th>Distance</th><th>ETA</th></tr></thead><tbody>${state.routes.map((item) => `<tr><td>${item.name}</td><td>${item.distance}</td><td>${item.eta}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'tracking':
        return `
          <div class="table-wrap"><table><thead><tr><th>Delivery</th><th>Location</th><th>Status</th></tr></thead><tbody>${state.tracking.map((item) => `<tr><td>${item.id}</td><td>${item.location}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
        `;
      default:
        return '<p>No further details available.</p>';
    }
  }

  function buildGovernmentFeature(feature) {
    const state = getState();
    switch (feature) {
      case 'schemes':
        return `
          <div class="table-wrap"><table><thead><tr><th>Scheme</th><th>Benefits</th><th>Eligibility</th><th>Action</th></tr></thead><tbody>
            <tr><td>PM-KISAN</td><td>Income support</td><td>Small farmers</td><td><span class="action-link" data-apply-scheme="PM-KISAN">Apply</span></td></tr>
            <tr><td>PMFBY</td><td>Crop insurance</td><td>Farmer with crop loan</td><td><span class="action-link" data-apply-scheme="PMFBY">Apply</span></td></tr>
            <tr><td>PMKSY</td><td>Irrigation support</td><td>Farmers with water needs</td><td><span class="action-link" data-apply-scheme="PMKSY">Apply</span></td></tr>
            <tr><td>Soil Health Card</td><td>Soil testing support</td><td>Farmers with land records</td><td><span class="action-link" data-apply-scheme="Soil Health Card">Apply</span></td></tr>
          </tbody></table></div>
        `;
      case 'applications':
        return `
          <div class="table-wrap"><table><thead><tr><th>Farmer</th><th>Scheme</th><th>Status</th><th>Action</th></tr></thead><tbody>${state.applications.map((item) => `<tr><td>${item.farmer}</td><td>${item.scheme}</td><td>${item.status}</td><td><span class="action-link" data-approve-application="${item.scheme}">Approve</span> / <span class="action-link" data-reject-application="${item.scheme}">Reject</span></td></tr>`).join('')}</tbody></table></div>
        `;
      case 'approval':
        return `
          <div class="table-wrap"><table><thead><tr><th>Farmer</th><th>District</th><th>Contact</th></tr></thead><tbody>${state.farmers.map((item) => `<tr><td>${item.name}</td><td>${item.district}</td><td>${item.contact}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'analytics':
        return `
          <div class="summary-strip">${state.analytics.map((item) => `<div class="chip"><strong>${item.label}</strong><div>${item.value}</div></div>`).join('')}</div>
        `;
      case 'announcements':
        return `
          <div class="table-wrap"><table><thead><tr><th>Announcement</th><th>Detail</th></tr></thead><tbody><tr><td>Subsidy window</td><td>Open for district-level applications.</td></tr></tbody></table></div>
        `;
      default:
        return '<p>No further details available.</p>';
    }
  }

  function buildResearchFeature(feature) {
    const state = getState();
    switch (feature) {
      case 'articles':
        return `
          <div class="table-wrap"><table><thead><tr><th>Title</th><th>Author</th><th>Status</th></tr></thead><tbody>${state.articles.map((item) => `<tr><td>${item.title}</td><td>${item.author}</td><td>${item.status}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'innovations':
        return `
          <div class="table-wrap"><table><thead><tr><th>Title</th><th>Detail</th></tr></thead><tbody>${state.innovations.map((item) => `<tr><td>${item.title}</td><td>${item.detail}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'feedback':
        return `
          <div class="table-wrap"><table><thead><tr><th>Farmer</th><th>Note</th></tr></thead><tbody>${state.feedback.map((item) => `<tr><td>${item.farmer}</td><td>${item.note}</td></tr>`).join('')}</tbody></table></div>
        `;
      case 'challenges':
        return `
          <div class="table-wrap"><table><thead><tr><th>Challenge</th><th>Detail</th></tr></thead><tbody>${state.challenges.map((item) => `<tr><td>${item.title}</td><td>${item.detail}</td></tr>`).join('')}</tbody></table></div>
        `;
      default:
        return '<p>No further details available.</p>';
    }
  }

  function bindFormHandlers(modal, feature) {
    const state = getState();
    const modalBody = modal.querySelector('.modal-body');
    const root = modalBody;

    function refreshAndClose() {
      modal.remove();
      openFeature(feature);
    }

    const form = root.querySelector('form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        if (feature === 'farmProfile') {
          state.profile = { ...state.profile, ...data };
        } else if (feature === 'cropRecommendation') {
          state.recommendations.push(data);
        } else if (feature === 'diseaseDetection') {
          state.diseaseReports.push(data);
        } else if (feature === 'pestDetection') {
          state.pestReports.push(data);
        } else if (feature === 'soilHealth') {
          state.soilReports.push(data);
        } else if (feature === 'fertilizer') {
          state.fertilizerPlans.push(data);
        } else if (feature === 'cropCalendar') {
          state.calendarEvents.push(data);
        } else if (feature === 'irrigation') {
          state.irrigationPlans.push(data);
        } else if (feature === 'marketPrices') {
          state.marketPrices.push(data);
        } else if (feature === 'harvestPlanner') {
          state.harvestPlans.push(data);
        } else if (feature === 'yieldPrediction') {
          state.yieldPredictions.push(data);
        } else if (feature === 'expenses') {
          state.expenses.push(data);
        } else if (feature === 'activityPlanner') {
          state.activities.push(data);
        } else if (feature === 'marketplaceProduct') {
          state.marketplaceProducts.push(data);
          const catalog = getCatalog();
          catalog.push({ name: data.name, category: data.category, price: data.price, stock: data.stock });
          saveCatalog(catalog);
        } else if (feature === 'equipmentBooking') {
          state.equipmentBookings.push(data);
        } else if (feature === 'addEquipment') {
          state.equipmentList.push(data);
        } else if (feature === 'transportBooking') {
          state.bookings.push(data);
        }
        saveState(state);
        refreshAndClose();
      });
    }

    if (feature === 'bookingRequests') {
      root.querySelectorAll('[data-accept-booking]').forEach((button) => {
        button.addEventListener('click', () => {
          const customer = button.dataset.acceptBooking;
          state.bookings = state.bookings.map((item) => item.customer === customer ? { ...item, status: 'Accepted' } : item);
          saveState(state);
          refreshAndClose();
        });
      });
      root.querySelectorAll('[data-reject-booking]').forEach((button) => {
        button.addEventListener('click', () => {
          const customer = button.dataset.rejectBooking;
          state.bookings = state.bookings.map((item) => item.customer === customer ? { ...item, status: 'Rejected' } : item);
          saveState(state);
          refreshAndClose();
        });
      });
    }

    if (feature === 'schemes') {
      root.querySelectorAll('[data-apply-scheme]').forEach((button) => {
        button.addEventListener('click', () => {
          const scheme = button.dataset.applyScheme;
          state.applications.push({ farmer: 'Ramesh Kumar', scheme, status: 'Pending' });
          saveState(state);
          refreshAndClose();
        });
      });
    }

    if (feature === 'applications') {
      root.querySelectorAll('[data-approve-application]').forEach((button) => {
        button.addEventListener('click', () => {
          const scheme = button.dataset.approveApplication;
          state.applications = state.applications.map((item) => item.scheme === scheme ? { ...item, status: 'Approved' } : item);
          saveState(state);
          refreshAndClose();
        });
      });
      root.querySelectorAll('[data-reject-application]').forEach((button) => {
        button.addEventListener('click', () => {
          const scheme = button.dataset.rejectApplication;
          state.applications = state.applications.map((item) => item.scheme === scheme ? { ...item, status: 'Rejected' } : item);
          saveState(state);
          refreshAndClose();
        });
      });
    }

    if (feature === 'browseProducts' || feature === 'cart' || feature === 'wishlist') {
      root.querySelectorAll('[data-add-cart]').forEach((button) => {
        button.addEventListener('click', () => {
          const catalog = getCatalog();
          const item = catalog.find((entry) => entry.name === button.dataset.addCart);
          if (item) {
            const cart = getCart();
            cart.push(item);
            saveCart(cart);
            refreshAndClose();
          }
        });
      });
      root.querySelectorAll('[data-add-wishlist]').forEach((button) => {
        button.addEventListener('click', () => {
          const catalog = getCatalog();
          const item = catalog.find((entry) => entry.name === button.dataset.addWishlist);
          if (item) {
            const wishlist = getWishlist();
            wishlist.push(item);
            saveWishlist(wishlist);
            refreshAndClose();
          }
        });
      });
      root.querySelectorAll('[data-remove-cart]').forEach((button) => {
        button.addEventListener('click', () => {
          const filtered = getCart().filter((item) => item.name !== button.dataset.removeCart);
          saveCart(filtered);
          refreshAndClose();
        });
      });
      const checkout = root.querySelector('[data-checkout]');
      if (checkout) {
        checkout.addEventListener('click', () => {
          const cart = getCart();
          const orders = getOrders();
          orders.push({ orderId: `ORD-${orders.length + 1}`, status: 'Placed', total: '₹' + (cart.length * 1200) });
          saveOrders(orders);
          saveCart([]);
          refreshAndClose();
        });
      }
    }

    if (feature === 'searchProducts') {
      const search = root.querySelector('#consumerSearch');
      if (search) {
        search.addEventListener('input', (event) => {
          const query = event.target.value.toLowerCase();
          const rows = root.querySelectorAll('tbody tr');
          rows.forEach((row) => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(query) ? '' : 'none';
          });
        });
      }
    }
  }

  function openFeature(feature) {
    const modalContent = role === 'farmer' ? buildFarmerFeature(feature) : role === 'equipment' ? buildEquipmentFeature(feature) : role === 'supplier' ? buildSupplierFeature(feature) : role === 'retailer' ? buildRetailerFeature(feature) : role === 'consumer' ? buildConsumerFeature(feature) : role === 'logistics' ? buildLogisticsFeature(feature) : role === 'government' ? buildGovernmentFeature(feature) : buildResearchFeature(feature);
    const modal = createModal(getTitle(feature), getDescription(feature), modalContent);
    document.body.appendChild(modal);
    bindFormHandlers(modal, feature);
  }

  addSettingsAndLogout();
  setupSearch();
  bindNavigationAndButtons();
  decorateCards();
})();
