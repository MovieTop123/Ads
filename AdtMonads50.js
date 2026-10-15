
(function () {
  "use strict";

  // Prevent duplicate initialization
  if (window.__AdtMonads50Loaded) return;
  window.__AdtMonads50Loaded = true;

  var BANNER_ID = "middle-banner-350x20";
  var NATIVE_ID = "container-778fed03c990209e50c1842c8c388a17";

  function addScript(src, options) {
    options = options || {};

    var script = document.createElement("script");
    script.src = src;
    script.async = true;

    if (options.noCf !== false) {
      script.setAttribute("data-cfasync", "false");
    }

    if (options.zone) {
      script.dataset.zone = options.zone;
    }

    (document.head || document.documentElement).appendChild(script);
    return script;
  }

  // -------------------------------
  // POP ADS 1
  // -------------------------------
  function loadPopAd1() {
    addScript(
      "https://aarems.org/1/605a2ec69525cd4fbcc72fad3a1024ac"
    );
  }

  // -------------------------------
  // POP ADS 2
  // -------------------------------
  function loadPopAd2() {
    addScript(
      "https://al5sm.com/tag.min.js",
      { zone: "11988592" }
    );
  }

  // -------------------------------
  // STYLES
  // -------------------------------
  function addStyles() {
    if (document.getElementById("adt-monads50-styles")) return;

    var css = `
      #${BANNER_ID} {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
        box-sizing: border-box;
        position: relative;
        z-index: 99;
      }

      #${BANNER_ID} .slim-banner-bar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        max-width: 98vw;
        padding: 3px 6px;
        box-sizing: border-box;
        border: 1px solid rgba(0,0,0,.08);
        border-radius: 999px;
        background: rgba(255,255,255,.94);
        box-shadow: 0 4px 14px rgba(0,0,0,.06);
      }

      #${BANNER_ID} .slim-banner-badge {
        flex: 0 0 auto;
        font: 700 8px/1 Arial,sans-serif;
        color: #71717a;
        background: rgba(0,0,0,.06);
        padding: 3px 4px;
        border-radius: 4px;
      }

      #${BANNER_ID} .slim-banner-ad {
        width: 350px;
        height: 20px;
        flex: 0 0 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        box-sizing: border-box;
      }

      #${BANNER_ID} .slim-banner-ad iframe {
        display: block;
        max-width: none;
        border: 0;
      }

      #${BANNER_ID} .slim-banner-close {
        flex: 0 0 16px;
        width: 16px;
        height: 16px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: rgba(0,0,0,.08);
        color: #52525b;
        font: 13px/16px Arial,sans-serif;
        text-align: center;
        cursor: pointer;
      }

      #${BANNER_ID} .slim-banner-close:hover {
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
      }

      .bottom-native-card {
        width: 100%;
        max-width: 800px;
        padding: 12px 14px 16px;
        box-sizing: border-box;
        border: 1px solid rgba(0,0,0,.08);
        border-radius: 12px;
        background: rgba(255,255,255,.95);
        box-shadow: 0 8px 24px -4px rgba(0,0,0,.07);
      }

      .native-card-header {
        margin-bottom: 8px;
      }

      .native-badge {
        display: inline-block;
        padding: 3px 6px;
        border-radius: 4px;
        background: rgba(0,0,0,.04);
        color: #71717a;
        font: 700 9px Arial,sans-serif;
        letter-spacing: .08em;
      }

      .native-ad-slot {
        width: 100%;
        min-height: 60px;
        overflow: hidden;
      }

      @media (max-width: 420px) {
        #${BANNER_ID} .slim-banner-bar {
          gap: 4px;
          padding: 3px 5px;
        }

        #${BANNER_ID} .slim-banner-ad {
          width: min(350px, calc(100vw - 75px));
          flex: 0 1 auto;
        }

        #${BANNER_ID} .slim-banner-ad iframe {
          max-width: 100%;
        }
      }

      @media (prefers-color-scheme: dark) {
        #${BANNER_ID} .slim-banner-bar,
        .bottom-native-card {
          background: rgba(24,24,27,.94);
          border-color: rgba(255,255,255,.1);
          box-shadow: 0 10px 24px -4px rgba(0,0,0,.45);
        }

        #${BANNER_ID} .slim-banner-badge,
        .native-badge {
          color: #a1a1aa;
          background: rgba(255,255,255,.08);
        }

        #${BANNER_ID} .slim-banner-close {
          background: rgba(255,255,255,.12);
          color: #d4d4d8;
        }
      }
    `;

    var style = document.createElement("style");
    style.id = "adt-monads50-styles";
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
  }

  // -------------------------------
  // 350 x 20 BANNER
  // -------------------------------
  function createMiddleBanner() {
    if (document.getElementById(BANNER_ID)) return;

    var wrapper = document.createElement("div");
    wrapper.id = BANNER_ID;
    wrapper.className = "slim-banner-wrapper";

    wrapper.innerHTML = `
      <div class="slim-banner-bar">
        <span class="slim-banner-badge">AD</span>
        <div class="slim-banner-ad"
             id="adt-monads50-banner-slot"></div>
        <button class="slim-banner-close"
                type="button"
                aria-label="Close advertisement"
                title="Close ad">&times;</button>
      </div>
    `;

    wrapper.querySelector(".slim-banner-close").addEventListener(
      "click",
      function () {
        wrapper.style.transition = "opacity .2s ease, transform .2s ease";
        wrapper.style.opacity = "0";
        wrapper.style.transform = "scale(.95)";

        window.setTimeout(function () {
          wrapper.remove();
        }, 200);
      }
    );

    // Insert after the site's header when possible
    var header = document.querySelector(
      "#header, .header-outer, header.header, #header-wrapper, header"
    );

    if (header && header.parentNode) {
      header.parentNode.insertBefore(wrapper, header.nextSibling);
    } else {
      var main = document.querySelector(
        "main, #main, .main-outer, .content-outer, .post-body"
      );

      if (main && main.parentNode) {
        main.parentNode.insertBefore(wrapper, main);
      } else {
        document.body.insertBefore(wrapper, document.body.firstChild);
      }
    }

    // Set ad configuration BEFORE loading the ad network script
    var optionsScript = document.createElement("script");
    optionsScript.textContent =
      "var atOptions = {" +
      "'key':'aacc8245ff87a399e050391c441727a6'," +
      "'format':'iframe'," +
      "'height':20," +
      "'width':350," +
      "'params':{}" +
      "};";

    var slot = document.getElementById("adt-monads50-banner-slot");
    slot.appendChild(optionsScript);

    var bannerScript = document.createElement("script");
    bannerScript.async = true;
    bannerScript.setAttribute("data-cfasync", "false");
    bannerScript.src =
      "https://bancadeltempoidea.org/22/aacc8245ff87a399e050391c441727a6";

    slot.appendChild(bannerScript);
  }

  // -------------------------------
  // NATIVE BANNER AT BOTTOM
  // -------------------------------
  function createNativeBanner() {
    if (document.getElementById(NATIVE_ID)) return;

    var footer = document.createElement("footer");
    footer.className = "bottom-native-ad-wrapper";

    footer.innerHTML = `
      <div class="bottom-native-card">
        <div class="native-card-header">
          <span class="native-badge">SPONSORED CONTENT</span>
        </div>
        <div id="${NATIVE_ID}" class="native-ad-slot"></div>
      </div>
    `;

    document.body.appendChild(footer);

    var nativeScript = document.createElement("script");
    nativeScript.async = true;
    nativeScript.setAttribute("data-cfasync", "false");
    nativeScript.src =
      "https://bancadeltempoidea.org/21/778fed03c990209e50c1842c8c388a17";

    footer.appendChild(nativeScript);
  }

  // -------------------------------
  // INITIALIZE
  // -------------------------------
  function initializeAds() {
    addStyles();
    createMiddleBanner();
    createNativeBanner();

    // Schedule pop scripts separately from initial page setup.
    // The ad network still controls whether a pop is displayed.
    window.setTimeout(loadPopAd1, 500);
    window.setTimeout(loadPopAd2, 1200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAds, {
      once: true
    });
  } else {
    initializeAds();
  }
})();
