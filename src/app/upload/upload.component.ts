import {Component, OnInit} from "@angular/core";
import { NgForm, FormBuilder } from "@angular/forms";

import {Track} from "../shared/models/track.model";
import {TracksService} from "../shared/services/tracks.service";

@Component({
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
  providers: [TracksService]
})
export class UploadComponent implements OnInit {
  artist: any;
  title: any;

  constructor(public trackService: TracksService) {
  }

  ngOnInit(): void {
    this.artist = {
      _id: 1,
      stage_name: 'kitten'
    }
    this.title = "hello";
  }

  model = new Track(1, "Hello", "", "");

  async onSubmit(f: NgForm) {
    console.log(f.form.getRawValue())
    // let formData = new FormData();
    // formData.append('key1', 'value1');
    // formData.append('key2', 'value2');

    // List key/value pairs
    // for(let [name, value] of formData) {
    //   alert(`${name} = ${value}`); // key1=value1, then key2=value2
    // }

    // let response = await fetch('http://localhost:7000/api/upload', {
    //   method: 'POST',
    //   body: new FormData(f)
    // });

    // let result = await response.json();

    // alert(result.message);
  }

}
