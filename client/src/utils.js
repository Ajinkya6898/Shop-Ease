function scrollTo(path) {
  const element = document.getElementById(path);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export { scrollTo };
