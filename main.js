    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("sideMenu");

    // Toggle menu
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent triggering body click
      sideMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.body.addEventListener("click", () => {
      if (sideMenu.classList.contains("active")) {
        sideMenu.classList.remove("active");
      }
    });

    // Prevent closing when clicking inside menu
    sideMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });


    // Hero section functionality ------------------->>>

        const heroSlides = document.getElementById("heroSlides");
    const heroCount = 5; // real slides
    const heroDotsContainer = document.getElementById("heroDots");
    let heroIndex = 1; // start at first real slide
    let heroAuto;

    // Start position
    heroSlides.style.transform = `translateX(-${heroIndex * 100}%)`;

    // Create dots
    for (let i = 0; i < heroCount; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        heroShowSlide(i + 1);
        heroResetAuto();
      });
      heroDotsContainer.appendChild(dot);
    }

    const heroDots = document.querySelectorAll("#heroDots .dot");

    function heroShowSlide(i) {
      heroIndex = i;
      heroSlides.style.transition = "transform 1s ease-in-out";
      heroSlides.style.transform = `translateX(-${heroIndex * 100}%)`;
      heroUpdateDots();
    }

    function heroNext() {
      heroIndex++;
      heroSlides.style.transition = "transform 1s ease-in-out";
      heroSlides.style.transform = `translateX(-${heroIndex * 100}%)`;
    }

    function heroPrev() {
      heroIndex--;
      heroSlides.style.transition = "transform 1s ease-in-out";
      heroSlides.style.transform = `translateX(-${heroIndex * 100}%)`;
    }

    // document.getElementById("heroNext").addEventListener("click", () => {
    //   heroNext();
    //   heroResetAuto();
    // });

    // document.getElementById("heroPrev").addEventListener("click", () => {
    //   heroPrev();
    //   heroResetAuto();
    // });

    // Loop handling
    heroSlides.addEventListener("transitionend", () => {
      if (heroIndex === 0) {
        heroSlides.style.transition = "none";
        heroIndex = heroCount;
        heroSlides.style.transform = `translateX(-${heroIndex * 100}%)`;
      }
      if (heroIndex === heroCount + 1) {
        heroSlides.style.transition = "none";
        heroIndex = 1;
        heroSlides.style.transform = `translateX(-${heroIndex * 100}%)`;
      }
      heroUpdateDots();
    });

    function heroUpdateDots() {
      heroDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === heroIndex - 1);
      });
    }

    function heroStartAuto() {
      heroAuto = setInterval(heroNext, 5000);
    }

    function heroResetAuto() {
      clearInterval(heroAuto);
      heroStartAuto();
    }

    heroStartAuto();