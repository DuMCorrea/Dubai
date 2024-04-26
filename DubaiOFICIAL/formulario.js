const addButtonExperiencias = document.querySelector('.experiencias .add-btn');
const experiencesDiv = document.querySelector('.experiencias');

addButtonExperiencias.addEventListener('click', (event) => {
    event.preventDefault(); // Evita o envio do formulário e a recarga da página

    const experienciaDiv = document.createElement('div');
    experienciaDiv.classList.add('experiencia');

    const newExperienceInput = document.createElement('input');
    newExperienceInput.setAttribute('type', 'text');
    newExperienceInput.setAttribute('placeholder', 'Digite aqui suas experiências profissionais');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('remove-btn');
    deleteButton.textContent = '-';
    deleteButton.addEventListener('click', () => {
        experienciaDiv.remove();
    });

    experienciaDiv.appendChild(newExperienceInput);
    experienciaDiv.appendChild(deleteButton);

    experiencesDiv.appendChild(experienciaDiv);
});

const addButtonFormacoes = document.querySelector('.formacoes .add-btn');
const formacoesDiv = document.querySelector('.formacoes');

addButtonFormacoes.addEventListener('click', (event) => {
    event.preventDefault(); // Evita o envio do formulário e a recarga da página

    const formacaoDiv = document.createElement('div');
    formacaoDiv.classList.add('experiencia');

    const newFormacaoInput = document.createElement('input');
    newFormacaoInput.setAttribute('type', 'text');
    newFormacaoInput.setAttribute('placeholder', 'Informe seus estudos, treinamentos, cursos, diplomas, para destacar suas qualidades e conhecimentos. (opcional)');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('remove-btn');
    deleteButton.textContent = '-';
    deleteButton.addEventListener('click', () => {
        formacaoDiv.remove();
    });

    formacaoDiv.appendChild(newFormacaoInput);
    formacaoDiv.appendChild(deleteButton);

    formacoesDiv.appendChild(formacaoDiv);
});