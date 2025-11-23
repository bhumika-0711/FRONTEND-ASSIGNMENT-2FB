const images = [
      "https://picsum.photos/400/250?random=1",
      "https://picsum.photos/400/250?random=2",
      "https://picsum.photos/400/250?random=3",
      "https://picsum.photos/400/250?random=4",
      "https://picsum.photos/400/250?random=5"
    ];

    let index = 0;
    const slide = document.getElementById("slide");
    const carousel = document.getElementById("carousel");
    function showImage() {
      slide.src = images[index];
    }
    document.getElementById("nextBtn").addEventListener("click", function () {
      index = (index + 1) % images.length;
      showImage();
    });
    document.getElementById("prevBtn").addEventListener("click", function () {
      index = (index - 1 + images.length) % images.length;
      showImage();
    });
    let autoSlide = setInterval(function () {
      index = (index + 1) % images.length;
      showImage();
    }, 3000);
    carousel.addEventListener("mouseover", function () {
      clearInterval(autoSlide);
    });

    carousel.addEventListener("mouseout", function () {
      autoSlide = setInterval(function () {
        index = (index + 1) % images.length;
        showImage();
      }, 3000);
    });