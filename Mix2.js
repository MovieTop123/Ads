(function () {

// =====================================
// BOTTOM FLOATING COLLAPSIBLE AD
// =====================================

var adContainer = document.createElement("div");

adContainer.style.position = "fixed";
adContainer.style.bottom = "0";
adContainer.style.left = "50%";
adContainer.style.transform = "translateX(-50%)";
adContainer.style.width = "100%";
adContainer.style.maxWidth = "420px";
adContainer.style.background = "#fff";
adContainer.style.zIndex = "999999";
adContainer.style.textAlign = "center";
adContainer.style.borderRadius = "20px 20px 0 0";
adContainer.style.boxShadow = "0 -2px 10px rgba(0,0,0,0.3)";
adContainer.style.overflow = "hidden";

var header = document.createElement("div");

header.style.background = "#000";
header.style.color = "#fff";
header.style.padding = "8px";
header.style.fontSize = "14px";
header.style.cursor = "pointer";
header.style.fontWeight = "bold";

header.innerHTML = "ADVERTISEMENT ▼";

var content = document.createElement("div");
content.style.padding = "5px";

var script1 = document.createElement("script");

script1.innerHTML = "atOptions = { 'key' : 'aacc8245ff87a399e050391c441727a6', 'format' : 'iframe', 'height' : 50, 'width' : 320, 'params' : {} };";

var script2 = document.createElement("script");
script2.src = "https://bagelstoppage.com/aacc8245ff87a399e050391c441727a6/invoke.js";

content.appendChild(script1);
content.appendChild(script2);

var collapsed = false;

header.onclick = function () {

if (!collapsed) {

  content.style.display = "none";
  header.innerHTML = "ADVERTISEMENT ▲";
  collapsed = true;

} else {

  content.style.display = "block";
  header.innerHTML = "ADVERTISEMENT ▼";
  collapsed = false;

}

};

adContainer.appendChild(header);
adContainer.appendChild(content);

document.body.appendChild(adContainer);

// =====================================
// POP ADS - 1
// =====================================

var pop1 = document.createElement("script");
pop1.src = "https://bagelstoppage.com/60/5a/2e/605a2ec69525cd4fbcc72fad3a1024ac.js";
document.body.appendChild(pop1);

// =====================================
// POP ADS - 2
// =====================================

var pop2 = document.createElement("script");
pop2.src = "https://bagelstoppage.com/60/5a/2e/605a2ec69525cd4fbcc72fad3a1024ac.js";

setTimeout(function () {
document.body.appendChild(pop2);
}, 1500);

// =====================================
// NATIVE BANNER AD
// =====================================

var nativeContainer = document.createElement("div");
nativeContainer.id = "container-778fed03c990209e50c1842c8c388a17";

nativeContainer.style.margin = "15px auto";
nativeContainer.style.textAlign = "center";

document.body.appendChild(nativeContainer);

var nativeScript = document.createElement("script");

nativeScript.async = true;
nativeScript.setAttribute("data-cfasync", "false");
nativeScript.src = "https://bagelstoppage.com/778fed03c990209e50c1842c8c388a17/invoke.js";

document.body.appendChild(nativeScript);

})();
