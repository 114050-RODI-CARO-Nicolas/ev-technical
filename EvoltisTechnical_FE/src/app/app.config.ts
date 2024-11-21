import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { routes } from './app.routes';
import { appStoreConfig } from '../core/store/store.config';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    ConfirmationService,
    ...appStoreConfig
  ]
};
