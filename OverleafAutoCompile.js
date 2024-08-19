// ==UserScript==
// @name         Overleaf Auto-Compile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically enable the Auto Compile option of overleaf
// @supportURL   https://github.com/Michael1015198808/TamperMonkeyScripts/issues
// @author       Zhenyu Yan
// @match        https://www.overleaf.com/project/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=overleaf.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval((() => document.getElementsByClassName("dropdown-menu")[1].children[1].children[0].click()), 10_000)
})();
