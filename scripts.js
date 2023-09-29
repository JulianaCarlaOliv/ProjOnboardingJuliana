const campo = document.querySelector('.campotarefas');
const botaoadicionar = document.querySelector('.botaoadictarefas');
const botaoremover = document.querySelector('.botaoremover');
const lista = document.querySelector('.listatarefas');


let listaitenstarefas = [];

function adicionartarefas() {
    if (campo.value != '') {
        if (listaitenstarefas.indexOf(campo.value) < 0) {
            listaitenstarefas.push(campo.value); 
            exibirtarefas();        
        }       
    }

    campo.value = ''
}

function exibirtarefas() {
    let auxlistatarefas = '';

    listaitenstarefas.map((itemtarefas) => {
        auxlistatarefas = auxlistatarefas + `    
            <li class="itemlistatarefas">
                <input type="checkbox" name="tarefas" value=${itemtarefas} 
                <font color="#808080">${itemtarefas}</font>                       
            </li>` 
    })

    lista.innerHTML = auxlistatarefas;
    campo.text = '';
}

function removertarefas() {
    let auxindex = '';
    let cont = 0;
    var selecionados = document.getElementsByName("tarefas");

    for(var i = 0; i < selecionados.length; i++) {
        if (selecionados[i].checked) {                     
            auxindex = auxindex + i + ',';  
            listaitenstarefas.splice(i, 1);         
            cont = cont + 1;                      
        }
    }
    
    if (cont > 0)
        exibirtarefas(); 
}   
    

botaoadicionar.addEventListener('click', adicionartarefas);
botaoremover.addEventListener('click', removertarefas);