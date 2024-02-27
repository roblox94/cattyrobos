document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour générer un nombre aléatoire entre min et max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Fonction pour mettre à jour le décompte
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        const seconds = getRandomInt(1500, 2900);
        countdownElement.textContent = seconds;

        if (seconds > 0) {
            setTimeout(updateCountdown, 1000);
        } else {
            // Redirection ou autre action à effectuer une fois le décompte terminé
            document.getElementById('message').textContent = "Queue to server can be skipped by sending 500 TikTok coins gift!";
        }
    }

    // Appeler la fonction initiale pour commencer le décompte
    updateCountdown();
});
