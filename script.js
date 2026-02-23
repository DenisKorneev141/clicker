// ==========================================
// 1. НАСТРОЙКИ (КОНФИГ)
// ==========================================
const RANKS = [
    { name: "Стажёр", roomsNeeded: 0, bonus: "Начало пути", lootboxes: ['common'] },
    { name: "Продавец", roomsNeeded: 2, bonus: "База баз", lootboxes: ['common', 'common', 'common'] },
    { name: "Кассир", roomsNeeded: 3, bonus: "Ходить в туалет по расписанию", lootboxes: ['common', 'rare', 'rare'] },
    { name: "Приёмщица", roomsNeeded: 5, bonus: "Теперь у тебя будет твой личный ТСД", lootboxes: ['rare', 'rare', 'rare'] },
    { name: "Зав. ООРТ", roomsNeeded: 6, bonus: "Власть над овощным и не только", lootboxes: ['rare', 'rare', 'epic', 'legendary'] },
    { name: "Директор", roomsNeeded: 7, bonus: "Давайте завтра теперь будет звучать от тебя", lootboxes: ['epic', 'mythic'] },
    { name: "Кустовая", roomsNeeded: 10, bonus: "Ну не мечта ли?", lootboxes: ['mythic', 'mythic', 'mythic','legendary'] },
    { name: "Владелец Санта Ритейл", roomsNeeded: 13, bonus: "Власть над миром", lootboxes: ['mythic','mythic','mythic', 'mythic','legendary','legendary', 'legendary','legendary'] }
];

const LOCATIONS = [
    { id: 'hall', name: 'Торговый зал', price: 0, income: 1, lootboxes: [] },
    { id: 'sklad', name: 'Склад напитков', price: 15000, income: 15, lootboxes: ['common'] },
    { id: 'kond', name: 'Кондитерка', price: 70000, income: 25, lootboxes: ['common'] },
    { id: 'pek', name: 'Пекарня', price: 150000, income: 50, lootboxes: ['rare'] },
    { id: 'oxr', name: 'Кабинет охраны', price: 300000, income: 60, lootboxes: ['rare'] },
    { id: 'xleb', name: 'Хлебная камера', price: 600000, income: 80, lootboxes: ['epic', 'mythic'] },
    { id: 'kab', name: 'Кабинетик', price: 1600000, income: 130, lootboxes: ['epic'] },
    { id: 'pri', name: 'Приёмка', price: 5200000, income: 180, lootboxes: ['epic'] },
    { id: 'ovo', name: 'Овощная камера', price: 15000000, income: 220, lootboxes: ['mythic'] },
    { id: 'tual', name: 'Туалет', price: 20000000, income: 250, lootboxes: ['mythic'] },
    { id: 'fas', name: 'Фасовка', price: 50000000, income: 500, lootboxes: ['epic', 'epic'] },
    { id: 'stol', name: 'Столовая', price: 100000000, income: 800, lootboxes: ['legendary'] },
    { id: 'kabinet', name: 'Кабинет Светланы', price: 500000000, income: 1000, lootboxes: ['legendary', 'mythic'] }
];

const BOOSTS = [
    { id: 'gloves', name: 'Перчатки', basePrice: 250, effect: 2, type: 'click', scales: true },
    { id: 'rohlya', name: 'Рохля', basePrice: 500, effect: 5, type: 'click', scales: true },
    { id: 'baikal', name: 'Выпить энергетик Байкал', basePrice: 1000, effect: 10, type: 'click', scales: true },
    { id: 'track', name: 'Послушать трек про позу вертолет', basePrice: 10000, effect: 25, type: 'click', scales: true },
    { id: 'bot', name: 'Помощь грузчика Жени', basePrice: 1000, effect: 10, type: 'auto', scales: true },
    { id: 'zoya', name: 'Махинации Зои', basePrice: 1800, effect: 20, type: 'auto', scales: true },
    { id: 'ochki', name: 'Надеть розовые очки', basePrice: 5000, effect: 30, type: 'auto', scales: true },
    { id: 'svetl', name: 'Заставить Светлану выставлять товар самой', basePrice: 20000, effect: 150, type: 'auto', scales: true },
    { id: 'wipe', name: 'Проснуться после комы (Удалить прогресс)', basePrice: 0, effect: 0, type: 'wipe', scales: false }
];

// ==========================================
// 2. КОНФИГУРАЦИЯ ЛУТБОКСОВ
// ==========================================
const ITEM_TYPES = {
    MONEY: 'money',
    CLICK: 'click',
    PASSIVE: 'passive',
    STAR: 'star',
    EMPLOYEE: 'employee',
    TEMP_BOOST: 'temp_boost' // Новый тип - временное усиление
};

// Временные усиления
const TEMP_BOOSTS = {
    // Усиление клика
    click_x2: { name: 'x2 Клик', icon: '⚡⚡', duration: 60, multiplier: 2, type: 'click', rarity: 'common' },
    click_x3: { name: 'x3 Клик', icon: '⚡⚡⚡', duration: 30, multiplier: 3, type: 'click', rarity: 'rare' },
    click_x5: { name: 'x5 Клик', icon: '💫⚡', duration: 15, multiplier: 5, type: 'click', rarity: 'rare' },
    click_x10: { name: 'x10 Клик', icon: '✨⚡', duration: 10, multiplier: 10, type: 'click', rarity: 'mythic' },
    click_x20: { name: 'x20 Клик', icon: '🌟⚡', duration: 10, multiplier: 20, type: 'click', rarity: 'legendary' },
    
    // Усиление пассива
    passive_x2: { name: 'x2 Пассив', icon: '🏭🏭', duration: 60, multiplier: 2, type: 'passive', rarity: 'common' },
    passive_x3: { name: 'x3 Пассив', icon: '🏭🏭🏭', duration: 30, multiplier: 3, type: 'passive', rarity: 'rare' },
    passive_x5: { name: 'x5 Пассив', icon: '💫🏭', duration: 20, multiplier: 5, type: 'passive', rarity: 'mythic' },
    passive_x10: { name: 'x10 Пассив', icon: '✨🏭', duration: 15, multiplier: 10, type: 'passive', rarity: 'mythic' },
    passive_x20: { name: 'x15 Пассив', icon: '🌟🏭', duration: 10, multiplier: 20, type: 'passive', rarity: 'legendary' },
    
    // Усиление звезд
    star_x2: { name: 'x2 Звезды', icon: '⭐⭐', duration: 45, multiplier: 2, type: 'star', rarity: 'common' },
    star_x3: { name: 'x3 Звезды', icon: '⭐⭐⭐', duration: 30, multiplier: 3, type: 'star', rarity: 'mythic' },
    star_x5: { name: 'x5 Звезды', icon: '💫⭐', duration: 20, multiplier: 5, type: 'star', rarity: 'mythic' },
    
    // Комбо усиления
    all_x2: { name: 'x2 Всё', icon: '🌟✨', duration: 30, multiplier: 2, type: 'all', rarity: 'mythic' },
    all_x3: { name: 'x3 Всё', icon: '🌟🌟', duration: 20, multiplier: 3, type: 'all', rarity: 'mythic' },
    all_x5: { name: 'x5 Всё', icon: '🌟🌟🌟', duration: 10, multiplier: 5, type: 'all', rarity: 'legendary' }
};

