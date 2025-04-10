
(function () {
  function loadScript(src, async = false) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      if (async) script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function loadStyle(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  // Define Shopify.shop if not present
  if (typeof window.Shopify === "undefined") {
    window.Shopify = {};
  }
  if (!Shopify.shop) {
    Shopify.shop = "quickstart-8be879cc.myshopify.com";
  }

  // Load styles
  loadStyle("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  loadStyle("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/intlTelInput.css");
  loadStyle("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/front-store-spinner.min.css");

  // Step 1: Load the first script FIRST and wait for it
  loadScript("https://wheelify.gadget.app/api/client/web.min.js")
    .then(() => {
      // Step 2: Chain the rest AFTER the first one is fully loaded
      return loadScript("https://cdn.jsdelivr.net/gh/carecartapp/custome-scripts@v12.38/gagdet-wheelify/wheelify-inject.js");
    })
    .then(() => loadScript("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/indexgt.js"))
    .then(() => loadScript("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/intlTelInput.min.js"))
    .then(() => loadScript("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/spinner.min.js"))
    .then(() => loadScript("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/confetti.min.js"))
    .catch(err => console.error("Script load error:", err));
})();
