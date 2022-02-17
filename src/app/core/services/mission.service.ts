import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MissionService {
  // observe string source
  private missionAnnouncedSource = new Subject<string>()
  private missionConfirmedSource = new Subject<string>()

  // observable string stream
  missionAnnounced$ = this.missionAnnouncedSource.asObservable()
  missionConfirmed$ = this.missionConfirmedSource.asObservable()

  // service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}