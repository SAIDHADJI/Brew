// ==================== NAVIGATION BAR ====================
// Highlight the clicked nav item by adding a background color
const navItems = document.querySelectorAll(
  "#menu, #about, #testimonials, #contact"
);
const home = document.getElementById("home");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((i) => i.classList.remove("bg-gray-100"));
    item.classList.add("bg-gray-100");
  });
});

// Remove highlight when clicking on the "Home" button
home.addEventListener("click", () => {
  navItems.forEach((i) => i.classList.remove("bg-gray-100"));
});

// ==================== ORDER FORM ====================
// Elements related to the order form
const orderForm = document.getElementById("orderForm");
const showOrderForm = document.getElementById("showOrderForm");
const hideOrderForm = document.getElementById("hideOrderForm");
const selectedOrder = document.getElementById("selectedOrder");
const listItems = document.querySelectorAll("#dropdownList li");
const dropdownText = document.getElementById("dropdownText");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const clearSelectedOrder = document.getElementById("clearSelectedOrder");

// Show the order form (slide-in effect)
showOrderForm.addEventListener("click", () => {
  orderForm.classList.remove("translate-x-80");
});
// Hide the order form (slide-out effect)
hideOrderForm.addEventListener("click", () => {
  orderForm.classList.add("translate-x-80");
});

// Handle selection of coffee items inside the form
const coffeeList = document.querySelectorAll(
  "#espressoOption, #cappuccinoOption, #latteOption, #macchiatoOption, #mochaOption, #icedCoffeeOption, #caramelLatteOption, #hazelnutCoffeeOption"
);

coffeeList.forEach((item) => {
  item.addEventListener("click", () => {
    coffeeList.forEach((i) => i.classList.remove("bg-gray-100"));
    item.classList.add("bg-gray-100");
  });
});

// Handle dropdown list selection
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    const value = item.textContent;
    selectedOrder.value = value;
    dropdownText.textContent = value;

    toggleList(); // Hide the dropdown after selection
  });
});

// Reset form fields after submission
orderForm.addEventListener("submit", (e) => {
  setTimeout(() => {
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    selectedOrder.value = "";
    dropdownText.textContent = "Select Order";
    coffeeList.forEach((i) => i.classList.remove("bg-gray-100"));
  }, 500);
});

// Clear the selected order manually
clearSelectedOrder.addEventListener("click", () => {
  dropdownText.textContent = "Select Order";
  coffeeList.forEach((i) => i.classList.remove("bg-gray-100"));
});

// ==================== MOBILE SIDEBAR ====================
// Handle the opening and closing of the mobile navigation sidebar
const sideBar = document.getElementById("sideBar");
const showSideBar = document.getElementById("showSideBar");
const hideSideBar = document.getElementById("hideSideBar");

showSideBar.addEventListener("click", () => {
  sideBar.classList.add("translate-x-0");
});
hideSideBar.addEventListener("click", () => {
  sideBar.classList.remove("translate-x-0");
});

// ==================== MENU (ORDER BUTTONS) ====================
// Allow quick order selection from the menu section
const orderButtons = document.querySelectorAll("[data-coffee]");

orderButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const coffee = btn.getAttribute("data-coffee");
    orderForm.classList.remove("translate-x-80"); // Show form
    dropdownText.textContent = coffee; // Update selected order
    selectedOrder.value = coffee;

    coffeeList.forEach((i) => {
      i.classList.remove("bg-gray-100");
      if (i.textContent.trim() === coffee) {
        i.classList.add("bg-gray-100");
      }
    });
  });
});
