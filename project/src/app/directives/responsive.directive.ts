import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {

  constructor( private element: ElementRef ,
               private breakpointObserver: BreakpointObserver) {

                this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web]).subscribe(
                  (      result: { matches: any; }) => {
                  if (result.matches) {
                    console.log('Matches');
                  }
                }
                );


              }








}
