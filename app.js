(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
})();


// Read More Functionality
function toggleReadMore() {
    const text = document.getElementById('aboutText');
    const btn = document.getElementById('readMoreBtn');
    const btnText = document.getElementById('btnText');
    
    if (text.classList.contains('collapsed')) {
        text.classList.remove('collapsed');
        text.classList.add('expanded');
        btnText.textContent = 'Read Less';
        btn.classList.add('expanded');
    } else {
        text.classList.remove('expanded');
        text.classList.add('collapsed');
        btnText.textContent = 'Read More';
        btn.classList.remove('expanded');
    }
}
