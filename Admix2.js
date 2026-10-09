
/* =========================================================
   ADMIX2.JS
   Pop Ads 1 + Pop Ads 2 + Vignette
   Middle 320x50 Banner + Native Banner
========================================================= */

(function () {
  "use strict";

  // Prevent duplicate initialization
  if (window.__Admix2Loaded) return;
  window.__Admix2Loaded = true;

  var pop1URL =
    "https://aarems.org/1/605a2ec69525cd4fbcc72fad3a1024ac";

  var pop2URL =
    "https://al5sm.com/tag.min.js";

  var vignetteURL =
    "https://n6wxm.com/vignette.min.js";

  var bannerURL =
    "https://bancadeltempoidea.org/22/aacc8245ff87a399e050391c441727a6";

  var nativeURL =
    "https://bancadeltempoidea.org/21/778fed03c990209e50c1842c8c388a17";

  // Append external scripts without document.write()
  function loadScript(src, options) {
    options = options || {};

    var script = document.createElement("script");
    script.src = src;
    script.async = true;

    if (options.cfasync === false) {
      script.setAttribute("data-cfasync", "false");
    }

    if (options.zone) {
      script.dataset.zone = options.zone;
    }

    (document.body || document.documentElement)
      .appendChild(script);

    return script;
  }

  // Initialize after the document is ready
  function initAdmix2() {
    if (document.getElementById("admix2-middle-banner")) {
      return;
    }

    /* ---------------- POP ADS 1 ----------------
       External provider script. Load only once.
    ------------------------------------------------ */
    loadScript(pop1URL, { cfasync: false });

    /* ---------------- POP ADS 2 ----------------
       Monetag zone: 11988592
    ------------------------------------------------ */
    loadScript(pop2URL, { zone: "11988592" });

    /* ---------------- VIGNETTE BANNER ------------
       Zone: 11988597
    ------------------------------------------------ */
    loadScript(vignetteURL, { zone: "11988597" });

    /* ---------------- MIDDLE BANNER --------------
       320x50 closable banner
    ------------------------------------------------ */
    var style = document.createElement("style");
    style.textContent = `
      #admix2-middle-banner {
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

      #admix2-middle-banner .admix2-label {
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translateX(-50%);
        font: 9px/12px Arial, sans-serif;
        color: #888;
        white-space: nowrap;
        pointer-events: none;
      }

      #admix2-middle-banner .admix2-ad {
        width: 320px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }

      #admix2-middle-banner .admix2-close {
        position: absolute;
        top: -4px;
        left: calc(50% + 160px);
        width: 22px;
        height: 22px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: rgba(0,0,0,.85);
        color: #fff;
        font: bold 17px/21px Arial, sans-serif;
        text-align: center;
        cursor: pointer;
        z-index: 999999;
        box-shadow: 0 2px 6px rgba(0,0,0,.3);
      }

      #admix2-middle-banner .admix2-close:hover {
        background: #000;
        transform: scale(1.05);
      }

      @media (max-width: 360px) {
        #admix2-middle-banner {
          transform: scale(.90);
          transform-origin: center;
          margin: 6px auto;
        }

        #admix2-middle-banner .admix2-close {
          left: calc(50% + 145px);
        }
      }
    `;
    document.head.appendChild(style);

    var banner = document.createElement("div");
    banner.id = "admix2-middle-banner";

    var label = document.createElement("div");
    label.className = "admix2-label";
    label.textContent = "Advertisement";

    var close = document.createElement("button");
    close.className = "admix2-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close advertisement");
    close.textContent = "×";
    close.addEventListener("click", function () {
      banner.style.display = "none";
    });

    var adBox = document.createElement("div");
    adBox.className = "admix2-ad";

    banner.appendChild(label);
    banner.appendChild(close);
    banner.appendChild(adBox);

    // Insert banner near the start of the main content.
    // Adjust these selectors if your Blogger theme uses other names.
    var target = document.querySelector(
      ".post-body, .entry-content, main, #main, .blog-posts"
    );

    if (target) {
      target.insertBefore(banner, target.firstChild);
    } else {
      document.body.insertBefore(banner, document.body.firstChild);
    }

    // Set the banner options before loading the provider script.
    window.atOptions = {
      key: "aacc8245ff87a399e050391c441727a6",
      format: "iframe",
      height: 50,
      width: 320,
      params: {}
    };

    loadScript(bannerURL);

    /* ---------------- NATIVE BANNER --------------
       Keep the container present before loading script.
    ------------------------------------------------ */
    var nativeContainer = document.createElement("div");
    nativeContainer.id =
      "container-778fed03c990209e50c1842c8c388a17";

    var nativeScript = document.createElement("script");
    nativeScript.async = true;
    nativeScript.setAttribute("data-cfasync", "false");
    nativeScript.src = nativeURL;

    document.body.appendChild(nativeContainer);
    document.body.appendChild(nativeScript);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAdmix2, {
      once: true
    });
  } else {
    initAdmix2();
  }
})();
