import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScandataModel } from '../../models/scandata.model';

@Injectable()
export class HistorialProvider {

  private historial:ScandataModel[] = [];

  constructor(public http: HttpClient) {

  }

}
