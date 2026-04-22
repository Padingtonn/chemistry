// Текущее состояние
let currentState = {
    currentPart: 1,
    totalParts: 6,
    currentTest: null,
    currentQuestion: 0,
    userAnswers: [],
    testStarted: false
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTestVariants();
    initTestNavigationButtons(); // <-- НОВОЕ: однократная привязка кнопок теста
    showTheory();
});

// НОВАЯ ФУНКЦИЯ: Привязка обработчиков кнопок теста один раз
function initTestNavigationButtons() {
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const submitBtn = document.getElementById('submitTest');
    
    if (prevBtn) {
        prevBtn.removeEventListener('click', showPrevQuestion);
        prevBtn.addEventListener('click', showPrevQuestion);
    }
    if (nextBtn) {
        nextBtn.removeEventListener('click', showNextQuestion);
        nextBtn.addEventListener('click', showNextQuestion);
    }
    if (submitBtn) {
        submitBtn.removeEventListener('click', submitTest);
        submitBtn.addEventListener('click', submitTest);
    }
}

// Инициализация навигации
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            switch(target) {
                case 'theory': showTheory(); break;
                case 'examples': showExamples(); break;
                case 'oge': showOge(); break;
                case 'ege': showEge(); break;
                case 'tests': showTests(); break;
            }
        });
    });
}

// Показать теорию
function showTheory() {
    hideAllSections();
    document.getElementById('theory').classList.add('active');
    showPart(1);
}

// Показать примеры
function showExamples() {
    hideAllSections();
    document.getElementById('examples').classList.add('active');
}

// Показать раздел ОГЭ
function showOge() {
    hideAllSections();
    const ogeSection = document.getElementById('oge');
    if (ogeSection) {
        ogeSection.classList.add('active');
        if (typeof loadTasks === 'function') {
            const activeFilter = document.querySelector('.filter-btn[data-exam="oge"].active');
            const topic = activeFilter ? activeFilter.getAttribute('data-topic') : 'all';
            loadTasks('oge', topic);
        }
    }
}

// Показать раздел ЕГЭ
function showEge() {
    hideAllSections();
    const egeSection = document.getElementById('ege');
    if (egeSection) {
        egeSection.classList.add('active');
        if (typeof loadTasks === 'function') {
            const activeFilter = document.querySelector('.filter-btn[data-exam="ege"].active');
            const topic = activeFilter ? activeFilter.getAttribute('data-topic') : 'all';
            loadTasks('ege', topic);
        }
    }
}

// Показать тесты
function showTests() {
    hideAllSections();
    document.getElementById('tests').classList.add('active');
    showTestVariants();
}

// Скрыть все разделы
function hideAllSections() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
}

