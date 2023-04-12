import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() { }


  @Output() toggelSideBarForMe = new EventEmitter();

  onToggleSideBar() {
    this.toggelSideBarForMe.emit();
    setTimeout(() => {

      window.dispatchEvent(
        new Event('resize')
      );
    }
      , 300);
  }
  }


 
