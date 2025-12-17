// Telegram WebApp initialization
const tg = window.Telegram.WebApp;
tg.expand();



const productsData = {
    cleaning: [
        { id: 1, name: "Жидкое средство для стирки Aroma 3.15 l * 4 шт", category: "cleaning", price: 180000, image:"images/c1.jpg", description: "Жидкое средство для стирки Aroma 3.15l * 4 шт" },
        { id: 2, name: "Кондиционер для белья 1440 ml * 8 шт", category: "cleaning", price: 211000, image: "images/c2.jpg", description: "Кондиционер для белья 1440 ml * 8 шт " },
        { id: 3, name: "Гель густой 1 kg * 12 шт", category: "cleaning", price: 150000, image: "images/c3.jpg", description: "Гель густой 1 kg * 12 шт" },
        { id: 4, name: "Жидкое средство для стирки Kafolat 1 l * 6 шт", category: "cleaning", price: 105600, image: "images/c4.jpg", description: "Жидкое средство для стирки Kafolat 1 l * 6 шт" },
        { id: 5, name: "Антижир Kafolat 500 ml * 12 шт", category: "cleaning", price: 112200, image: "images/c5.jpg", description: "Антижир Kafolat 500 ml * 12 шт" },
        { id: 6, name: "Шампунь Nalan 400 ml * 16 шт", category: "cleaning", price: 105600, image: "images/c6.jpg", description: "Шампунь Nalan 400 ml * 16 шт" },
        { id: 7, name: "Освежитель воздуха 400 mk * 18 шт", category: "cleaning", price: 135000, image: "images/c7.jpg", description: "Освежитель воздуха 400 мл * 18 шт" },
        { id: 8, name: "Средство для мыть стекол 575 ml * 16 шт", category: "cleaning", price: 70400, image: "images/c8.jpg", description: "Средство для мыть стекол 575 ml * 16 шт" },
        { id: 9, name: "Жидкое мыло 500 мл * 8 шт", category: "cleaning", price: 40000, image: "images/c9.jpg", description: "Жидкое мыло 500 мл * 8 шт" },
        { id: 10, name: "Кислородный очиститель 300 g * 12 шт", category: "cleaning", price: 144000, image: "images/c10.jpg", description: "Кислородный очиститель 300 g * 12 шт" }
    ],
    plastic: [
        { id: 11, name: "ПЭТ 750 ml", category: "plastic", price: 10000, image: "images/p1.png", description: "ПЭТ 750 ml" },
        { id: 12, name: "ПЭ Флакон 2 l", category: "plastic", price: 10000, image: "images/p2.png", description: "ПЭ Флакон 2 l" },
        { id: 13, name: "ПЭ Флакон 2 l", category: "plastic", price: 10000, image: "images/p3.png", description: "ПЭ Флакон 2 l" },
        { id: 14, name: "ПЭ Флакон 3 l", category: "plastic", price: 10000, image: "images/p4.png", description: "ПЭ Флакон 3 l" },
        { id: 15, name: "ПЭ Флакон 1.5 l", category: "plastic", price: 10000, image: "images/p5.png", description: "ПЭ Флакон 1.5 l" },
        { id: 16, name: "Дозатор 32 gold", category: "plastic", price: 10000, image: "images/p6.png", description: "Дозатор 32 утка" },
        { id: 17, name: "Дозатор 32 утка", category: "plastic", price: 10000, image: "images/p7.png", description: "Дозатор 32 " },
        { id: 18, name: "Дозатор 32", category: "plastic", price: 10000, image: "images/p8.png", description: "Дозатор 32" },
        { id: 19, name: "Триггер желтый", category: "plastic", price: 10000, image: "images/p9.png", description: "Триггер желтый" },
        { id: 20, name: "Дозатор красный", category: "plastic", price: 10000, image: "images/p10.png", description: "Дозатор красный" }
    ],
    chemicals: [
        { id: 21, name: "SLES 70%", category: "chemicals", price: 20000, image: "https://sc04.alicdn.com/kf/U41de75a3a33d4cae8535c12e9b1799a7u/200L-Plastic-Drum-Blue-HDPE-Chemical-sealed-Oil-Barrel-200-Litre/KG-Blow-Molding-Bucket-Double-Lid-55-Gallon-Plastic-Drum.jpg", description: "Sodium Laureth Sulfate 70% Китай" },
        { id: 22, name: "APG 8-10", category: "chemicals", price: 18000, image: "https://sc04.alicdn.com/kf/U41de75a3a33d4cae8535c12e9b1799a7u/200L-Plastic-Drum-Blue-HDPE-Chemical-sealed-Oil-Barrel-200-Litre/KG-Blow-Molding-Bucket-Double-Lid-55-Gallon-Plastic-Drum.jpg", description: "APG 8-10 Китай" },
        { id: 23, name: "Cetyl alcohol", category: "chemicals", price: 30000, image: "https://sc04.alicdn.com/kf/U41de75a3a33d4cae8535c12e9b1799a7u/200L-Plastic-Drum-Blue-HDPE-Chemical-sealed-Oil-Barrel-200-Litre/KG-Blow-Molding-Bucket-Double-Lid-55-Gallon-Plastic-Drum.jpg", description: "Cetyl alcohol Малайзия" },
        { id: 24, name: "Methyl Ester Sulfonate (MES)", category: "chemicals", price: 25000, image: "https://sc04.alicdn.com/kf/U41de75a3a33d4cae8535c12e9b1799a7u/200L-Plastic-Drum-Blue-HDPE-Chemical-sealed-Oil-Barrel-200-Litre/KG-Blow-Molding-Bucket-Double-Lid-55-Gallon-Plastic-Drum.jpg", description: "Methyl Ester Sulfonate (MES)" },
        { id: 25, name: "Cocamidopropyl aminoxide", category: "chemicals", price: 22000, image: "https://sc04.alicdn.com/kf/U41de75a3a33d4cae8535c12e9b1799a7u/200L-Plastic-Drum-Blue-HDPE-Chemical-sealed-Oil-Barrel-200-Litre/KG-Blow-Molding-Bucket-Double-Lid-55-Gallon-Plastic-Drum.jpg", description: "Cocamidopropyl aminoxide" },
        { id: 26, name: "LABSA (Линейная алкилбензолсульфокислота)", category: "chemicals", price: 15000, image: "https://sc04.alicdn.com/kf/U41de75a3a33d4cae8535c12e9b1799a7u/200L-Plastic-Drum-Blue-HDPE-Chemical-sealed-Oil-Barrel-200-Litre/KG-Blow-Molding-Bucket-Double-Lid-55-Gallon-Plastic-Drum.jpg", description: "LABSA (Линейная алкилбензолсульфокислота)" },
        { id: 27, name: "Изопропиловый спирт", category: "chemicals", price: 28000, image: "https://sc04.alicdn.com/kf/U41de75a3a33d4cae8535c12e9b1799a7u/200L-Plastic-Drum-Blue-HDPE-Chemical-sealed-Oil-Barrel-200-Litre/KG-Blow-Molding-Bucket-Double-Lid-55-Gallon-Plastic-Drum.jpg", description: "Технический спирт" },
        { id: 28, name: "Неонол", category: "chemicals", price: 12000, image: "https://sc04.alicdn.com/kf/U41de75a3a33d4cae8535c12e9b1799a7u/200L-Plastic-Drum-Blue-HDPE-Chemical-sealed-Oil-Barrel-200-Litre/KG-Blow-Molding-Bucket-Double-Lid-55-Gallon-Plastic-Drum.jpg", description: "Неонол" },
        { id: 29, name: "CMEA", category: "chemicals", price: 18000, image: "https://sc04.alicdn.com/kf/U41de75a3a33d4cae8535c12e9b1799a7u/200L-Plastic-Drum-Blue-HDPE-Chemical-sealed-Oil-Barrel-200-Litre/KG-Blow-Molding-Bucket-Double-Lid-55-Gallon-Plastic-Drum.jpg", description: "CMEA" },
        { id: 30, name: "AOS", category: "chemicals", price: 20000, image: "https://sc04.alicdn.com/kf/U41de75a3a33d4cae8535c12e9b1799a7u/200L-Plastic-Drum-Blue-HDPE-Chemical-sealed-Oil-Barrel-200-Litre/KG-Blow-Molding-Bucket-Double-Lid-55-Gallon-Plastic-Drum.jpg", description: "AOS" }
    ],
    fragrances: [
        { id: 31, name: "Отдушка Лаванда", category: "fragrances", price: 35000, image: "https://raw.githubusercontent.com/AsadbekKasimov/order/main/images/fs.png", description: "Натуральная отдушка лаванды" },
        { id: 32, name: "Отдушка Цитрус", category: "fragrances", price: 32000, image: "https://raw.githubusercontent.com/AsadbekKasimov/order/main/images/fs.png", description: "Свежий цитрусовый аромат" },
        { id: 33, name: "Отдушка Роза", category: "fragrances", price: 38000, image: "https://raw.githubusercontent.com/AsadbekKasimov/order/main/images/fs.png", description: "Нежный аромат розы" },
        { id: 34, name: "Отдушка Морской бриз", category: "fragrances", price: 34000, image: "https://raw.githubusercontent.com/AsadbekKasimov/order/main/images/fs.png", description: "Свежий морской аромат" },
        { id: 35, name: "Отдушка Ваниль", category: "fragrances", price: 36000, image: "https://raw.githubusercontent.com/AsadbekKasimov/order/main/images/fs.png", description: "Сладкий ванильный аромат" },
        { id: 36, name: "Отдушка Яблоко", category: "fragrances", price: 30000, image: "https://raw.githubusercontent.com/AsadbekKasimov/order/main/images/fs.png", description: "Свежий яблочный аромат" },
        { id: 37, name: "Отдушка Кокос", category: "fragrances", price: 37000, image: "https://raw.githubusercontent.com/AsadbekKasimov/order/main/images/fs.png", description: "Экзотический кокосовый аромат" },
        { id: 38, name: "Отдушка Жасмин", category: "fragrances", price: 39000, image: "https://raw.githubusercontent.com/AsadbekKasimov/order/main/images/fs.png", description: "Изысканный аромат жасмина" },
        { id: 39, name: "Отдушка Мята", category: "fragrances", price: 31000, image: "https://raw.githubusercontent.com/AsadbekKasimov/order/main/images/fs.png", description: "Освежающий мятный аромат" },
        { id: 40, name: "Отдушка Сандал", category: "fragrances", price: 40000, image: "https://raw.githubusercontent.com/AsadbekKasimov/order/main/images/fs.png", description: "Древесный аромат сандала" }
    ]
};

