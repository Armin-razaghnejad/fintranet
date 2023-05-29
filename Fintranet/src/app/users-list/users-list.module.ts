import { NgModule } from "@angular/core";
import { UserListRoutingModule } from "./users-list-routing.module";
import { UsersListComponent } from "./users-list.component";
import { SideBarComponent } from "./sidebar/side-bar.component";
import { PrimeNgModule } from "../libs/primeng.module";
import { ShareModule } from "../libs/share.module";
import { SlideMenuModule } from 'primeng/slidemenu';

@NgModule({
    declarations: [
        UsersListComponent,
        SideBarComponent
    ],
    imports: [
        SlideMenuModule,
        PrimeNgModule,
        ShareModule,
        UserListRoutingModule,
    ]
})

export class UserListModule { }