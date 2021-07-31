// /*Salvar como js - java script */
// formulario = document.querySelector('form');
// btnEnviar = document.querySelector('.btn-primary');
// nomeMsgError = document.querySelector('.nome.msg-error');
// emailMsgError = document.querySelector('.email.msg-error');
// function enviaFormulario(event) {
//     event.preventDefault();
// // cada vez que eu chamo uma função ele percorre o documento inteiro, então eu separo ele ai em cima porque eu vou utilizá-lo


//     const entradasDoFormulario = new FormData(formulario).entries();
//     // const x = Object.fromEntries(entradasDoFormulario)
//     // console.log(x); 
//     const { nome, email, observacoes } = Object.fromEntries(entradasDoFormulario);

//     const mensagemErroNome = validaNome(nome);
//     const mensagemErroEmail = validaEmail (email);
//     const mensagemErroObservacoes = validaObservacoes(observacoes);

//     if (temErro(mensagemErroEmail, mensagemErroNome, mensagemErroObservacoes)) {
//         return;
//     }
//     /*if(!validaCampoObrigatorio(formulario.nome)) {
//         formulario.nome.classList.add('invalido')
//     }
//     else {
//         formulario.nome.classList.add('valido')
//     }
//         /*console.log(`
//             Nome: ${formulario.nome.value}
//             E-mail: ${formulario.email.value}
//             Observações: ${formulario.observacoes.value}`);
//             formulario.reset(); 
//             eu estou separando em uma variável só para ficar mais fácil
//             || - ou
//             null = nulo
//             "" - vazio 
//             if (x(origem)) - se isso retornar verdadeiro
//             if (!x(origem)) - se isso for falso 
//             classlist. add - criar uma nova classe
//             CNTROL + ; - comenta;
//             acento pode dar problema em um if, função e outros, porque é como se ele tivesse criando um novo caracter, teria um espaço
//             então evitamos caracter especial
//     nome = formulario.nome.value;
//     email = formulario.email.value;
//     observações = formulario.observacoes.value;
//     if(nome == undefined || nome == null || nome == "") { /*eu preciso colocar desses 3 jeitos, pois dependedo de como passa você passa o parametro ele pode voltar diferente
//         alert("Nome Obrigatório") 
//         const - constante
//         a nossa expressão regular/função ela começa e termina com a // 
//         g - global (pega tudo)*/
//     resetaFormulario(formulario);
// }

// function validaNome(nome) {
//     const temLetras = /^[a-zA-Z\s]*$/g; //;eu não quero alterar o variavel temLetras, eu criei uma constante porque sempre vai ser isso que eu criei
//     // expressão regular: um conjunto de regras do meu texto, eu começo com uma, [] mostra uma lista de caracteres /, g - pega de qualquer lado como você quiser


//     if (nome.length <= 0) {
//         return 'O nome é um campo obrigatório'
//     }
//     if(!temLetras.test(nome)) { // tem algo diferente disso? eu estou negando, caso não tenha letras no meu nome
//         return 'O nome só pode conter letras.'

//     }

//     return '';
// }

// function validaEmail(email) {
//     const ehValido = /^\S+@\S+$/g //;eu não quero alterar o variavel temLetras, eu criei uma constante porque sempre vai ser isso que eu criei
//     // expressão regular: um conjunto de regras do meu texto, eu começo com uma, [] mostra uma lista de caracteres /, g - pega de qualquer lado como você quiser
    
//     if (email.length <= 0) {
//         return "O email é um campo obrigatório"
    
//     }
//     if(!ehValido.test(email)) { // tem algo diferente disso? eu estou negando, caso não tenha letras no meu nome
//         return 'O email digitado não é valido.';
//     }
//     return'';
// }

// function temErro(...mensagens){
//     for (let i = 0; i < mensagens.length;i++) {
//         if (mensagem[i].length != 0) {
//             return true
//         }
//     }
//     return false;
// }


//     /*value = campo.value;
//         if(value == undefined || value == null || value == "") {
//             return false; 
//             podemos simplificar - se o campo for igual a 0 não tá preenchido*/
//     //return campo.length > 0 ; 
// //}
//     /* agora eu estou validando o valoir desse campo, o que doi preenchido
//     return true /* no java é com letra minúscula 
//     função anonima - eu só vou criar funções que eu realmente vou reutilizar*/
//     /* function preenchimentoNome() {
//         alert("funcionou");
//     } */

