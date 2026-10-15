
(function () {
  "use strict";

  // Prevent duplicate initialization
  if (window.__AdtMonads12Loaded) return;
  window.__AdtMonads12Loaded = true;

  function addScript(src, options) {
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

    (document.body || document.documentElement).appendChild(script);
    return script;
  }

  function initializeAds() {
    // ==========================================
    // POP ADS - 1
    // ==========================================
    addScript(
      "https://aarems.org/1/605a2ec69525cd4fbcc72fad3a1024ac",
      { cfasync: false }
    );

    // ==========================================
    // POP ADS - 2
    // ==========================================
    addScript(
      "https://al5sm.com/tag.min.js",
      { zone: "11988592" }
    );

    // ==========================================
    // MIDDLE 320x50 BANNER CSS
    // ==========================================
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
    `;

    var style = document.createElement("style");
    style.id = "adtmonads12-banner-css";
    style.textContent = css;
    document.head.appendChild(style);

    // ==========================================
    // CREATE MIDDLE BANNER
    // ==========================================
    if (!document.getElementById("middle-banner-320x50")) {
      var banner = document.createElement("div");
      banner.id = "middle-banner-320x50";

      var label = document.createElement("div");
      label.className = "middle-banner-label";
      label.textContent = "Advertisement";

      var close = document.createElement("button");
      close.className = "middle-banner-close";
      close.type = "button";
      close.setAttribute("aria-label", "Close advertisement");
      close.textContent = "\u00D7";
      close.addEventListener("click", function () {
        banner.style.display = "none";
      });

      var adBox = document.createElement("div");
      adBox.className = "middle-banner-ad";

      banner.appendChild(label);
      banner.appendChild(close);
      banner.appendChild(adBox);

      // Insert before the main content when possible
      var content = document.querySelector(
        ".post-body, .entry-content, article, main, #main"
      );

      if (content && content.parentNode) {
        content.parentNode.insertBefore(banner, content);
      } else {
        var header = document.querySelector("header, #header, .header");
        if (header && header.parentNode) {
          header.parentNode.insertBefore(banner, header.nextSibling);
        } else {
          document.body.insertBefore(banner, document.body.firstChild);
        }
      }

      // Set the ad configuration before loading the ad script
      window.atOptions = {
        key: "aacc8245ff87a399e050391c441727a6",
        format: "iframe",
        height: 50,
        width: 320,
        params: {}
      };

      addScript(
        "https://bancadeltempoidea.org/22/aacc8245ff87a399e050391c441727a6"
      , { cfasync: false });

      // Move the banner's ad area before the ad script executes
      // if the provider renders into the current document context.
      // The provider's own script determines the final rendering.
    }

    // ==========================================
    // NATIVE BANNER
    // ==========================================
    if (
      !document.getElementById(
        "container-778fed03c990209e50c1842c8c388a17"
      )
    ) {
      var nativeContainer = document.createElement("div");
      nativeContainer.id =
        "container-778fed03c990209e50c1842c8c388a17";

      var nativeTarget = document.querySelector(
        ".post-body, .entry-content, article, main, #main"
      );

      if (nativeTarget) {
        nativeTarget.appendChild(nativeContainer);
      } else {
        document.body.appendChild(nativeContainer);
      }

      addScript(
        "https://bancadeltempoidea.org/21/778fed03c990209e50c1842c8c388a17",
        { cfasync: false }
      );
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAds, {
      once: true
    });
  } else {
    initializeAds();
  }
})();
      
