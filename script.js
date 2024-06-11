const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { //primeiro objeto da lista de perguntas
        enunciado: "qual a melhor maneira de se combater o desmatamento?", 
        alternativas: ["reflorestamento de áreas degradadas",
                        "implementação de leis mais rigorosas para a proteção das florestas"]
    },

    { //segundo objeto da lista de perguntas
        enunciado: "como podemos compbater a desigualdade social de forma mias eficaz e sustentável?", 
        alternativas: ["implementar programas de educação e formação profissional acessíveis a todos",
                        "políticas de redistribuição de renda e oportunidades"]
    }

];