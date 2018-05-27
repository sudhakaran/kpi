import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { AppBootstrapModule } from './app-bootstrap.module';
import { TreeNodeComponent } from './tree-node/tree-node.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
