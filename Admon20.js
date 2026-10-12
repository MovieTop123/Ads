
(function () {
  "use strict";

  if (window.__Admon20Loaded) return;
  window.__Admon20Loaded = true;

  var POP1 =
    "https://aarems.org/1/605a2ec69525cd4fbcc72fad3a1024ac";

  var POP2 =
    "https://al5sm.com/tag.min.js";

  var BANNER_KEY =
    "aacc8245ff87a399e050391c441727a6";

  var BANNER_SCRIPT =
    "https://bancadeltempoidea.org/22/" + BANNER_KEY;

  var NATIVE_KEY =
    "778fed03c990209e50c1842c8c388a17";

  var NATIVE_SCRIPT =
    "https://bancadeltempoidea.org/21/" + NATIVE_KEY;

  var POP2_ZONE = "11988592";
  var started = false;

  function addScript(src, options) {
    options = options || {};

    var script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    if (options.zone) {
      script.dataset.zone = options.zone;
    }

    (options.target || document.body || document.head)
      .appendChild(script);

    return script;
  }

  function addStyles() {
    if (document.getElementById("admon20-styles")) return;

    var css = `
      #middle-banner-320x50 {
        width: 100%;
        min-height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 12px auto;
        padding: 8px 0;
        box-sizing: border-box;
        z-index: 100;
      }

      #middle-banner-320x50 .middle-banner-label {
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translateX(-50%);
        font: 9px/12px Arial, sans-serif;
        color: #888;
        white-space: nowrap;
        pointer-events: none;
      }

      #middle-banner-320x50 .middle-banner-ad {
        width: 320px;
        height: 50px;
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }

      #middle-banner-320x50 .middle-banner-close {
        position: absolute;
        top: -4px;
        left: calc(50% + 160px);
        width: 22px;
        height: 22px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: rgba(0,0,0,.85);
        color: #fff;
        font: bold 17px/21px Arial, sans-serif;
        text-align: center;
        cursor: pointer;
        z-index: 999999;
        box-shadow: 0 2px 6px rgba(0,0,0,.3);
      }

      #middle-banner-320x50 .middle-banner-close:hover {
        background: #000;
        transform: scale(1.05);
      }

      @media (max-width: 360px) {
        #middle-banner-320x50 {
          transform: scale(.90);
          transform-origin: center;
          margin: 6px auto;
        }

        #middle-banner-320x50 .middle-banner-close {
          left: calc(50% + 145px);
        }
      }

      .floating-ad-overlay {
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999999;
        padding: 16px;
        box-sizing: border-box;
        background: radial-gradient(
          circle at center,
          rgba(15,17,23,.78) 0%,
          rgba(5,5,8,.88) 100%
        );
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        opacity: 1;
        visibility: visible;
        transition: opacity .35s ease, visibility .35s ease;
        font-family: Arial, sans-serif;
      }

      .floating-ad-overlay.floating-ad-hidden {
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }

      .floating-ad-overlay.ad-closing {
        opacity: 0 !important;
        pointer-events: none !important;
      }

      .floating-ad-card {
        position: relative;
        display: flex;
        flex-direction: column;
        width: fit-content;
        max-width: 92vw;
        background:
          radial-gradient(circle at 50% 0%,
            rgba(255,255,255,.08), transparent 70%),
          linear-gradient(145deg,#18191f,#0d0e12);
        border: 1px solid rgba(255,255,255,.14);
        border-radius: 20px;
        box-shadow: 0 30px 70px -15px rgba(0,0,0,.95),
          0 10px 25px -5px rgba(0,0,0,.6),
          inset 0 1px 0 rgba(255,255,255,.2);
        overflow: hidden;
        animation: admon20ScaleIn .38s ease forwards;
      }

      .floating-ad-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 11px 16px;
        background: rgba(255,255,255,.03);
        border-bottom: 1px solid rgba(255,255,255,.07);
      }

      .ad-tag {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .ad-badge-pip {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #38bdf8;
        box-shadow: 0 0 10px rgba(56,189,248,.85);
      }

      .ad-title {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .1em;
        text-transform: uppercase;
        color: #cbd5e1;
      }

      .floating-ad-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,.12);
        background: rgba(255,255,255,.05);
        color: #fff;
        cursor: pointer;
        padding: 0;
      }

      .floating-ad-close svg {
        width: 14px;
        height: 14px;
      }

      .floating-ad-body {
        position: relative;
        width: 320px;
        min-height: 270px;
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        box-sizing: border-box;
        background: radial-gradient(circle,#111317,#08090b);
        overflow: hidden;
      }

      .floating-ad-body iframe,
      .floating-ad-body div[id^="container-"] {
        max-width: 100% !important;
        margin: 0 auto !important;
      }

      @keyframes admon20ScaleIn {
        from { opacity: 0; transform: scale(.92) translateY(12px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
      }

      @media (max-width: 360px) {
        .floating-ad-body {
          width: min(320px, 84vw);
        }
      }
    `;

    var style = document.createElement("style");
    style.id = "admon20-styles";
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
  }

  function createMiddleBanner() {
    if (document.getElementById("middle-banner-320x50")) return;

    var banner = document.createElement("div");
    banner.id = "middle-banner-320x50";

    banner.innerHTML = `
      <div class="middle-banner-label">Advertisement</div>
      <button type="button"
        class="middle-banner-close"
        aria-label="Close advertisement">×</button>
      <div class="middle-banner-ad" id="admon20-banner-slot"></div>
    `;

    banner.querySelector(".middle-banner-close").addEventListener(
      "click",
      function () {
        banner.style.display = "none";
      }
    );

    // Prefer inserting immediately before the main post/content.
    var target = document.querySelector(
      ".post-outer, .post-body, .entry-content, main, #main"
    );

    if (target && target.parentNode) {
      target.parentNode.insertBefore(banner, target);
    } else {
      var header = document.querySelector(
        ".header-outer, #header, header"
      );

      if (header && header.parentNode) {
        if (header.nextSibling) {
          header.parentNode.insertBefore(banner, header.nextSibling);
        } else {
          header.parentNode.appendChild(banner);
        }
      } else {
        (document.body || document.documentElement)
          .insertBefore(banner, document.body.firstChild);
      }
    }

    // The ad network reads window.atOptions before loading its script.
    window.atOptions = {
      key: BANNER_KEY,
      format: "iframe",
      height: 50,
      width: 320,
      params: {}
    };

    var slot = document.getElementById("admon20-banner-slot");
    addScript(BANNER_SCRIPT, { target: slot });
  }

  function createNativeModal() {
    if (document.getElementById("floating-ad-wrapper")) return;

    var wrapper = document.createElement("div");
    wrapper.id = "floating-ad-wrapper";
    wrapper.className = "floating-ad-overlay floating-ad-hidden";

    wrapper.innerHTML = `
      <div class="floating-ad-card">
        <div class="floating-ad-header">
          <div class="ad-tag">
            <span class="ad-badge-pip"></span>
            <span class="ad-title">Sponsored</span>
          </div>
          <button type="button" class="floating-ad-close"
            aria-label="Close advertisement">
            <svg viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.2"
              stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="floating-ad-body" id="ad-body-target">
          <div id="container-${NATIVE_KEY}"></div>
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);

    wrapper.querySelector(".floating-ad-close").addEventListener(
      "click",
      function () {
        wrapper.classList.add("ad-closing");
        setTimeout(function () {
          wrapper.remove();
        }, 250);
      }
    );

    // Show once, five seconds after page initialization.
    setTimeout(function () {
      if (!document.body.contains(wrapper)) return;

      wrapper.classList.remove("floating-ad-hidden");

      var target = document.getElementById("ad-body-target");
      if (target && !target.dataset.adLoaded) {
        target.dataset.adLoaded = "true";
        addScript(NATIVE_SCRIPT, { target: target });
      }
    }, 5000);
  }

  function init() {
    if (started || !document.body) return;
    started = true;

    addStyles();

    // Load both pop scripts once. The ad networks control when
    // and whether an actual pop advertisement is displayed.
    addScript(POP1);
    addScript(POP2, { zone: POP2_ZONE });

    createMiddleBanner();
    createNativeModal();
  }

  function start() {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(init, { timeout: 2000 });
    } else {
      setTimeout(init, 100);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
