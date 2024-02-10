const perguntas = [
    {
        pergunta: "Qual é o operador usado para atribuição de valor em JavaScript?",
        respostas: [
            "=",
            "==",
            ":="
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'parseInt()' faz em JavaScript?",
        respostas: [
            "Converte uma string em um número inteiro",
            "Converte um número em uma string",
            "Arredonda um número para o inteiro mais próximo"
        ],
        correta: 0
    },
    {
        pergunta: "Qual desses é um tipo de dado primitivo em JavaScript?",
        respostas: [
            "Array",
            "Object",
            "String"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "Retorna o tipo de dado de uma variável",
            "Concatena duas strings",
            "Compara dois valores"
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que é executada antes de outra",
            "Uma função que é passada como argumento para outra função",
            "Uma função que retorna um valor"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "'==' compara valores e '===' compara valores e tipos de dados",
            "'===' compara valores e '==' compara valores e tipos de dados",
            "Não há diferença entre eles"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'map()' faz em um array em JavaScript?",
        respostas: [
            "Adiciona um novo elemento ao array",
            "Remove um elemento do array",
            "Aplica uma função a cada elemento do array e retorna um novo array com os resultados"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "variable name = value;",
            "var name = value;",
            "let name = value;"
        ],
        correta: 1
    },
    {
        pergunta: "O que é um loop 'for' em JavaScript?",
        respostas: [
            "Um loop que executa uma ação até que uma condição seja verdadeira",
            "Um loop que executa uma ação para cada elemento em um array",
            "Um loop que executa uma ação um número específico de vezes"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a saída do seguinte código em JavaScript: console.log(1 + '2' + '2');?",
        respostas: [
            "'122'",
            "'32'",
            "'14'"
        ],
        correta: 0
    }
];
  
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
  
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')

mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
for(const item of perguntas) {
    //clonar o template
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
    
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
    
        quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}