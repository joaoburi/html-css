function clickMenu() {
    if(itens.style.display == 'none') {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    } 
}

function mudouTamanho() {
    if(window.innerWidth >= 769) {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}