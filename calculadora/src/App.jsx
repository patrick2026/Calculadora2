import React,{ useState } from 'react'
import './calculadora.css'



export  function App() {
  const[valorEscritoNaTela, setValorEscritoNaTela]=useState(''); // valor escrito na tela
  const[resultado, setResultado]=useState(0);// resultados na tela
  const[acumulador, setAcumulador]=useState(0); //acumula valores na tela
  const[operado, setOperado]=useState(false);// botoes de somar diminuir multiplicar



  ////////////////////////////////////////////Componentes//////////////////////////////////////////////////////////////////////////////////

  // criando tela com duas linhas
 const Tela=(valor, resultados)=>{ // function tela, elamento tela, vai criar a telinha da calculadora, tela de dupla linha, valor da tela e resultado da operação.
  // vai ter um span que vai ser uma linha da tela contendo o calor da operação
  // segundo span segunda linha com o resultado da operação obitida
    return(
      <div className='tela'>
        <span className='operacao'>{valor}</span>
        <span className='resultado'>{resultados}</span>
      </div>
    )
 }

 // criei os bontaozinhos da nossa calculadora
 const Botao1 =(textoDoBotao, onClick)=>{ //função para o botão, segundo elemento onClike função
  return(
    <button className='botao1' onClick={onClick}>{textoDoBotao}</button>
  )
 }


//////////////////////////////////////////// Funções da calculadora:///////////////////////////////////////////////////////////////

// primeira função vai ser adicionanr o botão clicado na tela

const adicionandoDigitoNaTela =(digito)=>{//parametro do digito que ela tem que adicionar na tela, verificar qual é o tipo do digito, digito de numero, operçao, resultado, de apagar, 
  if((digito=='+' || digito=='-'|| digito=='*' || digito=='/'|| digito=='%') && operado){
    setOperado(false)// se esta sendo operado e veio um botão de click de operação o operado é falso porque ja estou realizando a operação
    setValorEscritoNaTela(resultado + digito) //ele seta o valor da tela com o valor do resultado + o valor da tela
    return // pra ele parar
  }
  if(operado){// se a condição de cima não for verdadeira, eu preciso verificar se ele esta operado
    setValorEscritoNaTela(digito),
    setOperado(false)
    return //parar a função
  }
  const valorDigitadoNaTela= valorEscritoNaTela+digito //vai reseber valor atual da tela mas digito que foi clicado
  setValorEscritoNaTela(valorDigitadoNaTela)
  }

  const limparTela =()=>{//vai limpar a calculadora
    setOperado(false)
    setValorEscritoNaTela('')
    setResultado(0)
    setAcumulador(0)
  }
  // Função para operação: 
  const Operacao=(operador)=>{
    if(operador=='bs'){// com essa operação eu tenho que apagar o ultimo digito digitado na tela
     let vaiReseberValorDaTela = valorEscritoNaTela
     vaiReseberValorDaTela=vaiReseberValorDaTela.substring(0,(vaiReseberValorDaTela.length-1))// isso eu me referencio ao tamano da tela quantidade minime equantidade maxima de numero natela digitado
     setValorEscritoNaTela(vaiReseberValorDaTela)
     setOperado(false)
     return
    }
    try{// aqui é feito o calculo de tudo que esta na tela, aqui pra baixo
      const resultadoss=eval(valorEscritoNaTela)// eval avalia uma expressão e retorna o valor dessa expressão, ele pega a expressão passada calcula e retorna o resultado, vou passar o valor que esta na tela para o eval
      setAcumulador(resultadoss)
      setResultado(resultadoss)
      setOperado(true)
    }catch(error){
      console.log(error)
    }
  }

  function botaoDePorcentagem(digito){
    if(digito==='%'){
      setValorEscritoNaTela(valorEscritoNaTela/100);

    }
 
  }

  return (
    
   
    <div className='contenier'>
      <h3>Calculadora Matemática simples</h3>
       {Tela(valorEscritoNaTela,resultado)}
       <div className='botoes1'>
        {Botao1('AC',limparTela)}
        {Botao1('/',()=>adicionandoDigitoNaTela('/'))}
        {Botao1('(',()=>adicionandoDigitoNaTela('('))}
        {Botao1(')',()=>adicionandoDigitoNaTela(')'))}
        {Botao1('7',()=>adicionandoDigitoNaTela('7'))}
        {Botao1('8',()=>adicionandoDigitoNaTela('8'))}
        {Botao1('9',()=>adicionandoDigitoNaTela('9'))}
        {Botao1('*',()=>adicionandoDigitoNaTela('*'))}
        {Botao1('4',()=>adicionandoDigitoNaTela('4'))}
        {Botao1('5',()=>adicionandoDigitoNaTela('5'))}
        {Botao1('6',()=>adicionandoDigitoNaTela('6'))}
        {Botao1('-',()=>adicionandoDigitoNaTela('-'))}
        {Botao1('1',()=>adicionandoDigitoNaTela('1'))}
        {Botao1('2',()=>adicionandoDigitoNaTela('2'))}
        {Botao1('3',()=>adicionandoDigitoNaTela('3'))}
        {Botao1('+',()=>adicionandoDigitoNaTela('+'))}
        {Botao1('0',()=>adicionandoDigitoNaTela('0'))}
        {Botao1('.',()=>adicionandoDigitoNaTela('.'))}
        {Botao1('x',()=>Operacao('bs'))}
        {Botao1('=',()=>Operacao('='))}
        {Botao1('%',()=>botaoDePorcentagem('%'))}
        
        
        

       </div>
    </div>
  
  )
}


