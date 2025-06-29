// Espera o conteúdo da página carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- Controle do Menu Mobile ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Adiciona um evento de clique ao botão do menu
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Alterna a classe 'show' na lista de links para exibi-la ou escondê-la
            navLinks.classList.toggle('show');
        });
    }

    // --- Validação do Formulário de Contato ---
    const contactForm = document.getElementById('contact-form');

    // Adiciona um evento de 'submit' ao formulário
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Previne o comportamento padrão de recarregar a página
            event.preventDefault(); 

            // Simula o envio e exibe uma mensagem de confirmação
            alert('Obrigado pelo seu contato! Mensagem enviada com sucesso. (Demonstração)');

            // Limpa os campos do formulário após o envio
            contactForm.reset();
        });
    }
});
