(function () {
    function loadScript(src, defer = false) {
      const script = document.createElement("script");
      script.src = src;
      if (defer) script.defer = true;
      document.head.appendChild(script);
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
  
    // Load external scripts
    loadScript("https://cdn.jsdelivr.net/gh/carecartapp/custome-scripts@v12.38/gagdet-wheelify/wheelify-inject.js");
    loadScript("https://wheelify.gadget.app/api/client/web.min.js", true);
    loadScript("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/confetti.min.js");
    loadScript("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/intlTelInput.min.js");
    loadScript("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/spinner.min.js");
    loadScript("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/indexgt.js");
  
    // Load styles
    loadStyle("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    loadStyle("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/intlTelInput.css");
    loadStyle("https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/front-store-spinner.min.css");
  })();
  