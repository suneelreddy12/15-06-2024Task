// Get the countdown div
const countdownDiv = document.getElementById("countdown");

// Function to update the countdown
function updateCountdown(number, callback) {
  setTimeout(() => {
    countdownDiv.textContent = number;
    callback();
  }, 1000);
}

// Start the countdown
updateCountdown(10, () => {
  updateCountdown(9, () => {
    updateCountdown(8, () => {
      updateCountdown(7, () => {
        updateCountdown(6, () => {
          updateCountdown(5, () => {
            updateCountdown(4, () => {
              updateCountdown(3, () => {
                updateCountdown(2, () => {
                  updateCountdown(1, () => {
                    setTimeout(() => {
                      countdownDiv.textContent = "Happy Independence Day";
                    }, 1000);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
