class HelloShadowComponent extends HTMLElement {
    constructor(){
        super();
    }
    
    connectedCallback(){
        let text = 'Hello Web Components!';
        if (this.hasAttribute('text')) {
            text = this.getAttribute('text');
        }
    
        this.innerHTML = `<p>${text}</p>`;
        const contentElement = this.querySelector('p');
        contentElement.addEventListener('mouseenter', this._toggleBackground);
        contentElement.addEventListener('mouseleave', this._toggleBackground);
    }
    
    _toggleBackground() {        
        if (this.style.background === 'yellow'){
            this.style.background = '';
        } else {
            this.style.background = 'yellow';
        }
    }
}

customElements.define("demo-hello-shadow", HelloShadowComponent);