const LOOT_ITEMS = {
    money_small: { type: ITEM_TYPES.MONEY, name: 'Пачка денег', value: 500, icon: '💵', rarity: 'common' },
    money_medium: { type: ITEM_TYPES.MONEY, name: 'Договор подряда', value: 2000, icon: '💰', rarity: 'rare' },
    money_big: { type: ITEM_TYPES.MONEY, name: 'Мешок денег', value: 5000, icon: '🪙', rarity: 'epic' },
    money_huge: { type: ITEM_TYPES.MONEY, name: 'Сейф', value: 15000, icon: '🔒', rarity: 'mythic' },
    money_mega: { type: ITEM_TYPES.MONEY, name: 'Инкассаторская машина', value: 55000, icon: '🚚', rarity: 'legendary' },
    
    click_small: { type: ITEM_TYPES.CLICK, name: 'Полиэтиленовые перчатки', value: 2, icon: '🧤', rarity: 'rare' },
    click_medium: { type: ITEM_TYPES.CLICK, name: 'Многоразовые перчатки', value: 5, icon: '🥊', rarity: 'rare' },
    click_big: { type: ITEM_TYPES.CLICK, name: 'Усиленная перчатка', value: 15, icon: '⚡', rarity: 'epic' },
    click_huge: { type: ITEM_TYPES.CLICK, name: 'Протез', value: 40, icon: '🦾', rarity: 'mythic' },
    click_mega: { type: ITEM_TYPES.CLICK, name: 'Кибер-имплант', value: 100, icon: '🤖', rarity: 'legendary' },
    
    passive_small: { type: ITEM_TYPES.PASSIVE, name: 'Складской стеллаж', value: 1, icon: '📦', rarity: 'rare' },
    passive_medium: { type: ITEM_TYPES.PASSIVE, name: 'Овощная камера', value: 3, icon: '❄️', rarity: 'rare' },
    passive_big: { type: ITEM_TYPES.PASSIVE, name: 'Автоматизация склада', value: 8, icon: '⚙️', rarity: 'epic' },
    passive_huge: { type: ITEM_TYPES.PASSIVE, name: 'Логистический центр', value: 20, icon: '🏭', rarity: 'mythic' },
    passive_mega: { type: ITEM_TYPES.PASSIVE, name: 'Склад СОФ', value: 50, icon: '🌐', rarity: 'legendary' },
    
    star_small: { type: ITEM_TYPES.STAR, name: 'Маленькая звезда', value: 1, icon: '⭐', rarity: 'rare' },
    star_medium: { type: ITEM_TYPES.STAR, name: 'Звездная пыль', value: 3, icon: '✨', rarity: 'epic' },
    star_big: { type: ITEM_TYPES.STAR, name: 'Золотой дождь', value: 7, icon: '🌠', rarity: 'mythic' },
    star_mega: { type: ITEM_TYPES.STAR, name: 'Галактика', value: 15, icon: '🌌', rarity: 'legendary' }
};

const EMPLOYEES = [
    { id: 'petia', name: 'Грузчик Андрей', rarity: 'common', bonusType: 'passive', bonusValue: 10, icon: '👨‍🌾', desc: '+10 к пассиву' },
    { id: 'jenia', name: 'Грузчик Женя', rarity: 'common', bonusType: 'passive', bonusValue: 10, icon: '👨‍🔧', desc: '+10 к пассиву' },
    { id: 'masha', name: 'Кассир Сороока', rarity: 'common', bonusType: 'click', bonusValue: 10, icon: '👩‍💼', desc: '+10 к клику' },
    { id: 'lena', name: 'Кассир Марина', rarity: 'common', bonusType: 'click', bonusValue: 15, icon: '👩‍🦰', desc: '+15 к клику' },
    { id: 'zina', name: 'Уборщица 1', rarity: 'common', bonusType: 'starChance', bonusValue: 5, icon: '👵', desc: '+5% шанс звезды' },
    { id: 'klava', name: 'Уборщица 2', rarity: 'common', bonusType: 'starChance', bonusValue: 5, icon: '👩‍🦳', desc: '+5% шанс звезды' },
    { id: 'igor', name: 'Дикий Торец', rarity: 'common', bonusType: 'passive', bonusValue: 10, icon: '👨‍🦱', desc: '+10 к пассиву' },
    { id: 'sveta', name: 'ФакЮподружка', rarity: 'common', bonusType: 'passive', bonusValue: 10, icon: '👩‍🦱', desc: '+10 к пассиву' },
    { id: 'tolya', name: 'Охранник Виталик', rarity: 'common', bonusType: 'offline', bonusValue: 10, icon: '👨‍✈️', desc: '+10 к офлайну' },
    { id: 'vova', name: 'Охранник Серёга', rarity: 'common', bonusType: 'offline', bonusValue: 10, icon: '👮', desc: '+10 к офлайну' },
    
    { id: 'senior_cash', name: 'Старший кассир', rarity: 'rare', bonusType: 'click', bonusValue: 20, icon: '👩‍💼✨', desc: '+20 к клику' },
    { id: 'storekeeper', name: 'Змушка', rarity: 'rare', bonusType: 'passive', bonusValue: 30, icon: '👨‍💼📦', desc: '+30 к пассиву' },
    { id: 'oleg_admin', name: 'Зоя', rarity: 'rare', bonusType: 'starBonus', bonusValue: 10, icon: '👨‍💻', desc: '+10% к звездам' },
    { id: 'irina', name: 'Анжела', rarity: 'rare', bonusType: 'offline', bonusValue: 20, icon: '👩‍🔬', desc: '+20 к офлайну' },
    { id: 'record_man', name: 'Поставщик', rarity: 'rare', bonusType: 'passive', bonusValue: 20, icon: '💪👨', desc: '+20 к пассиву' },
    
    { id: 'deputy', name: 'Федосова', rarity: 'epic', bonusType: 'all', bonusValue: 25, icon: '👩‍💼👑', desc: '+25 ко всему' },
    { id: 'supervisor', name: 'Мерчндайзер', rarity: 'epic', bonusType: 'location', bonusValue: 10, icon: '🕵️‍♀️', desc: '+10% доход с локаций' },
    { id: 'chief_cook', name: 'Пикми повариха', rarity: 'epic', bonusType: 'passive', bonusValue: 30, icon: '👨‍🍳', desc: '+30 к пассиву' },
    
    { id: 'svetlana', name: 'Директор Светлана', rarity: 'mythic', bonusType: 'all', bonusValue: 70, icon: '👩‍💼🌟', desc: '+70 ко всему' },
    
    { id: 'owner', name: 'Владелец сети', rarity: 'legendary', bonusType: 'multiply', bonusValue: 2, icon: '👑🛒', desc: 'х2 ко всем бонусам' }
];

