//  A TESTER
/**
 * on n'impacte que CounterComponent
 *
 * ce que doit faire CounterComponent
 * prendre un message en input
 * Lire une valeur d'intervalle saisie par l'utilisateur (entier, en
 * millisecondes)
 *  Envoyer le message en tant qu'événements de manière périodique vers son "output" ????
 *  Il doit générer des événements de type "string" vers tick à intervalle régulier correspondant à la valeur saisie par l'utilisateur.
 *
 * ce que doit faire DisplayComponent
 *
 * https://stackblitz.com/edit/counter-codingame?file=src%2Fapp%2Fcounter%2Fcounter.component.ts
 *
 */
import { Component, Output, Input, EventEmitter, OnDestroy, } from '@angular/core';

@Component({
    selector: 'counter-component',
    template: `
  <input id="intervalInput" type="number" [value]="inputValue" (input)="setValue($event)"/>
  <button id="intervalSetButton" (click)="setPeriod()">Set interval</button>
  `,
})
export class CounterComponent implements OnDestroy {
    public inputValue: string = '';
    public thePeriod: any; //NodeJS.Timer;

    @Input() message!: string;
    @Output() public tick: EventEmitter<string> = new EventEmitter();

    public setValue(e: Event) {
        const target = e.target as HTMLTextAreaElement;
        this.inputValue = target.value;
    }

    public setPeriod(): void {
        this.thePeriod = setInterval(() => this.tick.emit(this.message), +this.inputValue);
    }

    ngOnDestroy(): void {
        clearInterval(this.thePeriod);
    }
}


@Component({
    selector:'display-component',
    template: `
    <counter-component [message]="'Hello world'" (tick)=counterTick($event)></counter-component>
    <div>{{message}} {{counter}}</div>`
})
export class DisplayComponent{
    public counter: number= 0;
    public message: string;

    public counterTick( message: string ): void {
        this.message = message;
        this.counter ++;
    }
}

Component({
    template:`<display-component></display-component>`
})
export class PreviewComponent{ }
// #endregion Preview

// #region Module declaration - Do not Change
@NgModule({
    declarations: [ PreviewComponent, DisplayComponent,CounterComponent ],
    entryComponents: [ PreviewComponent ],
})
export class PreviewModule {}