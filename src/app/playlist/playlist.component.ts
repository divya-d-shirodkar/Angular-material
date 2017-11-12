import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlist: Array<any>
  constructor() { 
    this.playlist = [{
      name: 'Tum mile',
      singer: 'Himesh',
      movie: 'tum mile'
    },
    {
      name: 'Break up song',
      singer: 'Arjit',
      movie: 'Ae dil mushkil'
    },
    {
      name: 'Suraj dooba',
      singer: 'Arjit',
      movie: 'Roy'
    },
    {
      name: 'Tum mile',
      singer: 'Himesh',
      movie: 'tum mile'
    },
    {
      name: 'Break up song',
      singer: 'Arjit',
      movie: 'Ae dil mushkil'
    },
    {
      name: 'Suraj dooba',
      singer: 'Arjit',
      movie: 'Roy'
    },
    {
      name: 'Tum mile',
      singer: 'Himesh',
      movie: 'tum mile'
    },
    {
      name: 'Break up song',
      singer: 'Arjit',
      movie: 'Ae dil mushkil'
    },
    {
      name: 'Suraj dooba',
      singer: 'Arjit',
      movie: 'Roy'
    },
    {
      name: 'Tum mile',
      singer: 'Himesh',
      movie: 'tum mile'
    },
    {
      name: 'Break up song',
      singer: 'Arjit',
      movie: 'Ae dil mushkil'
    },
    {
      name: 'Suraj dooba',
      singer: 'Arjit',
      movie: 'Roy'
    }];
  }

  ngOnInit() {
  }

}
