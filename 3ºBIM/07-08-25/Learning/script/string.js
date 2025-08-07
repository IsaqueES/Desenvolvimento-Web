const contarPalavras= (string) => {
    const palavras = string.split(" ");
    return palavras.length;
};
const contarLetras = (string) => { 
    const letras = string.split("");
    return letras.length;
};
const frequenciaDasPalavras = (string) => {
    const palavras = string.split(" ")
    const frequencia = {}
    palavras.forEach(palavra => {
        if(frequencia[palavra]){
            frequencia[palavra]++
        }else{
            frequencia[palavra]=1
        }
    });
    return frequencia
};

module.exports ={
    contarLetras,
    contarPalavras,
    frequenciaDasPalavras
}