// Flatten all products for easier access
const allProducts = [...productsData.cleaning, ...productsData.plastic, ...productsData.chemicals, ...productsData.fragrances];

// State Management
let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentProduct = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupEventListeners();
    updateCartBadge();
    loadUserProfile();
});

// Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            switchPage(page);
        });
    });

    // Category Buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadProducts();
        });
    });

    // Search
    document.getElementById('search-input').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filterProducts(query);
    });

    // Modal
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('product-modal').addEventListener('click', (e) => {
        if (e.target.id === 'product-modal') closeModal();
    });

    // Quantity Controls
    document.getElementById('qty-minus').addEventListener('click', () => {
        const input = document.getElementById('qty-input');
        if (input.value > 1) input.value = parseInt(input.value) - 1;
    });

    document.getElementById('qty-plus').addEventListener('click', () => {
        const input = document.getElementById('qty-input');
        input.value = parseInt(input.value) + 1;
    });

    // Add to Cart from Modal
    document.getElementById('modal-add-to-cart').addEventListener('click', addToCartFromModal);

    // Checkout
    document.getElementById('checkout-btn').addEventListener('click', checkout);
}

// Page Switching
function switchPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(`${page}-page`).classList.add('active');
    document.querySelector(`[data-page="${page}"]`).classList.add('active');

    if (page === 'favorites') {
        loadFavorites();
    } else if (page === 'cart') {
        loadCart();
    } else if (page === 'profile') {
        loadUserProfile();
        loadUserOrders();
    }
}

