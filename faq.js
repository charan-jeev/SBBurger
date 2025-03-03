document.addEventListener("DOMContentLoaded", function () {
  let accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(button => {
      button.addEventListener("click", function () {
          // Collapse all other open FAQs
          accordionButtons.forEach(btn => {
              if (btn !== button && !btn.classList.contains("collapsed")) {
                  btn.click();
              }
          });
      });
  });
});
