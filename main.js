const switcher = document.querySelector(".switcher");
const switchBtn = document.querySelector(".switch");
const root = document.querySelector(":root");

const lightTheme = {
  "--BG": "hsl(0, 0%, 100%)",
  "--TopBGPattern": "hsl(225, 100%, 98%)",
  "--CardBG": "hsl(227, 47%, 96%)",
  "--SecondaryText": "hsl(228, 12%, 44%)",
  "--Text": "hsl(230, 17%, 14%)",
};
const darkTheme = {
  "--BG": "hsl(230, 17%, 14%)",
  "--TopBGPattern": "hsl(232, 19%, 15%)",
  "--CardBG": "hsl(228, 28%, 20%)",
  "--SecondaryText": "hsl(228, 34%, 66%)",
  "--Text": "hsl(0, 0%, 100%)",
};

if (localStorage.getItem("Social-media-dashboard-theme")) {
  switchBtn.classList.add("light");
  Object.entries(lightTheme).forEach((v) => root.style.setProperty(v[0], v[1]));
}

switcher.addEventListener("click", () => {
  switchBtn.classList.toggle("light");

  if (switchBtn.classList.contains("light")) {
    localStorage.setItem("Social-media-dashboard-theme", "light");

    Object.entries(lightTheme).forEach((v) =>
      root.style.setProperty(v[0], v[1])
    );
  } else {
    localStorage.getItem("Social-media-dashboard-theme") &&
      localStorage.removeItem("Social-media-dashboard-theme");

    Object.entries(darkTheme).forEach((v) =>
      root.style.setProperty(v[0], v[1])
    );
  }
});
