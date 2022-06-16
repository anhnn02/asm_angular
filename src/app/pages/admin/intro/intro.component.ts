import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IInfo } from 'src/app/models/Info';
import { IntroService } from 'src/app/services/introduce.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  info: IInfo = {
    fullname: "",
    img: "",
    education: "",
    workExperience: "",
  }
  constructor(
    private infoService: IntroService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.infoService.getInfo(id).subscribe(data => {
        this.info = data
      })
    }
  }
  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.infoService.updateInfo(this.info).subscribe(data => {
        alert("Update successfully!")
      })
    } 
  }
}
