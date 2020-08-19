import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Word} from './word';



@Injectable({
  providedIn: 'root'
})
export class PostwordService {
  readonly myurl = 'https://localhost:44339/api/Endings';

  constructor(private http: HttpClient) { }
  sendPost( str: string ): any{
    if ( str != null ) {
      const postWord: Word = {
        word: str
      };
      return this.http.post(this.myurl, postWord);
    }
  }
}
