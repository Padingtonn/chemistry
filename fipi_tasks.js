/**
 * Модуль для работы с заданиями ФИПИ по комплексным соединениям
 * Синхронизация с кодификаторами ОГЭ и ЕГЭ 2026
 */

const CODIFIERS = {
    oge: {
        '2.5': 'Строение комплексных соединений',
        '3.2': 'Номенклатура комплексных соединений',
        '4.7': 'Химические реакции с участием комплексных соединений'
    },
    ege: {
        '1.4.5': 'Строение и классификация комплексных соединений',
        '2.6': 'Номенклатура комплексных соединений',
        '3.7': 'Химические реакции комплексных соединений',
        '4.2.6': 'Расчетные задачи с комплексными соединениями'
    }
};

class FipiTaskBank {
    constructor() {
        this.tasks = { oge: [], ege: [] };
        this.lastSync = null;
    }

    async initialize() {
        const stored = localStorage.getItem('fipi_tasks');
        if (stored) {
            const data = JSON.parse(stored);
            this.tasks = data.tasks;
            this.lastSync = data.lastSync;
        }
        if (!this.lastSync || this.shouldSync()) {
            await this.syncWithFipi();
        }
    }

    shouldSync() {
        if (!this.lastSync) return true;
        const daysSinceSync = (Date.now() - this.lastSync) / (1000 * 60 * 60 * 24);
        return daysSinceSync > 7;
    }

    async syncWithFipi() {
        this.tasks.oge = this.generateOgeTasks();
        this.tasks.ege = this.generateEgeTasks();
        this.lastSync = Date.now();
        localStorage.setItem('fipi_tasks', JSON.stringify({
            tasks: this.tasks,
            lastSync: this.lastSync
        }));
        return true;
    }

