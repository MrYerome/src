import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Disque } from '../disque';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DisquesService } from '../disques.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-disque',
  templateUrl: './search-disque.component.html',
  styleUrls: ['./search-disque.component.css']
})
export class SearchDisqueComponent implements OnInit {
  private searchTerms = new Subject<string>();
  disques$: Observable<Disque[]>;

  constructor(private disquesService : DisquesService, private router:Router) { }

  ngOnInit() {
    this.disques$ = this.searchTerms.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term: string) => this.disquesService.searchDisques(term))
    );
  }
  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDisc(d: Disque) {
    this.router.navigate(['/disque', d.id]);

  }


}
