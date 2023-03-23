import { NgModule } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

import { HomeComponent } from './Component/home.component';

import { AboutComponent } from './Component/about.component';

@NgModule({

    imports: [BrowserModule, ReactiveFormsModule, HttpModule, AppRoutingModule],

    declarations: [AppComponent, HomeComponent, AboutComponent],

    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],

    bootstrap: [AppComponent]

})

export class AppModule { }