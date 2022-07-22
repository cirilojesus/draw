import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(

    ) {
  }

  ngOnInit() {
  }


  logout(){
    // sessionStorage.removeItem('token');
    // window.location.reload();
  }


}
