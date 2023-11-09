class JoshElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Josh was here";
    }
}

customElements.define("x-josh/, JoshElement");

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center/, CenterElement");

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-fullyear/, YearElement");