import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    // criando uma tag
    // selector: 'app-course-list',
    // puxando o conteudo pelo caminho
    templateUrl: './course-list.component.html'
})


export class CourseListComponent implements OnInit {

    filtredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: string;
    constructor (private courseService: CourseService){

    }
    ngOnInit(): void{
        // chama assim que for criado
        this._courses = this.courseService.retrieveAll();
        this.filtredCourses = this._courses;
    }

    // quando digita no input
    set filter (value: string){
        this._filterBy = value;

        this.filtredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
        // verificando se há a palavra/caracter em sequência informada

    }

    //quando atualiza o input
    get filter(){
        return this._filterBy;
    }
}