
/* =========================================================
   AdtMonads30.js
   Blogger: Pop Ads 1 + Pop Ads 2 + 350x20 Banner + Native Ad
   ========================================================= */

(function () {
  "use strict";

  if (window.__AdtMonads30Loaded) return;
  window.__AdtMonads30Loaded = true;

  var POP1_URL =
    "https://aarems.org/1/605a2ec69525cd4fbcc72fad3a1024ac";

  var POP2_URL =
    "https://al5sm.com/tag.min.js";

  var BANNER_KEY =
    "aacc8245ff87a399e050391c441727a6";

  var BANNER_URL =
    "https://bancadeltempoidea.org/22/" + BANNER_KEY;

  var NATIVE_KEY =
    "778fed03c990209e50c1842c8c388a17";

  var NATIVE_URL =
    "https://bancadeltempoidea.org/21/" + NATIVE_KEY;

  /* ---------- CSS ---------- */

  var css = `
    #middle-banner-350x20 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto;
      box-sizing: border-box;
      position: relative;
      z-index: 99;
    }

    #middle-banner-350x20 .slim-banner-bar {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      max-width: 98vw;
      padding: 3px 8px;
      box-sizing: border-box;
      background: rgba(255,255,255,.92);
      border: 1px solid rgba(0,0,0,.08);
      border-radius: 999px;
      box-shadow: 0 4px 14px rgba(0,0,0,.06);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    #middle-banner-350x20 .slim-banner-badge {
      flex: 0 0 auto;
      font-family: Arial, sans-serif;
      font-size: 8px;
      font-weight: 700;
      letter-spacing: .05em;
      color: #71717a;
      background: rgba(0,0,0,.06);
      padding: 2px 4px;
      border-radius: 4px;
      line-height: 1;
    }

    #middle-banner-350x20 .slim-banner-ad {
      width: 350px;
      height: 20px;
      flex: 0 1 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    #middle-banner-350x20 .slim-banner-ad iframe {
      max-width: 100%;
      border: 0;
    }

    #middle-banner-350x20 .slim-banner-close {
      flex: 0 0 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border: 0;
      background: rgba(0,0,0,.08);
      color: #52525b;
      border-radius: 50%;
      font-size: 13px;
      line-height: 1;
      cursor: pointer;
      padding: 0;
    }

    #middle-banner-350x20 .slim-banner-close:hover {
      background: #ef4444;
      color: #fff;
    }

    .bottom-native-ad-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 32px auto 0;
      padding: 16px 12px;
      box-sizing: border-box;
      clear: both;
    }

    .bottom-native-card {
      width: 100%;
      max-width: 800px;
      padding: 12px 14px 16px;
      box-sizing: border-box;
      background: rgba(255,255,255,.95);
      border: 1px solid rgba(0,0,0,.08);
      border-radius: 12px;
      box-shadow: 0 8px 24px -4px rgba(0,0,0,.07);
    }

    .native-card-header {
      margin-bottom: 8px;
    }

    .native-badge {
      display: inline-block;
      font-family: Arial, sans-serif;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .08em;
      color: #71717a;
      text-transform: uppercase;
      background: rgba(0,0,0,.04);
      padding: 3px 6px;
      border-radius: 4px;
    }

    .native-ad-slot {
      width: 100%;
      min-height: 60px;
      overflow: hidden;
    }

    @media (max-width: 420px) {
      #middle-banner-350x20 .slim-banner-bar {
        transform: scale(.9);
        transform-origin: center;
      }
    }

    @media (max-width: 360px) {
      #middle-banner-350x20 .slim-banner-bar {
        transform: scale(.82);
      }
    }

    @media (prefers-color-scheme: dark) {
      #middle-banner-350x20 .slim-banner-bar,
      .bottom-native-card {
        background: rgba(24,24,27,.94);
        border-color: rgba(255,255,255,.1);
        box-shadow: 0 10px 24px -4px rgba(0,0,0,.45);
      }

      #middle-banner-350x20 .slim-banner-badge,
      .native-badge {
        color: #a1a1aa;
        background: rgba(255,255,255,.08);
      }

      #middle-banner-350x20 .slim-banner-close {
        background: rgba(255,255,255,.12);
        color: #d4d4d8;
      }
    }
  `;

  function addStyles() {
    if (document.getElementById("AdtMonads30-styles")) return;

    var style = document.createElement("style");
    style.id = "AdtMonads30-styles";
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
  }

  /* ---------- External script loader ---------- */

  function loadScript(url, options) {
    options = options || {};

    var script = document.createElement("script");
    script.src = url;
    script.async = true;

    if (options.id) script.id = options.id;
    if (options.zone) script.dataset.zone = options.zone;
    if (options.cfasync === false) {
      script.setAttribute("data-cfasync", "false");
    }

    script.onerror = function () {
      console.warn("[AdtMonads30] Script failed to load:", url);
    };

    (document.body || document.documentElement).appendChild(script);
    return script;
  }

  /* ---------- Pop Ads 1 ---------- */

  function loadPopAd1() {
    if (document.getElementById("AdtMonads30-pop1")) return;

    loadScript(POP1_URL, {
      id: "AdtMonads30-pop1",
      cfasync: false
    });
  }

  /* ---------- Pop Ads 2 ---------- */

  function loadPopAd2() {
    if (document.getElementById("AdtMonads30-pop2")) return;

    loadScript(POP2_URL, {
      id: "AdtMonads30-pop2",
      zone: "11988592"
    });
  }

  /* ---------- 350x20 banner ---------- */

  function createMiddleBanner() {
    if (document.getElementById("middle-banner-350x20")) return;

    var wrapper = document.createElement("div");
    wrapper.id = "middle-banner-350x20";
    wrapper.className = "slim-banner-wrapper";

    wrapper.innerHTML = `
      <div class="slim-banner-bar">
        <span class="slim-banner-badge">AD</span>
        <div class="slim-banner-ad"
             id="AdtMonads30-banner-slot"></div>
        <button class="slim-banner-close"
                type="button"
                aria-label="Close advertisement"
                title="Close ad">&times;</button>
      </div>
    `;

    wrapper.querySelector(".slim-banner-close").addEventListener(
      "click",
      function () {
        wrapper.style.transition =
          "opacity .2s ease, transform .2s ease";
        wrapper.style.opacity = "0";
        wrapper.style.transform = "scale(.95)";

        window.setTimeout(function () {
          wrapper.style.display = "none";
        }, 200);
      }
    );

    /* Insert after the header when possible,
       otherwise before the main content. */
    var header = document.querySelector(
      "#header, header, .header, .header-outer"
    );

    var main = document.querySelector(
      "main, #main, .main, .content-outer, .main-outer, .post-outer"
    );

    if (header && header.parentNode) {
      header.parentNode.insertBefore(wrapper, header.nextSibling);
    } else if (main && main.parentNode) {
      main.parentNode.insertBefore(wrapper, main);
    } else {
      document.body.insertBefore(wrapper, document.body.firstChild);
    }

    /* Configure the banner before loading its script. */
    window.atOptions = {
      key: BANNER_KEY,
      format: "iframe",
      height: 20,
      width: 350,
      params: {}
    };

    loadScript(BANNER_URL, {
      id: "AdtMonads30-banner-script",
      cfasync: false
    });
  }

  /* ---------- Native banner at bottom ---------- */

  function createNativeBanner() {
    if (document.getElementById("AdtMonads30-native-wrapper")) return;

    var footer = document.createElement("footer");
    footer.id = "AdtMonads30-native-wrapper";
    footer.className = "bottom-native-ad-wrapper";

    footer.innerHTML = `
      <div class="bottom-native-card">
        <div class="native-card-header">
          <span class="native-badge">SPONSORED CONTENT</span>
        </div>
        <div id="container-${NATIVE_KEY}"
             class="native-ad-slot"></div>
      </div>
    `;

    document.body.appendChild(footer);

    loadScript(NATIVE_URL, {
      id: "AdtMonads30-native-script",
      cfasync: false
    });
  }

  /* ---------- Initialize ---------- */

  function initialize() {
    addStyles();

    createMiddleBanner();
    createNativeBanner();

    /* Load pop scripts after the initial page setup. */
    window.setTimeout(loadPopAd1, 300);
    window.setTimeout(loadPopAd2, 700);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, {
      once: true
    });
  } else {
    initialize();
  }
})();
