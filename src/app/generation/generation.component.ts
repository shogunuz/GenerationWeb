import { Component, OnInit } from '@angular/core';
import {PostwordService} from '../postword.service';
import {Dict, Word} from '../word';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css'],
  providers: [PostwordService]
  })
export class GenerationComponent implements OnInit {
  constructor( private postword: PostwordService) { }

  dict: Dict;
  str: '';
  val = true;

  ngOnInit(): void {
  }


  sumbit(): void{
    const  newstr = this.str;

    if (this.str != null && this.str.length < 20 && this.str.length > 2 ){
      this.postword.sendPost(newstr)
        .subscribe( res => {
          this.dict = res;
        });
    }
    /*if (2 < this.str.length || this.str.length > 20){
      this.val = false;
    }*/

  }





}
