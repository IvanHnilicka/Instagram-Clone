import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetallePostFeedComponent } from './detalle-post-feed/detalle-post-feed.component';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PostComponent } from './post/post.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

const routes = [
  { path: 'feed', component: FeedComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'post/:id', component: PostComponent},
  { path: 'postFeed/:id', component: DetallePostFeedComponent},
  { path: 'publicar', component: PublicacionComponent},
  { path: '**', component: FeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