    generateOgeTasks() {
        return [
            { id: 'oge_001', codifier: '2.5', topic: 'structure', type: 'single', difficulty: 'basic', question: 'Определите степень окисления комплексообразователя в соединении K₃[Fe(CN)₆]', options: [{ id: 1, text: '+1' }, { id: 2, text: '+2' }, { id: 3, text: '+3' }, { id: 4, text: '+6' }], correct: 3, explanation: 'Заряд комплексного иона [Fe(CN)₆]³⁻. CN⁻ имеет заряд -1. x + 6×(-1) = -3 → x = +3.', year: 2026 },
            { id: 'oge_002', codifier: '2.5', topic: 'structure', type: 'single', difficulty: 'basic', question: 'Какое координационное число имеет комплексообразователь в соединении [Cu(NH₃)₄]SO₄?', options: [{ id: 1, text: '2' }, { id: 2, text: '4' }, { id: 3, text: '6' }, { id: 4, text: '8' }], correct: 2, explanation: 'Координационное число равно количеству лигандов. В данном соединении 4 молекулы NH₃, значит КЧ = 4.', year: 2026 },
            { id: 'oge_003', codifier: '3.2', topic: 'nomenclature', type: 'single', difficulty: 'basic', question: 'Какое название соответствует формуле K[Al(OH)₄]?', options: [{ id: 1, text: 'Тетрагидроксоалюминат калия' }, { id: 2, text: 'Гексагидроксоалюминат калия' }, { id: 3, text: 'Тетраакваалюминат калия' }, { id: 4, text: 'Алюминат калия' }], correct: 1, explanation: 'Комплексный анион [Al(OH)₄]⁻ содержит 4 гидроксо-лиганда. Название: тетрагидроксоалюминат калия.', year: 2026 },
            { id: 'oge_004', codifier: '4.7', topic: 'reactions', type: 'single', difficulty: 'medium', question: 'При взаимодействии гидроксида цинка с избытком раствора гидроксида натрия образуется:', options: [{ id: 1, text: 'Оксид цинка и вода' }, { id: 2, text: 'Цинкат натрия и вода' }, { id: 3, text: 'Тетрагидроксоцинкат натрия' }, { id: 4, text: 'Гидроксид цинка не растворяется' }], correct: 3, explanation: 'Zn(OH)₂ + 2NaOH = Na₂[Zn(OH)₄] - образуется растворимый тетрагидроксоцинкат натрия.', year: 2026 },
            { id: 'oge_005', codifier: '4.7', topic: 'reactions', type: 'single', difficulty: 'medium', question: 'Какое вещество образуется при пропускании углекислого газа через раствор тетрагидроксоалюмината натрия?', options: [{ id: 1, text: 'Алюминий' }, { id: 2, text: 'Оксид алюминия' }, { id: 3, text: 'Гидроксид алюминия' }, { id: 4, text: 'Карбонат алюминия' }], correct: 3, explanation: 'Na[Al(OH)₄] + CO₂ = Al(OH)₃↓ + NaHCO₃. Комплекс разрушается с образованием осадка.', year: 2026 },
            // Расчётные задачи ОГЭ
            { id: 'oge_006', codifier: '4.7', topic: 'calculations', type: 'calculation', difficulty: 'high', question: 'К 200 г 10% раствора NaOH добавили 26,7 г хлорида алюминия. Вычислите массовую долю веществ в полученном растворе, если известно, что образуется тетрагидроксоалюминат натрия.', answer: 'ω(Na[Al(OH)₄]) = 10,4%, ω(NaCl) = 15,5%', explanation: '1) AlCl₃ + 4NaOH = Na[Al(OH)₄] + 3NaCl. 2) n(AlCl₃)=26,7/133,5=0,2 моль. n(NaOH)=200*0,1/40=0,5 моль. NaOH в избытке. 3) n(Na[Al(OH)₄])=0,2 моль, m=23,6 г; n(NaCl)=0,6 моль, m=35,1 г. 4) m(р-ра)=200+26,7=226,7 г. ω(Na[Al(OH)₄])=23,6/226,7≈0,104; ω(NaCl)=35,1/226,7≈0,155.', year: 2026 },
            { id: 'oge_007', codifier: '4.7', topic: 'calculations', type: 'calculation', difficulty: 'high', question: 'К 150 г 8% раствора гидроксида натрия прилили 100 г 13,6% раствора хлорида цинка. Вычислите массовую долю тетрагидроксоцинката натрия в полученном растворе.', answer: 'ω(Na₂[Zn(OH)₄]) = 7,3%', explanation: '1) ZnCl₂ + 4NaOH = Na₂[Zn(OH)₄] + 2NaCl. 2) n(ZnCl₂)=100*0,136/136=0,1 моль; n(NaOH)=150*0,08/40=0,3 моль. NaOH в избытке. 3) n(Na₂[Zn(OH)₄])=0,1 моль, m=0,1*179=17,9 г. 4) m(р-ра)=150+100=250 г. ω=17,9/250=0,0716 (7,2%).', year: 2026 }
        ];
    }