// Навигация по частям теории
function showPart(partNumber) {
    const parts = document.querySelectorAll('.theory-part');
    parts.forEach(part => part.classList.remove('active'));
    
    let partId;
    if (partNumber === 1) partId = 'part1';
    else if (partNumber === 1.1) partId = 'part1-1';
    else partId = `part${partNumber}`;
    
    const targetPart = document.getElementById(partId);
    if (targetPart) {
        targetPart.classList.add('active');
        currentState.currentPart = partNumber;
        targetPart.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showNextPart(current) {
    let nextPart;
    if (current === 1) nextPart = 1.1;
    else if (current === 1.1) nextPart = 2;
    else nextPart = parseInt(current) + 1;
    
    if (nextPart <= currentState.totalParts) showPart(nextPart);
}

function showPrevPart(current) {
    let prevPart;
    if (current === 1.1) prevPart = 1;
    else if (current === 2) prevPart = 1.1;
    else prevPart = parseInt(current) - 1;
    
    if (prevPart >= 1) showPart(prevPart);
}

// Инициализация вариантов тестов
function initializeTestVariants() {
    const variantsGrid = document.getElementById('variantsGrid');
    if (!variantsGrid) return;
    
    if (typeof testData !== 'undefined' && testData.variants) {
        variantsGrid.innerHTML = '';
        testData.variants.forEach(variant => {
            const button = document.createElement('button');
            button.className = 'variant-btn';
            button.textContent = variant.title;
            button.addEventListener('click', () => startTest(variant.id));
            variantsGrid.appendChild(button);
        });
    }
}

function showTestVariants() {
    const testIntro = document.getElementById('testIntro');
    const testContainer = document.getElementById('testContainer');
    const testResults = document.getElementById('testResults');
    
    if (testIntro) testIntro.style.display = 'block';
    if (testContainer) testContainer.style.display = 'none';
    if (testResults) testResults.style.display = 'none';
    
    currentState.testStarted = false;
    currentState.currentTest = null;
    currentState.currentQuestion = 0;
    currentState.userAnswers = [];
}

// Начать тест
function startTest(variantId) {
    const variant = testData.variants.find(v => v.id === variantId);
    if (!variant) return;
    
    currentState.currentTest = variant;
    currentState.currentQuestion = 0;
    currentState.userAnswers = new Array(variant.questions.length).fill(null);
    currentState.testStarted = true;
    
    document.getElementById('testIntro').style.display = 'none';
    document.getElementById('testContainer').style.display = 'block';
    document.getElementById('testResults').style.display = 'none';
    
    document.getElementById('testTitle').textContent = variant.title;
    updateProgress();
    loadQuestion();
    updateNavigationButtons(); // Обновляем состояние кнопок сразу
}

// Загрузить вопрос
function loadQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const question = currentState.currentTest.questions[currentState.currentQuestion];
    
    questionContainer.innerHTML = `
        <div class="question">
            <div class="question-text">${currentState.currentQuestion + 1}. ${question.text}</div>
            <div class="options" id="optionsContainer">
                ${question.options.map((option) => `
                    <div class="option ${currentState.userAnswers[currentState.currentQuestion] === option.id ? 'selected' : ''}" 
                         data-option="${option.id}">
                        <span class="option-letter">${option.id})</span>
                        <span class="option-text">${option.text}</span>
                    </div>
                `).join('')}
            </div>
            <div class="feedback ${currentState.userAnswers[currentState.currentQuestion] ? 
                (question.options.find(o => o.id === currentState.userAnswers[currentState.currentQuestion])?.correct ? 'correct' : 'incorrect') : ''}" 
                 id="feedback" style="${currentState.userAnswers[currentState.currentQuestion] ? 'display: block;' : 'display: none;'}">
                ${currentState.userAnswers[currentState.currentQuestion] ? 
                    (question.options.find(o => o.id === currentState.userAnswers[currentState.currentQuestion])?.correct ? 
                    '✓ Верно!' : `✗ Неверно. ${question.explanation}`) : ''}
            </div>
        </div>
    `;
    
    const options = questionContainer.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            if (!currentState.userAnswers[currentState.currentQuestion]) {
                const selectedOption = this.getAttribute('data-option');
                selectOption(selectedOption);
            }
        });
    });
}

// Выбор варианта ответа
function selectOption(optionId) {
    currentState.userAnswers[currentState.currentQuestion] = optionId;
    
    const question = currentState.currentTest.questions[currentState.currentQuestion];
    const isCorrect = question.options.find(o => o.id === optionId)?.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
        if (opt.getAttribute('data-option') === optionId) {
            opt.classList.add('selected');
            opt.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    });
    
    const feedback = document.getElementById('feedback');
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = isCorrect ? '✓ Верно!' : `✗ Неверно. ${question.explanation}`;
    feedback.style.display = 'block';
    
    updateNavigationButtons();
}

// Показать предыдущий вопрос
function showPrevQuestion() {
    if (currentState.currentQuestion > 0) {
        currentState.currentQuestion--;
        updateProgress();
        loadQuestion();
        updateNavigationButtons();
    }
}

// Показать следующий вопрос
function showNextQuestion() {
    if (currentState.currentQuestion < currentState.currentTest.questions.length - 1) {
        currentState.currentQuestion++;
        updateProgress();
        loadQuestion();
        updateNavigationButtons();
    }
}

