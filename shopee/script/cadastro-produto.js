let file = document.getElementById('arquivo');
function EnviarArquivo() {
    if (file.files.length > 0) {
        document.getElementById('p-arquivo').innerHTML = "arquivo.png"
    }
    setTimeout(EnviarArquivo, 2000); 
}


function Cadastro() {
    if (file.files.length == 0) {
        alert("É Obrigatório Anexar Uma Imagem!")
    }
    else {
        alert('CLIENTE CADASTRADO COM SUCESSO!')
    }
}