export class User
{
   public name : string; 
   public age : number; 
   public email : string; 
   public password : string ; 
   public id : string; 
  constructor(name , age , email, password){
      this.name = name; 
      this.age = age; 
      this.email = email ; 
      this.password = password; 
  }
    setID(id)
    {
        this.id = id; 
    }
}

export interface MeasureData{
    code : string , 
    dose : string, 
    reading: string , 
    td : string,
    key?:string , 
    time?:any,
    
}

export interface UserInterface{
    name:string , 
    age? : number , 
    email : string ,
    password :string , 
    key? : string , 
}