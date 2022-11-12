
// Elementos HTML
const elements = {

    word: window.document.getElementById('word'), // string
    verify: window.document.getElementById('verify'), // text input
    congrats: window.document.getElementById('congrats'), // string
    difficulty: window.document.getElementsByName('difficulty') // radios
}


// Anagrama

// Lista de palavras com as dificuldades
const words = {
    
    ez: [
        'andar', 'carro', 'mesa', 'mouse', 'voar', 'tatu', 'sofá',
        'gerar', 'moto', 'azul', 'correr', 'pedra', 'avião'
    ],

    medium: [
       'cadeira', 'esmalte', 'palavra', 'tablet', 'teclado',
       'caminhar', 'lâmpada', 'caminhão', 'celular',
       'ganhar', 'perder'
    ],

    hard: [
        'motociclista', 'bicicleta', 'pedestre', 'facultativo',
        'computador', 'bluetooth', 'digitalizar', 'carbônico', 
        'carregador'
    ]
}


// Esse valor será usado na verificação da palavra
let realWord = ''


function anagrama () {

    /*
        Limpando o input, pq se a pessoa tiver digitado
        antes de gerar a palavra, a palavra não funciona
        e
        o congrats para se a pessoa já tiver acertado outra palavra
        e for jogar denovo, ele sumir
    */
    elements.verify.value = ''
    elements.congrats.innerHTML = ''

    
    // Alguns valores
    let word = ''
    let randWord = ''
    let randNum = ''
    
    
    // Verificando a dificuldade
    if (elements.difficulty[0].checked) {

        // Pegando uma palavra aleatória
        word = words.ez[ Math.floor(Math.random() * words.ez.length) ]
        

    } else if (elements.difficulty[1].checked) {
        
        word = words.medium[ Math.floor(Math.random() * words.medium.length) ]


    } else if (elements.difficulty[2].checked) {

        word = words.hard[ Math.floor(Math.random() * words.hard.length) ]
    }


    // Agora sim ele poderá ser usado
    realWord = word
    

    // Loop que embaralha a palavra
    for(let i = word.length; i > 0; i--) {

        // Número aleatório
        randNum = Math.floor(Math.random() * word.length)

        // Adicionando letras aos poucos
        randWord += word.charAt(randNum)

        // Limpando a palavra aos poucos
        word = word.replace(word.charAt(randNum), '')
    }


    /* Verificando se a palavra embaralhada é igual
        a original, sim, isso pode acontecer, mas
        é raro. Caso seja, a função é executada
        novamente    
    */
    if(randWord === realWord) {
        return anagrama()
    }


    // Colocando a palavra embaralhada no HTML
    elements.word.innerHTML = randWord
}




// Verificar

function verify () {

    let txt = elements.verify.value


    // Só algumas verificações
    if(realWord.length === 0) {
        return window.alert('Você não gerou a palavra ainda!')

    } else if (txt.length === 0) {
        window.alert('Mas você nem digitou nada!')

    } else if( typeof(Number(txt)) === 'number' || String(Number(txt)).includes(NaN) ){
        window.alert('Sua palavra não pode ser um número!')

    } else if (txt.length < realWord.length) {
        window.alert(`Sua palavra é pequena demais! Essa palavra tem ${txt.length} letra(s).`)

    } else if (txt.length > realWord.length) {
        window.alert(`Sua palavra é grande demais! Essa palavra tem ${txt.length} letras(s).`)

    } else if (txt !== realWord){
        window.alert('A palavra não é essa :/')

    } else if (txt == realWord) {

        congrats.innerHTML = ` <br>
         Parabéns, você acertou!!! A palavra é <strong>${realWord}</strong>`
    }
    
}
