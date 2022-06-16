import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IInfo } from 'src/app/models/Info';
import { IntroService } from 'src/app/services/introduce.service';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {
  info!: IInfo;
  constructor(private infoService: IntroService
  ) { 
    this.getInfo()
  }

  ngOnInit(): void {
    
  }
  getInfo(){
    this.infoService.getInfo(1).subscribe(data => {
      this.info = data
    })
  }
}
