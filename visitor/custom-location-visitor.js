/**
 * @package Sales Pop up â€‘ Social Proof
 * @author CareCart
 * @link https://apps.shopify.com/partners/care-cart
 * @link https://carecart.io/
 * @version 10.97
 *
 * Any unauthorized use and distribution of this and related files, is strictly forbidden.
 * In case of any inquiries, please contact here: https://carecart.io/contact-us/
 */

//Create the element using the createElement method.
var myDiv = document.createElement("ji");

//Set its class.
myDiv.className = 'doubleCheck';

//Finally, append the element to the HTML body
document.body.appendChild(myDiv);

var doubleCheck = document.getElementsByClassName("doubleCheck");
var ndoubleCheck = doubleCheck.length;
if (ndoubleCheck == 2) {
    //window.stop();
    throw new Error("DOUBLE APP JS");
}

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
            if (script.src && script.src.indexOf('lib/visitorcounter') !== -1) {
                thisLibUrl = script.src;
            }
        });

        // return with production URLs
        if (thisLibUrl === "") {
            return {
                "backend": "https://app-visitor-counter.carecart.io/FrontController/",
                "cssVisitor": "https://app-visitor-counter.carecart.io/lib/visitor-box.css"
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
            "cssVisitor": "https://" + tempAnchorTag.hostname + "/lib/visitor-box.css?v" + version
        };
    }

    var serverUrl = getServerUrls();

    // @todo cleanup unused extra properties
    var salespoplib_vars_obj = {
        backend_url: serverUrl.backend
    };

    window.checkmodule_visitor = function (response) {

        apiResponse = response;

        // VISITOR COUNTER CALL
        if (apiResponse && apiResponse.visitor && apiResponse.visitor !== null) {
            if (Shopify.shop == "naturalhealthmx.myshopify.com") {
                var block_url = window.location.pathname.split("/");

                if (block_url[1] == 'collections') {
                    console.log('Block visitor counter on collection pages');
                    return;
                }
            } 
            if (Shopify.shop == "720419.myshopify.com") {
                var block_url = window.location.pathname.split("/");

                if (block_url[1] == 'collections') {
                    console.log('Block visitor counter on collection pages');
                    return;
                }
            }    
            if (Shopify.shop == "spakopen.myshopify.com") {
                var block_url = window.location.pathname.split("/");

                if (block_url[1] == 'collections') {
                    console.log('Block visitor counter on collection pages');
                    return;
                }
            }
            if (Shopify.shop == "saintmuze2.myshopify.com") {
                var block_url = window.location.pathname.split("/");

                if (block_url[1] == 'collections') {
                    console.log('Block visitor counter on collection pages');
                    return;
                }
            }
            if (Shopify.shop == "shejuvirtual.myshopify.com") {
                var block_url = window.location.pathname.split("/");

                if (block_url[1] == 'collections') {
                    console.log('Block visitor counter on collection pages');
                    return;
                }
            }
            if (Shopify.shop == "well-squared.myshopify.com") {
                var block_url = window.location.pathname.split("/");

                if (block_url[1] == 'collections') {
                    console.log('Block visitor counter on collection pages');
                    return;
                }
            }
             if (Shopify.shop == "836e9c-2.myshopify.com") {
                var block_url = window.location.pathname.split("/");

                if (block_url[1] == 'collections') {
                    return;
                }
            }

            $jq321(".visitor-counter-content-box-carecartbysalespop-2020").remove();

            $jq321("head").append($jq321("<link/>", {
                rel: "stylesheet",
                href: serverUrl.cssVisitor + "?v" + version
            }));

            if (Shopify.shop == "juliteste.myshopify.com") {
                setTimeout(function () { visitorCounter(apiResponse.visitor) }, 3000);
            }
            else if (Shopify.shop == "962b9f.myshopify.com") {
                setTimeout(function () { visitorCounter(apiResponse.visitor) }, 1000);
            }
            else if (Shopify.shop == "shopcindel-com.myshopify.com") {
                setTimeout(function () { visitorCounter(apiResponse.visitor) }, 1000);
            }
            else if (Shopify.shop == "1ce7f6-2.myshopify.com") {
                setTimeout(function () { visitorCounter(apiResponse.visitor) }, 10000);
            }
            else if (Shopify.shop == "the-bob-store-india.myshopify.com") {
                setTimeout(function () { visitorCounter(apiResponse.visitor) }, 2000);
            }
            else {
                visitorCounter(apiResponse.visitor);
            }
        }
    };

    if (Shopify.shop == "nefertum-scent.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }

    if (Shopify.shop == "nomardic-de.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }

    if (Shopify.shop == "nomardic-nl.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }

    if (Shopify.shop == "nelsondesign.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }

    if (Shopify.shop == "mullerdesign.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }

    if (Shopify.shop == "stuf-products.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }

    if (Shopify.shop == "juliteste.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }

    if (Shopify.shop == "tsm-aquatics.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }

    if (Shopify.shop == "mysweetsmileco.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }

    if (Shopify.shop == "robinsonssingapore.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "de-fb.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "newnorway.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "roy-groote.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "swe-1.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "megawheels-com.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "colombiahit.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "ommerce-6653.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "anycar-seatcovers.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "awatchstrap.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "bybaanoo.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "watchis01.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "shoesaaa.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "bruzix.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "street-strider.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "orianne-berlin.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "usesthetics.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "deluri.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "vintagetrainers.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "pimuraempire.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "vintageheavensgate1.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "medici-supply-co.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "wrywryshop.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "amamibijoux.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "metaphysicalonlineshop.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "combadepalo.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "la-porta-dei-sapori.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "nlmilamaya.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "wearecrewd.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }

    if (Shopify.shop == "ohmepretty.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "vitapur-stage-store.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "vitapur-romania.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "vitapur-sk.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "spruce-plant-shop.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "spakopen.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "norwegian-biolabs.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "zhouweiwei0502.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "nomardic-com.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "wearecrewd.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        console.log((meta.product && meta.product.id) ? meta.product.id : '');
    }
    if (Shopify.shop == "shopcindel-com.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "velvet-toni.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "lendthetrendmx.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "anxiety-rings-australia.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "byboop.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "click-pvc.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };

        //console.log((meta.product && meta.product.id)?meta.product.id:'');
    }
    if (Shopify.shop == "saintmuze2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "aee2a8.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "wallashop-tienda.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "buytrendshop-8454.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "vikinx-dk.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "wavelengthsurfmag.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "discover-treluxe.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "watchcraze-com-au.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "jake-store-us-9.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "dineshflourmills.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "valkyria-oficial.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "dynacup.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "commonfurnitureproject-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "bfab1c.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "alistansia.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "gijs-8189.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "lightuplooks.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "naturessource42.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "shejuvirtual.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "griihamhome.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "shopkouneli.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "maxteethwhitening.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "glx-footwear.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "early-reveal.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "delozashop.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "8d56ce.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "detectify-7520.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "kjhg-2520.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "shop-radiocommande-com.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "6df508.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "nunea.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "the-ring-collective.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "stone-shop-hanalei.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "pibelli-1074.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "sole-premise.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "komallu-shop-6135.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "6c2c1f.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "entire-schmuck.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "890be5.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "962b9f.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "casualmode-store.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "luxiebeam.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "sorrynotsorryclothing.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "66f5a0.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "ekanashop.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "theskshop-616.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "cavinkare1.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "iqon-collection.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "well-squared.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "b4accf-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "subimods-com.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "sangamfarmfresh-2852.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "720419.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "5914c6-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "justinsky.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    
 if (Shopify.shop == "6a42cb.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }

    if (Shopify.shop == "skinfoly.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     if (Shopify.shop == "bc617d-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "theteelovers.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     if (Shopify.shop == "thetinytree.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }

   if (Shopify.shop == "the-bob-store-india.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "c0c589-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     if (Shopify.shop == "bevinty.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "kbaksu-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "shisha-buzz-sa.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     if (Shopify.shop == "75105d-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "f91a13-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "saltytubco.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "pachamama-indoor-farming.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "a67d4a.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     if (Shopify.shop == "c3d8a4-3.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "ac2828-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "18c5e3.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
 if (Shopify.shop == "0bdbbc-4.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
 if (Shopify.shop == "836e9c-2.myshopify.com") {
    var meta = { "product": { "id": __st.rid } };
    }

    if (Shopify.shop == "b04a6e.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     if (Shopify.shop == "unclaimed-baggage.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "23219b-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "cmy-cubes.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "monolith-eu.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    
     if (Shopify.shop == "screenmoove.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "8e002b-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "oscarwellness.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
     if (Shopify.shop == "bafang-motor-store.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "815b06-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }

     if (Shopify.shop == "70b303-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "revival-shop-store.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "ae454c.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "838616-4.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "testtesttest23w34234.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "three-sixty-six.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "54646b-3.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "the-style-trader-co.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if(Shopify.shop == "thrift-6063.myshopify.com"){
        var meta = { "product": { "id": __st.rid } };
    }
     if (Shopify.shop == "74ef4c-3.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "3ca44e.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "zephyr-9848.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "caf6fd-3.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "giusy-vi-lab.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "3bfd08.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "c2f8ac-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "homethings-staging.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "sqobs.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "flamingo-estate-organics.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "05a28d-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "xclusivo-5590.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "a34303-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "380f44.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "9b02c0.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "ab1c94-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "9a0154-3.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "1ce7f6-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "zuerafashion.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "0769d2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "7ba0b2-2.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "grozavushop.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "2ad4e6-4.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "b5e750-10.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "55685d-e7.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "identitadonna.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "tumatera-co.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "wfpw25-xf.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    if (Shopify.shop == "5gwsqj-9w.myshopify.com") {
        var meta = { "product": { "id": __st.rid } };
    }
    else{
        var meta = { "product": { "id": __st.rid } };
    }
    
    $jq321.ajax({
        type: "GET",
        url: salespoplib_vars_obj.backend_url + 'checkStore/',
        dataType: "jsonp",
        jsonpCallback: "checkmodule_visitor",
        crossDomain: true,
        data: {
            "domain_url": Shopify.shop,
            "product_id": (meta.product && meta.product.id) ? meta.product.id : ''
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


    // ---------------------------------- <VISITOR COUNTER MODULE> --------------------------------
    /* Custom script goes from here */
    let customSelctor = "";
    let finalSelector = "";

    if (Shopify.shop == "w0ecbx-4v.myshopify.com") {
        customSelctor = $jq321(".g9M5_PkGCg");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "325870-ec.myshopify.com") {
        $jq321("head").append('<style type="text/css">.d-md-flex {flex-wrap: wrap;} {.visitor-counter-content-box-carecartbysalespop-2020 { height: 50px !important;  margin-top: -5px !important;}</style>');
        customSelctor = $jq321(".product-single__title");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "b9732c-f1.myshopify.com") {
        customSelctor = $jq321(".pmpr_bundle__add_to_cart");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "yoon-online.myshopify.com") {
        // Function to detect language based on URL
        const language = window.location.pathname.includes('/en') ? 'en' : 'it';
        if (language === 'en') {
            $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { display: none !important;}</style>');
        } else {
            // Apply styles for Italian (small text, lowercase)
            $jq321("head").append(`
                <style type="text/css">
                    .visitor-counter-content-box-carecartbysalespop-2020,
                    .visitor-font-family-inherit,
                    .visitor-font-weight-inherit,
                    .light-font,
                    .counter-text-carecartbysalespop-2020 {
                        text-transform: lowercase !important;
                    }
                </style>
            `);
        }
        
        customSelctor = $jq321(".block-actions-wrapper");
        finalSelector = customSelctor[0];

        function translateText() {
            $jq321("body *").each(function () {
                let currentText = $jq321(this).html();

                if (language === 'it' && currentText.includes('people are currently browsing this site.')) {
                    $jq321(this).html(currentText.replace('people are currently browsing this site.', 'Visitatore(i) stanno attualmente guardando questo prodotto.'));
                }
            });
        }

        $jq321(function () {
            translateText(); // Initial translation

            // Observe DOM changes to detect new elements
            new MutationObserver(() => setTimeout(translateText, 50))
                .observe(document.body, { childList: true, subtree: true });
        });
    }
    if (Shopify.shop == "vfd7hh-xs.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 40px !important;  margin-top: -12px !important;}</style>');
        customSelctor = $jq321(".product__inventory");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "actonlinestore.myshopify.com") {
        // Function to detect language based on URL
        const language = window.location.pathname.includes('/en') ? 'en' : 'it';

        if (language === 'en') {
            $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { display: none !important;}</style>');
        } else {
            $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { margin-top: 0px !important; height: 30px !important;}</style>');
            $jq321("head").append('<style type="text/css">@media (max-width: 768px) { .counter-text-carecartbysalespop-2020 {margin-left: -5px; min-height: 80px !important;}}</style>');
        }
        
        customSelctor = $jq321(".block-actions-wrapper");
        finalSelector = customSelctor[0];

        function translateText() {
            $jq321("body *").each(function () {
                let currentText = $jq321(this).html();

                if (language === 'it' && currentText.includes('People are currently browsing this site.')) {
                    $jq321(this).html(currentText.replace('People are currently browsing this site.', 'Visitatore(i) stanno attualmente guardando questo prodotto.'));
                }
            });
        }

        $jq321(function () {
            translateText(); // Initial translation

            // Observe DOM changes to detect new elements
            new MutationObserver(() => setTimeout(translateText, 50))
                .observe(document.body, { childList: true, subtree: true });
        });
    }
    if (Shopify.shop == "golfpartner.myshopify.com") {
        customSelctor = $jq321(".product-block.product-block--sales-point");
        finalSelector = customSelctor[4];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -22px !important; margin-bottom: -44px !important}</style>');
    }
    if (Shopify.shop == "bodylab-ch-prod2.myshopify.com") {
        customSelctor = $jq321(".sold-out__container");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "aysey0-3e.myshopify.com") {
        customSelctor = $jq321(".price--show-badge");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 25px !important; margin-top: 5px !important;}</style>');
    }
    if (Shopify.shop == "5gwsqj-9w.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 50px !important; margin-top: -15px !important; margin-left: -5px !important;}</style>');
        customSelctor = $jq321(".product-form__error-message-wrapper");
        finalSelector = customSelctor[0];

        // Fix for translating widget store based
        $jq321(function() {
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace('people are currently browsing this site.', ' utilisateurs sont présent sur notre boutique');
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace('people are currently browsing this site.', ' utilisateurs sont présent sur notre boutique');
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "wfpw25-xf.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 42px !important; margin-top: 12px !important; margin-left: -5px !important;}</style>');
        customSelctor = $jq321(".block__bottomtitle__total");
        finalSelector = customSelctor[0];

        // Fix for translating widget store based
        $jq321(function() {
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace('people are currently browsing this site.', ' personer surfar just nu på Zenora.');
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace('people are currently browsing this site.', ' personer surfar just nu på Zenora.');
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "naduvistore.myshopify.com") {
        customSelctor = $jq321(".quantity_addToCart-wrap");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "cequvq-11.myshopify.com") {
        customSelctor = $jq321(".product-info__block.product-info__block--sm.product-inventory");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 20px !important; margin-top: -3px !important;}</style>');
    }
    if (Shopify.shop == "nutrifoodz-2.myshopify.com") {
        customSelctor = $jq321(".product-store-buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "2qg0n1-xr.myshopify.com") {
        customSelctor = $jq321(".tigren-title");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "iwant-pe.myshopify.com") {
        $jq321(function() {
            // Fix for translating widget store based
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace('people are currently browsing this site.', 'Actualmente hay personas navegando por este sitio.');
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace('people are currently browsing this site.', 'Actualmente hay personas navegando por este sitio.');
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "motel-a-miio-onlinestore.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {display: block !important;}</style>');
    }
    if (Shopify.shop == "a5602d-87.myshopify.com") {
        customSelctor = $jq321(".product-form__button--atc");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -10px !important; margin-bottom: -20px !important;}</style>');
    }
    if (Shopify.shop == "naduvi-dev.myshopify.com") {
        customSelctor = $jq321(".quantity_addToCart-wrap");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "gaya-astorina.myshopify.com") {
        $jq321(function() {
            // Fix for translating widget store based
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace('people are currently browsing this site.', 'Persone stanno guardando questo prodotto ora');
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace('people are currently browsing this site.', 'Persone stanno guardando questo prodotto ora');
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "dalgodao.myshopify.com") {
        // Append custom styles
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 58px !important; margin-top: 7px !important; margin-left: -5px !important;} .light-icon {color: #fb0202 !important;}</style>');
        customSelctor = $jq321(".btn--add-to-cart");
        finalSelector = customSelctor[0];

        // Fix for translating widget store based
        $jq321(function() {
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace('people are currently browsing this site.', ' Pessoas estão a ver este artigo.');
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace('people are currently browsing this site.', ' Pessoas estão a ver este artigo.');
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "5d8b91-c0.myshopify.com") {
        // Append custom styles
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 60px !important; margin-top: 5px! important;}</style>');
        customSelctor = $jq321(".price__sale");
        finalSelector = customSelctor[0];
    
        // Fix for translating widget store based
        $jq321(function() {
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace('people are currently browsing this site.', 'personas acaban de llegar a la pantalla de pago');
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });  
            
            // Replace text on initial load
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace('people are currently browsing this site.', 'personas acaban de llegar a la pantalla de pago');
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "naturalhealthmx.myshopify.com") {
        $jq321(function() {
            // Fix for translating widget store based
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace('people are currently browsing this site.', 'personas(s) están mirando ahora este producto.');
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace('people are currently browsing this site.', 'personas(s) están mirando ahora este producto.');
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "laura-testa.myshopify.com") {
        $jq321(function() {
            // Fix for translating widget store based
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace('people are currently browsing this site.', 'Persone stanno guardando questo prodotto ora');
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace('people are currently browsing this site.', 'Persone stanno guardando questo prodotto ora');
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "2b53d1-cf.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-bottom: -40px !important; margin-top: 0px !important;}</style>');
        customSelctor = $jq321(".js.product-form__input.bottom-space.js-product-option-form");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "riccardo-garzoli.myshopify.com") {
        $jq321(function() {
            // Fix for translating widget store based
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace('people are currently browsing this site.', 'Persone stanno guardando questo prodotto ora');
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace('people are currently browsing this site.', 'Persone stanno guardando questo prodotto ora');
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "variedades-karybello.myshopify.com") {
        customSelctor = $jq321(".shipping-checkpoints");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { letter-spacing: -0.5px; height: 35px !important; margin-top: -15px !important; } </style>');
    }
     if (Shopify.shop == "apoio-b6b2.myshopify.com") {
        $jq321(function() {
            // Fix for translating widget store based
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace('people are currently browsing this site.', 'Pessoas estão a ver este artigo');
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace('people are currently browsing this site.', 'Pessoas estão a ver este artigo');
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "6fd430-8d.myshopify.com") {
        $jq321(function() {
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                        var currentText = $jq321(this).html();
                        var newText = currentText.replace(
                            'people are currently browsing this site.', 
                            'Person&nbsp;hat&nbsp;es&nbsp;in&nbsp;den&nbsp;letzten&nbsp;Stunden&nbsp;in&nbsp;den&nbsp;Warenkorb&nbsp;gelegt'
                        );
                        $jq321(this).html(newText);
                    });
                });
            });
            observer.observe(document.body, { childList: true, subtree: true });
            $jq321("body").find("*:contains('people are currently browsing this site.')").each(function() {
                var currentText = $jq321(this).html();
                var newText = currentText.replace(
                    'people are currently browsing this site.', 
                    'Person&nbsp;hat&nbsp;es&nbsp;in&nbsp;den&nbsp;letzten&nbsp;Stunden&nbsp;in&nbsp;den&nbsp;Warenkorb&nbsp;gelegt'
                );
                $jq321(this).html(newText);
            });
        });
    }
    if (Shopify.shop == "dev2-gringa.myshopify.com") {
        customSelctor = $jq321(".variant-selector");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 10px !important; margin-top: 5px !important;}</style>');
    }
    if (Shopify.shop == "anna-furnitures.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-bottom: -22px !important; margin-top: -22px !important; margin-left: -5px;}</style>');
        customSelctor = $jq321(".product-form__payment-container");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "b1d118.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-bottom: -22px !important; margin-top: -22px !important; margin-left: -5px;}</style>');
        customSelctor = $jq321(".kaching-bundles__block-title");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "d2a6b0-4b.myshopify.com") {
        customSelctor = $jq321(".pf-41_");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 34px !important; margin-top: -15px !important;}</style>');
    }
    if (Shopify.shop == "daniella-lehavi-usa.myshopify.com") {
        customSelctor = $jq321(".btn--large.add-to-cart");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "naturalhealthmx.myshopify.com") {
        customSelctor = $jq321(".buy-buttons--multiple");
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 45px !important; margin-top: -30px !important;}</style>');
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "8f5634-d1.myshopify.com") {
        $jq321("head").append('<style type="text/css">.counter-text-carecartbysalespop-2020 {margin-left: 130px ; margin-top: 7px;}</style>');
    }
    if (Shopify.shop == "country-liberty-1.myshopify.com") {
        customSelctor = $jq321(".product__submit__buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "minnie-threads.myshopify.com") {
        customSelctor = $jq321(".t4s-d-flex.t4s-flex-wrap");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "maria-t-joyeria.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-left: -16px ;}</style>');
    }
    if (Shopify.shop == "108a02-e7.myshopify.com") {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "9d994b-c2.myshopify.com") {
        customSelctor = $jq321(".product-add-to-cart-container");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "intakrom.myshopify.com") {
        customSelctor = $jq321(".form-group");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 45px !important; }</style>');
    }
    if (Shopify.shop == "zobhalife.myshopify.com") {
        customSelctor = $jq321(".productView-group");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "26311d-3.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin: -5px ; white-space: nowrap; }</style>');
    }
    if (Shopify.shop == "6a8848-dd.myshopify.com") {
        customSelctor = $jq321("div.usp");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "664a58-ca.myshopify.com") {
        customSelctor = $jq321(".product-buy-buttons--primary");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -3px !important; height: 55px !important;}</style>');
    }
    if (Shopify.shop == "my-huevos-mx.myshopify.com") {
        customSelctor = $jq321(".product-form__buy-buttons");
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -3px !important; height: 40px !important;}</style>');
        finalSelector = customSelctor[0];
    }
    
    if (Shopify.shop == "3f459a-c9.myshopify.com") {
            customSelctor = $jq321(".product-form__buttons");
            finalSelector = customSelctor[0];
        }
    if (Shopify.shop == "tumatera-co.myshopify.com") {
        customSelctor = $jq321(".product-block--key_details");
        finalSelector = customSelctor[0];
    }
     if (Shopify.shop == "amanda-campisi.myshopify.com") {
        customSelctor = $jq321(".product-buy-buttons--primary");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "identitadonna.myshopify.com") {
        customSelctor = $jq321(".buy-buttons--multiple");
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -15px !important; height: 50px !important;}</style>');
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "shinplex.myshopify.com") {
        customSelctor = $jq321(".dbtfy-product-tabs.dbtfy-product-tabs--horizontal-buttons");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {width: 70% !important;} @media only screen and (max-width: 575px){ .visitor-counter-content-box-carecartbysalespop-2020 {width: 100% !important;}</style>');
    }
    
    if (Shopify.shop == "6a0f21-2.myshopify.com") {
        customSelctor = $jq321(".product_custom_liquid");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -8px !important; height: 60px !important;}</style>');
    }
    if (Shopify.shop == "55685d-e7.myshopify.com") {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "49279d-2.myshopify.com") {
        customSelctor = $jq321(".product-form__submit");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "b5e750-10.myshopify.com") {
        customSelctor = $jq321(".shopify-product-form");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "2ad4e6-4.myshopify.com") {
        customSelctor = $jq321(".product-buy-buttons--root");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -30px !important; height: 60px !important;}</style>');
    }
    if (Shopify.shop == "636125-3.myshopify.com") {
        customSelctor = $jq321(".product__text");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {width: 325px !important ;}</style>');
    }
    if (Shopify.shop == "59ece7-5.myshopify.com") {
        customSelctor = $jq321("button.add-to-cart");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "1e9ea6-c6.myshopify.com") {
        customSelctor = $jq321("button.sc-ksHpcM");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 55px !important; margin-top: -12px !important;}</style>');
    }
    if (Shopify.shop == "waterloo-bathrooms-store.myshopify.com") {
        customSelctor = $jq321(".product-form--atc");
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height : 35px !important; margin-top: 0px !important;}</style>');        
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "a6cefd-9b.myshopify.com") {
        customSelctor = $jq321(".addly_widget_interact_qbreaks");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height : 40px !important; margin-top: -10px !important;}</style>');
    }
    if (Shopify.shop == "d3cbe5-4.myshopify.com") {
        customSelctor = $jq321(".pdp-action-container");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "genetcollection.myshopify.com") {
        customSelctor = $jq321(".product__callouts-mini-items");
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height : 40px !important;}</style>');
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "wenamo.myshopify.com") {
        customSelctor = $jq321("div.usp");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "16f537-2b.myshopify.com") {
        customSelctor = $jq321(".product__tax");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height : 40px !important; margin-top: -10px !important;}</style>');
    }
    if (Shopify.shop == "quellabicycle.myshopify.com") {
        customSelctor = $jq321(".product__media-list");
        finalSelector = customSelctor[0];
    }
     if (Shopify.shop == "e2da57-b9.myshopify.com") {
        customSelctor = $jq321(".pf-31_");
        finalSelector = customSelctor[0];
    }
     if (Shopify.shop == "49083e-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 30px !important;}</style>');
    }

     if (Shopify.shop == "mary-smith-jewelry.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {display: block !important;}</style>');
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "782e80-2.myshopify.com") {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {display: block !important;}</style>');
    }
    if (Shopify.shop == "oceansalivehealth.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: 0px !important; margin-bottom: -25px !important;}</style>');
        customSelctor = $jq321(".product__price");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "5771fe.myshopify.com") {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "7789cf-71.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 0px !important; min-height: 30px !important;}</style>');
    }
    if (Shopify.shop == "f7f643-79.myshopify.com") {
        customSelctor = $jq321(".pf-lh");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "demo-magaza-demo.myshopify.com") {
        customSelctor = $jq321(".pf-23_");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "844480-4.myshopify.com") {
        customSelctor = $jq321(".product-block--header");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "8a2893.myshopify.com") {
        customSelctor = $jq321(".product-form__submit");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "myexportleftovers.myshopify.com") {
        customSelctor = $jq321(".product__sku");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { padding-top: 14px !important;  margin: 2px 0px !important;}</style>');
    }
    if (Shopify.shop == "8fe2cf-4.myshopify.com") {
        customSelctor = $jq321(".sc-gIDmLj");
        finalSelector = customSelctor[0];
    }
  if (Shopify.shop == "797e89-5.myshopify.com") {
        customSelctor = $jq321(".product-info__block-group.feature-badge-list");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height:10px !important;}.counter-text-carecartbysalespop-2020{min-height:20px !important;}.feature-badge-list{margin-bottom:-12px !important;}' +
        '@media only screen and (max-width: 768px) {.visitor-counter-content-box-carecartbysalespop-2020{margin: auto;}} </style>' );
    }
    if (Shopify.shop == "alive-and-kicking-store.myshopify.com") {
        
        customSelctor = $jq321(".product-block.product-block--price");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 .counter-text-carecartbysalespop-2020{min-height: 65px;} ' +
        '@media only screen and (max-width: 768px) {.visitor-counter-content-box-carecartbysalespop-2020 .counter-text-carecartbysalespop-2020{min-height: 80px !important;}} </style>' );
    }

    if (Shopify.shop == "c1faaa-4.myshopify.com") {
        customSelctor = $jq321(".prd-block-price");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "grozavushop.myshopify.com") {
        customSelctor = $jq321(".submit.m10 ");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "aa660c-3.myshopify.com") {
        customSelector = $jq321(".sc-bQtKYq.iUzbOz.pf-801_");
        finalSelector = customSelector[0];
    }
     if (Shopify.shop == "west-crates.myshopify.com") {
        
        customSelctor = $jq321(".kaching-bundles__block-title");
        finalSelector = customSelctor[0];
     }
     if (Shopify.shop == "simplemerit-store.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 50px !important;  margin-top: 0px !important;}</style>');
     }
     if (Shopify.shop == "0769d2.myshopify.com") {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];
    }
     if (Shopify.shop == "zuerafashion.myshopify.com") {
        customSelctor = $jq321(".t4s-product-form__buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "1ce7f6-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 35px !important;  margin-top: -10px !important;}</style>');
        customSelctor = $jq321("#swatch-option2");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "9a0154-3.myshopify.com") {
        customSelctor = $jq321(".main-product__form-form");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "ab1c94-2.myshopify.com") {
        if (window.location.href === "https://healthiaga.com/products/healthfirst-compression-socks-2-0") {
            $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 50px !important;  margin-top: -25px !important;}</style>');
            customSelctor = $jq321(".pf-48_");
            finalSelector = customSelctor[0];
        }
        else if (window.location.href === "https://healthiaga.com/products/healthfirst") {
            $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 50px !important;  margin-top: -10px !important;}</style>');
            customSelctor = $jq321(".pf-141_");
            finalSelector = customSelctor[0];
        }
    }
    if (Shopify.shop == "9b02c0.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 25px !important;}</style>');
    }
    if (Shopify.shop == "380f44.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{margin-top: -44px !important;}</style>');
        customSelctor = $jq321(".sc-lkgTHX .eDNqWj");
        finalSelector = customSelctor[1];
    }
    
    if (Shopify.shop == "a34303-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{ height: 55px !important;margin-top: -15px !important;}</style>');
    }
  if (Shopify.shop == "836e9c-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 35px !important;  margin-top: -15px !important;}</style>');
    }
    if (Shopify.shop == "0bdbbc-4.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 35px !important;  margin-top: -22px !important;}</style>');
        customSelctor = $jq321(".product__inventory");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "c3d8a4-3.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 25px !important; margin-top: -10px !important;}</style>');
        customSelctor = $jq321(".product__price");
        finalSelector = customSelctor[1];
        var screenWidth = window.innerWidth;
        var isSmallScreen = screenWidth <= 576;

        if (isSmallScreen) {
            $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 40px !important;margin-top: -5px !important;}</style>');   
        }
    }
      if (Shopify.shop == "f91a13-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 60px !important;}</style>');
        customSelctor = $jq321(".ProductForm__AddToCart");
        finalSelector = customSelctor[0];
    }
    
    if (Shopify.shop == "shisha-buzz-sa.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 30px !important;}.counter-text-carecartbysalespop-2020{width:50% !important;}</style>');
        customSelctor = $jq321(".product-form");
        finalSelector = customSelctor[0];
    }
     if (Shopify.shop == "kbaksu-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 45px !important; margin-top: -30px !important;}</style>');
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];

    }
    if (Shopify.shop == "bevinty.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 45px !important; margin-top: -30px !important;}</style>');
        customSelctor = $jq321(".product-price");
        finalSelector = customSelctor[0];

    }
    
     if (Shopify.shop == "c0c589-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 60px !important; margin-top: -10px !important;}</style>');
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];
    }
    
    if (Shopify.shop == "the-bob-store-india.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 45px !important; margin-top: -25px !important;}</style>');
        customSelctor = $jq321(".ks-chart-container");
        finalSelector = customSelctor[0];
        }
      if (Shopify.shop == "thetinytree.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 35px; margin-top: -30px;}</style>');
        customSelctor = $jq321(".v-stack .buy-buttons");
        finalSelector = customSelctor[0];
        }

       if (Shopify.shop == "theteelovers.myshopify.com") {
        customSelctor = $jq321(".pf-44_");
        finalSelector = customSelctor[0];
        }
     if (Shopify.shop == "bc617d-2.myshopify.com") {
        customSelctor = $jq321(".top-badge");
        finalSelector = customSelctor[0];
    }
    
    if (Shopify.shop == "6a42cb.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -25px !important;}</style>');
        customSelctor = $jq321(".product-form");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "skinfoly.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 47px !important; margin-top: -10px !important;}</style>');
        customSelctor = $jq321(".product-single__quantity");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "justinsky.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 35px !important;}</style>');
        customSelctor = $jq321(".product__submit");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "5914c6-2.myshopify.com") {
            customSelctor = $jq321(".product__title");
            finalSelector = customSelctor[0];
            $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 35px !important;  margin-top: -20px !important;}</style>');
    }
    if (Shopify.shop == "720419.myshopify.com") {
        customSelctor = $jq321(".product-info .product-info__title");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "sangamfarmfresh-2852.myshopify.com") {
        customSelctor = $jq321(".pro-detail-button");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "subimods-com.myshopify.com") {
        customSelctor = $jq321(".product-form--atc");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 35px !important;}</style>');
    }
    if (Shopify.shop == "cavinkare1.myshopify.com") {
        customSelctor = $jq321(".quantity-submit-row__submit .button");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "walea-shop.myshopify.com") {
        customSelctor = $jq321(".one-whole");
        finalSelector = customSelctor[1];
    }
    if (Shopify.shop == "gadgy-market.myshopify.com") {
        customSelctor = $jq321(".product-form__payment-container");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "cura-health-limited.myshopify.com") {
        customSelctor = $jq321(".product-cart_button");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "hey-ofertas.myshopify.com") {
        customSelctor = $jq321(".product-form__payment-container");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "nulifebeauty.myshopify.com") {
        customSelctor = $jq321(".modal_price");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "tsm-aquatics.myshopify.com") {
        customSelctor = $jq321(".dichead");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "awareness-avenue.myshopify.com") {
        customSelctor = $jq321(".ProductForm__AddToCart");
        finalSelector = customSelctor[0];
        var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        if (windowWidth < 575) {
            $jq321("head").append(
                '<style type="text/css"> .content-div-visitor-detail-carecartbysalespop-2020{display:flex !important; justify-content:center}</style>');
        }
    }
    if (Shopify.shop == "nelsondesign.myshopify.com") {
        customSelctor = $jq321(".ProductForm__Variants");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "mullerdesign.myshopify.com") {
        customSelctor = $jq321(".ProductForm__Variants");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "stuf-products.myshopify.com") {
        customSelctor = $jq321("#button-cart");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "juliteste.myshopify.com") {
        customSelctor = $jq321("#ta-quoter-wrapper");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "mysweetsmileco.myshopify.com") {
        customSelctor = $jq321(".clearpay-paragraph");
        finalSelector = customSelctor[1];
    }

    if (Shopify.shop == "robinsonssingapore.myshopify.com") {
        customSelctor = $jq321(".custom_add_to_cart");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "de-fb.myshopify.com") {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "lendthetrendmx.myshopify.com") {
        customSelctor = $jq321(".trickcenterdiv");
        finalSelector = customSelctor[0];

        $jq321("head").append(
            '<style type="text/css">' +
            '.visitor-counter-content-box-carecartbysalespop-2020 span:not(.jdgm-star,.jdgm-prev-badge__text,.jdgm-prev-badge__stars){float:none!important;}' +
            '</style>'
        );

    }

    if (Shopify.shop == "newnorway.myshopify.com") {
        customSelctor = $jq321(".product-title-container");
        finalSelector = customSelctor[0];

        $jq321("head").append(
            '<style type="text/css">' +
            '.visitor-counter-content-box-carecartbysalespop-2020 {height: 49px !important;margin-top: -10px !important;}' +
            '</style>'
        );
    }
    if (Shopify.shop == "roy-groote.myshopify.com") {
        customSelctor = $jq321(".pf-36_");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "swe-1.myshopify.com") {
        /*$jq321("head").append(
            '<style type="text/css">' + 
            '.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -21px !important;}' +
            '</style>'
           );*/

        //customSelctor = $jq321(".centering");

        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "nomardic-nl.myshopify.com") {
        customSelctor = $jq321(".ProductForm__AddToCart");
        finalSelector = customSelctor[0];

        console.log(finalSelector);
    }

    /* if (Shopify.shop == "nomardic-nl.myshopify.com")
    {
        customSelctor = $jq321(".ProductForm__Variants");
        finalSelector = customSelctor[0];
    } */

    if (Shopify.shop == "nomardic-de.myshopify.com") {
        customSelctor = $jq321(".ProductForm__AddToCart");
        finalSelector = customSelctor[0];

        console.log(finalSelector);
    }

    /* if (Shopify.shop == "nomardic-de.myshopify.com")
    {
        customSelctor = $jq321(".ProductForm__Variants");
        finalSelector = customSelctor[0];
    } */

    if (Shopify.shop == "megawheels-com.myshopify.com") {
        customSelctor = $jq321(".product__price");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "shopcindel-com.myshopify.com") {

        if (window.location.toString().includes("products")) {
            customSelctor = $jq321("#ProductTemplate--template--16162795716766__main .wrapper .product-single__wrapper");
            finalSelector = customSelctor[0];
            $jq321("head").append(
                '<style type="text/css">.content-div-visitor-detail-carecartbysalespop-2020{width:auto !important; align-self: flex-end !important;}</style>'
            );
        }
        else {
            $jq321("head").append('<style type="text/css">' + '.visitor-counter-content-box-carecartbysalespop-2020 { display:none !important;  }' + '</style>');
        }
    }

    if (Shopify.shop == "colombiahit.myshopify.com") {
        customSelctor = $jq321("#AddToCartForm-product-template");
        finalSelector = customSelctor[0];

        $jq321("head").append(
            '<style type="text/css">' +
            'div.content-div-visitor-detail-carecartbysalespop-2020.visitor-left{margin-top:auto !important;padding: 15px;}' +
            '</style>'
        );

        console.log('selector: ');
        console.log(finalSelector);
    }

    if (Shopify.shop == "ommerce-6653.myshopify.com") {
        customSelctor = $jq321(".social-sharing");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "anycar-seatcovers.myshopify.com") {
        customSelctor = $jq321("#button-cart").parent();
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "awatchstrap.myshopify.com") {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "bybaanoo.myshopify.com") {
        customSelctor = $jq321("#m-1616496444433");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "watchis01.myshopify.com") {
        customSelctor = $jq321(".main-product__block-price");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "shoesaaa.myshopify.com") {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "bruzix.myshopify.com") {
        customSelctor = $jq321(".main-product__block-tax");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "street-strider.myshopify.com") {
        customSelctor = $jq321(".tab-1-product__actions");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "orianne-berlin.myshopify.com") {
        $jq321("head").append(
            '<style type="text/css">' +
            '.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -13px !important;}' +
            '</style>'
        );
    }

    if (Shopify.shop == "velvet-toni.myshopify.com") {
        $jq321("head").append(
            '<style type="text/css">' +
            '.product__info-container .product-form{margin-top:0px !important;}' +
            '.visitor-counter-content-box-carecartbysalespop-2020{ height: 14px !important;}' +
            '.counter-text-carecartbysalespop-2020{min-height: 24px !important;}' +
            '.edt-p + p{margin-bottom: -10px;}' +
            '</style>'
        );
    }

    if (Shopify.shop == "usesthetics.myshopify.com") {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "deluri.myshopify.com") {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "vintagetrainers.myshopify.com") {
        $jq321("head").append(
            '<style type="text/css">' +
            '.product-block{margin-bottom: 0px !important;}' +
            '.sales-points{margin-bottom:0px !important;}' +
            '.visitor-counter-content-box-carecartbysalespop-2020{height:auto !important;}' +
            '</style>'
        );

        customSelctor = $jq321(".sales-point");
        finalSelector = customSelctor[2];
    }

    if (Shopify.shop == "socratetraining.myshopify.com") {
        customSelctor = $jq321("#AddToCart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "pimuraempire.myshopify.com") {
        customSelctor = $jq321(".pf-97_");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "vintageheavensgate1.myshopify.com") {
        customSelctor = $jq321("#AddToCart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "medici-supply-co.myshopify.com") {
        customSelctor = $jq321(".add-to-cart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "wrywryshop.myshopify.com") {
        customSelctor = $jq321(".ProductForm__Variants");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "amamibijoux.myshopify.com") {
        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "metaphysicalonlineshop.myshopify.com") {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "combadepalo.myshopify.com") {
        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "la-porta-dei-sapori.myshopify.com") {
        customSelctor = $jq321("h1");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "nlmilamaya.myshopify.com") {
        customSelctor = $jq321(".add-to-cart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "ohmepretty.myshopify.com") {
        customSelctor = $jq321("#AddToCart--template--15150626898052__main");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "vitapur-stage-store.myshopify.com") {
        $jq321("head").append(
            '<style type="text/css">' +
            '.visitor-counter-content-box-carecartbysalespop-2020{ height: auto !important; margin-top: 0 !important; }' +
            '</style>'
        );

        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        //console.log(customSelctor);
    }
    if (Shopify.shop == "wearecrewd.myshopify.com") {

        $jq321("head").append(
            '<style type="text/css">' +
            '.visitor-counter-content-box-carecartbysalespop-2020 .counter-text-carecartbysalespop-2020{width:52.5%;}.visitor-counter-content-box-carecartbysalespop-2020{display:flex !important; justify-content:right;}' +
            '@media only screen and (max-width: 768px){.visitor-counter-content-box-carecartbysalespop-2020 .counter-text-carecartbysalespop-2020{width:100%; display:block;}}' +
            '</style>'
        );

        customSelctor = $jq321(".product--small");
        console.log(customSelctor);
        finalSelector = customSelctor[0];
        console.log(finalSelector);


    }


    if (Shopify.shop == "vitapur-romania.myshopify.com") {
        $jq321("head").append(
            '<style type="text/css">' +
            '.visitor-counter-content-box-carecartbysalespop-2020{ height: auto !important; margin-top: 0 !important; }' +
            '</style>'
        );

        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        //console.log(customSelctor);
    }

    if (Shopify.shop == "vitapur-sk.myshopify.com") {
        $jq321("head").append(
            '<style type="text/css">' +
            '.visitor-counter-content-box-carecartbysalespop-2020{ height: auto !important; margin-top: 0 !important; }' +
            '</style>'
        );

        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];

        //console.log(customSelctor);
    }
    if (Shopify.shop == "wearecrewd.myshopify.com") {

        $jq321("head").append(
            '<style type="text/css">' +
            '.visitor-counter-content-box-carecartbysalespop-2020{height:48px!important;}' +
            '</style>'
        );

        customSelctor = $jq321(".product--small");
        console.log(customSelctor);
        finalSelector = customSelctor[0];
        console.log(finalSelector);


    }

    if (Shopify.shop == "spruce-plant-shop.myshopify.com") {
        customSelctor = $jq321(".ProductForm__AddToCart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "spakopen.myshopify.com") {
        customSelctor = $jq321(".product-form__controls-group");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "norwegian-biolabs.myshopify.com") {
        customSelctor = $jq321("#r-1661279304876");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "zhouweiwei0502.myshopify.com") {
        customSelctor = $jq321(".pf-35_");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }

    if (Shopify.shop == "nomardic-com.myshopify.com") {
        customSelctor = $jq321(".ProductForm__AddToCart");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }
    if (Shopify.shop == "velvet-toni.myshopify.com") {
        customSelctor = $jq321(".product__accordion");
        finalSelector = customSelctor[2];

        console.log(customSelctor);
    }
    if (Shopify.shop == "anxiety-rings-australia.myshopify.com") {
        $jq321("head").append(
            '<style type="text/css">' +
            '.visitor-counter-content-box-carecartbysalespop-2020{height:0px !important; margin-top:-11px !important;}' +
            '.counter-text-carecartbysalespop-2020{min-height:20px !important;}' +
            '</style>'
        );
        customSelctor = $jq321(".product-form");
        finalSelector = customSelctor[0];

        console.log(customSelctor);
    }
    if (Shopify.shop == "byboop.myshopify.com") {
        $jq321("head").append(
            '<style type="text/css">' +
            'div{margin: 0px !important}' +
            '.product-form__quantity{margin-bottom: 0px !important;}' +
            '.visitor-counter-content-box-carecartbysalespop-2020{height:15px !important; margin-top:0px !important; margin-bottom:35px !important;}' +
            '</style>'
        );
        customSelctor = $jq321(".product-form__submit");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "click-pvc.myshopify.com") {
        $jq321("head").append(
            '<style type="text/css">' +
            '.visitor-counter-content-box-carecartbysalespop-2020{height:35px !important; margin-top:0px !important;}' +
            '</style>'
        );
        customSelctor = $jq321(".product-block");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "saintmuze2.myshopify.com") {
        $jq321("head").append('<style type="text/css">' + '.visitor-counter-content-box-carecartbysalespop-2020{margin-top: -60px !important; margin-left: 0px !important;}' + '</style>');
        customSelctor = $jq321(".gBaOaMs3o-");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "aee2a8.myshopify.com") {
        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">' + '.visitor-counter-content-box-carecartbysalespop-2020{height:23px !important;}' + '</style>');
        console.log(customSelctor);
    }
    if (Shopify.shop == "wallashop-tienda.myshopify.com") {
        customSelctor = $jq321("#new-form");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">' + '.product-form{margin-top:0px !important;}.visitor-counter-content-box-carecartbysalespop-2020{margin-top:0px !important;}' + '</style>');

    }

    if (Shopify.shop == "buytrendshop-8454.myshopify.com") {
        customSelctor = $jq321(".product-form__info-item");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">' + '.product-form__info-item {display: flex !important; }' + '</style>');
    }
    if (Shopify.shop == "vikinx-dk.myshopify.com") {
        customSelctor = $jq321(".product-form__buy-buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "wavelengthsurfmag.myshopify.com") {
        customSelctor = $jq321(".flickity-slider");
        finalSelector = customSelctor[1];
    }
    if (Shopify.shop == "discover-treluxe.myshopify.com") {

        if (window.location.toString().includes("collections")) {
            $jq321("head").append('<style type="text/css">' + '.visitor-counter-content-box-carecartbysalespop-2020 { display:none !important;  }' + '</style>');
        }
        else {
            customSelctor = $jq321(".sc-gXRojI");
            finalSelector = customSelctor[0];
            $jq321("head").append('<style type="text/css">' + '.visitor-counter-content-box-carecartbysalespop-2020 { height: 40px !important; margin-top: 5px !important; } .counter-text-carecartbysalespop-2020 { min-height: 0px !important;  }' + '</style>');
        }
    }
    if (Shopify.shop == "jake-store-us-9.myshopify.com") {
        customSelctor = $jq321(".product-form--atc + div");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "dineshflourmills.myshopify.com") {
        customSelctor = $jq321(".addtocart_quantity_container");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "dynacup.myshopify.com") {
        customSelctor = $jq321(".sc-fTxOGA");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }
      if (Shopify.shop == "commonfurnitureproject-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 62px !important;}</style>');
        customSelctor = $jq321(".shopify-product-form");
        finalSelector = customSelctor[1];
    }
    if (Shopify.shop == "bfab1c.myshopify.com") {
        $jq321("head").append('<style type="text/css">#gurentee_icon_3 + div{margin-bottom: 12px !important;}.visitor-counter-content-box-carecartbysalespop-2020 { height: 26px !important; margin-top: -14px !important; } .counter-text-carecartbysalespop-2020{min-height:42px !important;}.ProductForm{margin-top:14px !important;}.ProductForm__Variants{margin-top:26px !important;}</style>');
    }
    if (Shopify.shop == "alistansia.myshopify.com") {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "gijs-8189.myshopify.com") {
        customSelctor = $jq321(".ultimateTrustBadgesInnerContainer");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "lightuplooks.myshopify.com") {
        customSelctor = $jq321(".sc-leSONj");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 5px !important;} .counter-text-carecartbysalespop-2020 {min-height: 22px !important;}</style>');
    }
    if (Shopify.shop == "naturessource42.myshopify.com") {
        customSelctor = $jq321(".product-info-row");
        finalSelector = customSelctor[2];
    }
    if (Shopify.shop == "shejuvirtual.myshopify.com") {
        customSelctor = $jq321(".precoParcela");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 50px !important;} .counter-text-carecartbysalespop-2020 {min-height: 35px !important;}</style>');
    }
    if (Shopify.shop == "griihamhome.myshopify.com") {
        customSelctor = $jq321(".desc_blk_bot.clearfix");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">' + '.visitor-counter-content-box-carecartbysalespop-2020{height:32px !important;}.visitor-left{padding-left:30px !important;}' +
            '</style>');
    }
    
    if (Shopify.shop == "maxteethwhitening.myshopify.com") {
        $jq321("head").append('<style type="text/css">' + '.visitor-counter-content-box-carecartbysalespop-2020{height:auto !important; margin-top: 0px !important;}.counter-text-carecartbysalespop-2020{min-height: 0px !important;}.product__info-container .product-form, .product__info-container .product__description, .product__info-container .share-button{margin: 1.1rem 0 0 !important;}#appstle_subscription_widget0{margin-top:0px !important;}' +
            '</style>');
    }
    if (Shopify.shop == "glx-footwear.myshopify.com") {
        customSelctor = $jq321(".product__tax");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "early-reveal.myshopify.com") {
        customSelctor = $jq321(".pe-product-cart-button");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "delozashop.myshopify.com") {
        $jq321("head").append('<style type="text/css">' + '.visitor-counter-content-box-carecartbysalespop-2020{margin-top: -20px !important;}' +
            '</style>');

    }
    if (Shopify.shop == "detectify-7520.myshopify.com") {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "shop-radiocommande-com.myshopify.com") {
        customSelctor = $jq321(".modal_price");
        finalSelector = customSelctor[0];
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 30px !important;} .counter-text-carecartbysalespop-2020 {min-height: 15px !important;}</style>');
    }
    if (Shopify.shop == "6df508.myshopify.com") {
        customSelctor = $jq321(".sc-leSONj");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "nunea.myshopify.com") {
        customSelctor = $jq321(".price-wrapper");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "the-ring-collective.myshopify.com") {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "stone-shop-hanalei.myshopify.com") {
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "pibelli-1074.myshopify.com") {
        customSelctor = $jq321(".product-single__add-to-cart");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "sole-premise.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 30px !important; }</style>');
        customSelctor = $jq321(".product-info__buy-buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "komallu-shop-6135.myshopify.com") {
        customSelctor = $jq321(".yv-product-sku");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "6c2c1f.myshopify.com") {
        customSelctor = $jq321(".add-to-cart-container");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "entire-schmuck.myshopify.com") {
        customSelector = $jq321(".pf-68_");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "962b9f.myshopify.com") {
        customSelector = $jq321(".product-form__buttons");
        finalSelector = customSelector[0];
    }
    if (Shopify.shop == "casualmode-store.myshopify.com") {
        customSelctor = $jq321(".shopify-product-form{}");
        finalSelector = customSelctor[0];
    
    }
    if (Shopify.shop == "luxiebeam.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 40px !important; }</style>');
        customSelctor = $jq321(".instant-buy");
        finalSelector = customSelctor[0];
    
    }
    if (Shopify.shop == "sorrynotsorryclothing.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 40px !important; margin-top: -15px !important; } .counter-text-carecartbysalespop-2020 {    min-height: 25px !important; } @media only screen and (max-width:768px) , only screen and (max-width:992px){.visitor-counter-content-box-carecartbysalespop-2020 { height: 50px !important; }}</style>');
    }
    if (Shopify.shop == "66f5a0.myshopify.com") {
        $jq321("head").append('<style type="text/css"> .counter-text-carecartbysalespop-2020 { min-height: 20px !important;} .visitor-counter-content-box-carecartbysalespop-2020 {height: 15px !important;}</style>');
        customSelctor = $jq321("#shopify-block-1bee62e4-bebc-4fbe-914b-9071f0bd463c");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "ekanashop.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 30px !important; }</style>');
        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];
        
    }
    if (Shopify.shop == "theskshop-616.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 30px !important; } .counter-text-carecartbysalespop-2020 {min-height : 0px !important;}</style>');
        customSelctor = $jq321(".product-form");
        finalSelector = customSelctor[0];
        
    }
    if (Shopify.shop == "iqon-collection.myshopify.com") {
        customSelctor = $jq321(".product-form__submit");
        finalSelector = customSelctor[0];
       
    }
    if (Shopify.shop == "well-squared.myshopify.com") {
        customSelctor = $jq321(".bynw-rcv");
        finalSelector = customSelctor[0];
       
    }
    if (Shopify.shop == "b4accf-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 35px !important; margin-top: -16px !important;}</style>');
        customSelctor = $jq321(".option-selector--with-size-chart");
        finalSelector = customSelctor[0];
      
    }
     if (Shopify.shop == "8d56ce.myshopify.com") {
        $jq321("head").append('<style type="text/css">.counter-text-carecartbysalespop-2020 {min-height: 20px !important;} .visitor-counter-content-box-carecartbysalespop-2020{height: 20px !important;}</style>');
        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];
    
    }
  if (Shopify.shop == "75105d-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 38px !important;margin-top: -15px !important;}</style>');
        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "saltytubco.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 50px !important;margin-top: -40px !important;}</style>');
        customSelctor = $jq321(".product-text");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }
     if (Shopify.shop == "pachamama-indoor-farming.myshopify.com") {
        $jq321("head").append('<style type="text/css">[class^="icon-"]{font-family:inherit !important;}{font-family: inherit !important;}</style>');
    }

     if (Shopify.shop == "a67d4a.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 38px !important;margin-top: -15px !important;}</style>');
        customSelctor = $jq321(".jedi-stock-counter");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "shopkouneli.myshopify.com") {
        customSelctor = $jq321(".buy-buttons");
        finalSelector = customSelctor[0];
    }
     if (Shopify.shop == "ac2828-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{margin-top: -14px !important;}</style>');
        customSelctor = $jq321("#estimator-message");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "18c5e3.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 50px !important;margin-top: -15px !important;}</style>');
        customSelctor = $jq321(".groups-btn-tree");
        finalSelector = customSelctor[0];
    }

    if (Shopify.shop == "b04a6e.myshopify.com") {
        customSelctor = $jq321(".product__quantity.product__quantity--button");
        finalSelector = customSelctor[0];
    }
      if (Shopify.shop == "unclaimed-baggage.myshopify.com") {
        customSelctor = $jq321(".product__atc-wrap");
        finalSelector = customSelctor[0];
        // console.log(finalSelector);
    }
    if (Shopify.shop == "23219b-2.myshopify.com") {
        customSelctor = $jq321(".button.button--xl.w-full");
        finalSelector = customSelctor[0];
        // console.log(finalSelector);
    }
    if (Shopify.shop == "cmy-cubes.myshopify.com") {
        $jq321("head").append('<style type="text/css">.shopify-block.shopify-app-block{text-align:left !important;}@media only screen and (max-width:575px){.visitor-font-weight-inherit{font-size:9px;}}</style>');
        customSelctor = $jq321(".product__title");
        finalSelector = customSelctor[0];
        // console.log(finalSelector);
    }
    if (Shopify.shop == "monolith-eu.myshopify.com") {
        customSelctor = $jq321(".payment-and-quantity");
        finalSelector = customSelctor[0];
    }
     if (Shopify.shop == "screenmoove.myshopify.com") {
        customSelctor = $jq321(".product-stock-level-wrapper");
        finalSelector = customSelctor[0];
    }
   if (Shopify.shop == "8e002b-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: auto; }</style>');
        customSelctor = $jq321(".payment-icons-fm");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }

    if (Shopify.shop == "oscarwellness.myshopify.com") {
        customSelctor = $jq321(".banner__media");
        finalSelector = customSelctor[0];
    }

      if (Shopify.shop == "815b06-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 50px; }</style>');
        customSelctor = $jq321(".other_info");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "bafang-motor-store.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 44px !important;margin-top: 0px !important;}.counter-text-carecartbysalespop-2020{min-height: 23px !important;}</style>');
    }

     if (Shopify.shop == "70b303-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 52px !important;}</style>');
        customSelctor = $jq321(".loox-rating");
        finalSelector = customSelctor[0];
    }
     if (Shopify.shop == "revival-shop-store.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{margin-top: -6px !important;height: 25px !important;}</style>');
        customSelctor = $jq321(".product__headline");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "ae454c.myshopify.com") {
        $jq321("head").append('<style type="text/css">.content-div-visitor-detail-carecartbysalespop-2020{padding-left: 0px!important; }.visitor-counter-content-box-carecartbysalespop-2020{margin-top: 10px !important;height: 50px !important;}</style>');
        customSelctor = $jq321(".AirReviews-Widget--AppBlockSummary");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "838616-4.myshopify.com") {
            $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 24px;}.counter-text-carecartbysalespop-2020{min-height: 20px;}</style>');
            customSelctor = $jq321(".quantity__label.form__label");
            finalSelector = customSelctor[0];
        }
   if (Shopify.shop == "testtesttest23w34234.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 { height: 50px; }</style>');
        customSelctor = $jq321(".product-form__buttons");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    } 
    if (Shopify.shop == "three-sixty-six.myshopify.com") {
        $jq321("head").append('<style type="text/css">.shopify-payment-button{display:none;}</style>');
        customSelctor = $jq321(".ProductForm__BuyButtons");
        finalSelector = customSelctor[0];
        console.log(finalSelector);
    }
     if (Shopify.shop == "54646b-3.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 24px !important;}</style>');
        customSelctor = $jq321(".product-description.rte");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "neom-organics.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{display:block !important; height: 40px !important; margin-top: -20px !important; margin-left: 230px !important;}</style>');
        customSelctor = $jq321(".flickity-viewport");
        finalSelector = customSelctor[2];
    }
    if (Shopify.shop == "the-style-trader-co.myshopify.com") {
        $jq321("head").append('<style type="text/css">.content-div-visitor-detail-carecartbysalespop-2020{padding-left: 0px!important; }.tis-product-default .visitor-counter-content-box-carecartbysalespop-2020{position:static !important; max-width: 100% !important; margin: 0 !important;}.tis-product-default .counter-text-carecartbysalespop-2020{border:none!important;max-width:100% !important;}.close-visitor{display:none !important;}.tis-product-default .counter-text-carecartbysalespop-2020::after{display:none !important;} .tis-product-default .counter-text-carecartbysalespop-2020 span i, .gift-card-page .counter-text-carecartbysalespop-2020 span i{display: inline-block !important;padding-right: 8px;}</style>');
    }
    if (Shopify.shop == "thrift-6063.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 45px !important; margin-top: -5px !important;}</style>');
        customSelctor = $jq321(".add-to-cart__wrapper");
        finalSelector = customSelctor[1];
    }
    if (Shopify.shop == "3ca44e.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {height: 30px !important; margin-top: -10px !important;}</style>');
        customSelctor = $jq321(".product-meta");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "74ef4c-3.myshopify.com") {
        customSelctor = $jq321(".sc-gIDmLj.ktCSaA.pf-34_");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "zephyr-9848.myshopify.com") {
        customSelctor = $jq321(".shopify-product-form");
        finalSelector = customSelctor[1];
    }
     if (Shopify.shop == "caf6fd-3.myshopify.com") {
        $jq321("head").append('<style type="text/css">.content-div-visitor-detail-carecartbysalespop-2020{padding-left: 0px!important;}.visitor-counter-content-box-carecartbysalespop-2020{height: 10px !important;margin-top: 0px !important;}</style>');
        customSelctor = $jq321(".main-product__price.no-js-hidden");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "giusy-vi-lab.myshopify.com") {
        $jq321("head").append('<style type="text/css">.content-div-visitor-detail-carecartbysalespop-2020{padding-left: 0px!important;}.visitor-counter-content-box-carecartbysalespop-2020{height: 44px !important;margin-top: -21px !important;}</style>');
        customSelctor = $jq321(".title");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "3bfd08.myshopify.com") {
        customSelctor = $jq321(".main-product__form");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "c2f8ac-2.myshopify.com") {
        customSelctor = $jq321(".product-form__payment-container");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "homethings-staging.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 44px !important;margin-top: 0px !important;}.counter-text-carecartbysalespop-2020{min-height: 23px !important;}</style>');
        customSelctor = $jq321(".r-1lbybkc");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "sqobs.myshopify.com") {
        customSelctor = $jq321(".product-form__buy-buttons");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "flamingo-estate-organics.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 44px !important;margin-top: 0px !important;display:block !important;}</style>');
        customSelctor = $jq321(".product-form--form");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "05a28d-2.myshopify.com") {
        $jq321("head").append('<style type="text/css">.visitor-counter-content-box-carecartbysalespop-2020{height: 45px !important;}</style>');
    }
    if (Shopify.shop == "xclusivo-5590.myshopify.com") {
        customSelctor = $jq321(".addtocart_js");
        finalSelector = customSelctor[0];
    }
    if (Shopify.shop == "7ba0b2-2.myshopify.com") {
        customSelctor = $jq321(".g5urUZBDSt");
        finalSelector = customSelctor[0];
    }  
    function visitorCounter(responseVisitor) {
       var selectorVisitor1 = $jq321("form[action='/cart/add']").find("button[type='submit'],input[type='submit']").parent();
        var selectorVisitor2 = $jq321("form[action='/cart/add']");
        var selectorVisitor3 = $jq321("form[action='/cart/add']:first").find("button[type='submit'],input[type='submit']");
        var selectorVisitor4 = $jq321("form[action='/cart/add']:first");

        if (responseVisitor.above_cart == 1) {
            if (customSelctor.length > 0) {
                $jq321(responseVisitor.view).insertBefore(finalSelector);
            }
            else if (selectorVisitor1.length == 1) {
                 selectorVisitor1.prepend(responseVisitor.view);
             }
             
             
            else if (selectorVisitor2.length == 1) {
                selectorVisitor2.prepend(responseVisitor.view);
            }
            
            else if (selectorVisitor3.length == 1) {
                $jq321(responseVisitor.view).insertBefore(selectorVisitor3);
            }
            else if (selectorVisitor4.length == 1) {
                selectorVisitor4.prepend(responseVisitor.view);
            }
        }
        else {
            if (customSelctor.length > 0) {
                $jq321(responseVisitor.view).insertAfter(finalSelector);
            }
            else if (selectorVisitor1.length == 1) {
                selectorVisitor1.append(responseVisitor.view);
            }
            else if (selectorVisitor2.length == 1) {
                selectorVisitor2.append(responseVisitor.view);
            }
            else if (selectorVisitor3.length == 1) {
                $jq321(responseVisitor.view).insertAfter(selectorVisitor3);
            }
            else if (selectorVisitor4.length == 1) {
                selectorVisitor4.append(responseVisitor.view);
            }
        }
        /*if(Shopify.shop == "usesthetics.myshopify.com")
        {
            if($jq321('.visitor-counter-content-box-carecartbysalespop-2020').length > 0){
                $jq321('.visitor-counter-content-box-carecartbysalespop-2020').css("display", "none");
            }
            customSelctor = $jq321(".expo-section-wrapper");
            finalSelector = customSelctor[0];
            if(customSelctor.length > 0){
                $jq321(responseVisitor.view).insertAfter(finalSelector);
            }
            else{
                customSelctor = $jq321(".expo-section-wrapper");
                finalSelector = customSelctor[0];
                $jq321(responseVisitor.view).insertBefore(finalSelector);
            }
        }*/
        if (Shopify.shop == "890be5.myshopify.com") {
            if ($jq321('.visitor-counter-content-box-carecartbysalespop-2020').length > 0) {
                $jq321('.visitor-counter-content-box-carecartbysalespop-2020').css("display", "none");
            }
            customSelctor = $jq321(".vtl-pl-main-widget");
            finalSelector = customSelctor[0];
            if (customSelctor.length > 0) {
                $jq321(responseVisitor.view).insertAfter(finalSelector);
            }
            else {
                customSelctor = $jq321(".vtl-pl-main-widget");
                finalSelector = customSelctor[0];
                $jq321(responseVisitor.view).insertBefore(finalSelector);
            }
        }

        if (Shopify.shop == "mysweetsmileco.myshopify.com") {
            $jq321("body").append('<style style="text/css">.visitor-counter-content-box-carecartbysalespop-2020 {margin-top: -24px !important}</style>');
        }

        $jq321('n').html(function (i, v) {
            return v.replace(/(\d)/g, '<span ' + responseVisitor.count + '>$1</span>');
        });
    }

    // ---------------------------------- <VISITOR COUNTER MODULE> --------------------------------

});
