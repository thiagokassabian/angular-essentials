import { AfterViewInit, Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@Input() cols: Array<any> = []
	@Input() data: any = []
	dataSource = new MatTableDataSource([
		{
			"id": 1,
			"name": "Caneta",
			"price": 5.89
		},
		{
			"id": 2,
			"name": "Caderno",
			"price": 10.25
		},
		{
			"id": 3,
			"name": "Borracha",
			"price": 3.76
		},
		{
			"name": "Geladeira",
			"price": 2549.9,
			"id": 4
		}
	]);

	displayedColumns: Array<string> = [];

	constructor() {

	}
	ngOnInit(): void {
		this.displayedColumns = this.cols.map(col => col.name)
		console.log('oninit' + this.data)
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
		console.log('afterinit' + this.data)
	}
}
