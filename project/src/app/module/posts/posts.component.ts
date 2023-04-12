import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


export interface IPost {
  id: string;
  author?: string;
  title?: string;
  category?: string;
  date?: string;
}


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  dataSource: MatTableDataSource<IPost>;
  posts: IPost[] = [];
  displayedColumns: string[] = ['id', 'author', 'title', 'category', 'date'];

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  ngOnInit(){
    this.dataSource.sort = this.sort ;
  }


  constructor() {
    this.posts = [
       {id: '1', author: 'John', title: 'Hello', category: 'Angular', date: '2020-01-01'},
       {id: '2', author: 'Jack', title: 'Ballo', category: 'NodeJS', date: '2020-02-01'},
        {id: '3', author: 'San', title: 'Allo', category: 'Express', date: '2021-01-01'},];
    this.dataSource = new MatTableDataSource(this.posts);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
