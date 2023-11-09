class JoshElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Josh was here";
    }
}

customElements.define("x-josh/, JoshElement");

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center>${this.innerHTML}</div>
        `
    }
}

customElements.define("x-center/, CenterElement");