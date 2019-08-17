import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cacheable } from "ngx-cacheable";

@Injectable({
  providedIn: "root"
})
export class TableService {
  constructor(private httpClient: HttpClient) {}

  @Cacheable()
  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    );
  }
}
