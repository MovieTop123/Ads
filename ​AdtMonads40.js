/**
 * AdtMonads40.js
 * Unified Ad Integration: Pop-1, Pop-2, 350x20 Middle Banner, and Bottom Native Ads.
 */
(function () {
  'use strict';

  /* =========================================================
     1. INJECT AD STYLES
  ========================================================= */
  function injectStyles() {
    if (document.getElementById('adtmonads40-styles')) return;

    var css = `
      /* --- 350x20 Ultra-Slim Banner --- */
      .slim-banner-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
        box-sizing: border-box;
        z-index: 99;
      }
      .slim-banner-bar {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 999px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        padding: 3px 8px;
        max-width: 98vw;
        box-sizing: border-box;
      }
      .slim-banner-badge {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-size: 8px;
        font-weight: 700;
        letter-spacing: 0.05em;
        color: #71717a;
        background: rgba(0, 0, 0, 0.06);
        padding: 2px 4px;
        border-radius: 4px;
        line-height: 1;
      }
      .slim-banner-ad {
        width: 350px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .slim-banner-close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        border: none;
        background: rgba(0, 0, 0, 0.08);
        color: #52525b;
        border-radius: 50%;
        font-size: 13px;
        line-height: 1;
        cursor: pointer;
        padding: 0;
        transition: background 0.15s ease, color 0.15s ease;
      }
      .slim-banner-close:hover {
        background: #ef4444;
        color: #ffffff;
      }

      /* --- Bottom Native Ad Container --- */
      .bottom-native-ad-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
        padding: 16px 12px;
        box-sizing: border-box;
      }
      .bottom-native-card {
        width: 100%;
        max-width: 800px;
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 12px;
        box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.07);
        padding: 12px 14px 16px;
        box-sizing: border-box;
      }
      .native-card-header {
        margin-bottom: 8px;
      }
      .native-badge {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-size: 9px;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: #71717a;
        text-transform: uppercase;
        background: rgba(0, 0, 0, 0.04);
        padding: 3px 6px;
        border-radius: 4px;
      }
      .native-ad-slot {
        width: 100%;
        min-height: 60px;
        overflow: hidden;
      }

      /* --- Responsive --- */
      @media (max-width: 420px) {
        .slim-banner-bar {
          transform: scale(0.9);
          transform-origin: center center;
        }
      }
      @media (max-width: 360px) {
        .slim-banner-bar {
          transform: scale(0.82);
        }
      }

      /* --- Dark Mode Adaptation --- */
      @media (prefers-color-scheme: dark) {
        .slim-banner-bar,
        .bottom-native-card {
          background: rgba(24, 24, 27, 0.88);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 24px -4px rgba(0, 0, 0, 0.45);
        }
        .slim-banner-badge,
        .native-badge {
          color: #a1a1aa;
          background: rgba(255, 255, 255, 0.08);
        }
        .slim-banner-close {
          background: rgba(255, 255, 255, 0.12);
          color: #d4d4d8;
        }
      }
    `;

    var styleEl = document.createElement('style');
    styleEl.id = 'adtmonads40-styles';
    styleEl.appendChild(document.createTextNode(css));
    document.head.appendChild(styleEl);
  }

  /* =========================================================
     2. POP ADS LOADER
  ========================================================= */
  function loadPopAds() {
    // Pop Ad 1
    var popScript1 = document.createElement('script');
    popScript1.setAttribute('data-cfasync', 'false');
    popScript1.src = 'https://aarems.org/1/605a2ec69525cd4fbcc72fad3a1024ac';
    document.body.appendChild(popScript1);

    // Pop Ad 2
    var popScript2 = document.createElement('script');
    popScript2.dataset.zone = '11988592';
    popScript2.src = 'https://al5sm.com/tag.min.js';
    [document.documentElement, document.body].filter(Boolean).pop().appendChild(popScript2);
  }

  /* =========================================================
     3. 350x20 MIDDLE BANNER BUILDER
  ========================================================= */
  function renderMiddleBanner() {
    var banner = document.createElement('div');
    banner.id = 'middle-banner-350x20';
    banner.className = 'slim-banner-wrapper';

    banner.innerHTML = `
      <div class="slim-banner-bar">
        <span class="slim-banner-badge">AD</span>
        <div class="slim-banner-ad" id="ad-slot-350x20"></div>
        <button class="slim-banner-close" id="btn-close-banner-350x20" aria-label="Close advertisement" title="Close ad">&times;</button>
      </div>
    `;

    // Attempt insertion between header and main/center content
    var header = document.querySelector('header');
    var main = document.querySelector('main, #content, .content, .main-content');

    if (header && header.nextSibling) {
      header.parentNode.insertBefore(banner, header.nextSibling);
    } else if (main) {
      main.parentNode.insertBefore(banner, main);
    } else {
      document.body.insertBefore(banner, document.body.firstChild);
    }

    // Attach smooth-close handler
    document.getElementById('btn-close-banner-350x20').addEventListener('click', function () {
      banner.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      banner.style.opacity = '0';
      banner.style.transform = 'scale(0.95)';
      setTimeout(function () {
        banner.style.display = 'none';
      }, 200);
    });

    // Populate the 350x20 iframe ad safely inside an isolated frame
    var slot = document.getElementById('ad-slot-350x20');
    var frame = document.createElement('iframe');
    frame.width = '350';
    frame.height = '20';
    frame.style.border = 'none';
    frame.style.overflow = 'hidden';
    frame.scrolling = 'no';
    slot.appendChild(frame);

    var frameDoc = frame.contentWindow || frame.contentDocument.document || frame.contentDocument;
    var adHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;overflow:hidden;display:flex;justify-content:center;align-items:center;">
          <script>
            window.atOptions = {
              'key' : 'aacc8245ff87a399e050391c441727a6',
              'format' : 'iframe',
              'height' : 20,
              'width' : 350,
              'params' : {}
            };
          <\/script>
          <script src="https://bancadeltempoidea.org/22/aacc8245ff87a399e050391c441727a6"><\/script>
        </body>
      </html>
    `;

    frameDoc = frame.contentDocument || frame.contentWindow.document;
    frameDoc.open();
    frameDoc.write(adHtml);
    frameDoc.close();
  }

  /* =========================================================
     4. BOTTOM NATIVE BANNER BUILDER
  ========================================================= */
  function renderBottomNative() {
    var footerWrapper = document.createElement('footer');
    footerWrapper.className = 'bottom-native-ad-wrapper';

    footerWrapper.innerHTML = `
      <div class="bottom-native-card">
        <div class="native-card-header">
          <span class="native-badge">SPONSORED CONTENT</span>
        </div>
        <div id="container-778fed03c990209e50c1842c8c388a17" class="native-ad-slot"></div>
      </div>
    `;

    document.body.appendChild(footerWrapper);

    var nativeScript = document.createElement('script');
    nativeScript.async = true;
    nativeScript.setAttribute('data-cfasync', 'false');
    nativeScript.src = 'https://bancadeltempoidea.org/21/778fed03c990209e50c1842c8c388a17';
    document.body.appendChild(nativeScript);
  }

  /* =========================================================
     5. INITIALIZATION
  ========================================================= */
  function init() {
    injectStyles();
    loadPopAds();
    renderMiddleBanner();
    renderBottomNative();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
