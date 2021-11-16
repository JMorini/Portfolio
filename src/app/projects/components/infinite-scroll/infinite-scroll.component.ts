import {HttpClient} from '@angular/common/http'
import {Component, HostListener, OnChanges, OnInit} from '@angular/core'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css'],
})
export class InfiniteScrollComponent implements OnInit, OnChanges {
  url: string = 'https://jsonplaceholder.typicode.com/posts?'
  limit: number = 15
  page = 1
  posts: any = []

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.getMorePosts()
    }
  }

  constructor(private httpClient: HttpClient) {}

  // calling the posts as soon as the page loads
  ngOnInit(): void {
    this.getPosts()
  }

  ngOnChanges(): void {}

  //how we get the posts from the api
  getPosts() {
    const apiUrl = this.url + '_limit=' + this.limit + '&_page=' + this.page

    this.httpClient.get(apiUrl).subscribe((res) => {
      this.posts = res

      return this.posts
    })
  }

  // increment adds 5 to the amount of articles we pull from the api then gets posts
  getMorePosts() {
    this.increment()
    const apiUrl = this.url + '_limit=' + this.limit + '&_page=' + this.page

    this.httpClient.get(apiUrl).subscribe((res) => {
      this.posts = res

      return this.posts
    })
  }

  //used to add 5 to the amount of articles we get from the api
  increment() {
    this.limit += 5
    return this.limit
  }
}
