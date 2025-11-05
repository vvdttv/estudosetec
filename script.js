// --- BANCO DE DADOS DE PERGUNTAS ---
// Perguntas extraídas dos PDFs da ETEC (AGORA COM EXPLICAÇÕES)
const quizData = [
    {
        subject: "História",
        question: "Na civilização ____, onde se originaram várias sociedades orientais, as artes plásticas eram utilizadas para demonstrar religiosidade e o poder dos governantes.",
        options: ["Mesopotâmica", "Grega", "Egípcia", "Romana"],
        answer: "Mesopotâmica",
        explanation: "De acordo com o PDF de História (página 1), a civilização Mesopotâmica é descrita como o lar das primeiras civilizações, onde a arte era usada para demonstrar poder e religiosidade."
    },
    {
        subject: "História",
        question: "Qual fator geográfico possibilitou o desenvolvimento da civilização egípcia na antiguidade?",
        options: ["As florestas densas", "O clima chuvoso", "A existência do Rio Nilo", "A proximidade com Roma"],
        answer: "A existência do Rio Nilo",
        explanation: "O PDF de História (página 4) afirma que 'A civilização egípcia desenvolveu-se no nordeste da África às margens do rio Nilo', destacando sua importância para a agricultura e sobrevivência."
    },
    {
        subject: "Geografia",
        question: "A rosa dos ventos aponta os pontos cardeais e colaterais. Qual dos seguintes é um ponto colateral?",
        options: ["Norte", "Oeste", "Sudeste", "Leste"],
        answer: "Sudeste",
        explanation: "Conforme o PDF de Geografia (página 2), os pontos cardeais são Norte (N), Sul (S), Leste (E) e Oeste (O). Os colaterais são as combinações, como Sudeste (SE)."
    },
    {
        subject: "Geografia",
        question: "Qual é a linha imaginária que divide a Terra em Hemisfério Norte e Hemisfério Sul?",
        options: ["Meridiano de Greenwich", "Trópico de Câncer", "Círculo Polar Ártico", "Linha do Equador"],
        answer: "Linha do Equador",
        explanation: "O PDF de Geografia (página 3) define: 'O equador é o maior círculo da Terra... dividindo o planeta em dois hemisférios: o Hemisfério Norte e o Hemisfério Sul.'"
    },
    {
        subject: "Matemática",
        question: "Com os algarismos 1, 2, 3, 4 e 5, quantos números pares de 3 algarismos (distintos ou não) podem ser formados?",
        options: ["40", "60", "25", "50"],
        answer: "50",
        explanation: "Usamos o Princípio Fundamental da Contagem. Para o número ser par, o último algarismo (unidade) só pode ser 2 ou 4 (2 opções). O primeiro (centena) pode ser qualquer um dos 5 algarismos. O segundo (dezena) também pode ser qualquer um dos 5. Cálculo: 5 (centenas) × 5 (dezenas) × 2 (unidades) = 50 números."
    },
    {
        subject: "Matemática",
        question: "Um terreno retangular tem 6 km de comprimento e 4 km de largura. Para cercar o terreno com duas voltas de arame, quantos metros de arame são necessários?",
        options: ["40.000 m", "20.000 m", "48.000 m", "24.000 m"],
        answer: "40.000 m",
        explanation: "1. Converta km para m: 6 km = 6000 m; 4 km = 4000 m.\n2. Calcule o perímetro (1 volta): P = 2 * (comprimento + largura) = 2 * (6000 + 4000) = 2 * 10.000 = 20.000 m.\n3. Calcule duas voltas: 2 * 20.000 m = 40.000 m."
    },
    {
        subject: "Física",
        question: "Um projétil atinge 60 m/s para penetrar a pele. Considerando a gravidade g=10 m/s², de que altura mínima ele deve ser abandonado em queda livre para atingir essa velocidade?",
        options: ["180 m", "120 m", "360 m", "60 m"],
        answer: "180 m",
        explanation: "Usamos a Equação de Torricelli para queda livre (velocidade inicial v₀ = 0): v² = v₀² + 2gh. \nDados: v = 60 m/s, g = 10 m/s².\nCálculo: (60)² = 0² + 2 * 10 * H  =>  3600 = 20 * H  =>  H = 3600 / 20 = 180 m."
    },
    {
        subject: "Física",
        question: "Qual é a unidade de medida de Força no Sistema Internacional (SI)?",
        options: ["Joule (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"],
        answer: "Newton (N)",
        explanation: "Conforme a 2ª Lei de Newton (F = m * a), a unidade de Força (F) é o produto da unidade de massa (kg) pela unidade de aceleração (m/s²). Essa combinação (kg·m/s²) é chamada de Newton (N)."
    },
    {
        subject: "Química",
        question: "Como foi inicialmente concebido o átomo de acordo com o modelo proposto por Dalton?",
        options: ["Como partícula esférica, maciça e indivisível", "Com um núcleo central rodeado por elétrons", "Como uma nuvem difusa de elétrons", "Com partículas subatômicas em órbitas"],
        answer: "Como partícula esférica, maciça e indivisível",
        explanation: "O modelo de Dalton (página 10 do PDF de Química) é o primeiro modelo científico, conhecido como 'bola de bilhar'. Ele propunha que o átomo era uma esfera maciça (sólida) e indivisível, sem cargas elétricas."
    },
    {
        subject: "Química",
        question: "A mudança de estado físico quando o vapor de água se transforma em água líquida é chamada de:",
        options: ["Ebulição", "Sublimação", "Evaporação", "Condensação"],
        answer: "Condensação",
        explanation: "A passagem do estado gasoso (vapor) para o estado líquido é chamada de condensação (ou liquefação), como explicado no PDF de Química (página 3). É o que acontece quando o vapor do chuveiro 'molha' o espelho frio."
    },
    {
        subject: "Biologia",
        question: "Em ecologia, o conjunto de condições e recursos que permitem a uma espécie sobreviver e se reproduzir no ambiente é chamado de:",
        options: ["Ecossistema", "Habitat", "Nicho ecológico", "Bioma"],
        answer: "Nicho ecológico",
        explanation: "O PDF de Biologia (página 1) define: Habitat é o local (o 'endereço') onde a espécie vive. Nicho ecológico é o 'modo de vida' (a 'profissão') da espécie, incluindo o que ela come, seus predadores e suas interações."
    },
    {
        subject: "Biologia",
        question: "Qual dos seguintes ciclos biogeoquímicos é dividido nas etapas de fixação, nitrificação e desnitrificação?",
        options: ["Ciclo do Carbono", "Ciclo da Água", "Ciclo do Nitrogênio", "Ciclo do Oxigênio"],
        answer: "Ciclo do Nitrogênio",
        explanation: "O PDF de Biologia (página 8) descreve o Ciclo do Nitrogênio exatamente com essas três etapas: 1. Fixação (transformação do N₂ atmosférico), 2. Nitrificação (transformação em nitritos/nitratos) e 3. Desnitrificação (retorno do N₂ à atmosfera)."
    },
    {
        subject: "Português",
        question: "Na tirinha do Calvin, a fala '...as relações afetivas estão agonizando, Joana!'. A vírgula foi usada para separar um:",
        options: ["Vocativo", "Aposto", "Sujeito", "Predicado"],
        answer: "Vocativo",
        explanation: "A vírgula está sendo usada para isolar 'Joana', que é um vocativo, ou seja, um chamamento ou invocação. A personagem está falando *com* Joana, e não *sobre* Joana."
    },
    {
        subject: "Português",
        question: "Em uma campanha de trânsito, a frase: '...sair de um acidente em alta velocidade pelo vidro da frente' indica uma:",
        options: ["Solução", "Prevenção", "Causa", "Consequência"],
        answer: "Consequência",
        explanation: "A frase alerta que, se não usar o cinto, 'sair pelo vidro' é o que acontecerá. Isso é um resultado, um efeito, ou seja, uma consequência do acidente em alta velocidade."
    }
];

