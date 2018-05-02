import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts = 0;
  @Input() created_at: Date;


  constructor() {
  }

  ngOnInit() {
  }

  loveIt() {
    this.loveIts++;
  }

  unLoveIt() {
    this.loveIts--;
  }
}
