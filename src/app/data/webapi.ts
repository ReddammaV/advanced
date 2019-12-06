import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../interfaces/book';


export class Webapi implements InMemoryDbService {
    createDb() {
        let bookDetails: Book[] = [
            { id: 1, name: "Angular 8", price: "800", description: "Angular 8 Books" },
            { id: 2, name: "Angular 5", price: "458", description: "Angular 5 Books" },
            { id: 3, name: "C#", price: "950", description: "C# Books" },
            { id: 4, name: "Java", price: "780", description: "Java Books" },
            { id: 5, name: "php", price: "682", description: "php Books" },
        ];
        return { books : bookDetails };
    }
}