// --- ELEMENTOS DO DOM ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const subjectSelection = document.getElementById('subject-selection');
const subjectTitle = document.getElementById('subject-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const explanationContainer = document.getElementById('explanation-container'); // NOVO
const nextBtn = document.getElementById('next-btn');

const scoreText = document.getElementById('score-text');
const feedbackText = document.getElementById('feedback-text');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// --- VARIÁVEIS DE ESTADO DO QUIZ ---
let currentSubject = '';
let subjectQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// --- FUNÇÕES ---

// Inicializa o quiz, criando os botões de matéria
function initializeQuiz() {
    // Reseta o estado caso esteja voltando do início
    startScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    subjectSelection.innerHTML = ''; // Limpa botões antigos

    // Pega todas as matérias únicas do banco de dados
    const subjects = [...new Set(quizData.map(q => q.subject))];
    
    subjects.forEach(subject => {
        const button = document.createElement('button');
        button.innerText = subject;
        button.classList.add('subject-btn');
        button.addEventListener('click', () => startSubjectQuiz(subject));
        subjectSelection.appendChild(button);
    });
}

// Inicia o quiz para uma matéria específica
function startSubjectQuiz(subject) {
    currentSubject = subject;
    // Filtra apenas as perguntas da matéria selecionada e embaralha
    subjectQuestions = quizData.filter(q => q.subject === subject).sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;

    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    loadQuestion();
}

// Carrega a pergunta atual
function loadQuestion() {
    resetState();
    const question = subjectQuestions[currentQuestionIndex];
    
    // Atualiza cabeçalho
    subjectTitle.innerText = currentSubject;
    progressText.innerText = `Questão ${currentQuestionIndex + 1} de ${subjectQuestions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / subjectQuestions.length) * 100}%`;

    // Carrega pergunta e opções
    questionText.innerText = question.question;

    // Embaralha as opções
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        if (option === question.answer) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });

    // Adiciona a explicação ao container (mas mantém oculto) (NOVO)
    explanationContainer.innerHTML = `<p><strong>Justificativa:</strong> ${question.explanation}</p>`;
}