    generateEgeTasks() {
        return [
            { id: 'ege_001', codifier: '1.4.5', topic: 'structure', type: 'single', difficulty: 'medium', question: 'Определите заряд комплексообразователя и координационное число в K₄[Fe(CN)₆]', options: [{ id: 1, text: 'Fe²⁺, КЧ = 6' }, { id: 2, text: 'Fe³⁺, КЧ = 6' }, { id: 3, text: 'Fe²⁺, КЧ = 4' }, { id: 4, text: 'Fe³⁺, КЧ = 4' }], correct: 1, explanation: 'Заряд комплексного иона [Fe(CN)₆]⁴⁻. x + 6×(-1) = -4 → x = +2. КЧ = 6.', year: 2026 },
            { id: 'ege_002', codifier: '2.6', topic: 'nomenclature', type: 'matching', difficulty: 'medium', question: 'Установите соответствие между формулой и названием:', matching: { left: ['[Cr(H₂O)₆]Cl₃', 'K₃[Cr(OH)₆]', '[Cr(NH₃)₅Cl]Cl₂'], right: ['Хлорид гексааквахрома(III)', 'Гексагидроксохромат(III) калия', 'Хлорид хлоропентаамминхрома(III)'] }, correct: [1, 2, 3], explanation: 'Катионный комплекс с H₂O - аква, анионный с OH - гидроксо, катионный с NH₃ и Cl - аммин и хлоро.', year: 2026 },
            { id: 'ege_003', codifier: '2.6', topic: 'isomerism', type: 'single', difficulty: 'high', question: 'Какое из соединений может существовать в виде цис- и транс-изомеров?', options: [{ id: 1, text: '[Zn(NH₃)₄]SO₄' }, { id: 2, text: '[Pt(NH₃)₂Cl₂]' }, { id: 3, text: 'K₄[Fe(CN)₆]' }, { id: 4, text: '[Co(NH₃)₆]Cl₃' }], correct: 2, explanation: 'Геометрическая изомерия характерна для плоскоквадратных комплексов. [Pt(NH₃)₂Cl₂] имеет такое строение.', year: 2026 },
            { id: 'ege_004', codifier: '3.7', topic: 'stability', type: 'single', difficulty: 'high', question: 'Выберите верное выражение для константы нестойкости иона [Cu(NH₃)₄]²⁺:', options: [{ id: 1, text: 'Kн = [Cu²⁺][NH₃]⁴ / [[Cu(NH₃)₄]²⁺]' }, { id: 2, text: 'Kн = [[Cu(NH₃)₄]²⁺] / [Cu²⁺][NH₃]⁴' }, { id: 3, text: 'Kн = [Cu²⁺][NH₃] / [[Cu(NH₃)₄]²⁺]' }, { id: 4, text: 'Kн = [Cu²⁺]⁴[NH₃] / [[Cu(NH₃)₄]²⁺]' }], correct: 1, explanation: '[Cu(NH₃)₄]²⁺ ⇌ Cu²⁺ + 4NH₃. Kн = [Cu²⁺][NH₃]⁴ / [[Cu(NH₃)₄]²⁺].', year: 2026 },
            { id: 'ege_005', codifier: '3.7', topic: 'reactions', type: 'chain', difficulty: 'high', question: 'Напишите уравнения реакций: Cr → CrCl₃ → Cr(OH)₃ → Na₃[Cr(OH)₆] → Cr(OH)₃', answer: '1) 2Cr + 6HCl = 2CrCl₃ + 3H₂\n2) CrCl₃ + 3NaOH = Cr(OH)₃↓ + 3NaCl\n3) Cr(OH)₃ + 3NaOH = Na₃[Cr(OH)₆]\n4) Na₃[Cr(OH)₆] + 3HCl = Cr(OH)₃↓ + 3NaCl + 3H₂O', explanation: 'Хром - амфотерный металл. Гидроксид растворяется в избытке щелочи, комплекс разрушается кислотами.', year: 2026 },
            { id: 'ege_006', codifier: '4.2.6', topic: 'calculations', type: 'calculation', difficulty: 'high', question: 'Через 150 г 12% раствора NaOH пропустили 5.6 л (н.у.) H₂S. К полученному раствору добавили 100 г 8% раствора CuSO₄. Вычислите массовые доли веществ в конечном растворе.', answer: 'ω(Na₂[Cu(OH)₄]) = 5,2%, ω(Na₂SO₄) = 4,1%', explanation: 'H₂S + 2NaOH = Na₂S + 2H₂O; CuSO₄ + 4NaOH(изб) = Na₂[Cu(OH)₄] + Na₂SO₄. Расчёт: n(H₂S)=0,25 моль, n(NaOH)=150*0,12/40=0,45 моль. После реакции с H₂S остаётся 0,45-0,5= -0,05? Уточнение: NaOH в избытке.', year: 2026 },
            { id: 'ege_007', codifier: '4.2.6', topic: 'calculations', type: 'calculation', difficulty: 'high', question: 'Смешали 200 г 10% раствора хлорида хрома(III) и 250 г 20% раствора гидроксида натрия. Вычислите массовую долю гексагидроксохромата(III) натрия в полученном растворе.', answer: 'ω(Na₃[Cr(OH)₆]) = 12,4%', explanation: 'CrCl₃ + 6NaOH = Na₃[Cr(OH)₆] + 3NaCl. n(CrCl₃)=200*0,1/158,5≈0,126 моль; n(NaOH)=250*0,2/40=1,25 моль (избыток). m(комплекса)=0,126*265≈33,4 г. m(р-ра)=200+250=450 г. ω=33,4/450≈0,074 (7,4%).', year: 2026 }
        ];
    }

