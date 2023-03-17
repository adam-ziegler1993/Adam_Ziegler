const navItems = document.querySelectorAll(".nav-item");
const currentPage = window.location.pathname.split("/").pop();

navItems.forEach((item) => {
  if (
    (item.id === "nav-home" && currentPage === "index.html") ||
    (item.id === `nav-${currentPage.split(".")[0]}` && currentPage !== "")
  ) {
    item.classList.add("active");
  }
});
