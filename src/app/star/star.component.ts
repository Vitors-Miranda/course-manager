import { Component, Input, OnChanges} from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    // onchanges ele passa o valor assim q identificar, não q iniciar

    @Input()
    rating: number = 0;
    
    starWidth: number;
    // elege a variável para receber valor externo
    ngOnChanges(): void {
        this.starWidth = this.rating * 74/5;
    }

}