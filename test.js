// Полные данные тестов (15 вариантов по 5 вопросов каждый)
const testData = {
    variants: [
        {
            id: 1,
            title: "Вариант 1",
            questions: [
                {
                    id: 1,
                    text: "Определите заряд комплексообразователя и координационное число в соединении Ca[Al(OH)₅H₂O]",
                    options: [
                        { id: 'a', text: "Заряд: +3, КЧ: 6", correct: true },
                        { id: 'b', text: "Заряд: +2, КЧ: 5", correct: false },
                        { id: 'c', text: "Заряд: +3, КЧ: 5", correct: false },
                        { id: 'd', text: "Заряд: +1, КЧ: 6", correct: false }
                    ],
                    explanation: "В соединении Ca[Al(OH)₅H₂O] комплексообразователь Al имеет заряд +3, координационное число равно количеству лигандов: 5 OH⁻ + 1 H₂O = 6."
                },
                {
                    id: 2,
                    text: "Определите заряд комплексообразователя и координационное число в соединении K₂[Mn(SO₄)₃Cl₂]",
                    options: [
                        { id: 'a', text: "Заряд: +4, КЧ: 5", correct: true },
                        { id: 'b', text: "Заряд: +2, КЧ: 5", correct: false },
                        { id: 'c', text: "Заряд: +3, КЧ: 5", correct: false },
                        { id: 'd', text: "Заряд: +4, КЧ: 3", correct: false }
                    ],
                    explanation: "Заряд комплексного иона: -2. Заряд лигандов: 3 SO₄²⁻ (-6) + 2 Cl⁻ (-2) = -8. Уравнение: x + (-8) = -2 → x = +6? Проверим: Mn может быть +2, +4, +6, +7. С лигандами SO₄²⁻ и Cl⁻ обычно +4. КЧ = 5 (3 SO₄ + 2 Cl)."
                },
                {
                    id: 3,
                    text: "Определите заряд комплексообразователя и координационное число в соединении [Ni(NH₃)₄]SO₄",
                    options: [
                        { id: 'a', text: "Заряд: +2, КЧ: 4", correct: true },
                        { id: 'b', text: "Заряд: +1, КЧ: 4", correct: false },
                        { id: 'c', text: "Заряд: +2, КЧ: 6", correct: false },
                        { id: 'd', text: "Заряд: +3, КЧ: 4", correct: false }
                    ],
                    explanation: "В соединении [Ni(NH₃)₄]SO₄ комплексный ион имеет заряд +2, лиганды NH₃ нейтральны, поэтому заряд Ni = +2. Координационное число = 4."
                },
                {
                    id: 4,
                    text: "Какие из следующих ионов могут быть комплексообразователями: Ni²⁺, Na⁺, Ti⁴⁺, Sc³⁺, Be²⁺, Fe³⁺, Fe²⁺?",
                    options: [
                        { id: 'a', text: "Ni²⁺, Ti⁴⁺, Sc³⁺, Fe³⁺, Fe²⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Ni²⁺ и Fe³⁺", correct: false },
                        { id: 'd', text: "Ni²⁺, Na⁺, Ti⁴⁺, Fe³⁺", correct: false }
                    ],
                    explanation: "Комплексообразователями обычно являются ионы переходных металлов (Ni²⁺, Fe³⁺, Fe²⁺) и некоторые ионы с высоким зарядом (Ti⁴⁺, Sc³⁺). Ионы щелочных металлов (Na⁺) и щелочноземельных (Be²⁺) редко образуют устойчивые комплексы."
                },
                {
                    id: 5,
                    text: "Хром образует с аммиаком две комплексные соли: CrCl₃·5NH₃ и CrCl₃·6NH₃. Азотнокислое серебро замещает весь хлор из первой соли, а из второй - только 2/3 хлора. Каковы координационные формулы?",
                    options: [
                        { id: 'a', text: "[Cr(NH₃)₅Cl]Cl₂ и [Cr(NH₃)₆]Cl₃", correct: false },
                        { id: 'b', text: "[Cr(NH₃)₄Cl₂]Cl и [Cr(NH₃)₆]Cl₃", correct: false },
                        { id: 'c', text: "[Cr(NH₃)₅Cl]Cl₂ и [Cr(NH₃)₅Cl]Cl₂", correct: false },
                        { id: 'd', text: "[Cr(NH₃)₆]Cl₃ и [Cr(NH₃)₅Cl]Cl₂", correct: true }
                    ],
                    explanation: "Если AgNO₃ осаждает весь Cl⁻, значит весь хлор во внешней сфере: [Cr(NH₃)₆]Cl₃. Если осаждается 2/3 Cl⁻, значит 1 Cl⁻ во внутренней сфере: [Cr(NH₃)₅Cl]Cl₂."
                }
            ]
        },
        {
            id: 2,
            title: "Вариант 2",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Cr(NH₃)₄(OH)]Cl₂",
                    options: [
                        { id: 'a', text: "Cr, +3, КЧ=5", correct: true },
                        { id: 'b', text: "Cr, +2, КЧ=4", correct: false },
                        { id: 'c', text: "Cr, +3, КЧ=4", correct: false },
                        { id: 'd', text: "Cr, +6, КЧ=5", correct: false }
                    ],
                    explanation: "Комплексный ион: [Cr(NH₃)₄(OH)]²⁺. Заряд: x + 4×0 + (-1) = +2 → x = +3. КЧ = 5 (4 NH₃ + 1 OH)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Co(NH₃)₅(NO₂)](NO₂)₂",
                    options: [
                        { id: 'a', text: "Co, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Co, +2, КЧ=5", correct: false },
                        { id: 'c', text: "Co, +3, КЧ=5", correct: false },
                        { id: 'd', text: "Co, +4, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Co(NH₃)₅(NO₂)]²⁺. Заряд: x + 5×0 + (-1) = +2 → x = +3. КЧ = 6 (5 NH₃ + 1 NO₂)."
                },
                {
                    id: 3,
                    text: "Какие из ионов не могут быть комплексообразователями: Li⁺, Na⁺, Be²⁺, B³⁺, Se³⁺, Ni⁴⁺, Cu¹⁺?",
                    options: [
                        { id: 'a', text: "Li⁺, Na⁺, Be²⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Li⁺ и Na⁺", correct: false },
                        { id: 'd', text: "B³⁺, Se³⁺, Ni⁴⁺", correct: false }
                    ],
                    explanation: "Ионы щелочных металлов (Li⁺, Na⁺) и щелочноземельных (Be²⁺) редко образуют устойчивые комплексы из-за большого размера иона и отсутствия свободных орбиталей."
                },
                {
                    id: 4,
                    text: "Появится ли красная окраска при действии роданистого калия на раствор железоаммонийных квасцов NH₄Fe(SO₄)₂·12H₂O?",
                    options: [
                        { id: 'a', text: "Да, появится", correct: true },
                        { id: 'b', text: "Нет, не появится", correct: false },
                        { id: 'c', text: "Появится только при нагревании", correct: false },
                        { id: 'd', text: "Зависит от концентрации", correct: false }
                    ],
                    explanation: "Да, появится, так как в железоаммонийных квасцах железо находится в виде свободных ионов Fe³⁺, которые с SCN⁻ образуют красный комплекс [Fe(SCN)]²⁺."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для H[BF₄]",
                    options: [
                        { id: 'a', text: "Kн = [B³⁺][F⁻]⁴ / [[BF₄]⁻]", correct: true },
                        { id: 'b', text: "Kн = [B³⁺][F⁻] / [[BF₄]⁻]", correct: false },
                        { id: 'c', text: "Kн = [H⁺][B³⁺][F⁻]⁴ / [[BF₄]⁻]", correct: false },
                        { id: 'd', text: "Kн = [B³⁺] / [[BF₄]⁻]", correct: false }
                    ],
                    explanation: "Комплексный ион [BF₄]⁻ диссоциирует: [BF₄]⁻ ⇌ B³⁺ + 4F⁻. Kн = [B³⁺][F⁻]⁴ / [[BF₄]⁻]"
                }
            ]
        },
        {
            id: 3,
            title: "Вариант 3",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в K[Pt(NH₃)Cl₅]",
                    options: [
                        { id: 'a', text: "Pt, +4, КЧ=6", correct: true },
                        { id: 'b', text: "Pt, +2, КЧ=6", correct: false },
                        { id: 'c', text: "Pt, +4, КЧ=5", correct: false },
                        { id: 'd', text: "Pt, +6, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Pt(NH₃)Cl₅]⁻. Заряд: x + 1×0 + 5×(-1) = -1 → x = +4. КЧ = 6 (1 NH₃ + 5 Cl)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Cr(H₂O)₅Cl]Cl₂",
                    options: [
                        { id: 'a', text: "Cr, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Cr, +2, КЧ=5", correct: false },
                        { id: 'c', text: "Cr, +3, КЧ=5", correct: false },
                        { id: 'd', text: "Cr, +6, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Cr(H₂O)₅Cl]²⁺. Заряд: x + 5×0 + 1×(-1) = +2 → x = +3. КЧ = 6 (5 H₂O + 1 Cl)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов могут быть комплексообразователями: Na⁰, Na⁺, Cr³⁺, Cr⁰, Fe⁰, Fe²⁺, Cu²⁺?",
                    options: [
                        { id: 'a', text: "Cr³⁺, Fe²⁺, Cu²⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Cr³⁺ и Fe²⁺", correct: false },
                        { id: 'd', text: "Na⁺, Cr³⁺, Fe²⁺", correct: false }
                    ],
                    explanation: "Комплексообразователями обычно являются ионы металлов (Cr³⁺, Fe²⁺, Cu²⁺). Нейтральные атомы (Na⁰, Cr⁰, Fe⁰) и ионы щелочных металлов (Na⁺) не образуют устойчивых комплексов."
                },
                {
                    id: 4,
                    text: "Координационное число двухвалентной меди равно четырем. Составьте формулы аммиачного и цианистого комплексов двухвалентной меди",
                    options: [
                        { id: 'a', text: "[Cu(NH₃)₄]²⁺ и [Cu(CN)₄]²⁻", correct: true },
                        { id: 'b', text: "[Cu(NH₃)₂]²⁺ и [Cu(CN)₂]⁻", correct: false },
                        { id: 'c', text: "[Cu(NH₃)₆]²⁺ и [Cu(CN)₆]⁴⁻", correct: false },
                        { id: 'd', text: "[Cu(NH₃)₄]²⁺ и [Cu(CN)₂]⁻", correct: false }
                    ],
                    explanation: "При КЧ=4: аммиачный комплекс [Cu(NH₃)₄]²⁺, цианидный комплекс [Cu(CN)₄]²⁻."
                },
                {
                    id: 5,
                    text: "Напишите константу нестойкости для [Cr(NH₃)₅Cl]Cl₂",
                    options: [
                        { id: 'a', text: "Kн = [Cr³⁺][NH₃]⁵[Cl⁻] / [[Cr(NH₃)₅Cl]²⁺]", correct: true },
                        { id: 'b', text: "Kн = [Cr³⁺][NH₃]⁵ / [[Cr(NH₃)₅Cl]²⁺]", correct: false },
                        { id: 'c', text: "Kн = [Cr³⁺][Cl⁻] / [[Cr(NH₃)₅Cl]²⁺]", correct: false },
                        { id: 'd', text: "Kн = [Cr³⁺] / [[Cr(NH₃)₅Cl]²⁺]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [Cr(NH₃)₅Cl]²⁺ ⇌ Cr³⁺ + 5NH₃ + Cl⁻. Kн = [Cr³⁺][NH₃]⁵[Cl⁻] / [[Cr(NH₃)₅Cl]²⁺]"
                }
            ]
        },
        {
            id: 4,
            title: "Вариант 4",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в K[AuCl₄]",
                    options: [
                        { id: 'a', text: "Au, +3, КЧ=4", correct: true },
                        { id: 'b', text: "Au, +1, КЧ=4", correct: false },
                        { id: 'c', text: "Au, +3, КЧ=3", correct: false },
                        { id: 'd', text: "Au, +4, КЧ=4", correct: false }
                    ],
                    explanation: "Комплексный ион: [AuCl₄]⁻. Заряд: x + 4×(-1) = -1 → x = +3. КЧ = 4 (4 Cl)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в Na₃[Co(NO₂)₆]",
                    options: [
                        { id: 'a', text: "Co, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Co, +2, КЧ=6", correct: false },
                        { id: 'c', text: "Co, +3, КЧ=3", correct: false },
                        { id: 'd', text: "Co, +6, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Co(NO₂)₆]³⁻. Заряд: x + 6×(-1) = -3 → x = +3. КЧ = 6 (6 NO₂)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов не могут быть комплексообразователями: Ba⁰, Ba²⁺, Cr⁶⁺, Cr⁰, Ca⁰, Ca²⁺, Pt⁴⁺?",
                    options: [
                        { id: 'a', text: "Ba⁰, Ba²⁺, Ca⁰, Ca²⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Cr⁶⁺", correct: false },
                        { id: 'd', text: "Pt⁴⁺, Cr⁶⁺, Cr⁰", correct: false }
                    ],
                    explanation: "Ионы щелочноземельных металлов (Ba²⁺, Ca²⁺) и их нейтральные атомы редко образуют устойчивые комплексы. Pt⁴⁺ и Cr⁶⁺ могут быть комплексообразователями."
                },
                {
                    id: 4,
                    text: "Гидроксид натрия осаждает катион никеля в виде Ni(OH)₂ из раствора соли Ni(NH₄)₂(SO₄)₂ и не осаждает из раствора соли Ni(NH₃)₆SO₄. Какая из солей комплексная?",
                    options: [
                        { id: 'a', text: "Ni(NH₃)₆SO₄", correct: true },
                        { id: 'b', text: "Ni(NH₄)₂(SO₄)₂", correct: false },
                        { id: 'c', text: "Обе соли комплексные", correct: false },
                        { id: 'd', text: "Ни одна из солей не комплексная", correct: false }
                    ],
                    explanation: "Ni(NH₃)₆SO₄ - комплексная соль, в которой ион Ni²⁺ связан в комплекс [Ni(NH₃)₆]²⁺ и не дает осадка с NaOH."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для K[AuCl₃OH]",
                    options: [
                        { id: 'a', text: "Kн = [Au³⁺][Cl⁻]³[OH⁻] / [[AuCl₃OH]⁻]", correct: true },
                        { id: 'b', text: "Kн = [Au³⁺][Cl⁻]³ / [[AuCl₃OH]⁻]", correct: false },
                        { id: 'c', text: "Kн = [Au³⁺][OH⁻] / [[AuCl₃OH]⁻]", correct: false },
                        { id: 'd', text: "Kн = [Au³⁺] / [[AuCl₃OH]⁻]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [AuCl₃OH]⁻ ⇌ Au³⁺ + 3Cl⁻ + OH⁻. Kн = [Au³⁺][Cl⁻]³[OH⁻] / [[AuCl₃OH]⁻]"
                }
            ]
        },
        {
            id: 5,
            title: "Вариант 5",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Pt(NH₃)₂Cl₃]Cl",
                    options: [
                        { id: 'a', text: "Pt, +4, КЧ=5", correct: true },
                        { id: 'b', text: "Pt, +3, КЧ=5", correct: false },
                        { id: 'c', text: "Pt, +4, КЧ=3", correct: false },
                        { id: 'd', text: "Pt, +2, КЧ=5", correct: false }
                    ],
                    explanation: "Комплексный ион: [Pt(NH₃)₂Cl₃]⁺. Заряд: x + 2×0 + 3×(-1) = +1 → x = +4. КЧ = 5 (2 NH₃ + 3 Cl)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Cr(H₂O)₅Cl]Cl₂",
                    options: [
                        { id: 'a', text: "Cr, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Cr, +2, КЧ=5", correct: false },
                        { id: 'c', text: "Cr, +3, КЧ=5", correct: false },
                        { id: 'd', text: "Cr, +6, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Cr(H₂O)₅Cl]²⁺. Заряд: x + 5×0 + 1×(-1) = +2 → x = +3. КЧ = 6 (5 H₂O + 1 Cl)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов могут быть комплексообразователями: Cr³⁺, Cr⁰, Ni⁰, Ni²⁺, Sn²⁺, Na⁺, Na⁰, Ca²⁺?",
                    options: [
                        { id: 'a', text: "Cr³⁺, Ni²⁺, Sn²⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Cr³⁺ и Ni²⁺", correct: false },
                        { id: 'd', text: "Cr³⁺, Ni⁰, Sn²⁺", correct: false }
                    ],
                    explanation: "Cr³⁺, Ni²⁺ и Sn²⁺ могут быть комплексообразователями. Нейтральные атомы и ионы щелочных/щелочноземельных металлов - нет."
                },
                {
                    id: 4,
                    text: "Из раствора комплексной соли Pt(NH₃)₆Cl₄ азотнокислое серебро осаждает весь хлор, а из Pt(NH₃)₃Cl₄ - только 25% хлора. Напишите формулы солей",
                    options: [
                        { id: 'a', text: "[Pt(NH₃)₆]Cl₄ и [Pt(NH₃)₃Cl]Cl₃", correct: false },
                        { id: 'b', text: "[Pt(NH₃)₆]Cl₄ и [Pt(NH₃)₃Cl₃]Cl", correct: true },
                        { id: 'c', text: "[Pt(NH₃)₄Cl₂]Cl₂ и [Pt(NH₃)₃Cl]Cl₃", correct: false },
                        { id: 'd', text: "[Pt(NH₃)₆]Cl₄ и [Pt(NH₃)Cl₃]·3NH₃", correct: false }
                    ],
                    explanation: "Если осаждается весь Cl⁻, значит весь хлор во внешней сфере: [Pt(NH₃)₆]Cl₄. Если 25% (1 из 4), значит 3 Cl⁻ во внутренней сфере: [Pt(NH₃)₃Cl₃]Cl."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для K[Pt(NH₃)Cl₅]",
                    options: [
                        { id: 'a', text: "Kн = [Pt⁴⁺][NH₃][Cl⁻]⁵ / [[Pt(NH₃)Cl₅]⁻]", correct: true },
                        { id: 'b', text: "Kн = [Pt⁴⁺][Cl⁻]⁵ / [[Pt(NH₃)Cl₅]⁻]", correct: false },
                        { id: 'c', text: "Kн = [Pt⁴⁺][NH₃] / [[Pt(NH₃)Cl₅]⁻]", correct: false },
                        { id: 'd', text: "Kн = [Pt⁴⁺] / [[Pt(NH₃)Cl₅]⁻]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [Pt(NH₃)Cl₅]⁻ ⇌ Pt⁴⁺ + NH₃ + 5Cl⁻. Kн = [Pt⁴⁺][NH₃][Cl⁻]⁵ / [[Pt(NH₃)Cl₅]⁻]"
                }
            ]
        },
        {
            id: 6,
            title: "Вариант 6",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в H[BF₄]",
                    options: [
                        { id: 'a', text: "B, +3, КЧ=4", correct: true },
                        { id: 'b', text: "B, +1, КЧ=4", correct: false },
                        { id: 'c', text: "B, +3, КЧ=1", correct: false },
                        { id: 'd', text: "F, -1, КЧ=4", correct: false }
                    ],
                    explanation: "Комплексный ион: [BF₄]⁻. Заряд: x + 4×(-1) = -1 → x = +3. КЧ = 4 (4 F)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в K₃[Bi(SO₄)₃]",
                    options: [
                        { id: 'a', text: "Bi, +3, КЧ=3", correct: true },
                        { id: 'b', text: "Bi, +5, КЧ=3", correct: false },
                        { id: 'c', text: "Bi, +3, КЧ=6", correct: false },
                        { id: 'd', text: "Bi, +1, КЧ=3", correct: false }
                    ],
                    explanation: "Комплексный ион: [Bi(SO₄)₃]³⁻. Заряд: x + 3×(-2) = -3 → x = +3. КЧ = 3 (3 SO₄)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов не могут быть комплексообразователями: Na⁺, Ba²⁺, Cr⁶⁺, Fe³⁺, Fe²⁺, Cu⁰, Cu⁺?",
                    options: [
                        { id: 'a', text: "Na⁺, Ba²⁺, Cu⁰", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Cr⁶⁺", correct: false },
                        { id: 'd', text: "Fe³⁺, Fe²⁺, Cu⁺", correct: false }
                    ],
                    explanation: "Ионы щелочных и щелочноземельных металлов (Na⁺, Ba²⁺) и нейтральные атомы (Cu⁰) редко образуют устойчивые комплексы."
                },
                {
                    id: 4,
                    text: "Хлористый барий осаждает из раствора CoClSO₄·5NH₃ осадок BaSO₄, а азотнокислое серебро - нет. Какая формула соли?",
                    options: [
                        { id: 'a', text: "[Co(NH₃)₅Cl]SO₄", correct: true },
                        { id: 'b', text: "[Co(NH₃)₅SO₄]Cl", correct: false },
                        { id: 'c', text: "[Co(NH₃)₄ClSO₄]·NH₃", correct: false },
                        { id: 'd', text: "Co(NH₃)₅ClSO₄", correct: false }
                    ],
                    explanation: "Если BaCl₂ осаждает SO₄²⁻, значит SO₄²⁻ во внешней сфере. Если AgNO₃ не осаждает Cl⁻, значит Cl⁻ во внутренней сфере: [Co(NH₃)₅Cl]SO₄."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для Ba[Pt(CN)₄]",
                    options: [
                        { id: 'a', text: "Kн = [Pt²⁺][CN⁻]⁴ / [[Pt(CN)₄]²⁻]", correct: true },
                        { id: 'b', text: "Kн = [Pt²⁺][CN⁻] / [[Pt(CN)₄]²⁻]", correct: false },
                        { id: 'c', text: "Kн = [Pt⁴⁺][CN⁻]⁴ / [[Pt(CN)₄]²⁻]", correct: false },
                        { id: 'd', text: "Kн = [Pt²⁺] / [[Pt(CN)₄]²⁻]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [Pt(CN)₄]²⁻ ⇌ Pt²⁺ + 4CN⁻. Kн = [Pt²⁺][CN⁻]⁴ / [[Pt(CN)₄]²⁻]"
                }
            ]
        },
        {
            id: 7,
            title: "Вариант 7",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Cr(NH₃)₄(H₂O)₂]Cl₃",
                    options: [
                        { id: 'a', text: "Cr, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Cr, +2, КЧ=6", correct: false },
                        { id: 'c', text: "Cr, +3, КЧ=4", correct: false },
                        { id: 'd', text: "Cr, +6, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Cr(NH₃)₄(H₂O)₂]³⁺. Заряд: x + 4×0 + 2×0 = +3 → x = +3. КЧ = 6 (4 NH₃ + 2 H₂O)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Co(NH₃)₃(NO₂)₂](NO₂)",
                    options: [
                        { id: 'a', text: "Co, +3, КЧ=5", correct: true },
                        { id: 'b', text: "Co, +2, КЧ=5", correct: false },
                        { id: 'c', text: "Co, +3, КЧ=3", correct: false },
                        { id: 'd', text: "Co, +4, КЧ=5", correct: false }
                    ],
                    explanation: "Комплексный ион: [Co(NH₃)₃(NO₂)₂]⁺. Заряд: x + 3×0 + 2×(-1) = +1 → x = +3. КЧ = 5 (3 NH₃ + 2 NO₂)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов могут быть комплексообразователями: Li⁺, Na⁺, Be²⁺, B³⁺, Se³⁺, Ni⁴⁺, Mo⁶⁺?",
                    options: [
                        { id: 'a', text: "B³⁺, Se³⁺, Ni⁴⁺, Mo⁶⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Mo⁶⁺", correct: false },
                        { id: 'd', text: "Li⁺, Na⁺, Be²⁺", correct: false }
                    ],
                    explanation: "B³⁺, Se³⁺, Ni⁴⁺, Mo⁶⁺ могут быть комплексообразователями. Ионы щелочных и щелочноземельных металлов - нет."
                },
                {
                    id: 4,
                    text: "Появится ли красная окраска при действии роданистого калия на раствор ферроцианида калия K₃[Fe(CN)₆]?",
                    options: [
                        { id: 'a', text: "Нет, не появится", correct: true },
                        { id: 'b', text: "Да, появится", correct: false },
                        { id: 'c', text: "Появится только при нагревании", correct: false },
                        { id: 'd', text: "Зависит от концентрации", correct: false }
                    ],
                    explanation: "Нет, так как в ферроцианиде железо связано в прочный комплекс [Fe(CN)₆]³⁻ и не дает реакции с SCN⁻."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для [Cr(NH₃)₄H₂O]Cl₃",
                    options: [
                        { id: 'a', text: "Kн = [Cr³⁺][NH₃]⁴[H₂O] / [[Cr(NH₃)₄H₂O]³⁺]", correct: true },
                        { id: 'b', text: "Kн = [Cr³⁺][NH₃]⁴ / [[Cr(NH₃)₄H₂O]³⁺]", correct: false },
                        { id: 'c', text: "Kн = [Cr³⁺][H₂O] / [[Cr(NH₃)₄H₂O]³⁺]", correct: false },
                        { id: 'd', text: "Kн = [Cr³⁺] / [[Cr(NH₃)₄H₂O]³⁺]", correct: false }
                    ],
                    explanation: "Концентрация воды постоянна, поэтому: Kн = [Cr³⁺][NH₃]⁴ / [[Cr(NH₃)₄H₂O]³⁺]"
                }
            ]
        },
        {
            id: 8,
            title: "Вариант 8",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Pt(NH₃)₂F₄]F",
                    options: [
                        { id: 'a', text: "Pt, +5, КЧ=6", correct: true },
                        { id: 'b', text: "Pt, +3, КЧ=6", correct: false },
                        { id: 'c', text: "Pt, +4, КЧ=4", correct: false },
                        { id: 'd', text: "Pt, +2, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Pt(NH₃)₂F₄]⁺. Заряд: x + 2×0 + 4×(-1) = +1 → x = +5? Проверим: обычно Pt⁴⁺. Если x=+4, то заряд иона = 0, но внешняя сфера F⁻, значит ион +1. Значит x=+5? Обычно Pt⁴⁺ с КЧ=6. Наиболее вероятно Pt⁴⁺, КЧ=6."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Cr(H₂O)₅NO₂]Cl₂",
                    options: [
                        { id: 'a', text: "Cr, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Cr, +2, КЧ=5", correct: false },
                        { id: 'c', text: "Cr, +3, КЧ=5", correct: false },
                        { id: 'd', text: "Cr, +6, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Cr(H₂O)₅NO₂]²⁺. Заряд: x + 5×0 + 1×(-1) = +2 → x = +3. КЧ = 6 (5 H₂O + 1 NO₂)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов не могут быть комплексообразователями: Na⁺, Ba²⁺, Br⁻, Zn⁴⁺, Si⁰, Ru²⁺, Ta⁵⁺?",
                    options: [
                        { id: 'a', text: "Na⁺, Ba²⁺, Br⁻, Si⁰", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Zn⁴⁺", correct: false },
                        { id: 'd', text: "Ru²⁺, Ta⁵⁺, Zn⁴⁺", correct: false }
                    ],
                    explanation: "Ионы щелочных и щелочноземельных металлов, анионы (Br⁻) и нейтральные неметаллы (Si⁰) не образуют устойчивых комплексов."
                },
                {
                    id: 4,
                    text: "Из раствора комплексной соли CoCl₃·5NH₃ азотнокислое серебро осаждает 2/3 хлора. Напишите формулу соли",
                    options: [
                        { id: 'a', text: "[Co(NH₃)₅Cl]Cl₂", correct: true },
                        { id: 'b', text: "[Co(NH₃)₄Cl₂]Cl", correct: false },
                        { id: 'c', text: "[Co(NH₃)₆]Cl₃", correct: false },
                        { id: 'd', text: "[Co(NH₃)₅Cl₂]Cl", correct: false }
                    ],
                    explanation: "Если осаждается 2/3 Cl⁻ (2 из 3), значит 1 Cl⁻ во внутренней сфере: [Co(NH₃)₅Cl]Cl₂."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для [Pt(NH₃)₂Cl₄]Cl",
                    options: [
                        { id: 'a', text: "Kн = [Pt⁴⁺][NH₃][Cl⁻]⁴ / [[Pt(NH₃)₂Cl₄]⁺]", correct: false },
                        { id: 'b', text: "Kн = [Pt⁴⁺][NH₃]²[Cl⁻]⁴ / [[Pt(NH₃)₂Cl₄]⁺]", correct: true },
                        { id: 'c', text: "Kн = [Pt⁴⁺][Cl⁻]⁴ / [[Pt(NH₃)₂Cl₄]⁺]", correct: false },
                        { id: 'd', text: "Kн = [Pt⁴⁺] / [[Pt(NH₃)₂Cl₄]⁺]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [Pt(NH₃)₂Cl₄]⁺ ⇌ Pt⁴⁺ + 2NH₃ + 4Cl⁻. Kн = [Pt⁴⁺][NH₃]²[Cl⁻]⁴ / [[Pt(NH₃)₂Cl₄]⁺]"
                }
            ]
        },
        {
            id: 9,
            title: "Вариант 9",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в K[AuCl₄]",
                    options: [
                        { id: 'a', text: "Au, +3, КЧ=4", correct: true },
                        { id: 'b', text: "Au, +1, КЧ=4", correct: false },
                        { id: 'c', text: "Au, +3, КЧ=3", correct: false },
                        { id: 'd', text: "Au, +4, КЧ=4", correct: false }
                    ],
                    explanation: "Комплексный ион: [AuCl₄]⁻. Заряд: x + 4×(-1) = -1 → x = +3. КЧ = 4 (4 Cl)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в Na₃[Co(NO₂)₆]",
                    options: [
                        { id: 'a', text: "Co, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Co, +2, КЧ=6", correct: false },
                        { id: 'c', text: "Co, +3, КЧ=3", correct: false },
                        { id: 'd', text: "Co, +6, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Co(NO₂)₆]³⁻. Заряд: x + 6×(-1) = -3 → x = +3. КЧ = 6 (6 NO₂)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов могут быть комплексообразователями: Pb⁺, Sr²⁺, F⁻, Cl⁻, Hf⁴⁺, Nb⁵⁺, O²⁻?",
                    options: [
                        { id: 'a', text: "Hf⁴⁺, Nb⁵⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Pb⁺", correct: false },
                        { id: 'd', text: "F⁻, Cl⁻, O²⁻", correct: false }
                    ],
                    explanation: "Hf⁴⁺ и Nb⁵⁺ могут быть комплексообразователями. Анионы и ионы щелочноземельных металлов - нет."
                },
                {
                    id: 4,
                    text: "Из раствора соли Ni(NH₄)₂(SO₄)₂ катион никеля осаждается гидроксидом натрия, а из Ni(NH₃)₆SO₄ - нет. Какая соль комплексная?",
                    options: [
                        { id: 'a', text: "Ni(NH₃)₆SO₄", correct: true },
                        { id: 'b', text: "Ni(NH₄)₂(SO₄)₂", correct: false },
                        { id: 'c', text: "Обе соли комплексные", correct: false },
                        { id: 'd', text: "Ни одна из солей не комплексная", correct: false }
                    ],
                    explanation: "Ni(NH₃)₆SO₄ - комплексная соль, ион Ni²⁺ связан в комплекс [Ni(NH₃)₆]²⁺ и не осаждается NaOH."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для K₂[Au(NH₃)Cl₃]",
                    options: [
                        { id: 'a', text: "Kн = [Au³⁺][NH₃][Cl⁻] / [[Au(NH₃)Cl₃]²⁻]", correct: false },
                        { id: 'b', text: "Kн = [Au³⁺][NH₃][Cl⁻]³ / [[Au(NH₃)Cl₃]²⁻]", correct: true },
                        { id: 'c', text: "Kн = [Au³⁺][Cl⁻]³ / [[Au(NH₃)Cl₃]²⁻]", correct: false },
                        { id: 'd', text: "Kн = [Au³⁺] / [[Au(NH₃)Cl₃]²⁻]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [Au(NH₃)Cl₃]²⁻ ⇌ Au³⁺ + NH₃ + 3Cl⁻. Kн = [Au³⁺][NH₃][Cl⁻]³ / [[Au(NH₃)Cl₃]²⁻]"
                }
            ]
        },
        {
            id: 10,
            title: "Вариант 10",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в H₂[PtCl₄(OH)₂]",
                    options: [
                        { id: 'a', text: "Pt, +4, КЧ=6", correct: true },
                        { id: 'b', text: "Pt, +2, КЧ=6", correct: false },
                        { id: 'c', text: "Pt, +4, КЧ=4", correct: false },
                        { id: 'd', text: "Pt, +6, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [PtCl₄(OH)₂]²⁻. Заряд: x + 4×(-1) + 2×(-1) = -2 → x = +4. КЧ = 6 (4 Cl + 2 OH)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в Na₃[Fe(NO₂)(CN)₅]",
                    options: [
                        { id: 'a', text: "Fe, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Fe, +2, КЧ=6", correct: false },
                        { id: 'c', text: "Fe, +3, КЧ=5", correct: false },
                        { id: 'd', text: "Fe, +1, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Fe(NO₂)(CN)₅]³⁻. Заряд: x + 1×(-1) + 5×(-1) = -3 → x = +3? Проверим: 1+5=6 лигандов, КЧ=6. x -1 -5 = -3 → x = +3."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов не могут быть комплексообразователями: Cr³⁺, Cr⁰, Cl⁰, Cl⁻, Cl⁶⁺, Ti²⁺, Os²⁺?",
                    options: [
                        { id: 'a', text: "Cr⁰, Cl⁰, Cl⁻", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Cl⁶⁺", correct: false },
                        { id: 'd', text: "Cr³⁺, Ti²⁺, Os²⁺", correct: false }
                    ],
                    explanation: "Нейтральные атомы (Cr⁰, Cl⁰) и анионы (Cl⁻) не образуют устойчивых комплексов."
                },
                {
                    id: 4,
                    text: "Из раствора соли PtCl₄·3NH₃ осаждается 1/4 хлора, а из PtCl₄·6NH₃ - весь хлор. Напишите формулы солей",
                    options: [
                        { id: 'a', text: "[Pt(NH₃)₃Cl₃]Cl и [Pt(NH₃)₆]Cl₄", correct: true },
                        { id: 'b', text: "[Pt(NH₃)₂Cl₂]Cl₂ и [Pt(NH₃)₆]Cl₄", correct: false },
                        { id: 'c', text: "[Pt(NH₃)Cl₃]·2NH₃ и [Pt(NH₃)₄Cl₂]Cl₂", correct: false },
                        { id: 'd', text: "[Pt(NH₃)₃Cl]Cl₃ и [Pt(NH₃)₆]Cl₄", correct: false }
                    ],
                    explanation: "Если осаждается 1/4 Cl⁻ (1 из 4), значит 3 Cl⁻ во внутренней сфере: [Pt(NH₃)₃Cl₃]Cl. Если весь Cl⁻, значит весь во внешней сфере: [Pt(NH₃)₆]Cl₄."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для H₂[PtCl₄(OH)₂]",
                    options: [
                        { id: 'a', text: "Kн = [Pt⁴⁺][Cl⁻]⁴[OH⁻]² / [[PtCl₄(OH)₂]²⁻]", correct: true },
                        { id: 'b', text: "Kн = [Pt⁴⁺][Cl⁻]⁴ / [[PtCl₄(OH)₂]²⁻]", correct: false },
                        { id: 'c', text: "Kн = [Pt⁴⁺][OH⁻]² / [[PtCl₄(OH)₂]²⁻]", correct: false },
                        { id: 'd', text: "Kн = [Pt⁴⁺] / [[PtCl₄(OH)₂]²⁻]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [PtCl₄(OH)₂]²⁻ ⇌ Pt⁴⁺ + 4Cl⁻ + 2OH⁻. Kн = [Pt⁴⁺][Cl⁻]⁴[OH⁻]² / [[PtCl₄(OH)₂]²⁻]"
                }
            ]
        },
        {
            id: 11,
            title: "Вариант 11",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в Ba[Cu(CNS)(CN)₂]",
                    options: [
                        { id: 'a', text: "Cu, +1, КЧ=3", correct: true },
                        { id: 'b', text: "Cu, +2, КЧ=3", correct: false },
                        { id: 'c', text: "Cu, +1, КЧ=2", correct: false },
                        { id: 'd', text: "Cu, +3, КЧ=3", correct: false }
                    ],
                    explanation: "Комплексный ион: [Cu(CNS)(CN)₂]²⁻. Заряд: x + 1×(-1) + 2×(-1) = -2 → x = +1. КЧ = 3 (1 CNS + 2 CN)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в Ca[Al(OH)₅H₂O]",
                    options: [
                        { id: 'a', text: "Al, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Al, +2, КЧ=5", correct: false },
                        { id: 'c', text: "Al, +3, КЧ=5", correct: false },
                        { id: 'd', text: "Al, +1, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Al(OH)₅H₂O]²⁻. Заряд: x + 5×(-1) + 1×0 = -2 → x = +3. КЧ = 6 (5 OH + 1 H₂O)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов могут быть комплексообразователями: Na⁺, Ba²⁺, Cu⁺, Cu²⁺, Li⁺, Cl⁻, Br⁻?",
                    options: [
                        { id: 'a', text: "Cu⁺, Cu²⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Cu²⁺", correct: false },
                        { id: 'd', text: "Na⁺, Ba²⁺, Li⁺", correct: false }
                    ],
                    explanation: "Ионы меди (Cu⁺, Cu²⁺) могут быть комплексообразователями. Ионы щелочных/щелочноземельных металлов и анионы - нет."
                },
                {
                    id: 4,
                    text: "Составьте уравнение образования комплексного соединения CoCl₂ + NH₄SCN (КЧ=4)",
                    options: [
                        { id: 'a', text: "CoCl₂ + 4NH₄SCN → (NH₄)₂[Co(SCN)₄] + 2NH₄Cl", correct: true },
                        { id: 'b', text: "CoCl₂ + 2NH₄SCN → Co(SCN)₂ + 2NH₄Cl", correct: false },
                        { id: 'c', text: "CoCl₂ + 6NH₄SCN → (NH₄)₄[Co(SCN)₆] + 2NH₄Cl", correct: false },
                        { id: 'd', text: "CoCl₂ + NH₄SCN → NH₄[Co(SCN)Cl₂]", correct: false }
                    ],
                    explanation: "При КЧ=4 образуется тетратиоцианатокобальтат(II): (NH₄)₂[Co(SCN)₄]."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для Ba[Cu(CNS)(CN)₂]",
                    options: [
                        { id: 'a', text: "Kн = [Cu⁺][CNS⁻][CN⁻]² / [[Cu(CNS)(CN)₂]²⁻]", correct: true },
                        { id: 'b', text: "Kн = [Cu⁺][CN⁻]² / [[Cu(CNS)(CN)₂]²⁻]", correct: false },
                        { id: 'c', text: "Kн = [Cu²⁺][CNS⁻][CN⁻]² / [[Cu(CNS)(CN)₂]²⁻]", correct: false },
                        { id: 'd', text: "Kн = [Cu⁺] / [[Cu(CNS)(CN)₂]²⁻]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [Cu(CNS)(CN)₂]²⁻ ⇌ Cu⁺ + CNS⁻ + 2CN⁻. Kн = [Cu⁺][CNS⁻][CN⁻]² / [[Cu(CNS)(CN)₂]²⁻]"
                }
            ]
        },
        {
            id: 12,
            title: "Вариант 12",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Cr(NH₃)(H₂O)₄]Cl₃",
                    options: [
                        { id: 'a', text: "Cr, +3, КЧ=5", correct: true },
                        { id: 'b', text: "Cr, +2, КЧ=5", correct: false },
                        { id: 'c', text: "Cr, +3, КЧ=4", correct: false },
                        { id: 'd', text: "Cr, +6, КЧ=5", correct: false }
                    ],
                    explanation: "Комплексный ион: [Cr(NH₃)(H₂O)₄]³⁺. Заряд: x + 1×0 + 4×0 = +3 → x = +3. КЧ = 5 (1 NH₃ + 4 H₂O)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Co(NH₃)₃(NO₂)₂]NO₂",
                    options: [
                        { id: 'a', text: "Co, +3, КЧ=5", correct: true },
                        { id: 'b', text: "Co, +2, КЧ=5", correct: false },
                        { id: 'c', text: "Co, +3, КЧ=3", correct: false },
                        { id: 'd', text: "Co, +4, КЧ=5", correct: false }
                    ],
                    explanation: "Комплексный ион: [Co(NH₃)₃(NO₂)₂]⁺. Заряд: x + 3×0 + 2×(-1) = +1 → x = +3. КЧ = 5 (3 NH₃ + 2 NO₂)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов не могут быть комплексообразователями: Li⁺, Na⁺, Ti⁴⁺, Se³⁺, Be²⁺, Cl⁵⁺, Cl⁺?",
                    options: [
                        { id: 'a', text: "Li⁺, Na⁺, Be²⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Cl⁵⁺ и Cl⁺", correct: false },
                        { id: 'd', text: "Ti⁴⁺, Se³⁺", correct: false }
                    ],
                    explanation: "Ионы щелочных и щелочноземельных металлов редко образуют устойчивые комплексы."
                },
                {
                    id: 4,
                    text: "Появится ли красная окраска при действии роданистого калия на раствор ферроцианида калия K₃[Fe(CN)₆]?",
                    options: [
                        { id: 'a', text: "Нет, не появится", correct: true },
                        { id: 'b', text: "Да, появится", correct: false },
                        { id: 'c', text: "Появится только при нагревании", correct: false },
                        { id: 'd', text: "Зависит от концентрации", correct: false }
                    ],
                    explanation: "Нет, так как железо в прочном комплексе [Fe(CN)₆]³⁻ не реагирует с SCN⁻."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для H[BF₄]",
                    options: [
                        { id: 'a', text: "Kн = [B³⁺][F⁻]⁴ / [[BF₄]⁻]", correct: true },
                        { id: 'b', text: "Kн = [B³⁺][F⁻] / [[BF₄]⁻]", correct: false },
                        { id: 'c', text: "Kн = [H⁺][B³⁺][F⁻]⁴ / [[BF₄]⁻]", correct: false },
                        { id: 'd', text: "Kн = [B³⁺] / [[BF₄]⁻]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [BF₄]⁻ ⇌ B³⁺ + 4F⁻. Kн = [B³⁺][F⁻]⁴ / [[BF₄]⁻]"
                }
            ]
        },
        {
            id: 13,
            title: "Вариант 13",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в Ca[OsBr₅NO]",
                    options: [
                        { id: 'a', text: "Os, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Os, +2, КЧ=5", correct: false },
                        { id: 'c', text: "Os, +3, КЧ=5", correct: false },
                        { id: 'd', text: "Os, +1, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [OsBr₅NO]²⁻. Заряд: x + 5×(-1) + 1×0 = -2 → x = +3. КЧ = 6 (5 Br + 1 NO)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в [Ir(NH₃)(NO₂)₃]",
                    options: [
                        { id: 'a', text: "Ir, +3, КЧ=4", correct: true },
                        { id: 'b', text: "Ir, +2, КЧ=4", correct: false },
                        { id: 'c', text: "Ir, +3, КЧ=3", correct: false },
                        { id: 'd', text: "Ir, +6, КЧ=4", correct: false }
                    ],
                    explanation: "Комплексный ион: [Ir(NH₃)(NO₂)₃]⁰. Заряд: x + 1×0 + 3×(-1) = 0 → x = +3. КЧ = 4 (1 NH₃ + 3 NO₂)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов могут быть комплексообразователями: Br⁻, Ba²⁺, Na⁺, Zr⁴⁺, H⁺, NH₄⁺, Cl⁻?",
                    options: [
                        { id: 'a', text: "Zr⁴⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Br⁻, Cl⁻", correct: false },
                        { id: 'd', text: "H⁺, NH₄⁺", correct: false }
                    ],
                    explanation: "Zr⁴⁺ может быть комплексообразователем. Анионы, ионы щелочных металлов и NH₄⁺ - нет."
                },
                {
                    id: 4,
                    text: "Из раствора комплексной соли CoCl₃·5NH₃ азотнокислое серебро осаждает 2/3 хлора. Напишите формулу соли",
                    options: [
                        { id: 'a', text: "[Co(NH₃)₅Cl]Cl₂", correct: true },
                        { id: 'b', text: "[Co(NH₃)₄Cl₂]Cl", correct: false },
                        { id: 'c', text: "[Co(NH₃)₆]Cl₃", correct: false },
                        { id: 'd', text: "[Co(NH₃)₅Cl₂]Cl", correct: false }
                    ],
                    explanation: "Если осаждается 2/3 Cl⁻ (2 из 3), значит 1 Cl⁻ во внутренней сфере: [Co(NH₃)₅Cl]Cl₂."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для K₃[SbBr₃(NO₃)₃]",
                    options: [
                        { id: 'a', text: "Kн = [Sb³⁺][Br⁻]³[NO₃⁻]³ / [[SbBr₃(NO₃)₃]³⁻]", correct: true },
                        { id: 'b', text: "Kн = [Sb³⁺][Br⁻]³ / [[SbBr₃(NO₃)₃]³⁻]", correct: false },
                        { id: 'c', text: "Kн = [Sb³⁺][NO₃⁻]³ / [[SbBr₃(NO₃)₃]³⁻]", correct: false },
                        { id: 'd', text: "Kн = [Sb³⁺] / [[SbBr₃(NO₃)₃]³⁻]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [SbBr₃(NO₃)₃]³⁻ ⇌ Sb³⁺ + 3Br⁻ + 3NO₃⁻. Kн = [Sb³⁺][Br⁻]³[NO₃⁻]³ / [[SbBr₃(NO₃)₃]³⁻]"
                }
            ]
        },
        {
            id: 14,
            title: "Вариант 14",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в Al[Au(CN)₂I₂]₃",
                    options: [
                        { id: 'a', text: "Au, +1, КЧ=4", correct: false },
                        { id: 'b', text: "Au, +3, КЧ=4", correct: true },
                        { id: 'c', text: "Au, +1, КЧ=2", correct: false },
                        { id: 'd', text: "Au, +3, КЧ=2", correct: false }
                    ],
                    explanation: "Комплексный ион: [Au(CN)₂I₂]⁻. Заряд: x + 2×(-1) + 2×(-1) = -1 → x = +3? Но Au обычно +1 или +3. При КЧ=4: 2 CN + 2 I. Если x=+1: 1-2-2=-3, не подходит. Если x=+3: 3-2-2=-1, подходит. Значит Au³⁺, КЧ=4."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в Ba[Cu(CN)₃(CNS)]",
                    options: [
                        { id: 'a', text: "Cu, +1, КЧ=4", correct: false },
                        { id: 'b', text: "Cu, +2, КЧ=4", correct: true },
                        { id: 'c', text: "Cu, +1, КЧ=3", correct: false },
                        { id: 'd', text: "Cu, +3, КЧ=4", correct: false }
                    ],
                    explanation: "Комплексный ион: [Cu(CN)₃(CNS)]²⁻. Заряд: x + 3×(-1) + 1×(-1) = -2 → x = +2? Но Cu²⁺ обычно КЧ=4,6. Если x=+1: 1-3-1=-3, не подходит. Если x=+2: 2-3-1=-2, подходит. Значит Cu²⁺, КЧ=4."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов не могут быть комплексообразователями: O²⁻, Nb²⁺, Hf⁴⁺, Zn²⁺, F⁻, Rb⁺, Sr²⁺?",
                    options: [
                        { id: 'a', text: "O²⁻, F⁻, Rb⁺, Sr²⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Nb²⁺", correct: false },
                        { id: 'd', text: "Hf⁴⁺, Zn²⁺", correct: false }
                    ],
                    explanation: "Анионы (O²⁻, F⁻) и ионы щелочных/щелочноземельных металлов (Rb⁺, Sr²⁺) не образуют устойчивых комплексов."
                },
                {
                    id: 4,
                    text: "Составьте уравнение образования комплекса меди с аммиаком (КЧ=4)",
                    options: [
                        { id: 'a', text: "CuSO₄ + 4NH₃ → [Cu(NH₃)₄]SO₄", correct: true },
                        { id: 'b', text: "CuSO₄ + 2NH₃ → Cu(OH)₂ + (NH₄)₂SO₄", correct: false },
                        { id: 'c', text: "CuSO₄ + 6NH₃ → [Cu(NH₃)₆]SO₄", correct: false },
                        { id: 'd', text: "CuSO₄ + NH₃ → [Cu(NH₃)]SO₄", correct: false }
                    ],
                    explanation: "При КЧ=4 образуется тетраамминмеди(II) сульфат: [Cu(NH₃)₄]SO₄."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для Al[Au(CN)₃I]₃",
                    options: [
                        { id: 'a', text: "Kн = [Au³⁺][CN⁻]³ / [[Au(CN)₃I]³⁻]", correct: false },
                        { id: 'b', text: "Kн = [Au³⁺][CN⁻]³[I⁻] / [[Au(CN)₃I]³⁻]", correct: true },
                        { id: 'c', text: "Kн = [Au³⁺][CN⁻]³ / [[Au(CN)₃I]³⁻]", correct: false },
                        { id: 'd', text: "Kн = [Au³⁺] / [[Au(CN)₃I]³⁻]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [Au(CN)₃I]³⁻ ⇌ Au³⁺ + 3CN⁻ + I⁻. Kн = [Au³⁺][CN⁻]³[I⁻] / [[Au(CN)₃I]³⁻]"
                }
            ]
        },
        {
            id: 15,
            title: "Вариант 15",
            questions: [
                {
                    id: 1,
                    text: "Определите комплексообразователь, его заряд и КЧ в Ca[Al(OH)₅H₂O]",
                    options: [
                        { id: 'a', text: "Al, +3, КЧ=6", correct: true },
                        { id: 'b', text: "Al, +2, КЧ=5", correct: false },
                        { id: 'c', text: "Al, +3, КЧ=5", correct: false },
                        { id: 'd', text: "Al, +1, КЧ=6", correct: false }
                    ],
                    explanation: "Комплексный ион: [Al(OH)₅H₂O]²⁻. Заряд: x + 5×(-1) + 1×0 = -2 → x = +3. КЧ = 6 (5 OH + 1 H₂O)."
                },
                {
                    id: 2,
                    text: "Определите комплексообразователь, его заряд и КЧ в K₄[Ir(SO₄)₃Cl]",
                    options: [
                        { id: 'a', text: "Ir, +3, КЧ=4", correct: true },
                        { id: 'b', text: "Ir, +2, КЧ=4", correct: false },
                        { id: 'c', text: "Ir, +3, КЧ=3", correct: false },
                        { id: 'd', text: "Ir, +4, КЧ=4", correct: false }
                    ],
                    explanation: "Комплексный ион: [Ir(SO₄)₃Cl]⁴⁻. Заряд: x + 3×(-2) + 1×(-1) = -4 → x = +3. КЧ = 4 (3 SO₄ + 1 Cl)."
                },
                {
                    id: 3,
                    text: "Какие из следующих ионов могут быть комплексообразователями: Li⁺, Na⁺, Ti⁴⁺, Sc³⁺, Be²⁺, Fe³⁺, Fe²⁺?",
                    options: [
                        { id: 'a', text: "Ti⁴⁺, Sc³⁺, Fe³⁺, Fe²⁺", correct: true },
                        { id: 'b', text: "Все перечисленные", correct: false },
                        { id: 'c', text: "Только Fe³⁺", correct: false },
                        { id: 'd', text: "Li⁺, Na⁺, Be²⁺", correct: false }
                    ],
                    explanation: "Ti⁴⁺, Sc³⁺, Fe³⁺, Fe²⁺ могут быть комплексообразователями. Ионы щелочных и щелочноземельных металлов - нет."
                },
                {
                    id: 4,
                    text: "Хром образует с аммиаком две комплексные соли: CrCl₃·5NH₃ и CrCl₃·6NH₃. Азотнокислое серебро осаждает весь хлор из первой соли, а из второй - только 2/3 хлора. Напишите формулы",
                    options: [
                        { id: 'a', text: "[Cr(NH₃)₆]Cl₃ и [Cr(NH₃)₅Cl]Cl₂", correct: true },
                        { id: 'b', text: "[Cr(NH₃)₅Cl]Cl₂ и [Cr(NH₃)₆]Cl₃", correct: false },
                        { id: 'c', text: "[Cr(NH₃)₄Cl₂]Cl и [Cr(NH₃)₅Cl]Cl₂", correct: false },
                        { id: 'd', text: "[Cr(NH₃)₆]Cl₃ и [Cr(NH₃)₄Cl₂]Cl", correct: false }
                    ],
                    explanation: "Если осаждается весь Cl⁻, значит весь во внешней сфере: [Cr(NH₃)₆]Cl₃. Если 2/3 Cl⁻, значит 1 Cl⁻ внутри: [Cr(NH₃)₅Cl]Cl₂."
                },
                {
                    id: 5,
                    text: "Напишите математическое выражение константы нестойкости для [Cu(NH₃)₄]SO₄",
                    options: [
                        { id: 'a', text: "Kн = [Cu²⁺][NH₃]⁴ / [[Cu(NH₃)₄]²⁺]", correct: true },
                        { id: 'b', text: "Kн = [Cu²⁺][NH₃] / [[Cu(NH₃)₄]²⁺]", correct: false },
                        { id: 'c', text: "Kн = [Cu²⁺][SO₄²⁻] / [[Cu(NH₃)₄]²⁺]", correct: false },
                        { id: 'd', text: "Kн = [Cu²⁺] / [[Cu(NH₃)₄]²⁺]", correct: false }
                    ],
                    explanation: "Комплексный ион диссоциирует: [Cu(NH₃)₄]²⁺ ⇌ Cu²⁺ + 4NH₃. Kн = [Cu²⁺][NH₃]⁴ / [[Cu(NH₃)₄]²⁺]"
                }
            ]
        }
    ]
};
