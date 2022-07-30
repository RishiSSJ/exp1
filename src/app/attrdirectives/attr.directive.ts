import { Attribute, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from "@angular/core";

@Directive({
    selector: "[pa-attr]"
})

export class PaAttrDirective {

    @Input("pa-attr")
    bgClass : string | null = "";

    constructor(private element : ElementRef){}

    // ngOnInit() : void {
    //     this.element.nativeElement.classList.add(this.bgClass || "bg-danger", "font-weight-bold")
    // }

    ngOnChanges(changes : SimpleChanges){
        let change = changes['bgClass'];
        let classList = this.element.nativeElement.classList;
        if(!change.isFirstChange() && classList.contains(change.previousValue)){
            classList.remove(change.previousValue);
        }
        if(!classList.contains(change.currentValue)){
            classList.add(change.currentValue);
        }
        
    }

}
