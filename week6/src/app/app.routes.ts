import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdComponent } from './ad/ad.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

export const routes: Routes = [
    {
        path: "home", // without "/"
        component: HomeComponent,
        children: [
            {
                path: "ad",
                component: AdComponent
            },
        ]
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "product-list",
        component: ProductListComponent,
    },
    {
        path: "product-list/:id",
        component: ProductDescriptionComponent,
    }
];
