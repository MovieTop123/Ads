
/* =========================================================
   AdtMonads35.js
   Blogger: Pop Ads 1 + Pop Ads 2 + Premium 320x50 Banner
   + Native Banner
========================================================= */
(function () {
  "use strict";

  if (window.__AdtMonads35Loaded) return;
  window.__AdtMonads35Loaded = true;

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

  /* ---------- LOAD EXTERNAL SCRIPT ONCE ---------- */
  function loadScript(src, options) {
    options = options || {};

    if (document.querySelector(
      'script[data-adt-src="' + src + '"]'
    )) return;

    var script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.adtSrc = src;

    if (options.zone) {
      script.dataset.zone = options.zone;
    }

    if (options.cfasync === false) {
      script.setAttribute("data-cfasync", "false");
    }

    script.onerror = function () {
      console.warn("[AdtMonads35] Script failed to load:", src);
    };

    (document.head || document.documentElement).appendChild(script);
  }

  /* ---------- PREMIUM BANNER STYLES ---------- */
  function addStyles() {
    if (document.getElementById("adtmonads35-styles")) return;

    var css = document.createElement("style");
    css.id = "adtmonads35-styles";

    css.textContent = `
      #adt35-banner {
        --adt-bg: #ffffff;
        --adt-border: rgba(100,116,139,.22);
        --adt-text: #64748b;
        box-sizing: border-box;
        position: relative;
        isolation: isolate;
        width: 100%;
        max-width: 370px;
        margin: 18px auto;
        padding: 10px 12px 12px;
        overflow: hidden;
        border: 1px solid var(--adt-border);
        border-radius: 16px;
        background:
          radial-gradient(ellipse at top left,
            rgba(99,102,241,.10), transparent 60%),
          var(--adt-bg);
        box-shadow:
          0 12px 30px rgba(15,23,42,.08),
          0 2px 6px rgba(15,23,42,.04);
        font-family: system-ui, -apple-system, BlinkMacSystemFont,
          "Segoe UI", sans-serif;
        transition: box-shadow .2s ease, border-color .2s ease;
        z-index: 5;
      }

      #adt35-banner,
      #adt35-banner * {
        box-sizing: border-box;
      }

      #adt35-banner:hover {
        border-color: rgba(99,102,241,.32);
        box-shadow: 0 16px 36px rgba(15,23,42,.12);
      }

      #adt35-banner .adt35-head {
        min-height: 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;
      }

      #adt35-banner .adt35-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--adt-text);
        font-size: 9px;
        line-height: 1.4;
        font-weight: 800;
        letter-spacing: 1.3px;
        text-transform: uppercase;
      }

      #adt35-banner .adt35-dot {
        width: 6px;
        height: 6px;
        flex: 0 0 6px;
        border-radius: 50%;
        background: #6366f1;
        box-shadow: 0 0 0 3px rgba(99,102,241,.12);
      }

      #adt35-banner .adt35-close {
        width: 25px;
        height: 25px;
        flex: 0 0 25px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: 1px solid rgba(100,116,139,.18);
        border-radius: 50%;
        background: rgba(148,163,184,.10);
        color: #64748b;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: background .18s ease, color .18s ease,
          transform .18s ease;
      }

      #adt35-banner .adt35-close:hover {
        color: #fff;
        background: #ef4444;
        transform: rotate(90deg);
      }

      #adt35-banner .adt35-close svg {
        width: 12px;
        height: 12px;
        display: block;
      }

      #adt35-banner .adt35-frame {
        width: 320px;
        max-width: 100%;
        height: 50px;
        min-height: 50px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 8px;
        background: rgba(148,163,184,.07);
      }

      #adt35-banner .adt35-frame iframe {
        max-width: 100%;
      }

      #adt35-banner .adt35-frame script {
        display: block;
      }

      #adt35-banner.adt35-hidden {
        display: none !important;
      }

      #adt35-native {
        width: 100%;
        max-width: 600px;
        margin: 18px auto;
        text-align: center;
      }

      #adt35-native-slot {
        width: 100%;
        min-width: 0;
      }

      @media (max-width: 380px) {
        #adt35-banner {
          width: calc(100% - 16px);
          padding: 9px 8px 10px;
          margin: 12px auto;
          border-radius: 13px;
        }

        #adt35-banner .adt35-frame {
          width: 320px;
          max-width: 100%;
        }
      }

      @media (prefers-color-scheme: dark) {
        #adt35-banner {
          --adt-bg: #171923;
          --adt-border: rgba(255,255,255,.12);
          --adt-text: #a1a1aa;
          box-shadow: 0 12px 32px rgba(0,0,0,.28);
        }

        #adt35-banner .adt35-close {
          color: #d4d4d8;
          border-color: rgba(255,255,255,.10);
          background: rgba(255,255,255,.06);
        }

        #adt35-banner .adt35-frame {
          background: rgba(255,255,255,.03);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #adt35-banner,
        #adt35-banner * {
          transition: none !important;
        }
      }
    `;

    document.head.appendChild(css);
  }

  /* ---------- CREATE 320x50 BANNER ---------- */
  function createBanner() {
    if (document.getElementById("adt35-banner")) return;

    var card = document.createElement("section");
    card.id = "adt35-banner";
    card.className = "premium-ad-card";
    card.setAttribute("aria-label", "Sponsored advertisement");

    card.innerHTML = `
      <div class="adt35-head">
        <span class="adt35-label">
          <span class="adt35-dot"></span>
          Sponsored
        </span>

        <button class="adt35-close"
          type="button"
          aria-label="Close advertisement"
          title="Close advertisement">
          <svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round"
            aria-hidden="true">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>

      <div class="adt35-frame" id="adt35-banner-slot"></div>
    `;

    card.querySelector(".adt35-close").addEventListener("click", function () {
      card.classList.add("adt35-hidden");
    });

    /*
      Try to place the banner at the beginning of the main content.
      Exact placement depends on the Blogger theme.
    */
    var target = document.querySelector(
      "#main-wrapper, #main, main, .main-wrapper, .blog-posts, .content-outer"
    );

    if (target) {
      target.insertBefore(card, target.firstChild);
    } else {
      document.body.insertBefore(card, document.body.firstChild);
    }

    /*
      Define the ad configuration immediately before its invoke script.
      This follows the provided ad-network embed format.
    */
    var config = document.createElement("script");
    config.textContent =
      "window.atOptions = {" +
      "'key':'" + BANNER_KEY + "'," +
      "'format':'iframe'," +
      "'height':50," +
      "'width':320," +
      "'params':{}" +
      "};";

    var slot = document.getElementById("adt35-banner-slot");
    slot.appendChild(config);

    var invoke = document.createElement("script");
    invoke.src = BANNER_URL;
    invoke.async = true;
    invoke.setAttribute("data-cfasync", "false");
    invoke.onerror = function () {
      console.warn("[AdtMonads35] 320x50 banner failed to load.");
    };

    slot.appendChild(invoke);
  }

  /* ---------- CREATE NATIVE BANNER ---------- */
  function createNativeBanner() {
    if (document.getElementById("adt35-native")) return;

    var wrapper = document.createElement("div");
    wrapper.id = "adt35-native";

    var slot = document.createElement("div");
    slot.id = "container-" + NATIVE_KEY;

    wrapper.appendChild(slot);

    /*
      Place native ad after the 320x50 banner when possible.
    */
    var banner = document.getElementById("adt35-banner");

    if (banner && banner.parentNode) {
      banner.insertAdjacentElement("afterend", wrapper);
    } else {
      document.body.appendChild(wrapper);
    }

    loadScript(NATIVE_URL, { cfasync: false });
  }

  /* ---------- START AD SETUP ---------- */
  function init() {
    addStyles();

    /*
      Pop Ad 1: external script from the supplied code.
      Its actual display frequency is controlled by the network.
    */
    loadScript(POP1_URL, { cfasync: false });

    /*
      Pop Ad 2: zone-based script.
    */
    loadScript(POP2_URL, {
      zone: "11988592",
      cfasync: false
    });

    createBanner();
    createNativeBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
