import { Component, OnInit } from '@angular/core';
import { HttpService } from "src/app/http.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  formData = {}
  discount = 0
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.formData = this.http.getForm()
    var date = new Date(this.formData['purchaseDate']);
    console.log(date.getDate() % 2);
    this.discount = date.getDate() % 2 == 0 ? 30 : 40
    console.log(this.formData)
  }

}