import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container/content-container.component';
import { LayoutRoutingModule } from "./layout-routing.module";


@NgModule({
  declarations: [
    ContentContainerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule {
}
