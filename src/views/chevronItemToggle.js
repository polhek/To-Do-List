export { toggleChevron };

const toggleChevron = () => {
  const chevronItem = document.getElementById("chevron");
  const chevronStyleItem = document.getElementById("chevronstyle");
  chevronStyleItem.classList.toggle("fa-chevron-right");
  chevronStyleItem.classList.toggle("fa-chevron-down");
};

const chevronItem = document.getElementById("chevron");

chevronItem.addEventListener("click", toggleChevron);
