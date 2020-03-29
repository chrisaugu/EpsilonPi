//in categories.service.ts
getRadios(): Promise<RadioModel[]> {
  return this.http.get("./assets/radios.json")
  .toPromise()
  .then(res => res.json() as RadioModel[])
}