//     // btnEnviar.addEventListener("click", enviaFormulario); 

//     // formulario.nome.addEventListener("keyup", function () { /* quando está digitando, quando eu aperto a tecla, ela ianda não gerou a nova informação, porque é quando eu solto a tecla que vai pegar o evento que vai pegar o this para mostrar o valor atual do campo*/
//     // // codigo da função
//     // if (validaCampoObrigatorio(this.value.trim())) {
//     //     this.classList.add('valido');
//     //     this.classList.remove("invalido)");}
//     // else {
//     //     this.classList.remove('valido');
//     //     this.classList.add('invalido')
//     // }

//     // // // this é o formulário nome porque a função esta sendo referenciada no addEventListener de um formulario.nome, eu to validando, então tá vindo true.
//     // // // trim - vai tirar os espaços dos extremos ex " Andrey Masieiro ", ele não tira o do meio
//     // // porque agora se eu usar o espaço ele vai voltar falso, é uma maneira de eu não deixar ele digitar espaço
//     // });
//         // });
//     function resetaFormulario(formulario) {
//         formulario.nome.classList.remove('valido')
//         formulario.email.classList.remove('valido')
//         formulario.observacoes.classList.remove('valido')
//         formulario.reset();
//     }

// btnEnviar.addEventListener('click', enviaFormulario)

// formulario.nome.addEventListener('keyup', function () {
//             // codigo da função
//         const mensagemErro=validaNome(this.value.trim());
//         if (temErro(mensagemErro)) {
//             this.classList.remove('valido');
//             this.classList.add('invalido');
//             nomeMsgError.innerText = mensagemErro;
//         } else {
//             this.classList.add('valido');
//             this.classList.remove('invalido');
//             nomeMsgError.innerText = '';
//         }
// });
// formulario.email.addEventListener('keyup', function () {
//             // codigo da função
//         const mensagemErro=validaEmail(this.value.trim());
//         if (temErro(mensagemErro)) {
//             this.classList.remove('valido')
//             this.classList.add('invalido')
//             emailMsgError.innerText = mensagemErro;
//         } else {
//             this.classList.add('valido');
//             this.classList.remove('invalido');
//             emailMsgError.innerText = '';
//         }
// });
// REFACÇÃO DO JAVA
formulario = document.querySelector('form');
btnEnviar = document.querySelector('.btn-primary'); 
nomeMsgError = document.querySelector('.nome.msg-error'); // não pode colocar espaço porque se não ele não entende
emailMsgError = document.querySelector('.email.msg-error'); // temos que colocar aqui em cima porque toda a vez que eu coloco uma função em busca o elemento em todo o documento, assim eu separo ele porque eu vou usar.

function enviaFormulario (event) {
    event.preventDefault();
    // eu preciso validar denovo antes de enviar, porque não sei se a pessoa arrumou
    // crui uma constante new formdata(coloca o formulario).entradas
    const entradasDoFormulario = new FormData(formulario).entries();
	const {nome, email, observacoes} = Object.fromEntries(entradasDoFormulario); // é uma declaração
    // console.log(nome); // ele cria um dicionário, com os campos, eu consigo desconstruir esse dicionário
    // o nome é uma chave para formar uma váriável
    // eu estou descontruindo o meu **dicionário**, ao mesmo tempo eu estou recebendo e pegando no dicionário e colocando nas variáveis
	const mensagemErroNome = validaNome(nome);
	const mensagemErroEmail = validaEmail(email);
    const mensagemErroObservacoes = validaObservacoes(observacoes);
    //nome = x['nome'] // python
    if (temErro(mensagemErroEmail, mensagemErroNome, mensagemErroObservacoes)) { // eu quero ver se tem erro
        // temErro(mensagemErroEmail) && temErro(mensagemErroNome)
		return; // return varzio é só para sair da função, como sair do while com o break no python - é um break para função
    }
    resetaFormulario(formulario);
}

function validaNome(nome) {
    // se ele for > que 0 ele foi preenchido
    // constante - const
    const temLetras = /^[a-zA-Z\s]*$/g; // ele tem que começar e terminar com esses caracteres
    // expressão regular, começa e termina com as barras, e o g é para ela poder ser global, eu estou crinado uma constante porque eu não quero alterar o valor da variavel que estará dentro
    // é um conjunto de regras que eu quero validar de um texto
    // [] - representa uma lista de caracteres, espaço é \
    // Sem o g ele vai procurar exatamento os maiusculos e dpeois minusculos, com o g ele pode ocmeçar da onde ele quiser
    // é para prevenir que o cara digite caracter especial
    if (nome.length <= 0) {
        return 'O nome é um campo obrigatório'
    }
    if (!temLetras.test(nome)) {// eu quero saber se há algo diferente disso
        return 'O nome só pode conter letras'
    }
    return '' // não retorna nada
}

