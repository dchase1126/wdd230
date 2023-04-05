const images = document.querySelectorAll('img[data-src]');

const preloadImage = (img) => {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
};

const imgOptions = {
  // threshold: 1,
  rootMargin: '0px 0px -100px 0px'
};

const callback = (entries, imgObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
};

const imgObserver = new IntersectionObserver(callback, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
