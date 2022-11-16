
export class AddressBookModule {
  firstName : String = "";
  lastName : String= "";
  address : String = "";
  city : String = "";
  state : String = "";
  zip : String = "";
  phone : String = "";

  constructor(firstName:String,lastName:String,address:String,city:String,state:String,zip:String,phone:String){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
  }

}
