import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  imports: [NgFor],
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.sass'],
})
export class ValueComponent implements OnInit {
  url = 'http://localhost:5000/api/values';
  values: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getValues();
  }

  getValues() {
    this.http.get(this.url).subscribe({
      next: (response) => {
        this.values = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
