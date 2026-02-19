// ==========================================
// 1. НАСТРОЙКИ (КОНФИГ)
// ==========================================
const RANKS = [
    { name: "Стажер", roomsNeeded: 0, hp: 100, bonus: "Начало пути" },
    { name: "Продавец", roomsNeeded: 2, hp: 150, bonus: "База баз" },
    { name: "Кассир", roomsNeeded: 3, hp: 300, bonus: "Ходить в туалет по расписанию" },
    { name: "Приёмщица", roomsNeeded: 5, hp: 700, bonus: "Теперь у тебя будет твой личный ТСД" },
    { name: "Зав. ООРТ", roomsNeeded: 7, hp: 1200, bonus: "Власть над овощным и не только" },
    { name: "Директор", roomsNeeded: 9, hp: 5000, bonus: "Давайте завтра теперь будет звучать от тебя" },
    { name: "Кустовая", roomsNeeded: 11, hp: 8000, bonus: "Ну не мечта ли?" },
    { name: "Владелец Санта Ритейл", roomsNeeded: 13, hp: 10000, bonus: "Власть над миром" }
];

const LOCATIONS = [
    { id: 'hall', name: 'Торговый зал', price: 0, income: 1, enemyName: 'Нет' },
    { id: 'sklad', name: 'Склад напитков', price: 1500, income: 10, enemyName: 'Оксана' },
    { id: 'kond', name: 'Кондитерка', price: 5000, income: 20, enemyName: 'Федосова' },
    { id: 'pek', name: 'Пекарня', price: 12000, income: 45, enemyName: 'Пикми повариха' },
    { id: 'oxr', name: 'Кабинет охраны', price: 25000, income: 55, enemyName: 'Виталий' },
    { id: 'xleb', name: 'Хлебная камера', price: 50000, income: 80, enemyName: 'ЧЛЕНОСОСОВА' },
    { id: 'kab', name: 'Кабинетик', price: 150000, income: 130, enemyName: 'ТСД Анжелы' },
    { id: 'pri', name: 'Приёмка', price: 500000, income: 180, enemyName: 'АНЖЕЛА' },
    { id: 'ovo', name: 'Овощная камера', price: 1000000, income: 220, enemyName: 'Валя' },
    { id: 'tual', name: 'Туалет', price: 1500000, income: 250, enemyName: 'Крыса' },
    { id: 'fas', name: 'Фасовка', price: 3000000, income: 500, enemyName: 'Маринка' },
    { id: 'stol', name: 'Столовая', price: 5000000, income: 800, enemyName: 'Материальный' },
    { id: 'kabinet', name: 'Кабинет Светланы', price: 10000000, income: 1000, enemyName: 'СВЕТЛАНА' }
];

// Настройка врагов по ID локаций
const ENEMIES = {
    'sklad': { name: 'Оксана', hp: 100, damage: 10, img: 'svetlana.png', phrases: ['Есть ли жизнь на марсе?', 'Хи-хи-хи'] },
    'kond': { name: 'Федосова', hp: 100, damage: 20, img: 'svetlana.png', phrases: ['Я же многодетная мать!', 'Ок.', 'Brauberg'] },
    'pek': { name: 'Пикми повариха', hp: 150, damage: 25, img: 'svetlana.png', phrases: ['ГОРЯЧО!', 'Станешь тестом!', 'ХРУСТЬ!'] },
    'oxr': { name: 'Виталик', hp: 200, damage: 30, img: 'svetlana.png', phrases: ['Сюда нельзя!', 'Где пропуск?', 'Хрр-хр-рх!'] },
    'xleb': { name: 'ЧЛЕНОСОСОВА', hp: 200, damage: 50, img: 'svetlana.png', phrases: ['Я ОБОЖАЮ МУЖЧИН', 'НА БАНАНКАХ ПЬЯНАЯ СПАЛА', 'Я тебе покажу позу вертолет >:('] },
    'kab': { name: 'ТСД Анжелы', hp: 200, damage: 40, img: 'svetlana.png', phrases: ['Пик пик'] },
    'pri': { name: 'АНЖЕЛА', hp: 400, damage: 100, img: 'svetlana.png', phrases: ['ЖЕНЯ АНДРЕЙ!!!', 'КТО ВЫКЛАДЫВАЛ МОРОЖЕНОЕ?!?!?!', 'ЗАЕБАЛИ!'] },
    'ovo': { name: 'Валя', hp: 500, damage: 120, img: 'svetlana.png', phrases: ['Проститутка', 'А вы где?)'] },
    'tual': { name: 'Крыса', hp: 500, damage: 150, img: 'svetlana.png', phrases: ['Пи.. пи...'] },
    'fas': { name: 'Маринка', hp: 600, damage: 200, img: 'svetlana.png', phrases: ['Хочу айфон 16 купить', 'я дура', 'ты дура'] },
    'stol': { name: 'Материальный', hp: 1000, damage: 250, img: 'svetlana.png', phrases: ['Есть пробитие!', 'Гусеница пробита', 'Бой начинается!'] },
    'kabinet': { name: 'СВЕТЛАНА', hp: 5000, damage: 2000, img: 'svetlana.png', phrases: ['Давайте завтра!', 'Я ТЕБЯ УБЬЮ', 'НЕНАВИЖУ ВАС!!!'] }
};

