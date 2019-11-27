import { Component, OnInit  } from '@angular/core';
import { ReportsService } from '../dashboard.service';
import { Reports } from '../dashboard';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  id: string;

	private reports:Reports[];
    private username:String;
    private game:String;
    private report:String;
    private status:String;
    private datereported:Date;
  	private solution:String;
    private datesolved:Date;
  
	constructor(private reportsService:ReportsService, private router: Router, public authService: AuthService ) { }

	ngOnInit(){
    this.id = localStorage.getItem('token');
		this.getReports();
  }
  
  logout():void{
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
	
	getReports(){
    this.reportsService.getReports()
      .subscribe((data)=>{
        this.reports = data;
      });
  }
  

  
  
	deleteReports(id){
		 if(confirm("Are you sure you want to delete this User?")){
			this.reportsService.deleteReports(id)
				.subscribe((data)=>{
				console.log(data);
				this.getReports();
			});
		}
  }

  
	
}