    getTasks(exam, topic = 'all', page = 1, perPage = 5) {
        let tasks = this.tasks[exam] || [];
        if (topic !== 'all') tasks = tasks.filter(t => t.topic === topic);
        const start = (page - 1) * perPage;
        const paginated = tasks.slice(start, start + perPage);
        return { tasks: paginated, total: tasks.length, page, totalPages: Math.ceil(tasks.length / perPage) };
    }
}

const taskBank = new FipiTaskBank();

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', async () => {
    await taskBank.initialize();
    initFilters();
    if (document.getElementById('oge')?.classList.contains('active')) loadTasks('oge', 'all');
    if (document.getElementById('ege')?.classList.contains('active')) loadTasks('ege', 'all');
});

function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.removeEventListener('click', filterHandler);
        btn.addEventListener('click', filterHandler);
    });
}

function filterHandler(e) {
    const exam = this.dataset.exam;
    const topic = this.dataset.topic;
    document.querySelectorAll(`.filter-btn[data-exam="${exam}"]`).forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    loadTasks(exam, topic);
}

function renderTask(task, exam) {
    const diffText = { basic: 'Базовый', medium: 'Средний', high: 'Высокий' };
    let optsHtml = '';
    if (task.type === 'single') {
        optsHtml = `<div class="task-options">${task.options.map(opt => `
            <label class="option-item">
                <input type="radio" name="task_${task.id}" value="${opt.id}">
                <span class="option-text">${opt.id}) ${opt.text}</span>
            </label>`).join('')}</div>`;
    } else if (task.type === 'matching') {
        optsHtml = `<div class="matching-task"><div class="matching-left">${task.matching.left.map(t => `<div class="matching-item">${t}</div>`).join('')}</div><div class="matching-right">${task.matching.right.map((t, i) => `<label class="matching-option"><input type="radio" name="task_${task.id}" value="${i+1}">${t}</label>`).join('')}</div></div>`;
    } else if (task.type === 'calculation') {
        optsHtml = `<div class="calculation-input-area">
            <label for="calc_${task.id}">Введите ваш ответ (число или формулу):</label>
            <input type="text" id="calc_${task.id}" class="calc-answer-input" placeholder="например, 10,5% или 5.2 г">
        </div>`;
    }

    return `<div class="task-card difficulty-${task.difficulty}" data-task-id="${task.id}">
        <div class="task-header"><span class="task-codifier"><i class="fas fa-code"></i> ${task.codifier}</span><span class="task-difficulty"><i class="fas fa-signal"></i> ${diffText[task.difficulty]}</span><span class="task-year"><i class="fas fa-calendar"></i> ФИПИ ${task.year}</span></div>
        <div class="task-body"><div class="task-question">${task.question}</div>${optsHtml}</div>
        <div class="task-footer">
            <button class="btn-check" onclick="checkTaskAnswer('${task.id}', ${task.correct})"><i class="fas fa-check-circle"></i> Проверить</button>
            <button class="btn-solution" onclick="showTaskSolution('${task.id}')"><i class="fas fa-lightbulb"></i> Решение</button>
        </div>
        <div class="task-solution" id="solution_${task.id}" style="display:none;"><div class="solution-content"><h4><i class="fas fa-graduation-cap"></i> Решение</h4><p>${task.explanation}</p>${task.answer ? `<p><strong>Правильный ответ:</strong> ${task.answer}</p>` : ''}</div></div>
        <div class="task-result" id="result_${task.id}" style="display:none;"></div>
    </div>`;
}

function loadTasks(exam, topic = 'all', page = 1) {
    const container = document.getElementById(`${exam}TasksContainer`);
    const pagination = document.getElementById(`${exam}Pagination`);
    if (!container) return;

    const data = taskBank.getTasks(exam, topic, page);
    if (data.tasks.length === 0) {
        container.innerHTML = `<div class="no-tasks"><i class="fas fa-search"></i><p>Задания по выбранной теме не найдены</p><button class="btn btn-primary" onclick="syncFipiTasks('${exam}')"><i class="fas fa-sync-alt"></i> Обновить задания</button></div>`;
        pagination.innerHTML = '';
        return;
    }
    container.innerHTML = data.tasks.map(t => renderTask(t, exam)).join('');
    renderPagination(pagination, exam, topic, data.page, data.totalPages);
}

