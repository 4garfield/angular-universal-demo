import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const RESULT_KEY = makeStateKey<string>('json-result');

@Component({
  selector: 'json-view',
  templateUrl: './json.component.html'
})
export class JsonComponent implements OnInit {
  public subs: any;

  constructor(private http: HttpClient, private state: TransferState) { }

  ngOnInit() {
    const baseUrl = 'http://localhost:3000';
    if (this.state.hasKey(RESULT_KEY)) {
      this.subs = this.state.get(RESULT_KEY, null as any);
    } else {
      this.http.get(baseUrl + `/api/json`).subscribe(data => {
        this.subs = data;
        this.state.set(RESULT_KEY, this.subs);
      });
    }
  }
}
