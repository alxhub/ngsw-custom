import {StaticContentCache} from '@angular/service-worker/plugins/static';
import {RouteRedirection} from '@angular/service-worker/plugins/routes';
import {Push} from '@angular/service-worker/plugins/push';
import {bootstrapServiceWorker} from '@angular/service-worker/worker';

bootstrapServiceWorker({
  manifestUrl: 'ngsw-manifest.json',
  plugins: [
    StaticContentCache(),
    RouteRedirection(),
    Push(),
  ],
});
