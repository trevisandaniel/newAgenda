//toggle do formulário
$(document).ready(function(){
    $('#addBtn').click(function(){
        $('#form').slideToggle();
    })
})

const main = document.getElementById('form');

let linhas = '';
let contador = 0;

form.addEventListener('submit',function(e){
    e.preventDefault();

    const razaoSocial = document.getElementById('razaoSocial');
    const nomeFantasia = document.getElementById('nomeFantasia');
    const cnpj = document.getElementById('cnpj');
    const codEmpresa = document.getElementById('codEmpresa');
    const sistemaOperacional = document.getElementById('sistemaOperacional');
    const plantao = document.getElementById('plantao');
    const endereco = document.getElementById('endereco');
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('uf');
    const responsavel = document.getElementById('responsavel');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');

    console.log(codEmpresa.value);
    console.log(sistemaOperacional.value)


    let valor = `<tr>`;

    valor += `<th scope="row"></th>`;
    valor += `<td>${razaoSocial.value}</td>`;
    valor += `<td>${codEmpresa.value}</td>`;
    valor += `<td>${telefone.value}</td>`;
    valor += `<td>${sistemaOperacional.value}</td>`;
    valor += `<td>${plantao.value}</td>`;
    valor += `</tr>`;

    linhas += valor;

    const agenda = document.querySelector('tbody');
    agenda.innerHTML = linhas;
})