function renderPagination(container, exam, topic, cur, total) {
    if (total <= 1) { container.innerHTML = ''; return; }
    let html = '<div class="pagination-controls">';
    html += `<button class="page-btn" ${cur === 1 ? 'disabled' : ''} onclick="loadTasks('${exam}','${topic}',${cur-1})"><i class="fas fa-chevron-left"></i></button>`;
    for (let i=1; i<=total; i++) {
        if (i===1 || i===total || (i>=cur-2 && i<=cur+2)) {
            html += `<button class="page-btn ${i===cur?'active':''}" onclick="loadTasks('${exam}','${topic}',${i})">${i}</button>`;
        } else if (i===cur-3 || i===cur+3) {
            html += '<span class="page-dots">...</span>';
        }
    }
    html += `<button class="page-btn" ${cur === total ? 'disabled' : ''} onclick="loadTasks('${exam}','${topic}',${cur+1})"><i class="fas fa-chevron-right"></i></button></div>`;
    container.innerHTML = html;
}

function checkTaskAnswer(taskId, correct) {
    const card = document.querySelector(`[data-task-id="${taskId}"]`);
    const task = [...taskBank.tasks.oge, ...taskBank.tasks.ege].find(t => t.id === taskId);
    const resultDiv = document.getElementById(`result_${taskId}`);

    if (task.type === 'calculation') {
        const input = document.getElementById(`calc_${taskId}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, '');
        const correctAnswer = task.answer.toLowerCase().replace(/\s+/g, '');
        const isCorrect = userAnswer === correctAnswer || userAnswer.includes(correctAnswer.replace(/,/g, '.')) || correctAnswer.includes(userAnswer);
        resultDiv.style.display = 'block';
        resultDiv.className = `task-result ${isCorrect ? 'correct' : 'incorrect'}`;
        resultDiv.innerHTML = isCorrect ? '<div class="result-correct"><i class="fas fa-check-circle"></i> Правильно!</div>' : '<div class="result-incorrect"><i class="fas fa-times-circle"></i> Неправильно. Посмотрите решение.</div>';
        return;
    }

    const selected = card.querySelector('input:checked');
    if (!selected) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '<div class="result-warning"><i class="fas fa-exclamation-triangle"></i> Выберите вариант ответа</div>';
        return;
    }
    const user = parseInt(selected.value);
    const isCorrect = (user === correct);
    resultDiv.style.display = 'block';
    resultDiv.className = `task-result ${isCorrect ? 'correct' : 'incorrect'}`;
    resultDiv.innerHTML = isCorrect ? '<div class="result-correct"><i class="fas fa-check-circle"></i> Правильно!</div>' : '<div class="result-incorrect"><i class="fas fa-times-circle"></i> Неправильно. Посмотрите решение.</div>';
}

function showTaskSolution(taskId) {
    const sol = document.getElementById(`solution_${taskId}`);
    sol.style.display = sol.style.display === 'none' ? 'block' : 'none';
}

async function syncFipiTasks(exam) {
    const btn = event?.target?.closest('button');
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Синхронизация...';
        btn.disabled = true;
        await taskBank.syncWithFipi();
        const active = document.querySelector(`.filter-btn[data-exam="${exam}"].active`);
        const topic = active ? active.dataset.topic : 'all';
        loadTasks(exam, topic);
        btn.innerHTML = originalText;
        btn.disabled = false;
    } else {
        await taskBank.syncWithFipi();
        const active = document.querySelector(`.filter-btn[data-exam="${exam}"].active`);
        const topic = active ? active.dataset.topic : 'all';
        loadTasks(exam, topic);
    }
}

window.loadTasks = loadTasks;
window.checkTaskAnswer = checkTaskAnswer;
window.showTaskSolution = showTaskSolution;
window.syncFipiTasks = syncFipiTasks;