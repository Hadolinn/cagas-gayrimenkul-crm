/**
 * Çağdaş Gayrimenkul İnşaat - CRM Application
 * Local Storage based Real Estate CRM
 */

// ============================================
// DATA STORE
// ============================================
const DB_KEYS = {
    PROPERTIES: 'cagas_properties',
    CUSTOMERS: 'cagas_customers',
    SETTINGS: 'cagas_settings'
};

// Default settings
const DEFAULT_SETTINGS = {
    companyName: 'Çağdaş Gayrimenkul İnşaat',
    whatsappNumber: '905001234567',
    companyEmail: 'info@cagasgyi.com'
};

// Sample data for first run
const SAMPLE_PROPERTIES = [
    {
        id: 1,
        title: 'Merkezi Konumlü 3+1 Daire',
        type: 'Daire',
        status: 'Satılık',
        price: 3500000,
        area: 145,
        rooms: '3+1',
        location: 'İstanbul / Kadıköy / Caferağa Mah.',
        ownerName: 'Ahmet Yılmaz',
        phone: '05321234567',
        description: 'Deniz manzaralı, site içinde, 24 saat güvenlikli, otoparklı, asansörlü, geniş mutfaklı, balkonlu, merkezi konumlü 3+1 daire.',
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop'
        ],
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        title: 'Havuzlu Villa - Tek Katlı',
        type: 'Villa',
        status: 'Satılık',
        price: 8500000,
        area: 280,
        rooms: '5+2',
        location: 'İstanbul / Beykostan / Güzeltepe Mah.',
        ownerName: 'Mehmet Demir',
        phone: '05339876543',
        description: 'Havuzlu, bahçeli, 3 katlı, garajlı, şömineli, akıllı ev sistemli, geniş bahçeli, oyun parklı, güvenlikli villa.',
        images: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop'
        ],
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        title: 'Köy İçinde Tarla Arsa',
        type: 'Arsa',
        status: 'Satılık',
        price: 1200000,
        area: 1200,
        rooms: '-',
        location: 'İzmir / Selçuk / Mahmutlar Mah.',
        ownerName: 'Ayşe Kaya',
        phone: '05345551234',
        description: 'Köy içinde, yola cepheli, elektrik ve suyu olan, tarım arazisi, imarlı, konut yapımına uygun arsa.',
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400&h=300&fit=crop'
        ],
        createdAt: new Date().toISOString()
    },
    {
        id: 4,
        title: 'Cadde Üstü Dükkan',
        type: 'İşyeri',
        status: 'Kiralık',
        price: 25000,
        area: 85,
        rooms: '-',
        location: 'Ankara / Çankaya / Kızılay',
        ownerName: 'Fatma Şahin',
        phone: '05356667890',
        description: 'Cadde üstü, vitrinli, kiralık dükkan. Yoğun müşteri potansiyeli, metro durağına yürüme mesafesinde.',
        images: [
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop'
        ],
        createdAt: new Date().toISOString()
    },
    {
        id: 5,
        title: 'Deniz Manzaralı 2+1 Daire',
        type: 'Daire',
        status: 'Kiralık',
        price: 18000,
        area: 95,
        rooms: '2+1',
        location: 'İstanbul / Maltepe / Bağdat Cad.',
        ownerName: 'Ali Çelik',
        phone: '05367778899',
        description: 'Deniz manzaralı, eşyalı, kiralık 2+1 daire. Metrobüs durağına 5 dakika, market ve okullara yakın.',
        images: [
            'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=300&fit=crop'
        ],
        createdAt: new Date().toISOString()
    },
    {
        id: 6,
        title: 'Müstakil Ev - Bahçeli',
        type: 'Müstakil Ev',
        status: 'Satılık',
        price: 5200000,
        area: 220,
        rooms: '4+1',
        location: 'Bursa / Osmangazi / Çekirge Mah.',
        ownerName: 'Hasan Öztürk',
        phone: '05378889900',
        description: 'Müstakil ev, geniş bahçeli, şömineli, 2 katlı, garajlı, bahçe içinde havuzlu, oyun parklı, güvenlikli.',
        images: [
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=300&fit=crop'
        ],
        createdAt: new Date().toISOString()
    }
];

