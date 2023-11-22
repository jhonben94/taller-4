import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './utils/auth.interceptor';
import { AuthGuard } from './utils/auth.guard';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        KeycloakAngularModule,
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        AuthGuard,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,
        {
            provide: KeycloakService,
            useValue: new KeycloakService(),
          },

          {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
          },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { 

    constructor(private readonly keycloak: KeycloakService) {
        this.initKeycloak();
      }
    
      private initKeycloak(): void {
        const config = {
          url: 'http://localhost:8080',
          realm: 'quarkus',
          clientId: 'backend-service',
        };
    
        this.keycloak.init({
          config,
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false,
          },
          enableBearerInterceptor: true,
        });
      }
}