// Обновить кнопки навигации
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const submitBtn = document.getElementById('submitTest');
    
    if (!prevBtn || !nextBtn || !submitBtn) return;
    if (!currentState.currentTest) return;
    
    prevBtn.disabled = currentState.currentQuestion === 0;
    
    if (currentState.currentQuestion === currentState.currentTest.questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
        const allAnswered = currentState.userAnswers.every(answer => answer !== null);
        submitBtn.disabled = !allAnswered;
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
        const currentAnswered = currentState.userAnswers[currentState.currentQuestion] !== null;
        nextBtn.disabled = !currentAnswered;
    }
}

// Обновить прогресс
function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (!progressFill || !progressText) return;
    
    const progress = ((currentState.currentQuestion + 1) / currentState.currentTest.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentState.currentQuestion + 1}/${currentState.currentTest.questions.length}`;
}

// Завершить тест
function submitTest() {
    const allAnswered = currentState.userAnswers.every(answer => answer !== null);
    if (!allAnswered) {
        alert('Пожалуйста, ответьте на все вопросы перед завершением теста.');
        return;
    }
    showResults();
}

// Показать результаты
function showResults() {
    document.getElementById('testContainer').style.display = 'none';
    document.getElementById('testResults').style.display = 'block';
    
    let correctCount = 0;
    const resultsDetails = document.getElementById('resultsDetails');
    resultsDetails.innerHTML = '';
    
    currentState.currentTest.questions.forEach((question, index) => {
        const userAnswer = currentState.userAnswers[index];
        const isCorrect = question.options.find(o => o.id === userAnswer)?.correct || false;
        if (isCorrect) correctCount++;
        
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
        resultItem.innerHTML = `
            <div><strong>Вопрос ${index + 1}:</strong> ${question.text.substring(0, 50)}...</div>
            <div>${isCorrect ? '✓' : '✗'}</div>
        `;
        resultsDetails.appendChild(resultItem);
    });
    
    const totalQuestions = currentState.currentTest.questions.length;
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    
    document.getElementById('scorePercent').textContent = `${scorePercent}%`;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    
    const scoreCircle = document.querySelector('.score-circle');
    if (scoreCircle) {
        scoreCircle.style.background = `conic-gradient(var(--success) 0% ${scorePercent}%, var(--light) ${scorePercent}% 100%)`;
    }
}

// Функция для переключения видимости решения (для ОГЭ/ЕГЭ)
function toggleSolution(element) {
    const solution = element.nextElementSibling;
    const icon = element.querySelector('i');
    if (solution.style.display === 'none' || !solution.style.display) {
        solution.style.display = 'block';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
        element.innerHTML = element.innerHTML.replace('Показать', 'Скрыть');
    } else {
        solution.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        element.innerHTML = element.innerHTML.replace('Скрыть', 'Показать');
    }
}

// Закрыть модальное окно
function closeTaskModal() {
    const modal = document.getElementById('taskModal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
    }
}

// Показать модальное окно с заданием
function showTaskInModal(taskId) {
    const modal = document.getElementById('taskModal');
    const modalBody = document.getElementById('modalBody');
    if (!modal || !modalBody) return;
    modalBody.innerHTML = `<h3>Задание №${taskId}</h3><p>Детальная информация о задании...</p>`;
    modal.classList.add('show');
    modal.style.display = 'block';
}

// Закрытие модального окна при клике вне его
document.addEventListener('click', function(event) {
    const modal = document.getElementById('taskModal');
    if (modal && event.target === modal) closeTaskModal();
});

// Глобальные функции
window.showTheory = showTheory;
window.showExamples = showExamples;
window.showOge = showOge;
window.showEge = showEge;
window.showTests = showTests;
window.showNextPart = showNextPart;
window.showPrevPart = showPrevPart;
window.showTestVariants = showTestVariants;
window.toggleSolution = toggleSolution;
window.closeTaskModal = closeTaskModal;
window.showTaskInModal = showTaskInModal;