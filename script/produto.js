function selecionarImgProduto(imgMiniaturaEscolhida){
    document.getElementById('imgPrincipal').src = imgMiniaturaEscolhida.src;
    if(imgMiniaturaEscolhida.id == "ModeloPreto"){
        document.getElementById('precoProduto').innerHTML = "R$56,90";
        document.getElementById('qtdDisponivel').innerHTML = "171 peças disponíveis";
    }
    else if(imgMiniaturaEscolhida.id == "ModeloAzul"){
        document.getElementById('precoProduto').innerHTML = "R$56,90";
        document.getElementById('qtdDisponivel').innerHTML = "152 peças disponíveis";
    }
    else if(imgMiniaturaEscolhida.id == "ModeloVerde"){
        document.getElementById('precoProduto').innerHTML = "R$49,90";
        document.getElementById('qtdDisponivel').innerHTML = "213 peças disponíveis";
    }
    else if(imgMiniaturaEscolhida.id == "ModeloCinza"){
        document.getElementById('precoProduto').innerHTML = "R$69,90";
        document.getElementById('qtdDisponivel').innerHTML = "353 peças disponíveis";
    }
    else if(imgMiniaturaEscolhida.id == "ModeloRosa"){
        document.getElementById('precoProduto').innerHTML = "R$69,90";
        document.getElementById('qtdDisponivel').innerHTML = "319 peças disponíveis";
    }
}
function mudarPrecoECor(botaoEscolhido){
    if(botaoEscolhido.id == "btnModeloPreto"){
        document.getElementById('precoProduto').innerHTML = "R$56,90";
        document.getElementById('qtdDisponivel').innerHTML = "171 peças disponíveis";
        document.getElementById('imgPrincipal').src = "../img/produto1.png"
    }
    else if(botaoEscolhido.id == "btnModeloAzul"){
        document.getElementById('precoProduto').innerHTML = "R$56,90";
        document.getElementById('qtdDisponivel').innerHTML = "152 peças disponíveis";
        document.getElementById('imgPrincipal').src = "../img/produto2.png"
    }
    else if(botaoEscolhido.id == "btnModeloVerde"){
        document.getElementById('precoProduto').innerHTML = "R$49,90";
        document.getElementById('qtdDisponivel').innerHTML = "213 peças disponíveis";
        document.getElementById('imgPrincipal').src = "../img/produto3.png"
    }
    else if(botaoEscolhido.id == "btnModeloCinza"){
        document.getElementById('precoProduto').innerHTML = "R$69,90";
        document.getElementById('qtdDisponivel').innerHTML = "353 peças disponíveis";
        document.getElementById('imgPrincipal').src = "../img/produto4.png"
    }
    else if(botaoEscolhido.id == "btnModeloRosa"){
        document.getElementById('precoProduto').innerHTML = "R$69,90";
        document.getElementById('qtdDisponivel').innerHTML = "319 peças disponíveis";
        document.getElementById('imgPrincipal').src = "../img/produto5.png"
    }
}
function mudarDisponivel(botaoEscolhido){
    let tamanho = document.getElementById(botaoEscolhido.id).textContent;
    document.getElementById('tamanhoSelecionado').innerHTML = "Tamanho Selecionado: " + tamanho;
    if(botaoEscolhido.id == "btnTamanhoP"){
        document.getElementById('qtdDisponivel').innerHTML = "319 peças disponíveis";
    }
    else if(botaoEscolhido.id == "btnTamanhoM"){
        document.getElementById('qtdDisponivel').innerHTML = "353 peças disponíveis";
    }
    else if(botaoEscolhido.id == "btnTamanhoG"){
        document.getElementById('qtdDisponivel').innerHTML = "213 peças disponíveis";
    }
    else if(botaoEscolhido.id == "btnTamanhoGG"){
        document.getElementById('qtdDisponivel').innerHTML = "171 peças disponíveis";
    }
}

