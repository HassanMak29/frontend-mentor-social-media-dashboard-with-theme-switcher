const switcher = document.querySelector(".switcher");
const switchBtn = document.querySelector(".switch");

switcher.addEventListener("click", () => {
  switchBtn.classList.toggle("light");

  if (switchBtn.classList.contains("light")) {
    document.documentElement.style.setProperty("--BG", "hsl(0, 0%, 100%)");
    document.documentElement.style.setProperty(
      "--TopBGPattern",
      "hsl(225, 100%, 98%)"
    );
    document.documentElement.style.setProperty(
      "--CardBG",
      "hsl(227, 47%, 96%)"
    );
    document.documentElement.style.setProperty(
      "--SecondaryText",
      "hsl(228, 12%, 44%)"
    );
    document.documentElement.style.setProperty(
      "--White-Text",
      "hsl(230, 17%, 14%)"
    );
  } else {
    document.documentElement.style.setProperty("--BG", "hsl(230, 17%, 14%)");
    document.documentElement.style.setProperty(
      "--TopBGPattern",
      "hsl(232, 19%, 15%)"
    );
    document.documentElement.style.setProperty(
      "--CardBG",
      "hsl(228, 28%, 20%)"
    );
    document.documentElement.style.setProperty(
      "--SecondaryText",
      "hsl(228, 34%, 66%)"
    );
    document.documentElement.style.setProperty(
      "--White-Text",
      "hsl(0, 0%, 100%)"
    );
  }
});