const LOOTBOXES = {
    common: {
        name: 'Обычный',
        color: '🔵',
        price: 10,
        drops: 3,
        chances: {
            money: 40,
            click: 24,
            passive: 15,
            star: 19,
            employee: 1,
            temp_boost: 1 // 10% на временное усиление
        },
        rarityChances: {
            common: 75,
            rare: 25,
            epic: 0,
            mythic: 0,
            legendary: 0
        }
    },
    
    rare: {
        name: 'Редкий',
        color: '🟣',
        price: 20,
        drops: 3,
        chances: {
            money: 44,
            click: 20,
            passive: 15,
            star: 15,
            employee: 1,
            temp_boost: 10
        },
        rarityChances: {
            common: 45,
            rare: 40,
            epic: 10,
            mythic: 4,
            legendary: 1
        }
    },
    
    epic: {
        name: 'Эпический',
        color: '🔴',
        price: 50,
        drops: 4,
        chances: {
            money: 30,
            click: 20,
            passive: 15,
            star: 20,
            employee: 5,
            temp_boost: 10
        },
        rarityChances: {
            common: 5,
            rare: 40,
            epic: 35,
            mythic: 15,
            legendary: 5
        }
    },
    
    mythic: {
        name: 'Мифический',
        color: '🟢',
        price: 100,
        drops: 7,
        chances: {
            money: 15,
            click: 20,
            passive: 15,
            star: 20,
            employee: 10,
            temp_boost: 15
        },
        rarityChances: {
            common: 0,
            rare: 20,
            epic: 35,
            mythic: 30,
            legendary: 15
        }
    },
    
    legendary: {
        name: 'Легендарный',
        color: '🟡',
        price: 150,
        drops: 12,
        chances: {
            money: 10,
            click: 10,
            passive: 10,
            star: 20,
            employee: 25,
            temp_boost: 25
        },
        rarityChances: {
            common: 0,
            rare: 5,
            epic: 30,
            mythic: 35,
            legendary: 30
        }
    }
};

// ==========================================
// СОСТОЯНИЕ ИГРЫ
// ==========================================
let state = {
    money: parseInt(localStorage.getItem('santa_money')) || 0,
    stars: parseInt(localStorage.getItem('santa_stars')) || 0,
    rooms: JSON.parse(localStorage.getItem('santa_rooms')) || ['hall'],
    clickPower: parseInt(localStorage.getItem('santa_click')) || 5,
    autoIncome: parseInt(localStorage.getItem('santa_auto')) || 0,
    currentLocId: localStorage.getItem('santa_loc') || 'hall',
    lastVisit: parseInt(localStorage.getItem('santa_lastVisit')) || Date.now(),
    lootboxes: JSON.parse(localStorage.getItem('santa_lootboxes')) || {
        common: 0,
        rare: 0,
        epic: 0,
        mythic: 0,
        legendary: 0
    },
    employees: JSON.parse(localStorage.getItem('santa_employees')) || {},
    // Новые временные усиления
    tempBoosts: JSON.parse(localStorage.getItem('santa_tempBoosts')) || []
};

let boostPrices = JSON.parse(localStorage.getItem('santa_boostPrices')) || {};
BOOSTS.forEach(b => {
    if (boostPrices[b.id] == null) boostPrices[b.id] = b.basePrice;
});

EMPLOYEES.forEach(e => {
    if (state.employees[e.id] === undefined) {
        state.employees[e.id] = false;
    }
});

// ==========================================
// ПЕРЕМЕННЫЕ ДЛЯ ОТКРЫТИЯ НАБОРОВ
// ==========================================
let currentLootboxType = null;
let currentLootboxRemaining = 0;
let currentLootboxTotal = 0;

// ==========================================
// ЗВУКИ
// ==========================================
let soundEnabled = localStorage.getItem('santa_sound') !== 'false'; // По умолчанию включено

function playSound(soundId) {
    if (!soundEnabled) return;
    
    const sound = document.getElementById(soundId);
    if (sound) {
        // Сбрасываем звук, если он уже играет
        sound.currentTime = 0;
        
        // Пробуем воспроизвести
        sound.play().catch(e => {
            // Автоплей может быть заблокирован браузером
            console.log('Звук заблокирован браузером:', e);
        });
    }
}

// Глобальная функция для переключения звука
window.toggleSound = function() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('santa_sound', soundEnabled);
    
    const icon = document.getElementById('sound-icon');
    const toggle = document.getElementById('sound-toggle');
    
    if (icon) {
        icon.textContent = soundEnabled ? '🔊' : '🔇';
    }
    if (toggle) {
        if (soundEnabled) {
            toggle.classList.remove('muted');
        } else {
            toggle.classList.add('muted');
        }
    }
    
    playSound('sound-click'); // Тестовый звук
};

// Функция для инициализации звука (вызывается после первого клика)
function initSound() {
    // Создаем пустой звук для разблокировки аудио в Safari
    const silentSound = new Audio();
    silentSound.play().catch(() => {});
    
    // Устанавливаем иконку
    const icon = document.getElementById('sound-icon');
    const toggle = document.getElementById('sound-toggle');
    
    if (icon) {
        icon.textContent = soundEnabled ? '🔊' : '🔇';
    }
    if (toggle) {
        if (soundEnabled) {
            toggle.classList.remove('muted');
        } else {
            toggle.classList.add('muted');
        }
    }
}

// ==========================================
// ФУНКЦИИ ПОМОЩНИКИ
// ==========================================
function getRandomItemByChances(chances) {
    const total = Object.values(chances).reduce((a, b) => a + b, 0);
    let random = Math.random() * total;
    
    for (let [key, chance] of Object.entries(chances)) {
        if (random < chance) {
            return key;
        }
        random -= chance;
    }
    return Object.keys(chances)[0];
}

function getRarityName(rarity) {
    const names = {
        common: 'Обычный',
        rare: 'Редкий',
        epic: 'Эпический',
        mythic: 'Мифический',
        legendary: 'Легендарный'
    };
    return names[rarity] || rarity;
}

function showNotification(text) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = text;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.remove();
    }, 1500);
}

// ==========================================
// ФУНКЦИИ ДЛЯ ВРЕМЕННЫХ УСИЛЕНИЙ
// ==========================================
function updateTempBoosts() {
    const now = Date.now();
    // Удаляем истекшие усиления
    state.tempBoosts = state.tempBoosts.filter(boost => boost.endTime > now);
    
    // Обновляем отображение на главном экране
    renderTempBoosts();
    save();
}