// Products
function loadProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    let products = currentCategory === 'all' ? allProducts : productsData[currentCategory];

    products.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const isFavorite = favorites.includes(product.id);
    
    card.innerHTML = `
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${product.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        </button>
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${formatPrice(product.price)}</div>
        <button class="product-add-btn" data-id="${product.id}">В корзину</button>
    `;

    // Клик на карточку (кроме кнопок)
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.favorite-btn') && !e.target.closest('.product-add-btn')) {
            openProductModal(product);
        }
    });

    // Избранное
    card.querySelector('.favorite-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(product.id);
    });

    // Добавить в корзину
    card.querySelector('.product-add-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product, 1);
        
        // Анимация кнопки
        const btn = e.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Добавлено';
        btn.style.background = '#4CD964';
        btn.style.color = 'white';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
        }, 1000);
    });

    return card;
}

function filterProducts(query) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    let products = currentCategory === 'all' ? allProducts : productsData[currentCategory];
    
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="empty-state"><p>Товары не найдены</p></div>';
        return;
    }

    filtered.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Modal
function openProductModal(product) {
    currentProduct = product;
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-image').alt = product.name;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-price').textContent = formatPrice(product.price);
    document.getElementById('qty-input').value = 1;
    document.getElementById('product-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('product-modal').classList.add('hidden');
    currentProduct = null;
}

