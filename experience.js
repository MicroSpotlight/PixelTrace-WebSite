const tabList = document.querySelector('[data-feature-tabs]');

if (tabList) {
  const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const activate = (index, focus = false) => {
    tabs.forEach((tab, position) => {
      const selected = position === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tabs[index].focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(index));
    tab.addEventListener('keydown', (event) => {
      let indexToSelect;
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp': indexToSelect = (index - 1 + tabs.length) % tabs.length; break;
        case 'ArrowRight':
        case 'ArrowDown': indexToSelect = (index + 1) % tabs.length; break;
        case 'Home': indexToSelect = 0; break;
        case 'End': indexToSelect = tabs.length - 1; break;
        default: return;
      }
      event.preventDefault();
      activate(indexToSelect, true);
    });
  });

  activate(0);
  tabList.hidden = false;
}
