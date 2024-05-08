






















function mostrarproduto(id){

    let produto = JSON.parse(localStorage.getItem("produtos"))
    const nome= produto.filter(linha=>{
        return linha.id===id
    })
    return nome[0].descricao;
}