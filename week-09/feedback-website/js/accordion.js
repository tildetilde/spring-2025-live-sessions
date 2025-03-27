function initAccordion() {
  const accordion = document.querySelector(".accordion");
  if (!accordion) return;

  const buttons = accordion.querySelectorAll(".accordion-button");

  buttons.forEach(button, (index) => {
    button.addEventListener("keydown", (event) => {
      const targetID = button.getAttribute("aria-controls");
      const targetPanel = document.getElementById(targetID);

      switch (event.key) {
        case "ArrowDown":
        case "ArrowRight":
          event.preventDefault();
          const nextButton = buttons[(index + 1) % buttons.length];
          nextButton.focus();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          event.preventDefault();
          const prevButton =
            buttons[(index - 1 + buttons.length) % buttons.length];
          prevButton.focus();
          break;
        case "Home":
          event.preventDefault();
          buttons[0].focus();
          break;
        case "End":
          event.preventDefault();
          buttons[buttons.length - 1].focus();
          break;
        case " ":
        case "Enter":
          event.preventDefault();
          togglePanel(button, targetPanel);
          break;
      }
    });

    button.addEventListener("click", () => {
      const targetID = button.getAttribute("aria-controls");
      const targetPanel = document.getElementById(targetID);
      togglePanel(button, targetPanel);
    });
  });

  function togglePanel(button, panel) {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const newExpandedState = !isExpanded;
    button.setAttribute("aria-expanded", newExpandedState);

    if (newExpandedState) {
      panel.hidden = false;

      requestAnimationFrame(() => {
        panel.style.maxHeight = panel.scrollHeight + "px";
      });
    } else {
      panel.style.maxHeight = "0";
      panel.addEventListener(
        "transitionend",
        () => {
          panel.hidden = true;
        },
        { once: true }
      );
    }
  }
}

document.addEventListener("DOMContentLoaded", initAccordion);
