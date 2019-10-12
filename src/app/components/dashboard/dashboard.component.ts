import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users:any
  countBasic:any
  countAdvance:any

  constructor() { }
  ngOnInit() {
    $("#adminLogin").click(function (e) {
      e.preventDefault();
    });
  }
  getList()
  {
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList",
      type: 'GET',
      dataType: "json",
      success: function (response) {
        this.users=response.data.data;

        var data_users='';
        $.each(this.users,function (key,value) {
          data_users+='<tr>';
          // data_users+='<td>'+key+'</td>';
          data_users+='<td>'+value.firstName+'</td>';
          data_users+='<td>'+value.lastName+'</td>';
          data_users+='<td>'+value.email+'</td>';
          data_users+='<td>'+value.service+'</td>';
          data_users+='</tr>';
        });
        $('#data_table').append(data_users);

        console.log(response);
        
        this.countBasic=this.users.filter(function (o)
        {
          return o.service==( "basic") || o.service==( "Basic")
        }).length;
        $('#BasicData').append(this.countBasic);

        this.countAdvance=this.users.filter(function (o)
        {
          return o.service==("advance")
        }).length;
        $('#AdvanceData').append(this.countAdvance);


        
        
      }
    });
  }

}
