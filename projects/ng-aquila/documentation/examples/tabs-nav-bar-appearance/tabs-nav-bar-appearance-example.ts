import { Component } from '@angular/core';

/**
 * @title Appearance for Tabs Navbar
 */
@Component({
  templateUrl: './tabs-nav-bar-appearance-example.html',
})
export class TabsNavBarAppearanceExampleComponent {

  links = [
    {
      label: 'Subpage 1',
      path: '...',
      disabled: false
    },
    {
      label: 'Subpage 2',
      path: '...',
      disabled: false
    },
    {
      label: 'Subpage 3',
      path: '...',
      disabled: true
    }
  ];

  currentLink = this.links[0];

  setActiveLink(link) {
    if (!link.disabled) {
      this.currentLink = link;
    }
  }
}
