// ==UserScript==
// @name        GitHub Timeline Expander
// @namespace   acomagu/github-timeline-expander
// @version     1.0.1
// @include     https://github.com
// ==/UserScript==

new MutationObserver((mutationList, observer) => {
  mutationList
    .filter(m => m.type == 'childList')
    .flatMap(m => [...m.addedNodes])
    .filter(e => e instanceof Element)
    .flatMap(e => [...e.querySelectorAll('.Details')])
    .forEach(e => e.classList.add('Details--on', 'open'));
}).observe(document.querySelector('.news'), { childList: true, subtree: true });
