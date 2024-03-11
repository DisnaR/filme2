document.addEventListener("DOMContentLoaded", function() {
    const inscreverBtn = document.getElementById("inscreverBtn");

    inscreverBtn.addEventListener("click", function() {
        const emailInput = document.getElementById("emailInput").value;
        
        if (emailInput.trim() === "") {
            alert("Por favor, digite um e-mail.");
        } else if (!isValidEmail(emailInput)) {
            alert("Por favor, digite um e-mail válido.");
        } else {
            console.log("Email digitado:", emailInput);
            alert("Obrigado por se inscrever para receber todas as novidades!");
        }
    });

    function isValidEmail(email) {
        // Expressão regular para verificar se o e-mail é válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
