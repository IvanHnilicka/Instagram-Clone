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

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PerfilComponent,
    PostsComponent,
    PostComponent,
    TabsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RoutesModule]
})
export class AppModule { }
