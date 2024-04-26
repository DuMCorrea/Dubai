var currentQuestion = 1;

function nextQuestion(answer) {
    // Podemos processar a resposta do usuario aqui como quisermos
    console.log("Resposta selecionada:", answer);

    // Mudar a pergunta e as opções de resposta
    var question = document.getElementById("question");
    var options = document.getElementById("opcoes");
    switch (currentQuestion) {
        case 1:
            question.textContent = "Qual seu nível de inglês?";
            options.innerHTML = `
                <button onclick="nextQuestion('ZERO')">ZERO</button>
                <button onclick="nextQuestion('BÁSICO')">BÁSICO</button>
                <button onclick="nextQuestion('INTERMEDIÁRIO')">INTERMEDIÁRIO</button>
                <button onclick="nextQuestion('AVANÇADO')">AVANÇADO</button>
                <button onclick="nextQuestion('FLUENTE')">FLUENTE</button>
            `;
            break;
        case 2:
            question.textContent = "Quanto tempo deseja trabalhar em Dubai?";
            options.innerHTML = `
                <button onclick="nextQuestion('6 meses a 1 ano')">6 meses a 1 ano</button>
                <button onclick="nextQuestion('de 1 a 2 anos')">de 1 a 2 anos</button>
                <button onclick="nextQuestion('de 2 a 3 anos')">de 2 a 3 anos</button>
                <button onclick="nextQuestion('mais de 5 anos')">mais de 5 anos</button>
                <button onclick="nextQuestion('sem tempo definido')">sem tempo definido</button>
            `;
            break;
        case 3:
            // COLOCAR AQUI O REDIRECIONAMENTO DA PAGINA APOS RESPONDER TUDO
            window.location.href = "formulario.html"; 

            // Você pode passar as respostas para a outra página por meio de parâmetros de consulta, armazenando-as em sessionStorage ou localStorage, ou enviando-as para um servidor.
            // Exemplo de como enviar as respostas para a outra página usando localStorage:
            localStorage.setItem("respostas", JSON.stringify(answers));
            break;
        default:
            break;
    }
    currentQuestion++;
}