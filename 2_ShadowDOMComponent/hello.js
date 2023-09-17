class HelloShadowComponent extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = "<p>Hello Web Components!</p>";
    }
}

customElements.define("demo-hello-shadow", HelloShadowComponent);