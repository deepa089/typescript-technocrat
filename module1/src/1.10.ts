{
    // union type

     type FrontendDeveloper = 'fakibazzDeveloper' | 'juniordeveloper'  ; // string leteral type
     type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper' ;

     type Developer = FrontendDeveloper | FullStackDeveloper ;

     const newDeveloper :FrontendDeveloper = 'fakibazzDeveloper' ;

     type User = {
        name : string;
        email? :string,
        gender : "male" | "female",
        bloodGroup : "B+" | "A+" | "O-" | "AB+"
     }

     const user1 : User = {
        name : " X",
        bloodGroup : "A+",
        gender : "male" 
     }

     // intersection types 
     type FrontendDeveloper2 = {
        skills : string[],
        designation1 : 'Frontend Developer'
     } 
     
     type BackendDeveloper2 = {
        skills : string[],
        designation2 : 'Backend Developer'
     }

     type FullStackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2

     const fullStackDeveloper : FullStackDeveloper2 = {
        skills : ["HTML", "CSS", "JavaScript"],
        designation1: "Frontend Developer",
        designation2 : "Backend Developer"
     }
}