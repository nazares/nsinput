export class NSinput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});

        const type = this.getAttribute("type") || "text"
        const placeholder = this.getAttribute("placeholder") || "" ;

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/NSinput.css">

            <input type="${type}" placeholder="${placeholder}">
            <p class="error-message"></p>
        `;

        this.value = this.getAttribute("value");
        this.error = this.getAttribute("error");
    }

    set error(val) {
        const errorMessage = typeof val === "string" ? val.trim() : null;

        this.shadowRoot.querySelector("input").classList.toggle("has-error", Boolean(errorMessage));
        this.shadowRoot.querySelector(".error-message").textContent = errorMessage;
    }

    get value() {
        return this.shadowRoot.querySelector("input").value;
    }

    set value(val) {
        this.shadowRoot.querySelector("input").value = val;
    }
}