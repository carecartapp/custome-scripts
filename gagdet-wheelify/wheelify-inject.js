document.addEventListener('DOMContentLoaded', function () {
    // Create a container to inject the content
    const container = document.createElement('div');
    container.innerHTML = `
      <!-- Your HTML content goes here (escaped backticks for multiline support) -->
<div id="wheelify-spin_a_sale_cc_store_front_module" class="wheelify-wrapper-spinner" style=" display: none">
    <div class="wheelify-content-spinner">
        <a class="wheelify-closeButton" id="spin_a_sale_cc_store_front_module_close_button" onclick="handleCloseButtonClick()"
                href="javascript:void(0)">
            <svg class="rotate-on-hover" width="18" height="18" viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.8051 17.6234C16.3073 18.1255 17.1213 18.1255 17.6234 17.6234C18.1255 17.1213 18.1255 16.3073 17.6234 15.8052L10.8183 9L17.6234 2.19485C18.1255 1.69275 18.1255 0.87868 17.6234 0.376578C17.1213 -0.125525 16.3073 -0.125525 15.8052 0.376578L9 7.18173L2.19485 0.376577C1.69275 -0.125526 0.87868 -0.125526 0.376577 0.376577C-0.125526 0.878679 -0.125526 1.69275 0.376577 2.19485L7.18173 9L0.376578 15.8051C-0.125525 16.3073 -0.125525 17.1213 0.376578 17.6234C0.87868 18.1255 1.69275 18.1255 2.19485 17.6234L9 10.8183L15.8051 17.6234Z"
                    fill="white" />
            </svg>
        </a>
        <div class="wheelify-wheelContainer"> <svg class="wheelify-wheelSVG" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                text-rendering="optimizeSpeed">
                <defs>
                    <filter id="shadow" x="-100%" y="-100%" width="550%" height="550%">
                        <feOffset in="SourceAlpha" dx="0" dy="0" result="offsetOut"></feOffset>
                        <feGaussianBlur stdDeviation="9" in="offsetOut" result="drop" />
                        <feColorMatrix in="drop" result="color-out" type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .3 0" />
                        <feBlend in="SourceGraphic" in2="color-out" mode="normal" />
                    </filter>
                </defs>
                <g class="mainContainer">
                    <g class="wheel" />
                </g>
                <g class="centerCircle" />
                <g class="wheelOutline" />
                <g class="pegContainer">
                    <path class="peg" fill="#f00"
                        d="M43.5,70.5c-0.9,1.1-2.1,1.8-3.5,2.1c-3.5,0-9.3-9.3-13.3-17.3 c-5.2-10.5-8.6-20.8-8.6-26.4c0-12.1,9.8-21.8,21.8-21.8s21.8,9.8,21.8,21.8l0,0c0,4.7-2.4,12.9-6.5,21.9 C51.5,59.5,46.9,67.1,43.5,70.5z M35.4,22.8c-2.6,2.6-2.6,6.7,0,9.3c2.6,2.6,6.7,2.6,9.3,0s2.6-6.7,0-9.3S37.9,20.3,35.4,22.8 C35.4,22.8,35.4,22.8,35.4,22.8L35.4,22.8z" />
                </g>
                <g class="valueContainer" />
            </svg>
            <div class="toast">
                <p></p>
            </div>
        </div>
        <div class="wheelify-ContentRight">
            <div class="wheelify-signupContainer">
                <h1 class="wheelify-text-heading">Win an Exclusive prize!</h1>
                <p class="wheelify-text-description">Enter your full name and email to spin the wheel for a
                    chance to win</p>

                <div class="cc_form-group">
                    <input id="cc_spinner_full_name" type="text" name="fullname" placeholder="Enter your Name">
                </div>
                <div class="cc_form-group">
                    <input id="cc_spinner_email" type="text" name="email" placeholder="Enter your email">
                </div>
                <div class="cc_form-group">
                    <input id="cc_spinner_phone" type="" name="phonenumber" placeholder="Enter your phone">
                </div>

                <div class="cc_checkbox" id="cc_checkbox_id">
                    <label class="cc_checkbox_label" for="cc-spin-consent-checkbox">
                        <input id="cc-spin-consent-checkbox" type="checkbox" name="cc-spin-consent-checkbox">
                        <span id="cc-spin-a-sale-consent-text" style="display: contents; float: left;">I agree to my personal data being stored and used to receive the newsletter</span>
                    </label>
                </div>
                <button type="submit" id="spin_wheel_btn" class="btn-submit-form">Try Your Luck!!</button><button type="submit" class="btn-submit-form-ok" style="display: none;"></button>
            <div style="display: none;" id="wheelify-cc-spin-a-sale-already-used-spin-quota">
                <p class="text-center">You have already used your spin quota</p>
            </div>
            <div style="display: none;" id="wheelify-cc-spin-invalid-email">
                <p class="text-center">Please enter a valid email address.</p>
            </div>
                <div id="wheelify-cc-spin-a-sale-powered-by-carecart">Powered by <a href="https://carecart.io"
                        target="_blank"><span><b>CareCart</b></span></a></div>
            </div>
            
            <div class="wheelify-winContainer" style="display: none;">
                <h1 class="wheelify-text-heading">You Won <span class="win_text"></span>
                </h1>
                <p class="wheelify-text-description">Don't forget to copy your coupon code before closing.</p>
                <p class="wheelify-textInfo"></p>
                <div class="cc_form-group">
                    <input name="coupon" autofocus="" tabindex="1" type="text" readonly />
                </div>
                <div class="form-group">
                    <button class="copy-button">Copy</button>
                    <span style="display: none" id="copied_text_only">Copied</span>
                </div>
            </div>
            <div class="wheelify-loseContainer" style="display: none;">
                <p class="wheelify-text-heading">You lose</p>
                <p class="wheelify-text-description">Sample text message will be added.</p>
                <p class="wheelify-textInfo"></p>
            </div>
        </div>
    </div>
</div>
      <div id="wheelify-couponwheel_notice_content" class="wheelify-bar-bottom" style="display: none;z-index: 999999999999999">
        <span id="wheelify-spin_a_sale_cc_urgency_time_bar_text">Your coupon code: <strong>DEA995E</strong> is reserved for <span id="wheelify-couponwheel_notice_timer">14m 39s</span>. You can apply it at checkout.</span> 
        <a id="wheelify-couponwheel_notice_close_btn"><i class="fa fa-times"></i></a>
      </div>
      <a href="javascript:void(0)" id="wheelify-spin-trigger-cc" style="display: none;" onclick="handleTriggerButtonClick()">
        <span></span>
        <img id="spinner-icon-img" src="https://cdn.shopify.com/extensions/817ed504-1631-465a-a5f3-03cf4811fd96/wheelify-spin-wheel-email-pop-82/assets/small-spin.png" alt="Spinner icon" width="20px" height="20px">
      </a>
    `;
  
    // Append to body
    document.body.appendChild(container);
  });
  