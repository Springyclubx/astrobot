import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DepartmentService } from '../../controller/department/department.service';
import { Department } from '../../model/department';

@Component({
  selector: 'app-departmant-app',
  standalone: true,
  imports: [FormsModule, RouterModule, FormsModule],
  templateUrl: './departmant-app.component.html',
  styleUrl: './departmant-app.component.scss'
})
export class DepartamentoComponent implements OnInit {
  departments: Department[] = [];
  departmentEdited: Department | null = null;

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      console.log('Usuário não autenticado. Redirecionando para login...');
      // Redirecione para a página de login
      this.router.navigate(['/login']);
      return;
    }

    console.log('Token no localStorage:', authToken);
    this.departmentService.findAll().subscribe((departments) => {
      this.departments = departments;
    });
  }

  addDepartment(): void {
    this.departmentEdited = { id: 0, name: '', phone: '' };
  }

  saveDepartment(department: Department): void {
    if (department.id === 0) {
      this.departmentService.post(department);
    } else {
      this.departmentService.put(department);
    }
    this.departmentEdited = null;
  }

  editDepartment(department: Department): void {
    this.departmentEdited = { ...department };
  }

  removeDepartment(id: number): void {
    this.departmentService.delete(id);
  }

  cancelEdit(): void {
    this.departmentEdited = null;
  }
}