/*************** Dropdown Functionality ***************/

const productNav = document.getElementById('product__nav');

productNav.onclick = () => {
  document.getElementById("product__nav-box").classList.toggle("active");
}

const companyNav = document.getElementById('company__nav');

companyNav.onclick = () => {
  document.getElementById("company__nav-box").classList.toggle("active");
}

const connectNav = document.getElementById('connect__nav');

connectNav.onclick = () => {
  document.getElementById("connect__nav-box").classList.toggle("active");
}