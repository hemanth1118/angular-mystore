import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { SekharComponent } from './sekhar/sekhar.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin/admin.guard';
import { AuthService } from './auth/auth.service';



@NgModule({
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    RouterModule.forRoot([
      { path: 'adding', component: ProductListComponent, canActivate:[AdminGuard] },
      { path: 'sekhar', component: SekharComponent, canActivate:[AdminGuard]},
      { path: '', component: LoginComponent,  },
      { path: 'products/:productId', component: ProductDetailsComponent,  },
      { path: 'cart', component: CartComponent, canActivate:[AdminGuard]},
      { path:'shipping', component: ShippingComponent, canActivate:[AdminGuard]}
    ]),
    NgbModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    SekharComponent,
    LoginComponent,
   
  ],
  providers: [AdminGuard,AuthService],
  bootstrap: [ AppComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }

