import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unapproved-ans',
  templateUrl: './unapproved-ans.component.html',
  styleUrls: ['./unapproved-ans.component.scss']
})
export class UnapprovedAnsComponent implements OnInit {
  qaDetails=[];
  adminData: any;
  constructor(private router: Router) { }
  ngOnInit() {
    this.GetAnsList();
  }
  NavigateToDashboard() {
    this.router.navigate(['dashboard']);
  }
  Remove(id)
  {
    let index= this.qaDetails.indexOf(id);
    this.qaDetails.splice(index,1);
  }
  GetAnsList() {
      $.ajax({
        url: "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/getUnApprovedAnswer",
        headers:{  Authorization:localStorage.getItem('id') },
        contentType: "application/json",
        type: 'get',
        dataType: "json",
        success: (response) => {
          this.qaDetails=response.data.reverse();
          console.log('8888', this.qaDetails);
        }
      });
  }
  onApprove(id)
  {
    console.log('sgjds',id);
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/approve/"+ id,
      data: this.adminData,
      headers:{  Authorization:localStorage.getItem('id') },
      contentType: "application/json",
      type: 'POST',
      dataType: "json",
      success: (response) => {
        console.log('11111', response);
        this.GetAnsList(); 
      }
    }); 
  }

  onReject(id)
  {
    console.log('sgjds',id);
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/reject/"+ id,
      data: this.adminData,
      headers:{  Authorization:localStorage.getItem('id') },
      contentType: "application/json",
      type: 'POST',
      dataType: "json",
      success: (response) => {
        console.log('11111', response);
        this.GetAnsList();
        
      }
    });
    
  }
}
