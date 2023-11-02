import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent {
  isLoading: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscription = this.dataService.isLoading$.subscribe(isLoading => {
        console.log("Valor de isLoading:", isLoading); // Deberías ver este cambiar de true a false.
        this.isLoading = isLoading;
    });
}


  ngOnDestroy() {
      this.subscription.unsubscribe();
}

}