const BOOSTS = [
    { id: 'gloves', name: 'Перчатки', basePrice: 100, effect: 2, type: 'click', scales: true },
    { id: 'rohlya', name: 'Рохля', basePrice: 200, effect: 5, type: 'click', scales: true },
    { id: 'baikal', name: 'Выпить энергетик Байкал', basePrice: 500, effect: 10, type: 'click', scales: true },
    { id: 'track', name: 'Послушать трек про позу вертолет', basePrice: 10000, effect: 25, type: 'click', scales: true },
    { id: 'bot', name: 'Помощь грузчика Жени', basePrice: 800, effect: 10, type: 'auto', scales: true },
    { id: 'zoya', name: 'Махинации Зои', basePrice: 1500, effect: 20, type: 'auto', scales: true },
    { id: 'ochki', name: 'Надеть розовые очки', basePrice: 3000, effect: 30, type: 'auto', scales: true },
    { id: 'svetl', name: 'Заставить Светлану выставлять товар самой', basePrice: 15000, effect: 150, type: 'auto', scales: true },
    { id: 'med', name: 'Аптечка', basePrice: 300, effect: 150, type: 'heal', scales: false },
    { id: 'med2', name: 'Аптечка большая', basePrice: 500, effect: 300, type: 'heal', scales: false },
    { id: 'med3', name: 'Аптечка огромная', basePrice: 10000, effect: 3000, type: 'heal', scales: false },
    { id: 'wipe', name: 'Проснуться после комы (Удалить прогресс)', basePrice: 100, effect: 0, type: 'wipe', scales: false }

];


// ==========================================
// СОСТОЯНИЕ ИГРЫ
// ==========================================
let state = {
    money: parseInt(localStorage.getItem('santa_money')) || 0,
    rooms: JSON.parse(localStorage.getItem('santa_rooms')) || ['hall'],
    clickPower: parseInt(localStorage.getItem('santa_click')) || 5,
    autoIncome: parseInt(localStorage.getItem('santa_auto')) || 0,
    hp: parseInt(localStorage.getItem('santa_hp')) || 100,
    maxHp: parseInt(localStorage.getItem('santa_maxhp')) || 100,
    currentLocId: localStorage.getItem('santa_loc') || 'hall',
    lastVisit: parseInt(localStorage.getItem('santa_lastVisit')) || Date.now()
};

let boostPrices = JSON.parse(localStorage.getItem('santa_boostPrices')) || {};

BOOSTS.forEach(b => {
    if (boostPrices[b.id] == null) {
        boostPrices[b.id] = b.basePrice;
    }
});





let battle = { active: false, enemyHp: 0, enemyMax: 0, pX: 115, pY: 75, moveDir: {x:0, y:0} };

// ==========================================
// ИНИЦИАЛИЗАЦИЯ
// ==========================================
function init() {
    updateCareer();
    renderLocations();
    renderBoosts();
    renderCareer();

    

    
    setInterval(() => {
        state.money += state.autoIncome / 10;
        updateUI();
    }, 100);

    // Шанс нападения каждые 20 сек, если мы не в безопасном зале
    setInterval(() => {
        if (!battle.active && state.currentLocId !== 'hall' && Math.random() < 0.3) {
            startBattle();
        }
    }, 20000);

    updateUI();
setLoc(state.currentLocId);

}

// ==========================================
// БОЕВАЯ СИСТЕМА (UNDERTALE)
// ==========================================
function startBattle() {
    const enemy = ENEMIES[state.currentLocId];
    if (!enemy) return;

    battle.active = true;
    battle.enemyHp = enemy.hp;
    battle.enemyMax = enemy.hp;
    battle.pX = 115; battle.pY = 75;
    
    nav('battle');
    document.getElementById('enemy-img').src = enemy.img;
    document.getElementById('enemy-name').textContent = enemy.name;
    updateBattleUI();
    updateBattlePlayerHP();

    // Цикл пуль
    const bInt = setInterval(() => {
        if (!battle.active) return clearInterval(bInt);
        createBullet();
    }, 700);

    // Фразы
    const fInt = setInterval(() => {
        if (!battle.active) return clearInterval(fInt);
        const p = enemy.phrases[Math.floor(Math.random()*enemy.phrases.length)];
        document.getElementById('enemy-bubble').textContent = p;
    }, 2500);

}