function renderTempBoosts() {
    const container = document.getElementById('temp-boosts-container');
    if (!container) return;
    
    if (state.tempBoosts.length === 0) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }
    
    container.classList.remove('hidden');
    
    let html = '<div class="temp-boosts">';
    state.tempBoosts.forEach((boost, index) => {
        const timeLeft = Math.max(0, Math.floor((boost.endTime - Date.now()) / 1000));
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        html += `
            <div class="temp-boost-item ${boost.type}" data-rarity="${boost.rarity}">
                <span class="boost-icon">${boost.icon}</span>
                <span class="boost-name">${boost.name}</span>
                <span class="boost-timer">${minutes}:${seconds.toString().padStart(2, '0')}</span>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

function getTempBoostMultiplier(type) {
    let multiplier = 1;
    const now = Date.now();
    
    state.tempBoosts.forEach(boost => {
        if (boost.endTime > now) {
            if (boost.type === type || boost.type === 'all') {
                multiplier *= boost.multiplier;
            }
        }
    });
    
    return multiplier;
}

function addTempBoost(boostData) {
    const endTime = Date.now() + (boostData.duration * 1000);
    
    state.tempBoosts.push({
        id: boostData.id || Math.random().toString(36).substr(2, 9),
        name: boostData.name,
        icon: boostData.icon,
        type: boostData.type,
        multiplier: boostData.multiplier,
        duration: boostData.duration,
        rarity: boostData.rarity,
        endTime: endTime
    });
    
    renderTempBoosts();
    save();
}

// ==========================================
// ФУНКЦИИ ДЛЯ НАБОРОВ
// ==========================================
function addLootboxes(lootboxArray) {
    if (!lootboxArray || !Array.isArray(lootboxArray)) return;
    
    lootboxArray.forEach(rarity => {
        if (state.lootboxes[rarity] !== undefined) {
            state.lootboxes[rarity] += 1;
        }
    });
    
    updateLootboxBar();
    save();
}

function updateLootboxBar() {
    const bar = document.getElementById('lootbox-bar');
    if (!bar) return;
    
    let total = 0;
    for (let key in state.lootboxes) {
        total += state.lootboxes[key];
        const el = document.getElementById(`lootbox-${key}`);
        if (el) {
            el.innerHTML = `${LOOTBOXES[key]?.color || '⬜'} ${state.lootboxes[key]}`;
            el.style.display = state.lootboxes[key] > 0 ? 'inline-block' : 'none';
        }
    }
    
    if (total > 0) {
        bar.classList.remove('hidden');
    } else {
        bar.classList.add('hidden');
    }
}

function renderLootboxShop() {
    const container = document.getElementById('lootbox-shop');
    if (!container) return;
    
    container.innerHTML = '';
    
    const order = ['common', 'rare', 'epic', 'mythic', 'legendary'];
    
    order.forEach(key => {
        const box = LOOTBOXES[key];
        if (!box) return;
        
        const canBuy = state.stars >= box.price;
        
        container.innerHTML += `
            <div class="card">
                <div class="c-info">
                    <h4>${box.color} ${box.name} набор</h4>
                    <p>🎁 ${box.drops} предмета</p>
                    <p>⭐ Цена: ${box.price}</p>
                </div>
                <button class="buy-btn" onclick="buyLootbox('${key}')" ${!canBuy ? 'disabled' : ''}>
                    Купить
                </button>
            </div>
        `;
    });
}

window.buyLootbox = (key) => {
    const box = LOOTBOXES[key];
    if (state.stars >= box.price) {
        state.stars -= box.price;
        state.lootboxes[key] += 1;
        updateLootboxBar();
        renderLootboxShop();
        updateUI();
        save();
        showNotification(`✅ Куплен ${box.name} набор`);
    }
};

window.openLootbox = (type) => {
    openLootboxScreen(type);
};

function openLootboxScreen(type) {
    if (state.lootboxes[type] <= 0) {
        showNotification('❌ Нет наборов');
        playSound('sound-notification');
        return;
    }
    
    state.lootboxes[type] -= 1;
    updateLootboxBar();
    save();
    
    playSound('sound-lootbox-open'); // Звук открытия ящика
    
    currentLootboxType = type;
    const box = LOOTBOXES[type];
    currentLootboxTotal = box.drops;
    currentLootboxRemaining = box.drops;
    
    const img = document.getElementById('lootbox-image');
    if (img) img.src = `box_${type}.png`;
    
    const titleEl = document.getElementById('lootbox-title');
    if (titleEl) titleEl.textContent = box.color + ' ' + box.name + ' набор';
    
    const remainingEl = document.getElementById('lootbox-remaining');
    if (remainingEl) remainingEl.textContent = currentLootboxRemaining;
    
    const totalEl = document.getElementById('lootbox-total');
    if (totalEl) totalEl.textContent = currentLootboxTotal;
    
    const itemsEl = document.getElementById('lootbox-items');
    if (itemsEl) itemsEl.innerHTML = '';
    
    const closeBtn = document.getElementById('lootbox-close');
    if (closeBtn) closeBtn.classList.add('hidden');
    
    const screen = document.querySelector('.lootbox-open-screen');
    if (screen) screen.classList.remove('hidden');
}

function generateLootboxItem(boxType) {
    const box = LOOTBOXES[boxType];
    
    const itemType = getRandomItemByChances(box.chances);
    const rarity = getRandomItemByChances(box.rarityChances);
    
    // Временное усиление
    if (itemType === 'temp_boost') {
        // Находим все временные усиления нужной редкости
        const tempBoostsOfRarity = Object.entries(TEMP_BOOSTS)
            .filter(([_, boost]) => boost.rarity === rarity)
            .map(([id, boost]) => ({ id, ...boost }));
        
        if (tempBoostsOfRarity.length > 0) {
            const boost = tempBoostsOfRarity[Math.floor(Math.random() * tempBoostsOfRarity.length)];
            return {
                type: 'temp_boost',
                name: boost.name,
                value: boost,
                icon: boost.icon,
                description: `${boost.name} на ${boost.duration} сек`
            };
        }
    }
    
    if (itemType === 'employee') {
        const availableEmployees = EMPLOYEES.filter(e => 
            e.rarity === rarity && !state.employees[e.id]
        );
        
        if (availableEmployees.length === 0) {
            const starValue = rarity === 'common' ? 2 : 
                              rarity === 'rare' ? 5 : 
                              rarity === 'epic' ? 10 : 
                              rarity === 'mythic' ? 20 : 50;
            return {
                type: 'star',
                name: '✨ Компенсация',
                value: starValue,
                icon: '✨',
                description: `+${starValue} ⭐ (все сотрудники собраны)`
            };
        }
        
        const employee = availableEmployees[Math.floor(Math.random() * availableEmployees.length)];
        return {
            type: 'employee',
            name: employee.name,
            value: employee,
            icon: employee.icon,
            description: employee.desc
        };
    }
    
    const itemsOfType = Object.values(LOOT_ITEMS).filter(item => 
        item.type === itemType && item.rarity === rarity
    );
    
    if (itemsOfType.length > 0) {
        const item = itemsOfType[Math.floor(Math.random() * itemsOfType.length)];
        return {
            type: item.type,
            name: item.name,
            value: item.value,
            icon: item.icon,
            description: item.type === 'money' ? `+${item.value} 💰` :
                         item.type === 'click' ? `+${item.value} ⚡ клик` :
                         item.type === 'passive' ? `+${item.value} 🏭 пассив` :
                         `+${item.value} ⭐`
        };
    }
    
    return {
        type: 'money',
        name: 'Деньги',
        value: 100,
        icon: '💰',
        description: '+100 💰'
    };
}

function addLootboxItemToUI(item) {
    const container = document.getElementById('lootbox-items');
    if (!container) return;
    
    let className = '';
    if (item.type === 'money') className = 'item-money';
    else if (item.type === 'click') className = 'item-click';
    else if (item.type === 'passive') className = 'item-passive';
    else if (item.type === 'star') className = 'item-star';
    else if (item.type === 'employee') className = 'item-employee';
    else if (item.type === 'temp_boost') className = 'item-temp-boost';
    
    container.innerHTML += `
        <div class="lootbox-item-card ${className}">
            <div class="item-icon">${item.icon}</div>
            <div class="item-info">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
            <div class="item-badge">+</div>
        </div>
    `;
    
    container.scrollTop = container.scrollHeight;
}

function applyLootboxItem(item) {
    if (item.type === 'money') {
        state.money += item.value;
        playSound('sound-coin'); // Звук денег
        showNotification(`💰 +${item.value} денег`);
    } else if (item.type === 'click') {
        state.clickPower += item.value;
        playSound('sound-boost'); // Звук усиления
        showNotification(`⚡ +${item.value} к клику`);
    } else if (item.type === 'passive') {
        state.autoIncome += item.value;
        playSound('sound-boost');
        showNotification(`🏭 +${item.value} к пассиву`);
    } else if (item.type === 'star') {
        state.stars += item.value;
        playSound('sound-star');
        showNotification(`⭐ +${item.value} звезд`);
    } else if (item.type === 'employee') {
        state.employees[item.value.id] = true;
        playSound('sound-employee'); // Звук нового сотрудника
        showNotification(`👤 Новый сотрудник: ${item.value.name}`);
    } else if (item.type === 'temp_boost') {
        addTempBoost(item.value);
        playSound('sound-boost');
        showNotification(`✨ ${item.name} активировано на ${item.value.duration} сек!`);
    }
    
    updateUI();
    updateCollectionUI();
    save();
}

window.closeLootboxOpen = () => {
    const screen = document.querySelector('.lootbox-open-screen');
    if (screen) screen.classList.add('hidden');
    currentLootboxType = null;
    updateLootboxBar();
    showNotification('🎁 Набор открыт!');
};

// ==========================================
// КОЛЛЕКЦИЯ
// ==========================================
function calculateEmployeeBonus() {
    let result = {
        click: 0,
        passive: 0,
        starChance: 0,
        offline: 0,
        location: 0,
        starBonus: 0,
        all: 0
    };
    
    let hasOwner = false;
    
    EMPLOYEES.forEach(e => {
        if (state.employees[e.id]) {
            if (e.bonusType === 'click') result.click += e.bonusValue;
            if (e.bonusType === 'passive') result.passive += e.bonusValue;
            if (e.bonusType === 'starChance') result.starChance += e.bonusValue;
            if (e.bonusType === 'offline') result.offline += e.bonusValue;
            if (e.bonusType === 'location') result.location += e.bonusValue;
            if (e.bonusType === 'starBonus') result.starBonus += e.bonusValue;
            if (e.bonusType === 'all') result.all += e.bonusValue;
            if (e.id === 'owner') hasOwner = true;
        }
    });
    
    if (result.all > 0) {
        result.click += result.all;
        result.passive += result.all;
        result.starChance += result.all / 10;
        result.offline += result.all;
    }
    
    if (hasOwner) {
        result.click *= 2;
        result.passive *= 2;
        result.starChance *= 2;
        result.offline *= 2;
        result.location *= 2;
        result.starBonus *= 2;
    }
    
    return result;
}

function updateCollectionUI() {
    const total = EMPLOYEES.length;
    let collected = 0;
    
    EMPLOYEES.forEach(e => {
        if (state.employees[e.id]) collected++;
    });
    
    const countEl = document.getElementById('collection-count');
    const totalEl = document.getElementById('collection-total');
    const progressEl = document.getElementById('collection-progress');
    const bonusEl = document.getElementById('total-bonus');
    
    if (countEl) countEl.textContent = collected;
    if (totalEl) totalEl.textContent = total;
    
    const percent = (collected / total) * 100;
    if (progressEl) progressEl.style.width = percent + '%';
    
    const bonus = calculateEmployeeBonus();
    const totalBonus = bonus.click + bonus.passive + bonus.starChance + bonus.offline + bonus.location + bonus.starBonus;
    if (bonusEl) bonusEl.textContent = totalBonus;
    
    renderCollection();
}

function renderCollection(filter = 'all') {
    const container = document.getElementById('collection-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    let filtered = EMPLOYEES;
    if (filter !== 'all') {
        filtered = EMPLOYEES.filter(e => e.rarity === filter);
    }
    
    filtered.forEach(e => {
        const owned = state.employees[e.id];
        
        container.innerHTML += `
            <div class="collection-card ${owned ? 'owned' : ''}" data-rarity="${e.rarity}">
                <div class="employee-icon">${e.icon}</div>
                <div class="employee-info">
                    <h4>${e.name}</h4>
                    <p class="employee-desc">${e.desc}</p>
                    <p class="employee-rarity ${e.rarity}">${getRarityName(e.rarity)}</p>
                </div>
                ${owned ? '<div class="owned-mark">✅</div>' : '<div class="owned-mark">🔒</div>'}
            </div>
        `;
    });
}

window.filterCollection = (filter) => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderCollection(filter);
};

// ==========================================
// ЛОГИКА ИГРЫ
// ==========================================
function updateUI() {
    const balanceEl = document.getElementById('balance');
    const starsEl = document.getElementById('stars');
    const clickEl = document.getElementById('stat-click');
    const autoEl = document.getElementById('stat-auto');
    const roomsEl = document.getElementById('stat-rooms');
    const locNameEl = document.getElementById('current-loc-name');
    
    if (balanceEl) balanceEl.textContent = Math.floor(state.money);
    if (starsEl) starsEl.textContent = state.stars;
    
    const bonus = calculateEmployeeBonus();
    const clickMultiplier = getTempBoostMultiplier('click');
    const passiveMultiplier = getTempBoostMultiplier('passive');
    const starMultiplier = getTempBoostMultiplier('star');
    
    if (clickEl) clickEl.textContent = (state.clickPower + bonus.click) * clickMultiplier;
    if (autoEl) autoEl.textContent = Math.floor((state.autoIncome + bonus.passive) * passiveMultiplier);
    if (roomsEl) roomsEl.textContent = state.rooms.length;
    
    const loc = LOCATIONS.find(l => l.id === state.currentLocId);
    if (loc && locNameEl) locNameEl.textContent = loc.name;
    
    // Обновляем таймеры усилений
    renderTempBoosts();
}

function updateStats() {
    const roomsEl = document.getElementById('stat-rooms');
    if (roomsEl) roomsEl.textContent = state.rooms.length;
}

function updateCareer() {
    const roomsCount = state.rooms.length;
    let currentRankIndex = 0;
    
    for (let i = 0; i < RANKS.length; i++) {
        if (roomsCount >= RANKS[i].roomsNeeded) {
            currentRankIndex = i;
        }
    }
    
    const currentRank = RANKS[currentRankIndex];
    const nextRank = RANKS[currentRankIndex + 1];

    const rankNameEl = document.getElementById('rank-name');
    if (rankNameEl) rankNameEl.textContent = currentRank.name;

    let progress = 100;
    if (nextRank) {
        const from = currentRank.roomsNeeded;
        const to = nextRank.roomsNeeded;
        progress = ((roomsCount - from) / (to - from)) * 100;
    }

    const xpFill = document.getElementById('xp-fill');
    if (xpFill) xpFill.style.width = Math.min(100, Math.max(0, progress)) + '%';
}

function renderCareer() {
    const cont = document.getElementById('career-list');
    if (!cont) return;
    
    cont.innerHTML = '';
    RANKS.forEach(r => {
        const active = state.rooms.length >= r.roomsNeeded;
        
        let lootboxText = '';
        if (!active && r.lootboxes && r.lootboxes.length > 0) {
            const boxes = r.lootboxes.map(l => LOOTBOXES[l]?.color).join(' ');
            lootboxText = `<p>🎁 Награда: ${boxes}</p>`;
        }
        
        cont.innerHTML += `
            <div class="card ${active ? 'next-rank' : ''}">
                <div class="c-info">
                    <h4>${r.name} ${active ? '✅' : ''}</h4>
                    <p>Нужно комнат: ${r.roomsNeeded}</p>
                    <p>${r.bonus}</p>
                    ${lootboxText}
                </div>
            </div>`;
    });
}

function renderLocations() {
    const cont = document.getElementById('locations-list');
    if (!cont) return;
    
    cont.innerHTML = '';
    LOCATIONS.forEach(loc => {
        const bought = state.rooms.includes(loc.id);
        const canBuy = state.money >= loc.price && !bought;
        
        let lootboxText = '';
        if (!bought && loc.lootboxes && loc.lootboxes.length > 0) {
            const boxes = loc.lootboxes.map(l => LOOTBOXES[l]?.color).join(' ');
            lootboxText = `<p>🎁 Бонус: ${boxes}</p>`;
        }
        
        cont.innerHTML += `
            <div class="card">
                <div class="c-info">
                    <h4>${loc.name}</h4>
                    <p>Доход: +${loc.income}/с</p>
                    ${!bought ? `<p>Цена: ${loc.price.toLocaleString()} 💰</p>` : ''}
                    ${lootboxText}
                </div>
                ${bought ? 
                    `<button class="buy-btn" onclick="setLoc('${loc.id}')">Войти</button>` :
                    `<button class="buy-btn" onclick="buyLoc('${loc.id}', ${loc.price})" ${!canBuy ? 'disabled' : ''}>Купить</button>`
                }
            </div>`;
    });
}

window.buyLoc = (id, price) => {
    if (state.money >= price) {
        state.money -= price;
        state.rooms.push(id);
        state.autoIncome += LOCATIONS.find(l => l.id === id).income;

        playSound('sound-purchase'); // Звук покупки

        const location = LOCATIONS.find(l => l.id === id);
        if (location.lootboxes && location.lootboxes.length > 0) {
            addLootboxes(location.lootboxes);
        }

        const oldRank = Math.max(...RANKS.map((r, i) => r.roomsNeeded <= state.rooms.length - 1 ? i : 0));
        const newRank = Math.max(...RANKS.map((r, i) => r.roomsNeeded <= state.rooms.length ? i : 0));
        
        if (newRank > oldRank) {
            const rank = RANKS[newRank];
            if (rank.lootboxes && rank.lootboxes.length > 0) {
                addLootboxes(rank.lootboxes);
            }
            playSound('sound-level-up'); // Звук повышения
        }

        updateCareer();
        renderLocations();
        renderCareer();
        updateUI();
        updateStats();
        save();
        
        showNotification(`✅ Куплено: ${LOCATIONS.find(l => l.id === id).name}`);
    }
};

window.setLoc = (id) => { 
    state.currentLocId = id; 
    nav('main', null); 
    updateUI();
    showNotification(`📍 Текущая: ${LOCATIONS.find(l => l.id === id).name}`);
};

window.nav = (screenId, event) => {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    const targetScreen = document.getElementById('screen-' + screenId);
    if (targetScreen) targetScreen.classList.remove('hidden');
    
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    if (event) event.currentTarget.classList.add('active');
    
    if (screenId === 'progress') {
        renderLocations();
        renderCareer();
    }
    if (screenId === 'upgrades') {
        renderBoosts();
        renderLootboxShop();
    }
    if (screenId === 'collection') {
        updateCollectionUI();
    }
};

function renderBoosts() {
    renderBoostList('boosts-click', BOOSTS.filter(b => b.type === 'click'));
    renderBoostList('boosts-auto', BOOSTS.filter(b => b.type === 'auto'));
    renderBoostList('boosts-service', BOOSTS.filter(b => b.type === 'wipe'));
}

function renderBoostList(containerId, boosts) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    boosts.forEach(b => {
        const price = boostPrices[b.id] || b.basePrice;
        const canBuy = state.money >= price || b.type === 'wipe';
        
        container.innerHTML += `
            <div class="card">
                <div class="c-info">
                    <h4>${b.name}</h4>
                    ${b.type !== 'wipe' ? `<p>Эффект: +${b.effect}</p>` : ''}
                    ${b.type !== 'wipe' ? `<p>Цена: ${price.toLocaleString()} 💰</p>` : ''}
                </div>
                <button class="buy-btn" onclick="buyBoost('${b.id}')" ${!canBuy && b.type !== 'wipe' ? 'disabled' : ''}>
                    ${b.type === 'wipe' ? 'Удалить' : 'Купить'}
                </button>
            </div>
        `;
    });
}

window.buyBoost = (boostId) => {
    const boost = BOOSTS.find(b => b.id === boostId);
    const price = boostPrices[boostId];

    if (!boost) return;

    if (boost.type === 'wipe') {
        if (confirm('Точно удалить весь прогресс?')) {
            wipeProgress();
        }
        return;
    }

    if (state.money < price) {
        showNotification('❌ Не хватает денег');
        playSound('sound-notification');
        return;
    }

    state.money -= price;
    
    if (boost.type === 'click') {
        state.clickPower += boost.effect;
    }
    if (boost.type === 'auto') {
        state.autoIncome += boost.effect;
    }

    if (boost.scales) {
        boostPrices[boostId] = Math.floor(boostPrices[boostId] * 1.8);
    }

    localStorage.setItem('santa_boostPrices', JSON.stringify(boostPrices));
    updateUI();
    renderBoosts();
    save();
    
    playSound('sound-purchase');
    showNotification(`✅ Куплено: ${boost.name}`);
};

function wipeProgress() {
    localStorage.clear();
    state = { 
        money: 0, 
        stars: 0,
        rooms: ['hall'], 
        clickPower: 5, 
        autoIncome: 0, 
        currentLocId: 'hall', 
        lastVisit: Date.now(),
        lootboxes: {
            common: 0,
            rare: 0,
            epic: 0,
            mythic: 0,
            legendary: 0
        },
        employees: {},
        tempBoosts: []
    };
    boostPrices = {};
    BOOSTS.forEach(b => boostPrices[b.id] = b.basePrice);
    
    EMPLOYEES.forEach(e => {
        if (state.employees[e.id] === undefined) {
            state.employees[e.id] = false;
        }
    });

    updateCareer();
    renderLocations();
    renderBoosts();
    renderCareer();
    renderLootboxShop();
    updateLootboxBar();
    updateCollectionUI();
    updateUI();
    updateStats();
    nav('main', null);
    showNotification('🔄 Прогресс сброшен');
}

function save() {
    localStorage.setItem('santa_money', Math.floor(state.money));
    localStorage.setItem('santa_stars', state.stars);
    localStorage.setItem('santa_rooms', JSON.stringify(state.rooms));
    localStorage.setItem('santa_click', state.clickPower);
    localStorage.setItem('santa_auto', state.autoIncome);
    localStorage.setItem('santa_loc', state.currentLocId);
    localStorage.setItem('santa_lastVisit', Date.now());
    localStorage.setItem('santa_lootboxes', JSON.stringify(state.lootboxes));
    localStorage.setItem('santa_employees', JSON.stringify(state.employees));
    localStorage.setItem('santa_tempBoosts', JSON.stringify(state.tempBoosts));
}

// ==========================================
// ИНИЦИАЛИЗАЦИЯ
// ==========================================
function init() {
    // Создаем карту для пряток
createHideMap();
     document.body.addEventListener('touchstart', function unlockAudio() {
        const silentSound = new Audio();
        silentSound.play().catch(() => {});
        document.body.removeEventListener('touchstart', unlockAudio);
    }, { once: true });
     initSound();
    const now = Date.now();
    const secondsPassed = Math.floor((now - state.lastVisit) / 1000);
    if (secondsPassed > 0 && secondsPassed < 3600) {
        const bonus = calculateEmployeeBonus();
        const passiveMultiplier = getTempBoostMultiplier('passive');
        const offlineEarnings = (state.autoIncome + bonus.passive) * passiveMultiplier * secondsPassed;
        state.money += offlineEarnings;
        if (offlineEarnings > 0) {
            showNotification(`⏰ Офлайн доход: +${Math.floor(offlineEarnings)} 💰`);
        }
    }
    
    updateTempBoosts();
    updateCareer();
    renderLocations();
    renderBoosts();
    renderCareer();
    renderLootboxShop();
    updateLootboxBar();
    updateCollectionUI();
    updateUI();

    setInterval(() => {
        const bonus = calculateEmployeeBonus();
        const passiveMultiplier = getTempBoostMultiplier('passive');
        state.money += (state.autoIncome + bonus.passive) * passiveMultiplier / 10;
        updateUI();
        updateTempBoosts();
        save();
    }, 100);

    // ИСПРАВЛЕННЫЙ КЛИК ДЛЯ SAFARI
    const hero = document.getElementById('main-hero');
    if (hero) {
        // Убираем onclick, используем addEventListener для лучшей совместимости
        hero.addEventListener('click', handleHeroClick);
        hero.addEventListener('touchstart', handleHeroTouch, { passive: false });
    }

    const lootboxWrapper = document.querySelector('.lootbox-image-wrapper');
    if (lootboxWrapper) {
        lootboxWrapper.addEventListener('click', handleLootboxClick);
        lootboxWrapper.addEventListener('touchstart', handleLootboxTouch, { passive: false });
    }

    updateStats();
}

// Отдельная функция для клика
function handleHeroClick(e) {
    e.preventDefault();
    
    playSound('sound-click'); 
    
    const hero = e.currentTarget;
    hero.classList.add('hit');
    setTimeout(() => hero.classList.remove('hit'), 200);
    
    const bonus = calculateEmployeeBonus();
    const clickMultiplier = getTempBoostMultiplier('click');
    const starMultiplier = getTempBoostMultiplier('star');
    
    state.money += (state.clickPower + bonus.click) * clickMultiplier;
    
    const starChance = 0.01 + (bonus.starChance / 100) * starMultiplier;
    if (Math.random() < starChance) {
        state.stars += 1;
        playSound('sound-star'); 
        showNotification('⭐ +1 звезда!');
    }
    
    if (Math.random() < 0.01) {
        state.lootboxes.common += 1;
        updateLootboxBar();
        playSound('sound-lootbox-item'); 
        showNotification('📦 Выпал обычный набор!');
    }

    // --- ШАНС НА ПРЯТКИ (5%) ---
    if (Math.random() < 0.9) { 
        if (typeof tryStartHideGame === "function") {
            tryStartHideGame();
        }
    }
    
    updateUI();
    save();
}

// Для touch-событий в Safari
function handleHeroTouch(e) {
    e.preventDefault(); // Предотвращаем скролл
    handleHeroClick(e);
}

function handleLootboxClick(e) {
    if (currentLootboxRemaining <= 0) return;
    
    playSound('sound-lootbox-item'); // Звук получения предмета из ящика
    
    const img = document.getElementById('lootbox-image');
    if (img) {
        img.classList.add('shake');
        setTimeout(() => img.classList.remove('shake'), 300);
    }
    
    const screen = document.querySelector('.lootbox-open-screen');
    if (screen) {
        screen.classList.add('flash');
        setTimeout(() => screen.classList.remove('flash'), 200);
    }
    
    const item = generateLootboxItem(currentLootboxType);
    
    addLootboxItemToUI(item);
    applyLootboxItem(item);
    
    currentLootboxRemaining -= 1;
    const remainingEl = document.getElementById('lootbox-remaining');
    if (remainingEl) remainingEl.textContent = currentLootboxRemaining;
    
    if (currentLootboxRemaining <= 0) {
        const closeBtn = document.getElementById('lootbox-close');
        if (closeBtn) closeBtn.classList.remove('hidden');
    }
}

function handleLootboxTouch(e) {
    e.preventDefault();
    handleLootboxClick(e);
}

document.addEventListener('DOMContentLoaded', init);

// ==========================================
// ЛОГИКА КАРТЫ И ПРЯТОК
// ==========================================

let selectedHideRoom = null;
let isSvetlanaSearching = false;

// Функция для создания карты при загрузке
function createHideMap() {
    const mapGrid = document.getElementById('hide-map-grid');
    if (!mapGrid) return;
    
    mapGrid.innerHTML = '';
    
    // Берем первые 9 локаций для карты 3x3
    const mapLocations = LOCATIONS.slice(0, 9);
    
    mapLocations.forEach(loc => {
        const cell = document.createElement('div');
        cell.className = 'map-cell';
        cell.id = `cell-${loc.id}`;
        cell.setAttribute('data-room', loc.id);
        
        cell.innerHTML = `
            <img src="button.png" class="player-sprite hidden" id="player-${loc.id}" style="width: 30px; height: 30px; position: absolute; top: 5px; left: 5px;">
            <img src="svetlana.png" class="svetlana-sprite hidden" id="svetlana-${loc.id}" style="width: 30px; height: 30px; position: absolute; bottom: 5px; right: 5px;">
            <span class="room-name">${loc.name}</span>
        `;
        
        cell.addEventListener('click', () => selectHideRoom(loc.id));
        mapGrid.appendChild(cell);
    });
}

// Функция запуска окна пряток
window.tryStartHideGame = function() {
    // 5% шанс запуска
    if (Math.random() > 0.005) return;
    
    const hideScreen = document.getElementById('hide-screen');
    if (!hideScreen) return;
    
    // Если открыты другие окна, не запускаем
    if (!hideScreen.classList.contains('hidden')) return;
    
    // Сброс состояния
    selectedHideRoom = null;
    isSvetlanaSearching = false;
    
    // Скрываем все спрайты
    document.querySelectorAll('.player-sprite, .svetlana-sprite').forEach(img => {
        img.classList.add('hidden');
    });
    
    // Убираем подсветку
    document.querySelectorAll('.map-cell').forEach(c => {
        c.classList.remove('visited');
    });
    
    // Обновляем статус и кнопку
    const statusEl = document.getElementById('hide-status');
    const startBtn = document.getElementById('hide-start');
    
    if (statusEl) statusEl.textContent = "Выбери комнату на карте!";
    if (startBtn) {
        startBtn.disabled = true;
        startBtn.textContent = "🏃 Спрятаться";
    }
    
    // Показываем экран
    hideScreen.classList.remove('hidden');
    
    // Звук уведомления
    playSound('sound-notification');
};

// Выбор комнаты игроком
window.selectHideRoom = function(roomId) {
    if (isSvetlanaSearching) return;

    // Скрываем иконку игрока во всех комнатах
    document.querySelectorAll('.player-sprite').forEach(img => img.classList.add('hidden'));
    
    // Показываем в выбранной
    selectedHideRoom = roomId;
    const pImg = document.getElementById(`player-${roomId}`);
    if (pImg) pImg.classList.remove('hidden');

    const statusEl = document.getElementById('hide-status');
    if (statusEl) statusEl.textContent = "Готов? Жми 'Спрятаться'!";
    
    const startBtn = document.getElementById('hide-start');
    if (startBtn) startBtn.disabled = false;
};

// Процесс игры
window.startHideGame = async function() {
    if (!selectedHideRoom || isSvetlanaSearching) return;

    isSvetlanaSearching = true;
    const startBtn = document.getElementById('hide-start');
    startBtn.disabled = true;
    startBtn.textContent = "🔍 Светлана ищет...";
    
    const allRooms = LOCATIONS.slice(0, 9).map(l => l.id);
    // Светлана проверит 5 случайных комнат
    const roomsToVisit = [...allRooms].sort(() => Math.random() - 0.5).slice(0, 5);

    for (let roomId of roomsToVisit) {
        const cell = document.getElementById(`cell-${roomId}`);
        const sImg = document.getElementById(`svetlana-${roomId}`);

        // Светлана заходит
        if (sImg) sImg.classList.remove('hidden');
        if (cell) cell.classList.add('visited');
        
        const statusEl = document.getElementById('hide-status');
        if (statusEl) statusEl.textContent = "Светлана ищет...";
        
        playSound('sound-footstep');
        await new Promise(r => setTimeout(r, 800));

        // Проверка - нашла ли?
        if (roomId === selectedHideRoom) {
            endHideSession(false);
            return;
        }

        // Светлана уходит
        if (sImg) sImg.classList.add('hidden');
    }

    // Если не нашла
    endHideSession(true);
};

function endHideSession(isWin) {
    const status = document.getElementById('hide-status');
    const startBtn = document.getElementById('hide-start');
    
    // Останавливаем звук шагов
    const footstepSound = document.getElementById('sound-footstep');
    if (footstepSound) {
        footstepSound.pause();
        footstepSound.currentTime = 0;
    }
    
    if (isWin) {
        // Случайное количество звезд от 5 до 10
        const starsWon = Math.floor(Math.random() * 6) + 5; // 5-10
        state.stars += starsWon;
        
        status.innerHTML = `<span style='color: #44ff44'>✅ Ты выжил! +${starsWon}⭐</span>`;
        playSound('sound-star');
        
        // Создаем визуальный эффект звездного дождя
        const starEffect = document.createElement('div');
        starEffect.className = 'star-shower';
        starEffect.textContent = '⭐'.repeat(Math.min(starsWon, 5)); // Показываем до 5 звезд
        document.body.appendChild(starEffect);
        
        setTimeout(() => {
            starEffect.remove();
        }, 1500);
        
        showNotification(`⭐ +${starsWon} звезд за победу в прятках!`);
    } else {
        // Забираем 25% от текущего баланса
        const moneyLost = Math.floor(state.money * 0.25);
        state.money = Math.max(0, state.money - moneyLost);
        
        status.innerHTML = `<span style='color: #ff4444'>❌ СВЕТЛАНА ТЕБЯ НАШЛА! -${moneyLost}💰 (25%)</span>`;
        playSound('sound-notification');
        showNotification(`😱 Светлана нашла тебя! Потеряно ${moneyLost}💰 (25%)`);
    }
    
    if (startBtn) startBtn.textContent = "✅ Завершено";

    setTimeout(() => {
        const hideScreen = document.getElementById('hide-screen');
        if (hideScreen) hideScreen.classList.add('hidden');
        isSvetlanaSearching = false;
        updateUI();
        save();
    }, 2500);
}

// Функция для принудительного закрытия экрана пряток
window.forceCloseHideGame = function() {
    const hideScreen = document.getElementById('hide-screen');
    if (!hideScreen || hideScreen.classList.contains('hidden')) return;
    
    // Останавливаем звук шагов
    const footstepSound = document.getElementById('sound-footstep');
    if (footstepSound) {
        footstepSound.pause();
        footstepSound.currentTime = 0;
    }
    
    hideScreen.classList.add('hidden');
    isSvetlanaSearching = false;
    showNotification('👻 Игра прервана');
};


