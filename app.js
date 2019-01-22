window.addEventListener('load', () => {
  display()
})
display = () => {
     main = document.querySelector('.main');
    console.log('ok')
     el = document.createElement('app-hello-word');
    el.name = 'Burdy';
    main.appendChild(el)

}

class HelloWord extends HTMLElement {
  set name (name) {
    this.innerHTML = `Hello word... and Hello ${name}, it's your first Webcomponent :) `
  }
}

customElements.define('app-hello-word', HelloWord)