function addToCartFromModal() {
    if (!currentProduct) return;

    const qty = parseInt(document.getElementById('qty-input').value);
    addToCart(currentProduct, qty);
    closeModal();
    
    // Show feedback
    tg.showAlert(`${currentProduct.name} добавлен в корзину`);
}

// Cart
function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    saveCart();
    updateCartBadge();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    loadCart();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            loadCart();
        }
    }
}

function loadCart() {
    const container = document.getElementById('cart-items');
    const summary = document.getElementById('cart-summary');
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Ваша корзина пуста</p></div>';
        summary.classList.add('hidden');
        return;
    }
    
    container.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemEl = createCartItem(item);
        container.appendChild(itemEl);
        total += item.price * item.quantity;
    });
    
    document.getElementById('cart-total-amount').textContent = formatPrice(total);
    summary.classList.remove('hidden');
}

function createCartItem(item) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${formatPrice(item.price)} × ${item.quantity}</div>
            <div class="cart-item-controls">
                <button class="cart-qty-btn" data-id="${item.id}" data-action="minus">-</button>
                <span class="cart-qty">${item.quantity}</span>
                <button class="cart-qty-btn" data-id="${item.id}" data-action="plus">+</button>
                <button class="cart-item-remove" data-id="${item.id}">Удалить</button>
            </div>
        </div>
    `;
    
    div.querySelectorAll('.cart-qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const action = btn.dataset.action;
            const currentItem = cart.find(i => i.id === id);
            if (currentItem) {
                const newQty = action === 'plus' ? currentItem.quantity + 1 : currentItem.quantity - 1;
                updateCartQuantity(id, newQty);
            }
        });
    });
    
    div.querySelector('.cart-item-remove').addEventListener('click', () => {
        const id = parseInt(div.querySelector('.cart-item-remove').dataset.id);
        removeFromCart(id);
    });
    
    return div;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

// Favorites
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }
    
    saveFavorites();
    
    // Update UI
    if (document.getElementById('catalog-page').classList.contains('active')) {
        loadProducts();
    } else if (document.getElementById('favorites-page').classList.contains('active')) {
        loadFavorites();
    }
}

function loadFavorites() {
    const grid = document.getElementById('favorites-grid');
    
    if (favorites.length === 0) {
        grid.innerHTML = '<div class="empty-state"><p>У вас пока нет избранных товаров</p></div>';
        return;
    }
    
    grid.innerHTML = '';
    
    favorites.forEach(id => {
        const product = allProducts.find(p => p.id === id);
        if (product) {
            const card = createProductCard(product);
            grid.appendChild(card);
        }
    });
}

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Profile
function loadUserProfile() {
    const user = tg.initDataUnsafe?.user;
    
    if (user) {
        document.getElementById('user-name').textContent = user.first_name + (user.last_name ? ' ' + user.last_name : '');
        document.getElementById('user-phone').textContent = user.username ? '@' + user.username : 'Не указан';
        document.getElementById('user-city').textContent = 'Ташкент'; // Default or from backend
    } else {
        document.getElementById('user-name').textContent = 'Гость';
        document.getElementById('user-phone').textContent = 'Не указан';
        document.getElementById('user-city').textContent = 'Не указан';
    }
}

function loadUserOrders() {
    const ordersList = document.getElementById('orders-list');
    
    // Mock orders - в реальности данные будут приходить с бэкенда
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="empty-state">У вас пока нет заказов</p>';
        return;
    }
    
    ordersList.innerHTML = '';
    
    orders.forEach(order => {
        const orderEl = document.createElement('div');
        orderEl.className = 'order-item';
        orderEl.innerHTML = `
            <div class="order-id">Заказ #${order.id}</div>
            <div class="order-date">${order.date} • ${formatPrice(order.total)}</div>
        `;
        ordersList.appendChild(orderEl);
    });
}

// Checkout
function checkout() {
    if (cart.length === 0) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Prepare order data
    const orderData = {
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total: total,
        user_id: tg.initDataUnsafe?.user?.id || 0
    };
    
    // Send data back to bot
    tg.sendData(JSON.stringify(orderData));
    
    // Save order to localStorage for history
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.unshift({
        id: Date.now(),
        date: new Date().toLocaleDateString('ru-RU'),
        total: total,
        items: cart.length
    });
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartBadge();
    
    tg.close();
}

// Utils
function formatPrice(price) {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' сум';
}
