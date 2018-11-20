import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { ProductsComponent } from './components/public/products/products.component';
import { ShoppingCartComponent } from './components/public/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/public/check-out/check-out.component';
import { OrderSuccessComponent } from './components/public/order-success/order-success.component';
import { LoginComponent } from './components/public/login/login.component';
import { UserOrdersComponent } from './components/user/user-orders/user-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { NotFoundComponent } from './components/public/not-found/not-found.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my/orders', component: UserOrdersComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
