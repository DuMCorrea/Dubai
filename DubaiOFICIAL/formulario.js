const addButton = document.querySelector('.add-btn');
const experiencesDiv = document.querySelector('.experiencias');

addButton.addEventListener('click', () => {
    const experienciaDiv = document.createElement('div');
    experienciaDiv.classList.add('experiencia');
    
    const newExperienceInput = document.createElement('input');
    newExperienceInput.setAttribute('type', 'text');
    newExperienceInput.setAttribute('placeholder', 'Digite aqui suas experiências profissionais');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = '-';
    deleteButton.addEventListener('click', () => {
        experienciaDiv.remove();
    });

    experienciaDiv.appendChild(newExperienceInput);
    experienciaDiv.appendChild(deleteButton);

    experiencesDiv.appendChild(experienciaDiv);
});