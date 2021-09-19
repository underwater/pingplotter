import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[bootstrapButton]',
})
export class BootstrapButtonDirective implements AfterViewInit {
    
    private _button: HTMLButtonElement | undefined;

    onTypeChanged() {
        this.assignClass();
    }
  
    private _btnType: string = "";

    private assignClass() {
        if (this._button) {
            this._renderer.addClass(this._button, `btn-${this.btnType}`);
        }
    }

    @Input()
    get btnType(): string {
        return this._btnType;
    }

    set btnType(v) {
        this._btnType = v;
        this.onTypeChanged();
    }

    constructor(private _el: ElementRef, private _renderer: Renderer2) {

    }

    ngAfterViewInit(): void {
        this._button = this._el.nativeElement as HTMLButtonElement;
        this._button.classList.add("btn");
        this.assignClass();
    }
  
}
