function copiarToken(elem){
    navigator.clipboard.writeText($(elem).val());
    alert("Token copiado!")
}