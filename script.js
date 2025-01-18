document.addEventListener("DOMContentLoaded", function() {
    // Adiciona uma classe para mostrar o conteúdo quando a página carregar
    document.querySelector('.content-main').classList.add('show');
});

window.addEventListener("pageshow", function(event) {
    // Verifica se a página está sendo carregada a partir do cache
    if (event.persisted) {
        document.querySelector('.content-main').classList.add('show');
    }
});
