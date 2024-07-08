const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const isVisible = nav.getAttribute("data-visible") === "true";
  nav.setAttribute("data-visible", !isVisible);
  navToggle.setAttribute("aria-expanded", !isVisible);
});

const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTab);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

let tabFocus = 0;

function changeTab(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  if (e.keyCode === keydownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }

  if (e.keyCode === keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-type");

  const tabContainer = targetTab.parentNode;
  console.log("tab container:", tabContainer);
  const mainContainer = tabContainer.parentNode;

  console.log("main container:", mainContainer);

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  hideCOntent(mainContainer, '[role="tabpanel"]');
  hideCOntent(mainContainer, "picture");

  showCOntent(mainContainer, `#${targetPanel}`);
  showCOntent(mainContainer, `#${targetImage}`);
}

function hideCOntent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
}

function showCOntent(parent, content) {
  parent.querySelector(content).removeAttribute("hidden");
}
