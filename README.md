// ===== ADS CONFIG FILE =====

// Top Banner Ad
document.write(`

<script>
atOptions = {
  'key' : '16fff506ae287a461f6757094e4ef754',
  'format' : 'iframe',
  'height' : 50,
  'width' : 320,
  'params' : {}
};
<\/script>

<script src="https://bagelstoppage.com/16fff506ae287a461f6757094e4ef754/invoke.js"><\/script>
`);


// ===== POP ADS =====

// First Pop Script
(function(s){
  s.dataset.zone='10922453',
  s.src='https://al5sm.com/tag.min.js'
})(
  [document.documentElement, document.body]
  .filter(Boolean)
  .pop()
  .appendChild(document.createElement('script'))
);


// Duplicate Pop Script
(function(s){
  s.dataset.zone='10922453',
  s.src='https://al5sm.com/tag.min.js'
})(
  [document.documentElement, document.body]
  .filter(Boolean)
  .pop()
  .appendChild(document.createElement('script'))
);


// ===== NATIVE / VIGNETTE ADS =====
(function(s){
  s.dataset.zone='5880443',
  s.src='https://n6wxm.com/vignette.min.js'
})(
  [document.documentElement, document.body]
  .filter(Boolean)
  .pop()
  .appendChild(document.createElement('script'))
);


// ===== EXTERNAL AD SCRIPTS =====
var script1 = document.createElement('script');
script1.src = "https://bagelstoppage.com/7a/e9/72/7ae97208d00b054e86dd8a1a2e3f691e.js";
document.body.appendChild(script1);

var script2 = document.createElement('script');
script2.src = "https://bagelstoppage.com/d0/2a/7c/d02a7cff3f152f87d8da1ca98634700b.js";
document.body.appendChild(script2);


// ===== CENTER COLLAPSIBLE 300x250 BANNER =====
const adContainer = document.createElement("div");
adContainer.id = "collapsible-ad-container";

adContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    z-index: 999999;
    font-family: Arial, sans-serif;
`;

adContainer.innerHTML = `
    <div id="ad-toggle-btn" style="
        background: #111;
        color: #fff;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 8px 8px 0 0;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
    ">
        Hide Ad ✖
    </div>

    <div id="ad-box" style="
        width: 300px;
        height: 250px;
        background: #fff;
        overflow: hidden;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 0 10px rgba(0,0,0,0.35);
    ">
    </div>
`;

document.body.appendChild(adContainer);


// ===== LOAD 300x250 AD =====
const adScriptConfig = document.createElement("script");

adScriptConfig.innerHTML = `
atOptions = {
  'key' : '03e171fe2510764eaf7d34a1321222ba',
  'format' : 'iframe',
  'height' : 250,
  'width' : 300,
  'params' : {}
};
`;

document.getElementById("ad-box").appendChild(adScriptConfig);

const adInvokeScript = document.createElement("script");
adInvokeScript.src = "https://bagelstoppage.com/03e171fe2510764eaf7d34a1321222ba/invoke.js";

document.getElementById("ad-box").appendChild(adInvokeScript);


// ===== COLLAPSE SCRIPT =====
const toggleBtn = document.getElementById("ad-toggle-btn");
const adBox = document.getElementById("ad-box");

let isHidden = false;

toggleBtn.onclick = function () {

    if (!isHidden) {

        adBox.style.display = "none";
        toggleBtn.innerHTML = "Show Ad ?";
        toggleBtn.style.borderRadius = "8px";
        isHidden = true;

    } else {

        adBox.style.display = "block";
        toggleBtn.innerHTML = "Hide Ad ✖";
        toggleBtn.style.borderRadius = "8px 8px 0 0";
        isHidden = false;

    }

};
