import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from './perfil/perfil.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
import { HttpClientModule } from '@angular/common/http';
import { PopoverComponent } from './popover/popover.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { DetallePostFeedComponent } from './detalle-post-feed/detalle-post-feed.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriaContenidoComponent } from './historia-contenido/historia-contenido.component';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { initializeApp } from 'firebase/app';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    DetallePostFeedComponent,
    PerfilComponent,
    PostsComponent,
    PostComponent,
    TabsComponent,
    PopoverComponent,
    PublicacionComponent,
    HistoriasComponent,
    HistoriaContenidoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())

  ],
  providers: [Camera, NativeGeocoder],
  bootstrap: [AppComponent],
  exports: [RoutesModule]
})
export class AppModule {}
