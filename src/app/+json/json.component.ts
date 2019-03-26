import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const RESULT_KEY = makeStateKey<string>('result');

@Component({
  selector: 'json-view',
  templateUrl: './json.component.html'
})
export class JsonComponent implements OnInit {
  public subs: any;

  constructor(private http: HttpClient, private state: TransferState) {}

  ngOnInit() {
    if (this.state.hasKey(RESULT_KEY)) {
      this.subs = this.state.get(RESULT_KEY, null as any);
    } else {
      this.http.get(`/api/json`).subscribe( data => {
        this.subs = data;
        this.state.set(RESULT_KEY, this.subs);
      });
    }
  }
}