function createBullet() {
    const box = document.getElementById('battle-box');
    const b = document.createElement('div');
    b.className = 'bullet';

    let x = Math.random() * 240;
    let y = -10;
    let speed = 2 + Math.random() * 3;
    let zigzag = Math.random() < 0.5;
    let dir = Math.random() < 0.5 ? -1 : 1;

    b.style.left = x + 'px';
    box.appendChild(b);

    const m = setInterval(() => {
        y += speed;
        if (zigzag) x += dir * 2;

        b.style.top = y + 'px';
        b.style.left = x + 'px';

        if (Math.abs(x - battle.pX) < 20 && Math.abs(y - battle.pY) < 20) {
            state.hp -= ENEMIES[state.currentLocId].damage;
            b.remove(); clearInterval(m);
            updateUI();
            if (state.hp <= 0) gameOver(); updateBattlePlayerHP();

        }

        if (y > 180 || x < -10 || x > 260) {
            b.remove(); clearInterval(m);
            updateBattlePlayerHP();

        }
    }, 20);

    const h = document.getElementById('player-heart');
h.classList.add('hit');
setTimeout(() => h.classList.remove('hit'), 200);

}

function updateBattlePlayerHP() {
    const hpFill = document.getElementById('battle-hp-fill');
    const hpText = document.getElementById('battle-hp-text');

    if (!hpFill || !hpText) return;

    hpFill.style.width = (state.hp / state.maxHp * 100) + '%';
    hpText.textContent = `${Math.floor(state.hp)}/${state.maxHp}`;
}



function startMove(dx, dy) { battle.moveDir = {x: dx * 4, y: dy * 4}; }
function stopMove() { battle.moveDir = {x:0, y:0}; }

function battleLoop() {
    if (battle.active) {
        battle.pX = Math.max(0, Math.min(235, battle.pX + battle.moveDir.x));
        battle.pY = Math.max(0, Math.min(155, battle.pY + battle.moveDir.y));
        const h = document.getElementById('player-heart');
        h.style.left = battle.pX + 'px';
        h.style.top = battle.pY + 'px';
    }
    requestAnimationFrame(battleLoop);
}
battleLoop();

function playerAttack() {
    battle.enemyHp -= state.clickPower;
    updateBattleUI();
    if (battle.enemyHp <= 0) {
        battle.active = false;
        alert("Победа! Получено 200 монет.");
        state.money += 200;
        nav('main');
    }
}

function updateBattleUI() {
    document.getElementById('enemy-hp-fill').style.width = (battle.enemyHp / battle.enemyMax * 100) + '%';
}

function gameOver() {
    battle.active = false;
    state.hp = state.maxHp;
    state.money = Math.floor(state.money * 0.7);
    alert("Вы потеряли сознание. Светлана вычла штраф из зарплаты.");
    nav('main');
}

// ==========================================
// ЛОГИКА ИНТЕРФЕЙСА
// ==========================================
function updateUI() {
    document.getElementById('balance').textContent = Math.floor(state.money);
    document.getElementById('hp-text').textContent = `${Math.floor(state.hp)}/${state.maxHp}`;
    document.getElementById('hp-fill').style.width = (state.hp/state.maxHp*100) + '%';
    document.getElementById('stat-click').textContent = state.clickPower;
    document.getElementById('stat-auto').textContent = Math.floor(state.autoIncome);
    document.getElementById('current-loc-name').textContent = LOCATIONS.find(l => l.id === state.currentLocId).name;
}

function updateCareer() {
    const roomsCount = state.rooms.length;

    // Текущий ранг
    const currentRankIndex = RANKS
        .map((r, i) => ({ ...r, i }))
        .filter(r => roomsCount >= r.roomsNeeded)
        .pop().i;

    const currentRank = RANKS[currentRankIndex];
    const nextRank = RANKS[currentRankIndex + 1];

    // Обновляем текст ранга и HP
    document.getElementById('rank-name').textContent = currentRank.name;
    state.maxHp = currentRank.hp;
    state.hp = Math.min(state.hp, state.maxHp);

    // Считаем прогресс до следующего ранга
    let progress = 100;
    if (nextRank) {
        const from = currentRank.roomsNeeded;
        const to = nextRank.roomsNeeded;
        progress = ((roomsCount - from) / (to - from)) * 100;
    }

    document.getElementById('xp-fill').style.width = Math.min(100, Math.max(0, progress)) + '%';
}