const SAMPLE_CUSTOMERS = [
    {
        id: 1,
        name: 'Ahmet Yılmaz',
        phone: '05321112233',
        email: 'ahmet.yilmaz@email.com',
        interest: 'Satılık Daire',
        notes: 'Kadıköy bölgesinde 3+1 daire arıyor. Bütçe: 3-4 milyon TL.',
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        name: 'Fatma Demir',
        phone: '05334445566',
        email: 'fatma.demir@email.com',
        interest: 'Kiralık Daire',
        notes: 'Maltepe veya çevresinde kiralık 2+1 daire arıyor.',
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        name: 'Mehmet Kaya',
        phone: '05347778899',
        email: 'mehmet.kaya@email.com',
        interest: 'Satılık Villa',
        notes: 'Havuzlu villa arıyor. Bütçe: 8-10 milyon TL.',
        createdAt: new Date().toISOString()
    }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================
function getProperties() {
    const data = localStorage.getItem(DB_KEYS.PROPERTIES);
    return data ? JSON.parse(data) : [];
}

function saveProperties(properties) {
    localStorage.setItem(DB_KEYS.PROPERTIES, JSON.stringify(properties));
}

function getCustomers() {
    const data = localStorage.getItem(DB_KEYS.CUSTOMERS);
    return data ? JSON.parse(data) : [];
}

function saveCustomers(customers) {
    localStorage.setItem(DB_KEYS.CUSTOMERS, JSON.stringify(customers));
}

function getSettings() {
    const data = localStorage.getItem(DB_KEYS.SETTINGS);
    return data ? JSON.parse(data) : DEFAULT_SETTINGS;
}

function saveSettings(settings) {
    localStorage.setItem(DB_KEYS.SETTINGS, JSON.stringify(settings));
}

function generateId() {
    return Date.now() + Math.floor(Math.random() * 1000);
}

function formatPrice(price) {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.className = 'toast' + (isError ? ' error' : '');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function getWhatsAppLink(phone, message = '') {
    const settings = getSettings();
    const cleanPhone = phone.replace(/\D/g, '');
    const defaultMessage = encodeURIComponent(message || `Merhaba, ${settings.companyName} web sitesinden yazıyorum. İlan hakkında bilgi alabilir miyim?`);
    return `https://wa.me/${cleanPhone}?text=${defaultMessage}`;
}

// ============================================
// INITIALIZATION
// ============================================
function initApp() {
    // Initialize data if empty
    if (!localStorage.getItem(DB_KEYS.PROPERTIES)) {
        saveProperties(SAMPLE_PROPERTIES);
    }
    if (!localStorage.getItem(DB_KEYS.CUSTOMERS)) {
        saveCustomers(SAMPLE_CUSTOMERS);
    }
    if (!localStorage.getItem(DB_KEYS.SETTINGS)) {
        saveSettings(DEFAULT_SETTINGS);
    }

    // Load settings into form
    const settings = getSettings();
    document.getElementById('companyName').value = settings.companyName;
    document.getElementById('whatsappNumber').value = settings.whatsappNumber;
    document.getElementById('companyEmail').value = settings.companyEmail;

    // Setup event listeners
    setupEventListeners();

    // Render initial data
    renderDashboard();
    renderPortfolio();
    renderListings();
    renderCustomers();
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Sidebar toggle
    document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            navigateTo(page);
        });
    });

    // Global search
    document.getElementById('globalSearch').addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length >= 3) {
            searchByPhone(query);
        }
    });

    // Portfolio search
    document.getElementById('portfolioSearch').addEventListener('input', (e) => {
        renderPortfolio(e.target.value);
    });

    // Filters
    document.getElementById('filterType').addEventListener('change', () => renderPortfolio());
    document.getElementById('filterStatus').addEventListener('change', () => renderPortfolio());

    // Add property button
    document.getElementById('addNewPropertyBtn').addEventListener('click', () => {
        navigateTo('add-property');
    });

    // Property form
    document.getElementById('propertyForm').addEventListener('submit', handlePropertySubmit);

    // Customer search
    document.getElementById('customerSearch').addEventListener('input', (e) => {
        renderCustomers(e.target.value);
    });

    // Add customer button
    document.getElementById('addCustomerBtn').addEventListener('click', () => {
        showAddCustomerModal();
    });

    // Modal close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('propertyModal').addEventListener('click', (e) => {
        if (e.target.id === 'propertyModal') closeModal();
    });

    // Delete modal
    document.getElementById('deleteModalClose').addEventListener('click', closeDeleteModal);
    document.getElementById('cancelDelete').addEventListener('click', closeDeleteModal);
    document.getElementById('deleteModal').addEventListener('click', (e) => {
        if (e.target.id === 'deleteModal') closeDeleteModal();
    });

    // Settings
    document.getElementById('saveSettingsBtn').addEventListener('click', handleSaveSettings);
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('clearDataBtn').addEventListener('click', clearAllData);
}

