import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import CustomStore from 'devextreme/data/custom_store';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  dataSource: CustomStore;

  ngOnInit(): void {
  }

    constructor(@Inject(Http) http: Http) {
      this.dataSource  = new CustomStore({
        load: function (loadOptions) {
          let params = '?';

          params += 'skip=' + loadOptions.skip || 0;
          params += '&take=' + loadOptions.take || 12;

          if (loadOptions.sort) {
            params += '&orderby=' + loadOptions.sort[0].selector;
            if (loadOptions.sort[0].desc) {
              params += ' desc';
            }
          }
          return http.get('https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems' + params)
            .toPromise()
            .then(response => {
              const json = response.json();

              return {
                data: json.items,
                totalCount: json.totalCount
              };
            })
            .catch(error => { throw new Error('Data Loading Error'); });
        }
      });
    }
}
