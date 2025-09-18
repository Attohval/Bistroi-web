      const hamburger = document.getElementById("hamburger");
        const sideMenu = document.getElementById("sideMenu");

        // Toggle menu
        hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        sideMenu.classList.toggle("active");
        hamburger.classList.toggle("active"); // toggle X icon
        });

        // Close menu when clicking outside
        document.body.addEventListener("click", () => {
        if (sideMenu.classList.contains("active")) {
            sideMenu.classList.remove("active");
            hamburger.classList.remove("active"); // reset to hamburger
        }
        });

        // Prevent closing when clicking inside menu
        sideMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        });




    // Back to Top Button functionality ------------------->>>
    const backToTopBtn = document.getElementById("backToTop");

    // Show button after scrolling 1300px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    // Scroll smoothly to top when clicked
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });


