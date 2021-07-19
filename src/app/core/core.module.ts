import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorIntl } from '../shared/components/paginator-intl/paginator-intl';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

//Components
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(ptBr);

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
	align: 'right',
	allowNegative: true,
	decimal: ',',
	precision: 2,
	prefix: 'R$ ',
	suffix: '',
	thousands: '.',
};

@NgModule({
	declarations: [HeaderComponent, SidenavComponent, FooterComponent],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule,
		HttpClientModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatSidenavModule,
		MatSnackBarModule,
	],
	exports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		HeaderComponent,
		SidenavComponent,
		FooterComponent,
		MatSidenavModule,
	],
	providers: [
		{ provide: MatPaginatorIntl, useClass: PaginatorIntl },
		{ provide: LOCALE_ID, useValue: 'pt' },
		{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
		{ provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
	],
})
export class CoreModule {}
