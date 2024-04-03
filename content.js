const getMainDomain = (hostname) => {
    // Split the hostname into parts
    const parts = hostname.split('.');
    // Check if the domain has more than two parts and the second-to-last part is a known SLD
    if (parts.length > 2 && parts[parts.length - 2].match(/^(co|com|net|org|gov|edu|mil)$/)) {
        // Return the part before the SLD (third from the end)
        return parts[parts.length - 3];
    }
    // Otherwise, return the second part from the end
    return parts[parts.length - 2];
};

// Function to add the icon next to email inputs
function addIconToEmailInput(input) {
    // Create the icon element
    // Check if the input is hidden or if any of its classes have 'hidden' or 'invisible'
    if (input.display === 'none' || input.type === 'hidden' || input.style.display === 'none' || input.style.visibility === 'hidden' || input.style.opacity === '0' || input.type === 'submit') {
        return;
    }
    let icon = document.createElement('img');
    icon.src = "data:image/png;base64,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"
    icon.style.cssText = 'cursor: pointer; margin-left: 5px; width: 30px;';
    icon.title = 'Generate email alias with domain: ' + getMainDomain(window.location.hostname);
    // Prevent adding more than one icon next to an input
    // if (input.nextElementSibling && input.nextElementSibling.src === icon.src) {
    //     return; // Icon already added
    // }

    let div = document.createElement('div');
    div.style.cssText = 'display: flex; align-items: center; width: 100%;';
    // input.parentNode.insertBefore(div, input.nextSibling);
    input.parentNode.insertBefore(div, input);
    div.appendChild(input)
    div.appendChild(icon)
    // Insert the icon next to the email input
    // input.parentNode.insertBefore(icon, input.nextSibling);
    // input.insertAdjacentElement('afterend', icon);

    // Add click event to populate email
    icon.addEventListener('click', () => {
        input.value = `${input.value.split('@')[0]}+${getMainDomain(window.location.hostname)}@${input.value.split('@')[1]}`;
        const t = new Event("input", {
            bubbles: !0
        });
        input.dispatchEvent(t);
    });
}

// Function to process all inputs on the page
function processInputs() {
    console.log("PROCESSING INPUTS")
    document.querySelectorAll('input[type=email]:enabled:not([readonly]),input[name*="Email"], input[name*="email"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="mail"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="Mail"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="почта"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="пошта"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*=\'דוא"ל\']:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="البريد"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="correo electrónico"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="อีเมล"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="ईमेल"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="E-poçta"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="E-posta"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="E-post"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="E-mel"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="پست الکترونیک"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="이메일"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="Eメール"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="R-phost"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="Surel"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="Tölvupóstur"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="Sähköposti"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"]),input[placeholder*="电邮"]:enabled:not([readonly]):not([type="checkbox"]):not([type="radio"])')
        .forEach(input => {
            input.hasAttribute('email-alias-added') || (input.setAttribute('email-alias-added', ''), addIconToEmailInput(input));
        });
}

let debounceTimer;
const observer = new MutationObserver((mutations) => {
    let flag = false;
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            flag = true;
        }
    });
    if (flag) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            processInputs();
        }, 100);
    }
});

// Start observing the document body for added nodes
observer.observe(document.querySelector("body"), { childList: true, subtree: true, attributes: false });

// Initial processing of inputs
processInputs();



