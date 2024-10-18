// Seleciona os elementos necessários
const modal = document.getElementById('modal');
const addQuestionBtn = document.getElementById('add-question-btn');
const closeModal = document.querySelector('.close');
const saveQuestionsBtn = document.getElementById('save-questions-btn');
const questionList = document.getElementById('questao-list');
const quantidadeInput = document.getElementById('quantidade-questoes');
const moduleSelect = document.getElementById('module-select');

let questoesSelecionadas = [];
let questaoCount = 0;

// Questões de exemplo
const questoesExemplo = [
    "Questão 1: Exemplo...",
    "Questão 2: Exemplo...",
    "Questão 3: Exemplo...",
    "Questão 4: Exemplo...",
    "Questão 5: Exemplo...",
    "Questão 6: Exemplo...",
    "Questão 7: Exemplo...",
    "Questão 8: Exemplo...",
    "Questão 9: Exemplo...",
    "Questão 10: Exemplo..."
];

// Abrir o modal ao clicar no botão "Adicionar Questões"
addQuestionBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Fechar o modal ao clicar no botão de fechar
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Salvar questões selecionadas no modal
saveQuestionsBtn.addEventListener('click', () => {
    const quantidade = parseInt(quantidadeInput.value);
    const selectedModules = Array.from(moduleSelect.selectedOptions).map(option => option.value);

    if (isNaN(quantidade) || selectedModules.length === 0) {
        alert('Informe a quantidade de questões e selecione pelo menos um módulo.');
        return;
    }

    const randomQuestoes = questoesExemplo.slice(0, quantidade);

    randomQuestoes.forEach((questao) => {
        const questaoCard = document.createElement('div');
        questaoCard.classList.add('questao-card');
        questaoCard.innerHTML = `<p>${questao}</p>`;
        questionList.appendChild(questaoCard);
    });

    questaoCount += quantidade;
    modal.style.display = 'none';
});

// Ao carregar a página, habilita a lógica do botão
document.addEventListener('DOMContentLoaded', () => {
    addQuestionBtn.classList.remove('hidden');
});
