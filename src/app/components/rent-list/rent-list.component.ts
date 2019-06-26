import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NestoriaService } from '../../services/nestoria-service.service';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss']
})
export class RentListComponent implements OnInit {

  searchForm: FormGroup;
  constructor( private nestoria: NestoriaService ) {
    this.searchForm = new FormGroup({
        cityName: new FormControl('brighton'),
        selectedCountry: new FormControl('uk')
      });
  }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.searchForm.value);
  }
}
