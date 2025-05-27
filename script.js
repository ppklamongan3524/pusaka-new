// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// warna navbar saat Active
const navLinks = document.querySelectorAll(".navbar-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Hapus kelas active dari semua link
    navLinks.forEach((nav) => nav.classList.remove("active")); // Perbaikan di sini
    // Tambahkan kelas active pada link yang diklik
    this.classList.add("active");
  });
});

// // slider Image
// let index = 0;
// const slides = document.querySelectorAll(".slides img");

// setInterval(() => {
//   slides[index].classList.remove("active");
//   index = (index + 1) % slides.length;
//   slides[index].classList.add("active");
// }, 3000); // Ganti gambar tiap 3 detik

// accordion

document.querySelectorAll(".accordion-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isActive = button.classList.contains("active");

    // Tutup semua konten lain
    document.querySelectorAll(".accordion-toggle").forEach((btn) => {
      btn.classList.remove("active");
      btn.nextElementSibling.style.maxHeight = null;
    });

    if (!isActive) {
      button.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// scroll navbar

function scrollNav(offset) {
  const nav = document.getElementById("navbar-nav");
  nav.scrollLeft += offset;

  // Tunggu hingga scroll selesai, lalu periksa panah
  setTimeout(checkScrollButtons, 200);
}

function checkScrollButtons() {
  const nav = document.getElementById("navbar-nav");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  // Jika sudah paling kiri
  if (nav.scrollLeft <= 0) {
    leftArrow.classList.add("hidden");
  } else {
    leftArrow.classList.remove("hidden");
  }

  // Jika sudah paling kanan
  if (nav.scrollLeft + nav.offsetWidth >= nav.scrollWidth - 1) {
    rightArrow.classList.add("hidden");
  } else {
    rightArrow.classList.remove("hidden");
  }
}

// search button

function search() {
  var input = document.getElementById("searchInput").value.toLowerCase();
  var paragraphs = document.querySelectorAll("p"); // Semua elemen <p> di halaman

  // Reset highlight
  paragraphs.forEach(function (p) {
    p.innerHTML = p.textContent;
  });

  // Cek setiap elemen <p> dan sorot kata yang dicari
  paragraphs.forEach(function (p) {
    if (p.textContent.toLowerCase().includes(input) && input !== "") {
      var innerHTML = p.innerHTML;
      var index = innerHTML.toLowerCase().indexOf(input);
      innerHTML =
        innerHTML.substring(0, index) +
        "<span class='highlight'>" +
        innerHTML.substring(index, index + input.length) +
        "</span>" +
        innerHTML.substring(index + input.length);
      p.innerHTML = innerHTML;
    }
  });

  // Jika tidak ada hasil pencarian, tampilkan alert
  if (
    input !== "" &&
    !Array.from(paragraphs).some((p) => p.innerHTML.includes(input))
  ) {
    alert("Kata tidak ditemukan!");
  }
}

// Jalankan fungsi search juga saat tekan Enter
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      search();
    }
  });
});

// Bold navbar
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = decodeURIComponent(
    window.location.pathname.split("/").pop()
  );
  const navLinks = document.querySelectorAll(".navbar-nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});

// panah dan image slider
let index = 0;
const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active-dot");
  });
  slides[n].classList.add("active");
  dots[n].classList.add("active-dot");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

setInterval(nextSlide, 3000);

// document.addEventListener("DOMContentLoaded", function () {
//   const sections = document.querySelectorAll("section");

//   const options = {
//     root: null, // viewport
//     rootMargin: "0px",
//     threshold: 0.1, // 10% dari section harus terlihat
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("fade-in");
//         observer.unobserve(entry.target); // Hentikan observasi setelah animasi
//       }
//     });
//   }, options);

//   sections.forEach((section) => {
//     observer.observe(section);
//   });
// });