// ============================================
// NAVIGATION
// ============================================
function navigateTo(page) {
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.toggle('active', p.id === `page-${page}`);
    });

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }

    // Refresh data for the page
    if (page === 'dashboard') renderDashboard();
    if (page === 'portfolio') renderPortfolio();
    if (page === 'listings') renderListings();
    if (page === 'customers') renderCustomers();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
    } else {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    }
}

// ============================================
// DASHBOARD
// ============================================
function renderDashboard() {
    const properties = getProperties();
    const customers = getCustomers();

    // Stats
    document.getElementById('totalProperties').textContent = properties.length;
    document.getElementById('activeListings').textContent = properties.filter(p => p.status === 'Satılık').length;
    document.getElementById('totalCustomers').textContent = customers.length;

    const avgPrice = properties.length > 0
        ? properties.reduce((sum, p) => sum + p.price, 0) / properties.length
        : 0;
    document.getElementById('avgPrice').textContent = formatPrice(avgPrice);

    // Recent properties
    const recentContainer = document.getElementById('recentProperties');
    const recent = [...properties].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);

    if (recent.length === 0) {
        recentContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-home"></i>
                <h3>Henüz ilan eklenmemiş</h3>
                <p>İlk ilanınızı ekleyerek başlayın.</p>
            </div>
        `;
    } else {
        recentContainer.innerHTML = recent.map(p => createPropertyCard(p)).join('');
    }
}

// ============================================
// PORTFOLIO
// ============================================
function renderPortfolio(searchQuery = '') {
    const properties = getProperties();
    const typeFilter = document.getElementById('filterType').value;
    const statusFilter = document.getElementById('filterStatus').value;

    let filtered = properties;

    // Search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.location.toLowerCase().includes(query) ||
            p.ownerName.toLowerCase().includes(query) ||
            p.phone.includes(query)
        );
    }

    // Type filter
    if (typeFilter) {
        filtered = filtered.filter(p => p.type === typeFilter);
    }

    // Status filter
    if (statusFilter) {
        filtered = filtered.filter(p => p.status === statusFilter);
    }

    const grid = document.getElementById('portfolioGrid');

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>Sonuç bulunamadı</h3>
                <p>Arama kriterlerinize uygun ilan bulunamadı.</p>
            </div>
        `;
    } else {
        grid.innerHTML = filtered.map(p => createPropertyCard(p)).join('');
    }
}

