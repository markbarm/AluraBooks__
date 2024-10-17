// Captura o campo de busca e a lista de termos
const searchInput = document.getElementById('search');
const terms = document.querySelectorAll('.term');

// Adiciona um ouvinte de evento para o campo de busca
searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase(); // Pega o valor do input e converte para minúsculas

    // Para cada termo, verifica se ele corresponde à busca
    terms.forEach(function(term) {
        const termTitle = term.querySelector('h2').textContent.toLowerCase(); // Pega o título do termo (h2) e converte para minúsculas
        const termDescription = term.querySelector('p').textContent.toLowerCase(); // Pega a descrição do termo (p)

        // Se o valor da busca estiver contido no título ou na descrição, mostra o termo, senão, esconde-o
        if (termTitle.includes(searchValue) || termDescription.includes(searchValue)) {
            term.style.display = 'block'; // Mostra o termo
        } else {
            term.style.display = 'none'; // Esconde o termo
        }
    });
});
