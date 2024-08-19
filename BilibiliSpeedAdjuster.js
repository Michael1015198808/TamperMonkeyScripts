// ==UserScript==
// @name         Bilibili Speed Adjuster
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Provide the 1.05x option for speed adjusting.
// @author       You
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/list/watchlater?bvid=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    var f = function() {
        var fast;
        if (fast = document.getElementsByClassName("bpx-player-ctrl-playbackrate-menu")[0]?.firstElementChild?.nextElementSibling?.nextElementSibling) {
            var x = fast.cloneNode(true)
            x.textContent = "1.05x"
            x.attributes[1].value = "1.05"
            fast.insertAdjacentElement("afterend", x)
        } else {
            setTimeout(f, 1000); // Wait until certain element is found
        }
    }
    f();
})();
