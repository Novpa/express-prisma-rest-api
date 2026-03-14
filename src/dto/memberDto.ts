export class createMemberDto {
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly address: string;
  public readonly email: string;
  public readonly phoneNumber: string;
  constructor(
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    phoneNumber: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
