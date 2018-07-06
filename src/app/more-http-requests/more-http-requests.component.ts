import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-http-requests',
  templateUrl: './more-http-requests.component.html',
  styleUrls: ['./more-http-requests.component.css']
})
export class MoreHttpRequestsComponent implements OnInit {
  data: Object;
  constructor() { }

  ngOnInit() {
  }
  // makeHeaders(): void {
  //   const headers: Headers = new Headers();
  //   headers.append('X-API-TOKEN', 'ng-book');
  //   const opts: RequestOptions = new RequestOptions();
  //   opts.headers = headers;
  //   this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
  //     .subscribe((res: Response) => {
  //     this.data = res.json();
  //     });
  // }
}
