import { Directive, HostBinding, Renderer2, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appMyDirective]'
})

export class MyDirective {
@HostBinding('style.color') color = 'black';
listeOfLinks = `<li>
<h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
</li>
<li>
<h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
</li>
<li>
<h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
</li>`;
ul: any;

constructor(public render: Renderer2, public elementRef: ElementRef) {
  this.render.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
}

@HostListener('click', ['$event']) onClick (event) {
console.log('We can have event', event);
if (!this.ul || !this.ul.innerHTML) {
  this.display();
} else {
  this.remove();
}
}

display() {
  this.ul = this.render.createElement('ul');
  this.ul.innerHTML = this.listeOfLinks;
  this.render.appendChild(this.elementRef.nativeElement , this.ul);
}

remove() {
  this.ul.innerHTML = '';
}
}
