import { Category } from '../categories/category';

export class Product {
	constructor(
		public id?: number,
		public name?: string,
		public price?: number,
		public categoryId?: number
	) //public category?: string
	{}
}
