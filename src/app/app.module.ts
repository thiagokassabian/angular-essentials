import { Injector, NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component'
import { ProductsComponent } from './views/products/products.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductReadComponent } from './components/products/product-read/product-read.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableComponent } from './components/templates/table/table.component';

registerLocaleData(ptBr);

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		NavComponent,
		ProductsComponent,
		ProductCreateComponent,
		ProductReadComponent,
		TableComponent,
		ProductUpdateComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatCardModule,
		MatSnackBarModule,
		MatFormFieldModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'pt' },
		{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
	],
	bootstrap: [AppComponent],
	exports: []
})
export class AppModule {
	/**
   * Allows for retrieving singletons using `AppModule.injector.get(MyService)`
   * This is good to prevent injecting the service as constructor parameter.
   */
	static injector: Injector;
	constructor(injector: Injector) {
		AppModule.injector = injector;
	}
}
