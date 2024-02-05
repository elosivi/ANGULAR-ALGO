// Angular 15.x code
import { Component, Input, NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*****
 * MENU 1
 */
@Component({
    selector:'menu1-component',
    template: `
    <div id="menuComp">You are at menu 1.</div>
  `
})
export class Menu1Component {
}

/*****
 * MENU 2
 */
@Component({
    selector:'menu2-component2',
    template: `
    <div id="menuComp">You are at menu 2.</div>
  `
})
export class Menu2Component {
}

/*****
 * home
 */
@Component({
    selector:'menu-display-component',
    template: `
  <a [routerLink]="['/menu1']" id="menu1">menu1</a><br/>
  <a [routerLink]="['/menu2']" id="menu2">menu2</a>
  <router-outlet></router-outlet>
  `
})
export class MenuDisplayComponent {
}

/*****
 * route
 */
export const appRoutes = [
    {
        path:"menu1",
        component:Menu1Component

    },
    {
        path:"menu2",
        component:Menu2Component
    }
]



// #region Preview
@Component({
    template: `    
      <menu-display-component></menu-display-component>
    `
})
export class PreviewComponent { }
// #endregion Preview


// #region Module declaration - Do not Change
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

@NgModule({
    imports: [
        RouterModule,
        AppRoutingModule
    ],
    declarations: [PreviewComponent, Menu1Component, Menu2Component, MenuDisplayComponent],
    entryComponents: [PreviewComponent],
    providers: [{provide: APP_BASE_HREF, useValue : '/'}]
})
export class PreviewModule { }
// #endregion Module declaration