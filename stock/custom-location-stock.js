/**
 * @package Sales Pop up â€‘ Social Proof
 * @author CareCart
 * @link https://apps.shopify.com/partners/care-cart
 * @link https://carecart.io/
 * @version 3.34
 *
 * Any unauthorized use and distribution of this and related files, is strictly forbidden.
 * In case of any inquiries, please contact here: https://carecart.io/contact-us/
 */

function scriptInjection(src, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";

    script.src = src;
    if (typeof callback == 'function') {
        script.addEventListener('load', callback);
    }

    document.getElementsByTagName('head')[0].appendChild(script);
}

scriptInjection("https://code.jquery.com/jquery-3.2.1.min.js", function () {
    window.$jq321 = jQuery.noConflict(true);

    var version = "1.1.8";

    var salespoplib_active_url = window.location.hostname;
    salespoplib_active_url += (window.location.pathname.substr(-1) !== "/") ? window.location.pathname : window.location.pathname.substr(0, window.location.pathname.length - 1);

    function getServerUrls() {
        // Finding the URL of this library among all the script tags
        var allScripts = document.getElementsByTagName('script');
        allScripts = Array.prototype.slice.call(allScripts);

        var thisLibUrl = "";
        allScripts.forEach(function (script) {
            if (script.src && script.src.indexOf('lib/custom-location-stock.js') !== -1) {
                thisLibUrl = ""; console.log("hella");
            }
        });

        // return with production URLs
        if (thisLibUrl === "") {
            return {
                "backend": "https://app-countdown-pro.carecart.io/FrontController/",
                "cssStock": "https://app-countdown-pro.carecart.io/lib/stock-box.css",
                "cssTimer": "https://app-countdown-pro.carecart.io/lib/timer-box.css",
                "cssCartTimer": "https://app-countdown-pro.carecart.io/lib/cart-countdown.css"
            };
        }

        var tempAnchorTag = document.createElement('a');
        tempAnchorTag.href = thisLibUrl;

        var backend = "https://" + tempAnchorTag.hostname + "/FrontController/";
        if ("sales-pop.carecart.io" === tempAnchorTag.hostname) {
            backend = "https://tracking-" + tempAnchorTag.hostname + "/FrontController/";
        }

        return {
            "backend": backend,
            "cssStock": "https://" + tempAnchorTag.hostname + "/lib/stock-box.css?v" + version,
            "cssTimer": "https://" + tempAnchorTag.hostname + "/lib/timer-box.css?v" + version,
            "cssCartTimer": "https://" + tempAnchorTag.hostname + "/lib/cart-countdown.css?v" + version
        };
    }

    var serverUrl = getServerUrls();
    var app_url = "https://app-countdown-pro.carecart.io/"

    // @todo cleanup unused extra properties
    var salespoplib_vars_obj = {
        checkDevice: '',
        backend_url: serverUrl.backend
    };

    // Check For desktop/Mobile
    (function (a) {
        ($jq321.browser = $jq321.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);

    /* Check if Mobile */
    if ($jq321.browser.mobile) {
        salespoplib_vars_obj.checkDevice = 'mobile';
    } else {
        salespoplib_vars_obj.checkDevice = 'desktop';
    }

    window.checkmodule_countdown = function (response) {
        console.log("Response received");

        if (Shopify.shop == "mysns.myshopify.com") {
            if (window.location.href != 'https://strongnation.in/collections/best-sellers/products/tiger-fury-pre-workout') {
                console.log('countdown pro block on other pages');
                return false;
            }
        }

        apiResponse = response;

        // STOCK COUNTDOWN CALL
        if (apiResponse && apiResponse.stock && apiResponse.stock !== null) {
            $jq321("head").append($jq321("<link/>", { rel: "stylesheet", href: serverUrl.cssStock + "?v" + version }));

            if (Shopify.shop == "sensible-success.myshopify.com") {
                setTimeout(function () { stockCountdown(apiResponse.stock); }, 4000);
            }
            else {
                stockCountdown(apiResponse.stock);
            }
        }

        // Time COUNTDOWN CALL
        if (apiResponse && apiResponse.timer && apiResponse.timer !== null) {

            setTimeout(function () {

                $jq321("head").append($jq321("<link/>", {
                    rel: "stylesheet",
                    href: serverUrl.cssTimer + "?v" + version
                }));

            }, 2000);


            setTimeout(function () {

                timeCountdown(apiResponse.timer);

            }, 4000);
        }

        // Cart Countdown timer
        if (apiResponse && apiResponse.cartTimer && apiResponse.cartTimer !== null) {
            $jq321("head").append($jq321("<link/>", { rel: "stylesheet", href: serverUrl.cssCartTimer + "?v" + version }));
            cartCountdownTimer(apiResponse.cartTimer);
        }
    };

    if (Shopify.shop == "nefertum-scent.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "macmlone-co.myshopify.com") {
        var meta = { "product": { "id": __st.rid } }
    }
    if (Shopify.shop == "sembootss.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "fabricatextiles.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "rossocoffee.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "happy-nocnoc.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "smartcooks-de.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "jembaly.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "asia-tea-company-store.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "confozen-fr.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "lloyds-liquid-sunshines.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "waterlily-products.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "cengiz-akturk-shop.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "idealzoneofficiel.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "yipth.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "athenawear-f7b8.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "aspiresportsfiji.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "the-beardstory.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "medici-supply-co.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "smartbusiness-pe.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "thuyn.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "fligflag.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "eminenter.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "trap-shoppp.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "redpointgadgets-com.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "itrendy-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "eneamaze.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "sensible-success.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "2c690a.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "nac89.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "canvasart-dev.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "polyrt.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "jaxoli.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "mysns.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "trademark-art.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "fusskleidung.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "e1fa5f.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "shop-perfection-9213.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "nuda-skincare.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "lunaeditions.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "b2b-sequenze.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "kitchen-store-7156.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "vibewear-1041.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "adoresfashions.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "marblacks-adm.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "my-inexa.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "sasta-bazzar-5778.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "casualmode-store.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "aftershock-limited.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "poppy-care.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "house-of-veins.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "www-refitter-nl.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "musso-ph.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "treschic-apparel.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "966b17.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "volff2023.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "curvasperfectas-9455.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "4c3264.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "modibags.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "venty-2092.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "85b12a.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "blysse-6691.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "leather-moccasins.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "ecom-alko.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "skincare-tailor.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "scribblers-calligraphy.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "alchemydeals.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "1ps-1.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "shopdenoa.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "vip-heal.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "773509.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "turkst.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "ippoeasytech.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "sole-premise.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "d-custom-by-darla.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "devhealthyculture360.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "gamingsjappa.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "bigmarket-2806.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "lesmiraculeux.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "powerup-gummies.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "simplisuits.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "realdeal-istanbul.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "a-loja-nova.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "ayaperfumesporassinatura.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "flaschengeist-shop.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "american-uncle-alpha.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "9491ca.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "8925df.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "keepitsimplehiten.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "emma-noah.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "7ec395.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "7dfb11.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "beautyxlnc.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "firststore-5320.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "vasttr.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "crystalchrono.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     else if (Shopify.shop == "05a42e-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     else if (Shopify.shop == "house-heaven-99.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     else if (Shopify.shop == "prestige-7530.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     else if (Shopify.shop == "cbf970-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
      else if (Shopify.shop == "theluckybrands.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     else if (Shopify.shop == "cara-cristini.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "awol-vision.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "private-8361.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "pura-health11.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "neneschicks.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "f8c697.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     else if (Shopify.shop == "shopper-bridge.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "3neyecare.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "cora-and-violet.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "1f6647.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "gipfelstuermer-store-de.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else if (Shopify.shop == "ea8927.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     
    /**
     * check the status of cart page
     */
    let currentPage = !(!window.location.pathname.match("(.*)/cart/(.*)") && !window.location.pathname.match("(.*)/cart"));


    /**
      * Check if browser or desktop
    */
    (function (a) {
        ($jq321.browser = $jq321.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
    })(navigator.userAgent || navigator.vendor || window.opera);
    let deviceName = ($jq321.browser.mobile) ? "mobile" : "desktop";


    $jq321.ajax({
        type: "GET",
        url: salespoplib_vars_obj.backend_url + 'checkStore/',
        dataType: "jsonp",
        jsonpCallback: "checkmodule_countdown",
        crossDomain: true,
        data: {
            "domain_url": Shopify.shop,
            "product_id": (meta.product && meta.product.id) ? meta.product.id : '',
            "pageStatus": currentPage,
            "device": ($jq321.browser.mobile) ? "mobile" : "desktop"
        },
        beforeSend: function () {
        },
        success: function () {
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log("status: " + textStatus);
            console.log("err: " + errorThrown);
        },
        complete: function () {
        }
    });

    let customSelector = '';
    let finalSelector = '';
    let masterSelector = '';

     if (Shopify.shop == "crystalchrono.myshopify.com") {
        customSelector = $jq321("#_rsi-buy-now-button");
        finalSelector = customSelector[0];
    }
    
    if (Shopify.shop == "grandcruvinhos-teste.myshopify.com") {
        customSelector = $jq321(".new-buy");
        finalSelector = customSelector[6];
    }

    if (Shopify.shop == "updateshop24.myshopify.com") {
        $jq321(".add-to-cart-loader").remove();
    }
    if (Shopify.shop == "nuda-skincare.myshopify.com") {

        $jq321("head").append('<style type="text/css">.timer-store-front.timer-center{text-align:left;}</style>');
        customSelector = $jq321(".product-form");
        finalSelector = customSelector[0];
        console.log(finalSelector);

    }
    if (Shopify.shop == "opar-off-road.myshopify.com") {
        $jq321("head").append('<style type="text/css">.stock-message{font-size:14px !important}</style>');
    }

    if (Shopify.shop == "sweatbuffy.myshopify.com") {
        customSelector = $jq321(".addCart");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "wynd-technologies-inc.myshopify.com") {
        customSelector = $jq321(".form__column");
        finalSelector = customSelector[1];
    }
    if (Shopify.shop == "sheopal-s.myshopify.com") {
        customSelector = $jq321(".paymentButtonsWrapper");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "rowse-beauty.myshopify.com") {
        customSelector = $jq321(".btn-mar-top");
        finalSelector = customSelector[0];

        $jq321("head").append('<style type="text/css">.timer-store-front{margin-top: 14px; !important}</style>');
    }

    if (Shopify.shop == "facciobusiness222.myshopify.com") {
        customSelector = $jq321(".purchase-details");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "the-bella-cottage-inc.myshopify.com") {
        var t = 0;
        $jq321("form[action='/cart/add']").find('.quantity-submit-row__submit').each(function () {
            $(this).attr("data-id-" + t, "1");
            t++;
        });

        customSelector = $jq321("[data-id-1=1]");
        finalSelector = customSelector[0];

        $jq321("head").append('<style type="text/css">div.stock-top { display: block !important; }</style>');
    }
    if (Shopify.shop == "internet-retail-connection.myshopify.com") {
        customSelector = $jq321(".add-to-cart-wrapper");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "mamano-chocolate.myshopify.com") {
        customSelector = $jq321(".js-qty");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "fabricatextiles.myshopify.com") {
        customSelector = $jq321(".add-to-cart");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "rossocoffee.myshopify.com") {
        customSelector = $jq321(".product__cart-actions-holder");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "happy-nocnoc.myshopify.com") {
        customSelector = $jq321(".product-block--price");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "smartcooks-de.myshopify.com") {
        customSelector = $jq321(".sc-ehIJor.bCFyQS.pf-19_");
        finalSelector = customSelector[0];
        if (customSelector.length <= 0) {
            customSelector = $jq321(".sc-ehIJor.bCFyQS.pf-18_");
            finalSelector = customSelector[0];
        }
        if (customSelector.length <= 0) {
            customSelector = $jq321(".price__sale");
            finalSelector = customSelector[0];
        }
    }
    if (Shopify.shop == "asia-tea-company-store.myshopify.com") {
        customSelector = $jq321(".ProductForm__BuyButtons");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "confozen-fr.myshopify.com") {
        $jq321("head").append('<style type="text/css">.stock-top{margin-top: 18px; !important}</style>');
    }
    if (Shopify.shop == "lloyds-liquid-sunshines.myshopify.com") {
        customSelector = $jq321(".paymentButtonsWrapper");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "waterlily-products.myshopify.com") {
        customSelector = $jq321(".product-single__add-to-cart");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "confozen-fr.myshopify.com") {
        customSelector = $jq321(".groups-btn");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "cengiz-akturk-shop.myshopify.com") {
        masterSelector = $jq321(".sharing");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "idealzoneofficiel.myshopify.com") {
        masterSelector = $jq321(".product-single__add-to-cart");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "yipth.myshopify.com") {
        masterSelector = $jq321("h6");
        finalSelector = masterSelector[0];

        $jq321("head").append('<style type="text/css">' +
            '.stock-top{margin-top: 18px; !important}' +
            '@media screen and (max-width: 575px) { .product-form-inline-atc > .product-form-inline-atc-button + .shopify-payment-button {margin-bottom: 25px;}}' +
            '</style>');
    }
    if (Shopify.shop == "athenawear-f7b8.myshopify.com") {
        masterSelector = $jq321(".pf-47_");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "aspiresportsfiji.myshopify.com") {
        console.log('Device');
        console.log(salespoplib_vars_obj.checkDevice);


        if (salespoplib_vars_obj.checkDevice == 'desktop') {
            $jq321("head").append('<style type="text/css">' +
                '#time-custom-center{display:flex; flex-direction:column; width:28%;}' +
                '.product-info-main .form-group:last-of-type{display:flex !important;}' +
                '#button-cart{height:49px;}' +
                '</style>');

            $jq321(".wishlist-btn").remove();

            var customdiv = '<div id="time-custom-center">' +
                '<button class="btn-wishlist button wishlist-btn" data-product-handle="tonga-vest" type="button" data-toggle="tooltip" title="" data-original-title="Add to Wish List">' +
                '<span>Add to Wish List</span>' +
                '</button>' +
                '</div>';

            $jq321(customdiv).insertAfter("#button-cart");
        }
        else if (salespoplib_vars_obj.checkDevice == 'mobile') {
            masterSelector = $jq321(".form-group");
            finalSelector = masterSelector[1];

            console.log(masterSelector);
        }
    }
    if (Shopify.shop == "the-beardstory.myshopify.com") {
        masterSelector = $jq321(".offerssection");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "medici-supply-co.myshopify.com") {
        masterSelector = $jq321(".add-to-cart");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "smartbusiness-pe.myshopify.com") {
        masterSelector = $jq321(".qty-add-cart");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "thuyn.myshopify.com") {
        masterSelector = $jq321(".proReviews");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "fligflag.myshopify.com") {
        masterSelector = $jq321(".ProductForm__AddToCart");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "trap-shoppp.myshopify.com") {
        $jq321("head").append('<style type="text/css">' +
            '.cart-countdown-desktop-top-center {display: flex !important;}' +
            '</style>');
    }
    if (Shopify.shop == "redpointgadgets-com.myshopify.com") {
        masterSelector = $jq321(".sales-points");
        finalSelector = masterSelector[1];

        console.log(finalSelector);
    }
    if (Shopify.shop == "itrendy-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">' +
            '.cart-countdown-desktop-top-center {text-align: center !important;}' +
            '</style>');
    }
    if (Shopify.shop == "eneamaze.myshopify.com") {
        masterSelector = $jq321(".product-form__buttons");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "sensible-success.myshopify.com") {
        setTimeout(function () {
            masterSelector = $jq321(".visitor-counter-content-box-carecartbysalespop-2020");
            finalSelector = masterSelector[0];

            console.log(finalSelector);
        }, 3000);
    }
    if (Shopify.shop == "nac89.myshopify.com") {
        $jq321("head").append('<style type="text/css">' +
            '.stock-message-font-weight-inherit {font-weight: lighter !important;}' +
            '</style>');
    }
    if (Shopify.shop == "canvasart-dev.myshopify.com") {
        $jq321("head").append('<style type="text/css">' +
            '.stock-top {margin-top: 14px !important;}' +
            '</style>');

        masterSelector = $jq321("strong");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "polyrt.myshopify.com") {
        $jq321("head").append('<style type="text/css">' +
            '.cart-countdown-desktop-top-center {width: 100%;}' +
            '</style>');

        masterSelector = $jq321(".product__policies");
        finalSelector = masterSelector[0];

        console.log(masterSelector);
    }
    if (Shopify.shop == "jaxoli.myshopify.com") {
        masterSelector = $jq321(".product__tax");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "mysns.myshopify.com") {
        masterSelector = $jq321(".product-single__vendor");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "e1fa5f.myshopify.com") {
        masterSelector = $jq321(".product-form__buttons");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }

    if (Shopify.shop == "b2b-sequenze.myshopify.com") {

        $jq321("head").append('<style type="text/css">' +
            '.content-summary .stock-top{width:50%; flex: 0 0 auto;}@media only screen and (max-width: 575px){.content-summary .stock-top{width:100%;}' +
            '</style>');

        masterSelector1 = $jq321(".selector-wrapper");
        finalSelector1 = masterSelector1[0];

        //console.log(finalSelector1);
    }
    if (Shopify.shop == "kitchen-store-7156.myshopify.com") {
        masterSelector = $jq321(".js.product-form__input");
        finalSelector = masterSelector[0];

        console.log(finalSelector);
    }
    if (Shopify.shop == "vibewear-1041.myshopify.com") {
        $jq321("head").append('<style type="text/css">' +
            '.stock-style{display:none !important;}' +
            '</style>');
    }
    if (Shopify.shop == "adoresfashions.myshopify.com") {
        masterSelector = $jq321(".product-form__buttons");
        finalSelector = masterSelector[0];
        console.log(finalSelector);
    }
    if (Shopify.shop == "marblacks-adm.myshopify.com") {
        masterSelector = $jq321(".product-form__input.product-form__quantity");
        finalSelector = masterSelector[0];
    }
    if (Shopify.shop == "my-inexa.myshopify.com") {
        $jq321("head").append('<style type="text/css">.stock-progress-background{display:none !important;}</style>');
    }
    if (Shopify.shop == "sasta-bazzar-5778.myshopify.com") {
        masterSelector = $jq321(".pvGroup-row");
        finalSelector = masterSelector[0];
        $jq321("head").append('<style type="text/css">.stock-top{padding-left: 0px !important;}.productView-moreItem{padding-bottom:12px !important;}</style>');
    }
    if (Shopify.shop == "aftershock-limited.myshopify.com") {
        masterSelector = $jq321("options-selection");
        finalSelector = masterSelector[0];
        // $jq321("head").append('<style type="text/css">.stock-top{padding-left: 0px !important;}.productView-moreItem{padding-bottom:12px !important;}</style>');
    }
    if (Shopify.shop == "poppy-care.myshopify.com") {
        masterSelector = $jq321(".current-price");
        finalSelector = masterSelector[0];
        $jq321("head").append('<style type="text/css">.stock-top{padding-left: 0px !important;}</style>');
    }
    if (Shopify.shop == "house-of-veins.myshopify.com") {
        $jq321("head").append('<style type="text/css">' +
            '.cart-countdown-desktop-top-center {text-align: center !important;}' +
            '</style>');
    }

    if (Shopify.shop == "treschic-apparel.myshopify.com") {
        masterSelector = $jq321(".option-background");
        finalSelector = masterSelector[0];
        $jq321("head").append('<style type="text/css">' +
            '.fade {opacity: 1.0 !important;}' +
            '.cart-countdown-desktop-top-center {text-align: center !important;}' +
            '</style>');
    }
    if (Shopify.shop == "966b17.myshopify.com") {
        customSelector = $jq321(".product-block--price");
        finalSelector = customSelector[0];
        console.log(finalSelector);
    }
    if (Shopify.shop == "volff2023.myshopify.com") {
        customSelector = $jq321(".submit.submit-trigger");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "modibags.myshopify.com") {
        customSelector = $jq321(".add-to-cart");
        finalSelector = customSelector[0];
        $jq321("head").append('<style type="text/css">.stock-message-left{margin-top: 12px !important;}</style>');
    }
    if (Shopify.shop == "venty-2092.myshopify.com") {
        $jq321("head").append('<style type="text/css">.stock-progress-background {display: none !important;}</style>');
    }
    if (Shopify.shop == "blysse-6691.myshopify.com") {
        customSelector = $jq321(".addCart");
        finalSelector = customSelector[0];
        $jq321("head").append('<style type="text/css">.stock-progress-foreground {width: 80% !important;}</style>');
    }
    if (Shopify.shop == "leather-moccasins.myshopify.com") {
        customSelector = $jq321(".product__add-inner-container");
        finalSelector = customSelector[0];
        $jq321("head").append('<style type="text/css">' +
            '.stock-message{font-size:16px !important; margin-bottom: 12px !important;}' +
            '</style>');
    }
    if (Shopify.shop == "scribblers-calligraphy.myshopify.com") {
        $jq321("head").append('<style type="text/css">.stock-message{font-size:14px !important; margin-top:12px !important;}</style>');
    }
    if (Shopify.shop == "alchemydeals.myshopify.com") {
        customSelector = $jq321(".product_button");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "shopdenoa.myshopify.com") {
        customSelector = $jq321(".variant-picker__option-values");
        finalSelector = customSelector[0];
        $jq321("head").append('<style type="text/css">.stock-message{font-size:14px !important; margin-top:12px !important;}</style>');
    }
    if (Shopify.shop == "vip-heal.myshopify.com") {
        customSelector = $jq321(".product-form");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "773509.myshopify.com") {
        customSelector = $jq321(".new-form-atc.addCart");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "ippoeasytech.myshopify.com") {
        customSelector = $jq321(".sc-cTAqQK");
        finalSelector = customSelector[1];
    }
    if (Shopify.shop == "sole-premise.myshopify.com") {
        customSelector = $jq321(".product-info__buy-buttons");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "d-custom-by-darla.myshopify.com") {
        customSelector = $jq321(".product-form__buttons");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "gamingsjappa.myshopify.com") {
        customSelector = $jq321(".product-form--atc");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "bigmarket-2806.myshopify.com") {
        customSelector = $jq321(".product-form__buttons");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "lesmiraculeux.myshopify.com") {
        if (window.innerWidth <= 574) {
            $jq321("head").append('<style type="text/css">@media only screen and (max-width:574px) { customSelector { } }</style>');
            customSelector = $jq321("#purchase.shopify-payment-button");
            finalSelector = customSelector[1];
        } else {
            customSelector = $jq321("#bottomBarPriceCMM-wrapper");
            finalSelector = customSelector[0];
        }
    }
    if (Shopify.shop == "a-loja-nova.myshopify.com") {
            if(window.location.href.indexOf('barrominas') != -1 )
            {
                customSelector = $jq321(".product-form__submit");
                finalSelector = customSelector[0];
            }
            else{
                $jq321("head").append('<style type="text/css">.stock-top{display:none !important;}</style>');
            }  
    }
    if (Shopify.shop == "american-uncle-alpha.myshopify.com") {
        if(window.location.href == "https://www.americanuncle.it/products/candyverse-candy-box-limited-edition-da-comporre-con-i-tuoi-gusti-preferiti")
        {
            customSelector = $jq321(".product-block--quantity-and-buy-buttons");
            finalSelector = customSelector[0];
        }
        else{
            $jq321("head").append('<style type="text/css">.stock-top{display:none !important;}</style>');
        }  
    }
    if (Shopify.shop == "9491ca.myshopify.com") {
        customSelector = $jq321("#AddToCart");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "keepitsimplehiten.myshopify.com") {
        customSelector = $jq321(".product-form__buttons");
        finalSelector = customSelector[0];
    }

    if (Shopify.shop == "house-heaven-99.myshopify.com") {
        customSelector = $jq321(".visitor_counter");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "prestige-7530.myshopify.com") {
        $jq321("head").append('<style type="text/css">.stock-top{ margin-top:20px !important; margin-bpttom:20px !important; }</style>');
        customSelector = $jq321(".armament-quantity-selector");
        finalSelector = customSelector[1];
    }
    
    if (Shopify.shop == "cbf970-2.myshopify.com") {
    customSelector = $jq321(".ecom-product-single__add-to-cart-buttons-wrapper");
    finalSelector = customSelector[0];
    }
    if (Shopify.shop == "theluckybrands.myshopify.com") {
    customSelector = $jq321(".total-price");
    finalSelector = customSelector[0];
   }
    if (Shopify.shop == "private-8361.myshopify.com") {
    customSelector = $jq321(".product__title");
    finalSelector = customSelector[0];
   }

    if (Shopify.shop == "neneschicks.myshopify.com") {
    customSelector = $jq321(".product__submit__buttons");
    finalSelector = customSelector[0];
    }
    if (Shopify.shop == "shopper-bridge.myshopify.com") {
    $jq321("head").append('<style type="text/css">.stock-top{ margin-top:15px !important; margin-bottom:25px !important; }</style>');
    customSelector = $jq321(".product-single__policies");
    finalSelector = customSelector[0];
    }
    if (Shopify.shop == "3neyecare.myshopify.com") {
        customSelector = $jq321(".sc-bXdNzS");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "1f6647.myshopify.com") {
        $jq321("head").append('<style type="text/css">.stock-progress-background {width: 50% !important;}</style>');
        customSelector = $jq321(".ymq-box");
        finalSelector = customSelector[0];
    }

     if (Shopify.shop == "gipfelstuermer-store-de.myshopify.com") {
        customSelector = $jq321(".add-to-cart");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "ea8927.myshopify.com") {
        $jq321("head").append('<style type="text/css">.stock-top{margin-top:22px;}</style>');
    }
    
    function stockCountdown(response) {

        var selectorStock0 = $jq321("form[action='/cart/add']").find(".product__submit__buttons").parent();
        var selectorStock1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorStock2 = $jq321("form[action='/cart/add']");
        var selectorStock3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']").parent();
        var selectorStock4 = $jq321("form[action='/cart/add']:first");
        var selectorStock5 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorStock6 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']");

        if (response.above_cart == 1) {
            if (masterSelector.length > 0) {
                $jq321(response.view).insertBefore(finalSelector);
            }
            else if (selectorStock0.length == 1) {
                selectorStock0.prepend(response.view);
            }
            else if (customSelector.length > 0) {
                $jq321(response.view).insertBefore(finalSelector);
            }
            else if (selectorStock1.length == 1) {
                selectorStock1.prepend(response.view);
            }
            else if (selectorStock2.length == 1) {
                selectorStock2.prepend(response.view);
            }
            else if (selectorStock3.length == 1) {
                $jq321(response.view).insertBefore(selectorStock3);
            }
            else if (selectorStock4.length == 1) {
                selectorStock4.prepend(response.view);
            }
            else if (selectorStock5.length == 1) {
                $jq321(response.view).insertBefore(selectorStock5);
            }
            else if (selectorStock6.length == 1) {
                selectorStock6.prepend(response.view);
            }
        }
        else {
            if (masterSelector.length > 0) {
                $jq321(response.view).insertAfter(finalSelector);
            }
            else if (masterSelector.length > 0) {
                $jq321(response.view).insertAfter(finalSelector);
            }
            else if (selectorStock0.length == 1) {
                selectorStock0.append(response.view);
            }
            else if (customSelector.length > 0) {
                $jq321(response.view).insertAfter(finalSelector);
            }
            else if (selectorStock1.length == 1) {
                selectorStock1.append(response.view);
            }
            else if (selectorStock2.length == 1) {
                selectorStock2.append(response.view);
            }
            else if (selectorStock3.length == 1) {
                $jq321(response.view).insertAfter(selectorStock3);
            }
            else if (selectorStock4.length == 1) {
                selectorStock4.append(response.view);
            }
            else if (selectorStock5.length == 1) {
                $jq321(response.view).insertAfter(selectorStock5);
            }
            else if (selectorStock6.length == 1) {
                selectorStock6.append(response.view);
            }
        }
    }



    // ---------------------------------- <TIME MODULE> -----------------------------------------

    // CREATE LIVE TIME COUNTDOWN
    function timeCountdown(t) {
        var selectorTimer1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorTimer2 = $jq321("form[action='/cart/add']");
        var selectorTimer3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']").parent();
        var selectorTimer4 = $jq321("form[action='/cart/add']:first");
        var selectorTimer5 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorTimer6 = $jq321("#shopify-section-product-template").find("form[action='/cart/add']");


    if (Shopify.shop == "f8c697.myshopify.com") {
        if(window.location.href == "https://spankygarbage.store/products/factory-price-flame-humidifier-aroma-diffusers-machine-home-bedroom-silent-essential-oil-flame-aroma-diffuser")
        {
        customSelector = $jq321(".pf-46_");
        finalSelector = customSelector[0];
        }
    }
        
        if (Shopify.shop == "house-heaven-99.myshopify.com") {
            customSelector = $jq321(".stock-top");
            finalSelector = customSelector[0];
        }
        
        if (Shopify.shop == "vasttr.myshopify.com") {
           customSelector = $jq321(".product-form__submit");
            finalSelector = customSelector[0];
        }
        if (Shopify.shop == "firststore-5320.myshopify.com") {
            $jq321("head").append('<style type="text/css">.timer-store-front {margin-left: 70px !important;}</style>');
            customSelector = $jq321("#AddToCartForm");
            finalSelector = customSelector[0];
        }
        if (Shopify.shop == "7ec395.myshopify.com") {
            customSelector = $jq321(".f8pr-product-form-installment");
                    finalSelector = customSelector[0];
        }
        if (Shopify.shop == "realdeal-istanbul.myshopify.com") {
            if(window.location.href == "https://joozal.com/products/weekly-offer-279014kgk" || window.location.href == "https://joozal.com/products/weekly-offer-279318cy" || window.location.href == "https://joozal.com/products/279019e-deal" )
                {
                    customSelector = $jq321(".w100 .product-form__item--quantity");
                    finalSelector = customSelector[0];
                    console.log(customSelector);
                }
                else{
                    return false;
                }
            
        }
        if (Shopify.shop == "jembaly.myshopify.com") {
            customSelector = $jq321(".ProductMeta__Text");
            finalSelector = customSelector[0];
            console.log(customSelector);
        }
        if (Shopify.shop == "8925df.myshopify.com") {
            customSelector = $jq321(".product-form__submit");
            finalSelector = customSelector[0];
        }

        if (Shopify.shop == "shop-perfection-9213.myshopify.com") {
            customSelector = $jq321(".product-form__submit");
            finalSelector = customSelector[0];
            console.log(customSelector);
        }
        if (Shopify.shop == "lunaeditions.myshopify.com") {
            // masterSelector = $jq321("button").attr('data-name','product-submit');
            // finalSelector = masterSelector[16];

            // console.log(finalSelector);
            customSelector = $jq321(".add-to-cart");
            finalSelector = customSelector[0];
            console.log(finalSelector);
        }

        if (Shopify.shop == "aspiresportsfiji.myshopify.com") {
            $jq321("#time-custom-center").append(t.view);
        }
        if (Shopify.shop == "house-of-veins.myshopify.com") {
            customSelector = $jq321(".product-form__quantity-submit");
            finalSelector = customSelector[0];
            console.log(finalSelector);
        }
        if (Shopify.shop == "musso-ph.myshopify.com") {
            customSelector = $jq321("#option-box-ymq-variant-2");
            finalSelector = customSelector[0];
            console.log(finalSelector);
        }
        if (Shopify.shop == "curvasperfectas-9455.myshopify.com") {
            customSelector = $jq321(".product-popup-modal__opener");
            finalSelector = customSelector[0];
        }
        if (Shopify.shop == "4c3264.myshopify.com") {
            customSelector = $jq321(".atc-button");
            finalSelector = customSelector[0];
        }

        if (t.above_cart == 1) {
            if (masterSelector.length > 0) {
                $jq321(t.view).insertBefore(finalSelector);
            }
            else if (customSelector.length > 0) {
                $jq321(t.view).insertBefore(finalSelector);
            }
            else if (selectorTimer1.length == 1) {
                selectorTimer1.prepend(t.view);
            }
            else if (selectorTimer2.length == 1) {
                selectorTimer2.prepend(t.view);
            }
            else if (selectorTimer3.length == 1) {
                $jq321(t.view).insertBefore(selectorTimer3);
            }
            else if (selectorTimer4.length == 1) {
                selectorTimer4.prepend(t.view);
            }
            else if (selectorTimer5.length == 1) {
                $jq321(t.view).insertBefore(selectorTimer5);
            }
            else if (selectorTimer6.length == 1) {
                selectorTimer6.prepend(t.view);
            }
        }
        else {
            if (masterSelector.length > 0) {
                $jq321(t.view).insertAfter(finalSelector);
            }
            else if (customSelector.length > 0) {
                $jq321(t.view).insertAfter(finalSelector);
            }
            else if (selectorTimer1.length == 1) {
                selectorTimer1.append(t.view);
            }
            else if (selectorTimer2.length == 1) {
                selectorTimer2.append(t.view);
            }
            else if (selectorTimer3.length == 1) {
                $jq321(t.view).insertAfter(selectorTimer3);
            }
            else if (selectorTimer4.length == 1) {
                selectorTimer4.append(t.view);
            }
            else if (selectorTimer5.length == 1) {
                $jq321(t.view).insertAfter(selectorTimer5);
            }
            else if (selectorTimer6.length == 1) {
                selectorTimer6.append(t.view);
            }
        }

        var deadline = t.time;
        initializeClock('clockdivpreview', deadline);
    }

    // timer function
    function getTimeRemaining(endtime) {
        var now = new Date;
        var utc_timestamp = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
            now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());


        /* New Hack for Safari */
        var s = endtime;
        var a = s.split(/[^0-9]/);
        var endtime = new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);

        /* END  New Hack for Safari */

        var t = endtime - utc_timestamp;

        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        //console.log("Value Check in Start "+ id + " === "+ endtime);
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        //console.log("All Var check " + JSON.parse(clock + " === "+ JSON.parse(daysSpan) + " "+ JSON.parse(hoursSpan));
        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.days == 0 && t.hours == 0 && t.minutes == 0 && t.seconds == 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    // ---------------------------------- </TIME MODULE> -----------------------------------------

    /**
     * Cart Countdown timer module
     */
    function cartCountdownTimer(response) {
        setInterval(function () {
            var cartContents = fetch('/cart.json', { method: 'GET' })
                .then(response => response.json())
                .then(data => {
                    let cartValue = data.items;

                    if (cartValue.length == 0) {
                        console.log("Cart is empty");
                        $jq321("#cc-sc-cart-timer-countdown-bar").remove();
                        window.localStorage.removeItem("carecart-scp-cart-timer-end-time");
                        window.localStorage.removeItem("carecart-scp-cart-timer-repeat");
                        window.localStorage.setItem("carecart-scp-cart-status", "empty");
                    }
                    else {
                        console.log("there is something in the cart");
                        window.localStorage.removeItem("carecart-scp-cart-status");
                        appendCartTimerBar(response);
                    }
                });
        }, 3000);
    }

    function getTimeRemainingCartCountdown(endtime) {
        let currentTime = Date.parse(new Date());
        let t = endtime - currentTime;
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let seconds = Math.floor((t / 1000) % 60);

        window.localStorage.setItem("craecart-scp-cart-timer-minutes", minutes);
        window.localStorage.setItem("craecart-scp-cart-timer-seconds", seconds);

        return {
            'total': t,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClockCartCountdown(endtime = 15, settings) {
        let ccCartCountdownTimerDiv = document.getElementById("cc-stock-cart-timer-section");

        function updateClock() {
            let cartCountdownTimeRemaining = getTimeRemainingCartCountdown(endtime);
            let timerHTML = '<span>' + ('0' + cartCountdownTimeRemaining.minutes).slice(-2) + ' : ' + ('0' + cartCountdownTimeRemaining.seconds).slice(-2) + '</span>';

            $jq321(ccCartCountdownTimerDiv).html(timerHTML);

            if (cartCountdownTimeRemaining.total <= 0) {
                if (settings.barAction == "empty") {
                    fetch('/cart/clear.json', { method: 'GET' }).then(response => response.json()).then(data => { window.location.reload(); });
                    clearInterval(timeintervalCartTimer);
                }
                else if (settings.barAction == "nothing") {
                    $jq321("#cc-sc-cart-timer-countdown-bar").remove();
                    window.localStorage.setItem("craecart-scp-cart-timer-bar-status", "nothing");
                    clearInterval(timeintervalCartTimer);
                }
                else if (settings.barAction == "repeat") {
                    $jq321("#cc-sc-cart-timer-countdown-bar").remove();
                    window.localStorage.setItem("craecart-scp-cart-timer-minutes", parseInt(settings.totalMinutes));
                    window.localStorage.setItem("craecart-scp-cart-timer-seconds", parseInt(settings.totalSeconds));
                    window.localStorage.setItem("carecart-scp-cart-timer-repeat", "yes");
                    clearInterval(timeintervalCartTimer);
                    appendCartTimerBar(settings, true);
                }
            }
        }

        updateClock();

        var timeintervalCartTimer = setInterval(updateClock, 1000);
    }

    function calculateCartCountDownTime(totalMinutes, totalSeconds) {
        let totalTimeToBeAdd = parseInt(totalMinutes) * 60 * 1000 + parseInt(totalSeconds) * 1000;
        return endtime = new Date(Date.parse(new Date()) + totalTimeToBeAdd).getTime();
    }

    function appendCartTimerBar(response, status = false) {
        let cartCountdownTimeStampRepeat = window.localStorage.getItem("carecart-scp-cart-timer-repeat");

        if (cartCountdownTimeStampRepeat === "yes" && status) {
            cartCountdownTimeStampRepeat = calculateCartCountDownTime(response.totalMinutes, response.totalSeconds);
            window.localStorage.setItem("carecart-scp-cart-timer-end-time", cartCountdownTimeStampRepeat);
        }

        let cartCountdownEndTimeStamp = window.localStorage.getItem("carecart-scp-cart-timer-end-time");

        if (cartCountdownEndTimeStamp === null) {
            cartCountdownEndTimeStamp = calculateCartCountDownTime(response.totalMinutes, response.totalSeconds);
            window.localStorage.setItem("carecart-scp-cart-timer-end-time", cartCountdownEndTimeStamp);
        }

        /**
         * Check first if bar already there
         */
        let cartStatus = window.localStorage.getItem("carecart-scp-cart-status");
        let barID = $jq321("#cc-sc-cart-timer-countdown-bar");

        if (barID.length == 0) {
            let barStatus = window.localStorage.getItem("craecart-scp-cart-timer-bar-status");

            if (barStatus !== "nothing") {
                /**
                * Let make selector
                */

                let firstSelector;
                 if (Shopify.shop == "pura-health11.myshopify.com") {
                    firstSelector = $jq321("#CartDrawer-Form");
                }
                 if (Shopify.shop == "awol-vision.myshopify.com") {
                    $jq321("head").append('<style type="text/css">.cart-countdown-desktop-top-center { margin-bottom: 45px !important; margin-top: -45px !important; }</style>');
                }

                if (Shopify.shop == "05a42e-2.myshopify.com") {
                    $jq321("head").append('<style type="text/css">.cart-countdown-desktop-top-center{margin-bottom: -45px!important; margin-top: 50px!important;} .cc-stock-pro-message {margin-left: 130px !important;}</style>');
                    firstSelector = $jq321(".drawer__fixed-header");
                }

                if (Shopify.shop == "4c3264.myshopify.com") {
                    firstSelector = $jq321("#MainContent");
                } else {
                    firstSelector = $jq321("form[action='/cart']").parent();
                }
                if (Shopify.shop == "powerup-gummies.myshopify.com") {
                    firstSelector = $jq321("form[action='/cart']").parent();
                }
                if (Shopify.shop == "ayaperfumesporassinatura.myshopify.com") {
                        $jq321("head").append('<style type="text/css">.cart-countdown-desktop-top-center{ margin-left: 85px !important; margin-bottom: 10px!important; margin-top: -30px!important;}</style>');
                        firstSelector = $jq321(".cart-drawer__form");
                }
                if (Shopify.shop == "simplisuits.myshopify.com") {
                    $jq321("head").append('<style type="text/css">#cc-sc-cart-timer-countdown-bar{margin:10px !important;}</style>');
                    firstSelector = $jq321("form[action='/cart']").parent();
                }
                if (Shopify.shop == "beautyxlnc.myshopify.com") {
                    $jq321("head").append('<style type="text/css">.cart-countdown-desktop-top-center {    margin-bottom: -60px !important; }</style>');
                    firstSelector = $jq321(".section-template--19674599751959__cart-items-padding");
                }
                if (Shopify.shop == "firststore-5320.myshopify.com") {
                    $jq321("head").append('<style type="text/css">.cc-stock-pro-message {margin-left: 400px !important;}</style>');
                }
                console.log(firstSelector);
                if (response.barPosition == "top" && cartStatus === null) {
                    if (firstSelector.length > 0) {

                        console.log(response.view);
                        $jq321(firstSelector[0]).prepend(response.view);
                        //$jq321(firstSelector[1]).prepend(response.view); 
                        //$jq321(".title-wrapper-with-link").prepend(response.view);
                    }
                }
                else {
                    if (firstSelector.length > 0 && cartStatus === null) {
                        $jq321(firstSelector[0]).append(response.view);
                        //$jq321(firstSelector[1]).append(response.view);
                        //$jq321(".title-wrapper-with-link").append(response.view);

                    }
                }

                initializeClockCartCountdown(cartCountdownEndTimeStamp, response);
            }
        }
    }
    /**
    * Cart countdown timer ends here
    */

});
