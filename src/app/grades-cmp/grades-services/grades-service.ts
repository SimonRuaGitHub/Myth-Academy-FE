
import { HttpClient } from '@angular/common/http';

export abstract class GradesService{

    constructor(protected httpClient:HttpClient){}
}