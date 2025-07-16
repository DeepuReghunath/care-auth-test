import { Component, inject, OnInit } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface Item {
  id: number;
  name: string;
  description: string;
}

interface ListState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private http = inject(HttpClient);

  private readonly store = new ComponentStore<ListState>({
    items: [],
    loading: false,
    error: null
  });

  readonly vm$ = this.store.select(state => state);

  constructor() { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.store.patchState({ loading: true, error: null });
  }
}