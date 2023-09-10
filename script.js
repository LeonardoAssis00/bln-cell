// Captura todos os elementos com a classe 'service'
const serviceElements = document.querySelectorAll('.service');

// Adiciona um ouvinte de evento para cada serviço
serviceElements.forEach(service => {
    service.addEventListener('mouseover', () => {
        service.classList.add('highlighted');
    });
    
    service.addEventListener('mouseout', () => {
        service.classList.remove('highlighted');
    });
});

// Captura o formulário de contato
const contactForm = document.getElementById('contact-form');

// Adiciona um ouvinte de evento para o envio do formulário
contactForm.addEventListener('submit', event => {
    event.preventDefault(); // Evita que a página seja recarregada
    
    // Captura o valor do campo de nome
    const nameInput = contactForm.querySelector('input[name="name"]');
    const userName = nameInput.value;
    
    // Exibe uma mensagem de sucesso
    alert(`Obrigado, ${userName}! Sua mensagem foi enviada com sucesso.`);
    
    // Limpa o campo de nome
    nameInput.value = '';
});
