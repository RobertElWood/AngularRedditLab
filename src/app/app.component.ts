import { Component } from '@angular/core';
import { ChildData, Reddit } from 'src/Reddit';
import { RedditAPIService } from './reddit-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaupersReddit';

  subData : Reddit[] = [];

  childData : ChildData[] = [];

  baseURL : string = "https://www.reddit.com/";

  postNumber : number = 0;

  constructor(private redditAPI : RedditAPIService) {

  }

  SearchPostData(index: number) : void {

    this.subData = [];
    this.childData = [];

    this.postNumber = index;

    this.redditAPI.GetSubredditData().subscribe((result : Reddit) => {

      this.subData.push(result);
      this.GetChildData(this.subData, index);

    });

  }

  GetChildData(subData: Reddit[], index: number) {

    this.childData.push(subData[0].data.children[index - 1].data);

  }
}