function validaEmail(email) {
    const ehValido = /^\S+@\S+$/g;
    if (email.length <= 0) {
        return 'O email é um campo obrigatório'
    }
    if (!ehValido.test(email)) {
        return 'O email digitado não é valido'
    }
    return ''
}

function validaObservacoes(observacoes) {
	if (observacoes.length <= 0) {
		return 'Informe suas observações.';
	}
	return '';
}

// function preenchimentoNome() {
//     alert ('funcionou') // ele vai dando alerta cada vez que eu digito alguma letra, ele dispara um evento quando eu preciono a tecla
// }
// função anonima, sem nome, e para isso eu uso dirto no Event listener - quando eu crio uma função que eu não vou reutilizar
function temErro(...mensagens) {
    for (let i = 0; i< mensagens.length; i++)
    if(mensagens[i].length != 0) {
        return true;
    }
    // i começa em 0, i = índice, i++ vai somando em um em um, mensagens na posição i
    //como uma variável - let - depois que acabar o bloco ela sai da memória
    // mensagens.forEach(//função que ele vai fazer)
    // // for mensagem in mensagens: --> python
    // // console.log(mensagens) // ver o que tá acontecendo
    // veio vazio porque eu to vendo a mensagem de erro, ela tem que vir vazia mesmo, porque não teve erro nos campos
    // mas antes a nossa função esperava só uma mensagem
    // com esses tres pontinhos eu posso passar quantos parametros eu quiser no ****if tem erro*** - significa cada parametro que você colocar você vai criar uma lista
    // desse parametro que eu estou recebendo, ele vai pegar essas , e transforma em lista - ele faz isso sozinho
    // return mensagens.length != 0 // fazemos isso duas vezes, por isso iremos definir uma função para ajudar na semântica do código
    return false
}
function resetaFormulario(formulario) {
    formulario.nome.classList.remove('valido');
    formulario.email.classList.remove('valido');
    formulario.observacoes.classList.remove('valido');
    formulario.reset();
}
btnEnviar.addEventListener('click', enviaFormulario)

formulario.nome.addEventListener('keyup', function () {// é quando a chave do teclado está sendo digitada // 
    //codigo da função
    const mensagemErro = (validaNome(this.value.trim()));
    if(temErro(mensagemErro)) { // eu vou exebir o valor que eu estou colocando, o this é o formulário nome porque essa função está atralada o EventListener que está atralada ao formularionome, this é quem chama a função
        this.classList.remove('valido');
        this.classList.add('invalido');
        nomeMsgError.innerText = mensagemErro
        // mensagem de erro lenght = a 0 é porque validou
    } else {
        this.classList.add('valido');
        this.classList.remove('invalido');
        nomeMsgError.innerText = ''; // O QUE É INNERTEXT
        // se eu carreguei a tela ele não vai carregar como inválido, agora ele fica em branco
    }
});

// formulario.email.addEventListener('keyup', function () {
//         //codigo da função
//         const mensagemErro = (validaEmail(this.value.trim()));
//         if(temErro(mensagemErro)) { 
//             this.classList.remove('valido');
//             this.classList.add('invalido');
//             emailMsgError.innerText = mensagemErro;
//         } else {
//             this.classList.remove('valido');
//             this.classList.add('invalido');
//             emailMsgError.innerText = ""; 
//         }
// }); 
formulario.email.addEventListener('keyup', function () {
	const mensagemErro = validaEmail(this.value.trim());
	if (temErro(mensagemErro)) {
		this.classList.remove('valido');
		this.classList.add('invalido');
		emailMsgError.innerText = mensagemErro;
	} else {
		this.classList.add('valido');
		this.classList.remove('invalido');
		emailMsgError.innerText = '';
    }
});
//keypress - é quando eu pressiono, quando eu fçao isso eu ainda não coloquei a informação atual, só quando ela sobe
//trim - tira os espaços dos extremos, e não no meio da palavra, porque se eu digitar espaço ele me retorna falso, é outra forma de validação de nome, eu não deixo ele digitar com espaços
