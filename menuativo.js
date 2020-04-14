/*
    Author: Juliano G. da Costa
    Homepage: vetorart.com.br

    OBS: Este exemplo utilizei as URLS com extensão apenas para mostrar seu funcionamento, mas a ideia é utilizar em sites com urls amigáveis alterando o valor do atributo conforme necessidade.

*/

// Crio a variável que irá informar com qual atributo que irei trabalhar
var atributo = "name";
// Informo a extensão final. Caso utilize URL amigável, favor retirar este trecho.
var extension = "."+"html";
var count_extension = extension.length;

// Crio a variável que irá informar qual o valor do atributo que irei trabalhar
var atributoValor = "menu";
// Crio a variável com o nome da classe que será adicionada quando o link ficar ativo
var classe = "mactive";
// Resgato a URL atual do navegador
var url = window.location.href;

// Divido a url
var split = url.split('/');
// No meu caso, estou pegando o último parâmetro da URL
var menu = split[split.length-1];
// Retira a extensão da url. Caso utilize URL amigável, favor retirar este trecho.
menu = menu.substring(menu.lenght,count_extension);

// Rodo o menu em busca dos links com o atributo e valor instanciado acima
var itensMenu = document.querySelectorAll('a['+atributo+'='+atributoValor+']');
// Conto os resultados para fazer o for
var count = itensMenu.length;
// Inicio o for para identificar a posição do menu
for (var i = 0; i < count; i++){
    // Crio a regra: se a posição do menu tiver os parâmetros condizentes com a URL atual
    if(menu == itensMenu[i].getAttribute("id")){
        // Identifica a posição do menu
        var identifica = itensMenu[i].getAttribute("id");
        // Atribui a posição ao menu
        var elemento = document.getElementById(identifica);
        // Adiciona a classe instaciada no início
        elemento.classList.add(classe);
    }
}