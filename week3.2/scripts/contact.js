"use strict";

class Contact {
    constructor(fullName,contactNumber,emailAddress){
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    set FullName(fullName){
        this.m_fullname = fullName;
    }

    get FullName(){
        return this.m_fullname;
    }
    set ContactNumber(contactNumber)
    {
        this.m_contactnumber = contactNumber;
    }
    get ContactNumber(){
        return  this.m_contactnumber;
    }
    set EmailAddress(emailAddress)
    {
        this.m_emailaddress = emailAddress;
    }
    get EmailAddress(){
        return  this.m_emailaddress;
    }
    toString(){
        return `FullName:${this.FullName} \n Contact Number:${this.ContactNumber} \n Email Address :${this.EmailAddress} `;
    }

    serialize(){
        if(this.FullName !==""&& this.ContactNumber!== ""&& this.EmailAddress !== ""){
            return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
        }
        console.error("one or more of the contact attribute is empty or missing");
        return null;
    }
    deserialize(data){
         let propertyArray = data.split(",");
         this.FullName  = propertyArray[0];
        this.ContactNumber  = propertyArray[1];
        this.EmailAddress  = propertyArray[2];
    }

}
