(function () {
"use strict";

function initAdterraMediumcm() {

// Prevent duplicate initialization
if (document.getElementById("middle-banner-320x50")) {
  return;
}


/* =====================================================
   POP ADS - 1
===================================================== */

var popAd = document.createElement("script");

popAd.src =
  "https://bagelstoppage.com/60/5a/2e/605a2ec69525cd4fbcc72fad3a1024ac.js";

popAd.async = true;

document.body.appendChild(popAd);


/* =====================================================
   320x50 BANNER
===================================================== */

var banner = document.createElement("div");

banner.id = "middle-banner-320x50";

banner.innerHTML = `
  <div class="middle-banner-label">
    Advertisement
  </div>

  <button
    class="middle-banner-close"
    type="button"
    aria-label="Close advertisement">
    ×
  </button>

  <div class="middle-banner-ad"></div>
`;


/* =====================================================
   BANNER CSS
===================================================== */

var style = document.createElement("style");

style.textContent = `
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

  .middle-banner-label {
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    font-family: Arial, sans-serif;
    font-size: 9px;
    line-height: 12px;
    color: #888;
    white-space: nowrap;
    pointer-events: none;
  }

  .middle-banner-ad {
    width: 320px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .middle-banner-close {
    position: absolute;
    top: -4px;
    left: calc(50% + 160px);
    width: 22px;
    height: 22px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: rgba(0,0,0,0.85);
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 17px;
    font-weight: bold;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    z-index: 999999;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  }

  .middle-banner-close:hover {
    background: #000;
    transform: scale(1.05);
  }

  @media (max-width: 360px) {
    #middle-banner-320x50 {
      transform: scale(0.90);
      transform-origin: center;
      margin: 6px auto;
    }

    .middle-banner-close {
      left: calc(50% + 145px);
    }
  }
`;

document.head.appendChild(style);


/* =====================================================
   ADD BANNER
===================================================== */

var target =
  document.querySelector(".post-body") ||
  document.querySelector(".entry-content") ||
  document.querySelector("main");

if (target) {
  target.insertBefore(banner, target.firstChild);
} else {
  document.body.insertBefore(
    banner,
    document.body.firstChild
  );
}


/* =====================================================
   CLOSE BUTTON
===================================================== */

var closeButton =
  banner.querySelector(".middle-banner-close");

closeButton.addEventListener("click", function () {
  banner.style.display = "none";
});


/* =====================================================
   320x50 AD
===================================================== */

var adContainer =
  banner.querySelector(".middle-banner-ad");


var adConfig = document.createElement("script");

adConfig.textContent = `
  atOptions = {
    'key' : 'aacc8245ff87a399e050391c441727a6',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
`;

adContainer.appendChild(adConfig);


var bannerScript = document.createElement("script");

bannerScript.src =
  "https://bagelstoppage.com/aacc8245ff87a399e050391c441727a6/invoke.js";

adContainer.appendChild(bannerScript);


/* =====================================================
   NATIVE BANNER
===================================================== */

var nativeContainer = document.createElement("div");

nativeContainer.id =
  "container-778fed03c990209e50c1842c8c388a17";

document.body.appendChild(nativeContainer);


var nativeScript = document.createElement("script");

nativeScript.async = true;

nativeScript.setAttribute(
  "data-cfasync",
  "false"
);

nativeScript.src =
  "https://bagelstoppage.com/778fed03c990209e50c1842c8c388a17/invoke.js";

document.body.appendChild(nativeScript);

}

/* =====================================================
WAIT FOR DOM
===================================================== */

if (document.readyState === "loading") {

document.addEventListener(
  "DOMContentLoaded",
  initAdterraMediumcm,
  { once: true }
);

} else {

initAdterraMediumcm();

}

})();