// Reseta o estado entre as perguntas (limpa botões, cores, etc.)
function resetState() {
    nextBtn.classList.add('hidden');
    explanationContainer.classList.add('hidden'); // NOVO: esconde a explicação
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

// Chamada quando o usuário seleciona uma resposta
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if (isCorrect) {
        score++;
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.add('incorrect');
    }

    // Mostra a resposta correta e desabilita todos os botões
    Array.from(optionsContainer.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    explanationContainer.classList.remove('hidden'); // NOVO: Mostra a explicação
    nextBtn.classList.remove('hidden');
}

// Mostra os resultados finais
function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    const scorePercent = Math.round((score / subjectQuestions.length) * 100);
    scoreText.innerText = `Você acertou ${score} de ${subjectQuestions.length} questões de ${currentSubject}! (${scorePercent}%)`;

    // Feedback simples
    if (scorePercent >= 80) {
        feedbackText.innerText = "Excelente! Você está muito bem preparado!";
    } else if (scorePercent >= 50) {
        feedbackText.innerText = "Bom trabalho! Continue revisando.";
    } else {
        feedbackText.innerText = "Não desanime! Continue estudando e tente novamente.";
    }
}

// --- EVENT LISTENERS ---

// Botão "Próxima Questão"
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < subjectQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Botão "Tentar Novamente" (na tela de resultados)
restartBtn.addEventListener('click', () => {
    resultsScreen.classList.add('hidden');
    startSubjectQuiz(currentSubject); // Reinicia o quiz da mesma matéria
});

// Botão "Voltar ao Início" (na tela de resultados)
homeBtn.addEventListener('click', initializeQuiz);

// Inicia o aplicativo quando a página carregar
document.addEventListener('DOMContentLoaded', initializeQuiz);
