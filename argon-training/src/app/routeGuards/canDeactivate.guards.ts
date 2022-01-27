import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SecondPageComponent } from "../second-page/second-page.component";

@Injectable({
  providedIn:'root'
})

export class canDeactivate implements canDeactivate
{
  canDeactivate(
    component: SecondPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return true;
  }
}