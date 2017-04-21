import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing }        from './app.routing';

import { AppComponent } from './app.component';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PostCashComponentComponent } from './post-cash-component/post-cash-component.component';
import { JoniJoniComponentComponent } from './joni-joni-component/joni-joni-component.component';
import { OrangeMoneyComponentComponent } from './orange-money-component/orange-money-component.component';
import { TigoCashComponentComponent } from './tigo-cash-component/tigo-cash-component.component';
import { WesternUnionComponentComponent } from './western-union-component/western-union-component.component';
import { MoneyGramComponentComponent } from './money-gram-component/money-gram-component.component';
import { RyaComponentComponent } from './rya-component/rya-component.component';
import { CrmComponent } from './crm/crm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponentComponent,
    AccueilComponent,
    PostCashComponentComponent,
    JoniJoniComponentComponent,
    OrangeMoneyComponentComponent,
    TigoCashComponentComponent,
    WesternUnionComponentComponent,
    MoneyGramComponentComponent,
    RyaComponentComponent,
      CrmComponent,
      DashboardComponent,
      ECommerceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
