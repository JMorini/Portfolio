import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
import {LyricSearchComponent} from './components/lyric-search/lyric-search.component'
import {InfiniteScrollComponent} from './components/infinite-scroll/infinite-scroll.component'
import {ProductPageComponent} from './components/product-page/product-page.component'

const routes: Routes = [
  {
    path: 'lyrics',
    component: LyricSearchComponent,
  },
  {
    path: 'scroll',
    component: InfiniteScrollComponent,
  },
  {
    path: 'product-page',
    component: ProductPageComponent,
  },
]

@NgModule({
  declarations: [
    LyricSearchComponent,
    InfiniteScrollComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [LyricSearchComponent],
  providers: [],
})
export class ProjectsModule {}
