import {HttpClient} from '@angular/common/http'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-lyric-search',
  templateUrl: './lyric-search.component.html',
  styleUrls: ['./lyric-search.component.css'],
})
export class LyricSearchComponent implements OnInit {
  data: any = []
  lyrics: string = ''
  searchTerm: String
  url: string = 'https://api.lyrics.ovh'

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  searchSongs() {
    this.lyrics = ''
    const apiUrl = this.url + '/suggest/' + this.searchTerm

    this.httpClient.get(apiUrl).subscribe((res) => {
      this.data = res

      return this.data
    })
  }

  getLyrics(artist: string, songTitle: string) {
    const lyricsApi = this.url + '/v1/' + artist + '/' + songTitle

    this.httpClient.get(lyricsApi).subscribe((res: any) => {
      this.lyrics = res.lyrics.replace(/(\r\n|\r|\n)/g, '\n').split('\n')

      return this.lyrics

      //what i need to do to the lyrics .replace(/(\r\n|\r|\n)/g, '<br>')
    })
  }
}