function renderCareer() {
    const cont = document.getElementById('career-list');
    cont.innerHTML = '';
    RANKS.forEach(r => {
        const active = state.rooms.length >= r.roomsNeeded;
        cont.innerHTML += `
            <div class="card ${active ? 'next-rank' : ''}">
                <div class="c-info">
                    <h4>${r.name} ${active ? '✅' : ''}</h4>
                    <p>Нужно комнат: ${r.roomsNeeded}</p>
                    <p>Здоровье: ${r.hp} HP | ${r.bonus}</p>
                </div>
            </div>`;
    });
}

function renderLocations() {
    const cont = document.getElementById('locations-list');
    cont.innerHTML = '';
    LOCATIONS.forEach(loc => {
        const bought = state.rooms.includes(loc.id);
        cont.innerHTML += `
            <div class="card">
                <div class="c-info">
                    <h4>${loc.name}</h4>
                    <p>👾 Враг: ${loc.enemyName}</p>
                    <p>Доход: +${loc.income}/с</p>
                </div>
                ${bought ? `<button class="buy-btn" onclick="setLoc('${loc.id}')">Войти</button>` : 
                `<button class="buy-btn" onclick="buyLoc('${loc.id}', ${loc.price})">${loc.price} 💰</button>`}
            </div>`;
    });
}

window.buyLoc = (id, price) => {
    if (state.money >= price) {
        state.money -= price;
        state.rooms.push(id);
        state.autoIncome += LOCATIONS.find(l => l.id === id).income;

        updateCareer();
        renderLocations();
        renderCareer();
        updateUI();   // ← ВОТ ЭТО НЕ ХВАТАЛО
        save();
    }
};
    

window.setLoc = (id) => { state.currentLocId = id; nav('main'); updateUI(); };

window.nav = (id) => {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('screen-' + id).classList.remove('hidden');
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    if (event) event.currentTarget.classList.add('active');
};



function renderBoosts() {
    const cont = document.getElementById('boosts-list');
    cont.innerHTML = '';

    BOOSTS.forEach(b => {
        const currentPrice = boostPrices[b.id];

        cont.innerHTML += `
            <div class="card">
                <div class="c-info">
                    <h4>${b.name}</h4>
                    <p>Эффект: +${b.effect}</p>
                    <p>Цена: ${currentPrice} 💰</p>
                </div>
                <button class="buy-btn" onclick="buyB('${b.id}')">${currentPrice} 💰</button>
            </div>
        `;
    });
}


window.buyB = (boostId) => {
    const boost = BOOSTS.find(b => b.id === boostId);
    const price = boostPrices[boostId];

    if (!boost) return;

    // Вайп
    if (boost.type === 'wipe') {
        const ok = confirm('Ты точно хочешь удалить ВЕСЬ прогресс? Это действие нельзя отменить.');
        if (!ok) return;
        wipeProgress();
        return;
    }

    // Проверка денег
    if (state.money < price) {
        alert('Не хватает 💰');
        return;
    }

    // Покупка
    state.money -= price;

    if (boost.type === 'click') state.clickPower += boost.effect;
    if (boost.type === 'auto') state.autoIncome += boost.effect;
    if (boost.type === 'heal') state.hp = Math.min(state.maxHp, state.hp + boost.effect);

    // Масштабирование цены (ТОЛЬКО если scales: true)
    if (boost.scales === true) {
        boostPrices[boostId] = Math.floor(boostPrices[boostId] * 2);
    }

    // Сохраняем цены
    localStorage.setItem('santa_boostPrices', JSON.stringify(boostPrices));

    updateUI();
    renderBoosts();
    save();
};


function wipeProgress() {
    localStorage.clear();

    // Полный ресет состояния в дефолт
    state = {
        money: 0,
        rooms: ['hall'],
        clickPower: 5,
        autoIncome: 0,
        hp: 100,
        maxHp: 100,
        currentLocId: 'hall',
        lastVisit: Date.now()
    };

    // Сброс цен бустов к базовым
    boostPrices = {};
    BOOSTS.forEach(b => boostPrices[b.id] = b.basePrice);

    // Обновление UI
    updateCareer();
    renderLocations();
    renderBoosts();
    renderCareer();
    updateUI();
    nav('main');

    alert('Прогресс удалён. Начинаем с нуля 💀');
}



document.getElementById('main-hero').onclick = () => { state.money += state.clickPower; updateUI(); save(); };
function save() {
    localStorage.setItem('santa_money', state.money);
    localStorage.setItem('santa_rooms', JSON.stringify(state.rooms));
    localStorage.setItem('santa_click', state.clickPower);
    localStorage.setItem('santa_auto', state.autoIncome);
    localStorage.setItem('santa_hp', state.hp);
    localStorage.setItem('santa_maxhp', state.maxHp);
    localStorage.setItem('santa_loc', state.currentLocId);
    localStorage.setItem('santa_lastVisit', Date.now());
}


init();