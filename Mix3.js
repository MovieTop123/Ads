(function () {
  // 1. POP ADS - 1 (Loads instantly)
  var popAd1 = document.createElement("script");
  popAd1.src = "https://bagelstoppage.com/60/5a/2e/605a2ec69525cd4fbcc72fad3a1024ac.js";
  document.head.appendChild(popAd1);

  // 2. POP ADS - 2 (Delayed by 1.5 seconds to prevent browser conflict)
  setTimeout(function() {
    var popAd2 = document.createElement("script");
    popAd2.src = "https://bagelstoppage.com/60/5a/2e/605a2ec69525cd4fbcc72fad3a1024ac.js";
    document.head.appendChild(popAd2);
  }, 1500);

  // 3. NATIVE BANNER ADS
  var nativeContainer = document.createElement("div");
  nativeContainer.id = "container-778fed03c990209e50c1842c8c388a17";
  document.body.appendChild(nativeContainer);

  var nativeScript = document.createElement("script");
  nativeScript.async = true;
  nativeScript.setAttribute("data-cfasync", "false");
  nativeScript.src = "https://bagelstoppage.com/778fed03c990209e50c1842c8c388a17/invoke.js";
  document.head.appendChild(nativeScript);

  // 4. BOTTOM FLOATING COLLAPSIBLE AD
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
  header.innerHTML = "ADVERTISEMENT &#9660;";

  var content = document.createElement("div");
  content.style.padding = "5px";

  var script1 = document.createElement("script");
  script1.innerHTML = `
    atOptions = {
      'key' : 'aacc8245ff87a399e050391c441727a6',
      'format' : 'iframe',
      'height' : 50,
      'width' : 320,
      'params' : {}
    };
  `;

  var script2 = document.createElement("script");
  script2.src = "https://bagelstoppage.com/aacc8245ff87a399e050391c441727a6/invoke.js";

  content.appendChild(script1);
  content.appendChild(script2);

  var collapsed = false;
  header.onclick = function () {
    if (!collapsed) {
      content.style.display = "none";
      header.innerHTML = "ADVERTISEMENT &#9650;";
      collapsed = true;
    } else {
      content.style.display = "block";
      header.innerHTML = "ADVERTISEMENT &#9660;";
      collapsed = false;
    }
  };

  adContainer.appendChild(header);
  adContainer.appendChild(content);
  document.body.appendChild(adContainer);
})();
