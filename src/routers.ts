import {Routes} from '@angular/router';
import {HomeComponent} from './app/home/home.component';
import {AdminComponent} from './app/admin/admin.component';
import {Error404Component} from './app/error404/error404.component';
import {NetworkComponent} from './app/network/network.component';
import {SoftwareComponent} from './app/software/software.component';
import {HardwareComponent} from './app/hardware/hardware.component';
import {TipsComponent} from './app/tips/tips.component';
import {CommonModule} from '@angular/common';
import {DetailComponent} from './app/detail/detail.component';
import {LoginComponent} from './app/login/login.component';



export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
   {path: 'admin', component: LoginComponent},
    {path: 'listnetwork', component: NetworkComponent},
    {path: ':listnetwork/detail/:Alias', component: DetailComponent},
    {path: ':listhardware/detail/:Alias', component: DetailComponent},
    {path: 'listsoftware', component: SoftwareComponent},
    {path: 'listhardware', component: HardwareComponent},
    {path: ':listsoftware/detail/Alias', component: DetailComponent},
    {path: ':listtip/detail/Alias', component: DetailComponent},
    {path: 'listtip', component: TipsComponent},
    {path: '' , redirectTo: '/home', pathMatch : 'full'},
   {path: '**', component: Error404Component},


];
