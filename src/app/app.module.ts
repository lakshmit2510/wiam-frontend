import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconsProviderModule } from "./icons-provider.module";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
// import {MatIconModule} from '@angular/material/icon';
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { UnAutorizedComponent } from "./pages/un-autorized/un-autorized.component";
import { TemplatesModule } from "./templates/templates.module";

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, NotFoundComponent, UnAutorizedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TemplatesModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
