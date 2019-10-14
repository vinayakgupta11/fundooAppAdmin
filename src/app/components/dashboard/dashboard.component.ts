import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users:any
  countBasic:any
  countAdvance:any
  // value:any
  p: number = 1;
  

  constructor(private auth: AuthService) { }
  ngOnInit() {
    $("#adminLogin").click(function (e) {
      e.preventDefault();
    });
    
    
  }
  Logout()
  {
    if(this.auth.isLoggednIn())
    {
    this.auth.logout()
    }

  }
  getList()
  {
    $(document).ready(function () {
    $.ajax({
      url: "http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList",
      type: 'GET',
      dataType: "json",
      success:  (response)=> {
        this.users=response.data.data;
        var data_users='';
        $.each(this.users, (key,value)=> {
          data_users+='<tbody id="comp">';
          // data_users+='<td>'+ key +'</td>';
          data_users+='<td>'+value.firstName+'</td>';
          data_users+='<td>'+value.lastName+'</td>';
          data_users+='<td>'+value.email+'</td>';
          data_users+='<td>'+value.service+'</td>';
          data_users+='</tbody>';
        });
        $('table tbody').replaceWith(data_users);
        console.log(response);
        this.countBasic=this.users.filter(function (o)
        {
          return o.service==( "basic") || o.service==( "Basic")
        }).length;
        $('#BasicData').replaceWith(this.countBasic);
        this.countAdvance=this.users.filter(function (o)
        {
          return o.service==("advance")
        }).length;
        $('#AdvanceData').replaceWith(this.countAdvance);
      }
    });
  });
  }
  basic()
  {
    $(document).ready(function () {
    $.ajax({
      url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList',
      type: 'GET',
      dataType: 'json',
      success: function (response) {
      this.data = response.data.data;
      this.data = $.grep(this.data, function (n, index) {
      return n["service"] == "basic";
      });
      console.log("basic data is ", this.data);
      var usersData = '';
      usersData += '<tbody id="comp">';
      $.each(this.data, function (key, value) {
      usersData += '<tr>';
      usersData += '<td>' + value.firstName + '</td>';
      usersData += '<td>' + value.lastName + '</td>';
      usersData += '<td>' + value.role + '</td>';
      usersData += '<td>' + value.service + '</td>';
      usersData += '</td>'
      });
      usersData += '</tbody>';
      $('table tbody').replaceWith(usersData);
      }
      });
    });
  

  }
  advance()
  {
    $(document).ready(function () {
    $.ajax({
      url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList',
      type: 'GET',
      dataType: 'json',
      success: function (response) {
      this.data = response.data.data;
      this.data = $.grep(this.data, function (n, index) {
      return n["service"] == "advance";
      });
      console.log("basic data is ", this.data);
      var usersData = '';
      usersData += '<tbody id="comp">';
      $.each(this.data, function (key, value) {
      usersData += '<tr>';
      usersData += '<td>' + value.firstName + '</td>';
      usersData += '<td>' + value.lastName + '</td>';
      usersData += '<td>' + value.role + '</td>';
      usersData += '<td>' + value.service + '</td>';
      usersData += '</td>'
      });
      usersData += '</tbody>';
      $('table tbody').replaceWith(usersData);
      }
      });
    });
  }
  search()
  {
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toString().toLowerCase();
      $("#comp tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        return true;
      });
    });

  }
  

}