// ============================================
// LISTINGS
// ============================================
function renderListings() {
    const properties = getProperties();
    const grid = document.getElementById('listingsGrid');

    if (properties.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-list"></i>
                <h3>Henüz ilan eklenmemiş</h3>
                <p>İlan eklemek için "İlan Ekle" sayfasını kullanın.</p>
            </div>
        `;
    } else {
        grid.innerHTML = properties.map(p => createPropertyCard(p)).join('');
    }
}

// ============================================
// PROPERTY CARD
// ============================================
function createPropertyCard(property) {
    const imageUrl = property.images && property.images.length > 0
        ? property.images[0]
        : 'https://via.placeholder.com/400x300?text=Resim+Yok';

    const statusClass = property.status === 'Satılık' ? 'satilik' : 'kiralik';

    return `
        <div class="property-card" onclick="showPropertyDetail(${property.id})">
            <div class="property-image">
                <img src="${imageUrl}" alt="${property.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Resim+Yok'">
                <span class="property-badge ${statusClass}">${property.status}</span>
                <span class="property-type-badge">${property.type}</span>
            </div>
            <div class="property-info">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </p>
                <div class="property-details">
                    <span><i class="fas fa-ruler-combined"></i> ${property.area} m²</span>
                    ${property.rooms !== '-' ? `<span><i class="fas fa-door-open"></i> ${property.rooms}</span>` : ''}
                </div>
                <p class="property-price">${formatPrice(property.price)}</p>
                <div class="property-owner">
                    <i class="fas fa-user"></i>
                    <span>${property.ownerName}</span>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// PROPERTY DETAIL MODAL
// ============================================
function showPropertyDetail(id) {
    const properties = getProperties();
    const property = properties.find(p => p.id === id);

    if (!property) return;

    const settings = getSettings();
    const imageUrl = property.images && property.images.length > 0
        ? property.images[0]
        : 'https://via.placeholder.com/400x300?text=Resim+Yok';

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <img src="${imageUrl}" alt="${property.title}" class="detail-image" onerror="this.src='https://via.placeholder.com/400x300?text=Resim+Yok'">
        <div class="detail-grid">
            <div class="detail-item">
                <label>İlan Tipi</label>
                <span>${property.type}</span>
            </div>
            <div class="detail-item">
                <label>Durum</label>
                <span>${property.status}</span>
            </div>
            <div class="detail-item">
                <label>Brüt m²</label>
                <span>${property.area} m²</span>
            </div>
            <div class="detail-item">
                <label>Oda Sayısı</label>
                <span>${property.rooms}</span>
            </div>
            <div class="detail-item">
                <label>Fiyat</label>
                <span style="color: var(--secondary); font-size: 1.2rem;">${formatPrice(property.price)}</span>
            </div>
            <div class="detail-item">
                <label>m² Fiyatı</label>
                <span>${formatPrice(property.price / property.area)}/m²</span>
            </div>
        </div>
        <div class="detail-item" style="margin-bottom: 15px;">
            <label>Bölge</label>
            <span><i class="fas fa-map-marker-alt" style="color: var(--secondary);"></i> ${property.location}</span>
        </div>
        <div class="detail-description">
            <strong>Açıklama:</strong><br>
            ${property.description || 'Açıklama bulunmuyor.'}
        </div>
        <div class="detail-grid">
            <div class="detail-item">
                <label>Ad Soyad</label>
                <span>${property.ownerName}</span>
            </div>
            <div class="detail-item">
                <label>Telefon</label>
                <span>${property.phone}</span>
            </div>
        </div>
    `;

    const modalFooter = document.getElementById('modalFooter');
    modalFooter.innerHTML = `
        <a href="${getWhatsAppLink(property.phone, `Merhaba, "${property.title}" ilanı hakkında bilgi alabilir miyim?`)}" target="_blank" class="btn btn-whatsapp">
            <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="tel:${property.phone}" class="btn btn-success">
            <i class="fas fa-phone"></i> Ara
        </a>
        <button class="btn btn-danger" onclick="confirmDeleteProperty(${property.id})">
            <i class="fas fa-trash"></i> Sil
        </button>
        <button class="btn btn-secondary" onclick="closeModal()">
            <i class="fas fa-times"></i> Kapat
        </button>
    `;

    document.getElementById('propertyModal').classList.add('active');
}

function closeModal() {
    document.getElementById('propertyModal').classList.remove('active');
}

// ============================================
// DELETE PROPERTY
// ============================================
let propertyToDelete = null;

function confirmDeleteProperty(id) {
    propertyToDelete = id;
    document.getElementById('deleteModal').classList.add('active');
}

function closeDeleteModal() {
    document.getElementById('deleteModal').classList.remove('active');
    propertyToDelete = null;
}

document.getElementById('confirmDelete').addEventListener('click', () => {
    if (propertyToDelete) {
        const properties = getProperties();
        const filtered = properties.filter(p => p.id !== propertyToDelete);
        saveProperties(filtered);
        closeDeleteModal();
        closeModal();
        showToast('İlan başarıyla silindi.');
        renderDashboard();
        renderPortfolio();
        renderListings();
    }
});

// ============================================
// PROPERTY FORM
// ============================================
function handlePropertySubmit(e) {
    e.preventDefault();

    const properties = getProperties();

    const newProperty = {
        id: generateId(),
        title: document.getElementById('propTitle').value,
        type: document.getElementById('propType').value,
        status: document.getElementById('propStatus').value,
        price: parseFloat(document.getElementById('propPrice').value),
        area: parseFloat(document.getElementById('propArea').value),
        rooms: document.getElementById('propRooms').value || '-',
        location: document.getElementById('propLocation').value,
        ownerName: document.getElementById('propOwnerName').value,
        phone: document.getElementById('propPhone').value,
        description: document.getElementById('propDescription').value,
        images: [
            document.getElementById('propImage1').value,
            document.getElementById('propImage2').value,
            document.getElementById('propImage3').value
        ].filter(img => img !== ''),
        createdAt: new Date().toISOString()
    };

    properties.push(newProperty);
    saveProperties(properties);

    showToast('İlan başarıyla eklendi!');
    resetForm();
    navigateTo('portfolio');
}

function resetForm() {
    document.getElementById('propertyForm').reset();
}

// ============================================
// CUSTOMERS
// ============================================
function renderCustomers(searchQuery = '') {
    const customers = getCustomers();
    let filtered = customers;

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(c =>
            c.name.toLowerCase().includes(query) ||
            c.phone.includes(query) ||
            c.email.toLowerCase().includes(query) ||
            c.interest.toLowerCase().includes(query)
        );
    }

    const tbody = document.getElementById('customersTableBody');

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px;">
                    <i class="fas fa-users" style="font-size: 2rem; opacity: 0.3; display: block; margin-bottom: 10px;"></i>
                    Müşteri bulunamadı
                </td>
            </tr>
        `;
    } else {
        tbody.innerHTML = filtered.map(c => `
            <tr>
                <td><strong>${c.name}</strong></td>
                <td>${c.phone}</td>
                <td>${c.email || '-'}</td>
                <td>${c.interest || '-'}</td>
                <td>
                    <button class="btn btn-small btn-whatsapp" onclick="window.open('${getWhatsAppLink(c.phone, `Merhaba ${c.name}, ${getSettings().companyName} web sitesinden yazıyorum.')}')">
                        <i class="fab fa-whatsapp"></i>
                    </button>
                    <button class="btn btn-small btn-danger" onclick="deleteCustomer(${c.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }
}

function showAddCustomerModal() {
    const name = prompt('Müşteri Adı Soyadı:');
    if (!name) return;

    const phone = prompt('Telefon Numarası:');
    if (!phone) return;

    const email = prompt('E-posta (opsiyonel):') || '';
    const interest = prompt('İlgi Alanı (opsiyonel):') || '';

    const customers = getCustomers();
    customers.push({
        id: generateId(),
        name,
        phone,
        email,
        interest,
        notes: '',
        createdAt: new Date().toISOString()
    });

    saveCustomers(customers);
    renderCustomers();
    showToast('Müşteri başarıyla eklendi!');
}

function deleteCustomer(id) {
    if (!confirm('Bu müşteriyi silmek istediğinize emin misiniz?')) return;

    const customers = getCustomers();
    const filtered = customers.filter(c => c.id !== id);
    saveCustomers(filtered);
    renderCustomers();
    showToast('Müşteri silindi.');
}

// ============================================
// SEARCH BY PHONE
// ============================================
function searchByPhone(query) {
    const properties = getProperties();
    const results = properties.filter(p => p.phone.includes(query));

    if (results.length > 0) {
        navigateTo('portfolio');
        document.getElementById('portfolioSearch').value = query;
        renderPortfolio(query);
    }
}

// ============================================
// SETTINGS
// ============================================
function handleSaveSettings() {
    const settings = {
        companyName: document.getElementById('companyName').value,
        whatsappNumber: document.getElementById('whatsappNumber').value,
        companyEmail: document.getElementById('companyEmail').value
    };

    saveSettings(settings);
    showToast('Ayarlar başarıyla kaydedildi!');
}

function exportData() {
    const data = {
        properties: getProperties(),
        customers: getCustomers(),
        settings: getSettings(),
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cagas-gyi-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Veriler başarıyla dışa aktarıldı!');
}

function clearAllData() {
    if (!confirm('Tüm veriler silinecek. Bu işlem geri alınamaz! Devam etmek istiyor musunuz?')) return;
    if (!confirm('Emin misiniz? Tüm ilanlar ve müşteriler silinecek!')) return;

    localStorage.removeItem(DB_KEYS.PROPERTIES);
    localStorage.removeItem(DB_KEYS.CUSTOMERS);
    localStorage.removeItem(DB_KEYS.SETTINGS);

    showToast('Tüm veriler silindi.');
    setTimeout(() => {
        initApp();
    }, 1000);
}

// ============================================
// START APP
// ============================================
document.addEventListener('DOMContentLoaded', initApp);
