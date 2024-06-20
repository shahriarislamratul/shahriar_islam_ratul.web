// Disable right-click 
document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
        });

 // Disable Ctrl+C and other key combinations
document.addEventListener('keydown', function(e) {
 if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'p')) {
      e.preventDefault();
          }
        });
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.learn-more');

    button.addEventListener('click', () => {
        alert('Thank you for your interest! More content coming soon.');
    });
});
//Tic Tac Toe
document.getElementById("tic_tac_toe").addEventListener("click", function() {
  window.location.href = 'https://shahriarislamratul.github.io/Tic-Tac-Toe/ ';
});
//Auto Generate Passwo
document.getElementById("auto_password_generate").addEventListener("click", function() {
  window.location.href = 'https://shahriarislamratul.github.io/ai_password_generator/ ';
});
//Digital Clock
document.getElementById("d_clock").addEventListener("click", function() {
  window.location.href = 'https://shahriarislamratul.github.io/digital-clock/ ';
});
