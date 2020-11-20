import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Track } from './shared/models/track.model';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  // constructor() { }

  createDb() {
    const tracks = [
      { id: "11", title: "Dr Nice", avatarSrc: "", creator: "" },
      { id: "12", title: 'Narco', avatarSrc: "", creator: ""  },
      { id: "13", title: 'Bombasto', avatarSrc: "", creator: ""  },
      { id: "14", title: 'Celeritas', avatarSrc: "", creator: ""  },
      { id: "15", title: 'Magneta', avatarSrc: "", creator: ""  },
      { id: "16", title: 'RubberMan', avatarSrc: "", creator: ""  },
      { id: "17", title: 'Dynama', avatarSrc: "", creator: ""  },
      { id: "18", title: 'Dr IQ', avatarSrc: "", creator: ""  },
      { id: "19", title: 'Magma', avatarSrc: "", creator: ""  },
      { id: "20", title: 'Tornado', avatarSrc: "", creator: ""  }
    ];

    return {tracks};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(tracks: Track[]): number {
  //   return tracks.length > 0 ? Math.max(...tracks.map(track => track.id)) + 1 : 11;
  // }
}
