export class User {
  private fname: string;
  private lname: string;

	constructor(fname:string) {
		this.fname = fname;
	}

	getFirstname() {
	  return this.fname;
  }

  getLastname() {
	  return this.lname;
  }
}
