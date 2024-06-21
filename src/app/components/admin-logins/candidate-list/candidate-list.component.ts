import {Component, ViewChild, inject} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ImagesService } from '../../../services/images.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  name: string;
  email: string;
  mobileNumber: number;
  course: string;
  createdAt: Date;
}

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.scss'
})
export class CandidateListComponent {
    service= inject(ImagesService);
    displayedColumns: string[] = ['name', 'email', 'mobileNumber', 'course', 'createdAt'];
    dataSource =new MatTableDataSource<PeriodicElement>();
    @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.getList();
  }

  getList() {
    this.service.listEnquiryForm().pipe(take(1)).subscribe({
      next: (res) =>{
        this.dataSource.data = res.result;
        this.dataSource.paginator = this.paginator;
      }
    })
  }
}
