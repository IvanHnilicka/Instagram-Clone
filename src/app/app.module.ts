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
    PublicacionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RoutesModule]
})
export class AppModule { }
