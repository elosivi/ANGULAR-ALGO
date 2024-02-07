// Angular 15.x code
import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector:'...',
    template: `
    <div class="label" [style.color]="color">{{label}}</div>
  `
})
export class LabelComponent {
    @Input() label !: String;
    @Input() color !: String;
}

// #region Preview
@Component({
    template: `<label-component label='Hello World!' color='red'></label-component>`
})
export class PreviewComponent {
}
// #endregion Preview

// #region Module declaration - Do not Change
@NgModule({
    imports: [CommonModule],
    declarations: [PreviewComponent, LabelComponent],
    entryComponents: [PreviewComponent]
})
export class PreviewModule { }
// #endregion Module declaration