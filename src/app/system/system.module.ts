import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import {BillPageComponent} from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlaningPageComponent } from './planing-page/planing-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import {SystemComponent} from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      SystemRoutingModule
  ],
  declarations: [
      BillPageComponent,
      HistoryPageComponent,
      PlaningPageComponent,
      RecordsPageComponent,
      SystemComponent,
      SidebarComponent
  ]
})

export class SystemModule {

}