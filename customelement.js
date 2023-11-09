class JoshElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Josh was here";
    }
}

customElements.define("x-josh/, JoshElement");