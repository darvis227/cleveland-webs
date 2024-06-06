document.addEventListener("DOMContentLoaded", function () {
  const check = document.getElementById("check");
  const sideBar = document.getElementById("side_bar");
  const overlay = document.getElementById("overlay");

  check.addEventListener("change", function () {
    if (check.checked) {
      sideBar.classList.add("active");
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
    } else {
      sideBar.classList.remove("active");
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  overlay.addEventListener("click", function () {
    check.checked = false;
    sideBar.classList.remove("active");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("scroll", function () {
    const topBar = document.getElementById("topBar");
    if (window.scrollY === 0) {
      topBar.classList.add("expanded");
      topBar.classList.remove("shrunk");
    } else {
      topBar.classList.add("shrunk");
      topBar.classList.remove("expanded");
    }
  });

  let startX;

  sideBar.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  sideBar.addEventListener("touchmove", function (e) {
    const touch = e.touches[0];
    const change = startX - touch.clientX;

    if (change > 50) {
      // Swipe threshold
      check.checked = false;
      sideBar.classList.remove("active");
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
