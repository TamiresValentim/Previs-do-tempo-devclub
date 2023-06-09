

let chave = "60ab015f9118df28754418b23e5ecb83"

function  colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em "+ dados.name
    document.querySelector(".grau").innerHTML = Math.floor( dados.main.temp) +"°c"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".previsao").innerHTML = "Umidade "+ dados.main.humidity
    document.querySelector(".icone").src ="https://openweathermap.org/img/wn/" + dados.weather[0].icon  + ".png"
}




/* async sempre colocar para buscar em outro site */
async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+ cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric" 
    ).then(resposta => resposta.json())

    colocarNaTela(dados)

}





function cliqueNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
    
    buscarCidade(cidade)
 }