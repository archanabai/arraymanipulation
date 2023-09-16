const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i=0 ; i< data.length;i++){
        if(data[i].profession =="developer"){
            console.log(data[i].name)
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    data.push({});
    let dataname=prompt("Enter the name");
    let dataage=prompt("Enter the age");
    let dataprofession=prompt("Enter the profession");
    for(let i=0 ;i< data.length;i++){
        if(data[i].name==undefined){
          data[i].name=dataname;
        }
        if(data[i].age==undefined){
            data[i].age=dataage;
          }
          if(data[i].profession==undefined){
            data[i].profession=dataprofession;
          }
    }
    console.log([data[data.length-1]]);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i=0;i<data.length;i++){
        if(data[i].profession=="admin"){
            let x = data.splice(i,1);
            console.log(x);
        }
    }
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let arr1= [1,2,3];
    let arr2= [4,5,6];
    let sum =arr1.concat(arr2);
    console.log(sum);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum=0;
    for(let i=0 ;i<data.length;i++){
        sum= sum+data[i].age ;
    }
    console.log("The avarage age is" +" "+sum/data.length );
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let flag =false;
    for(let i=0;i<data.length;i++){
        if(data[i].age > 25){
           flag=true;
        }
        
    }
    if(flag==true){
        console.log("true")
    }
    else {
        console.log("false");
    }

  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    for(let i=0 ;i<data.lenght-1;i++){
        if(data[i].profession != data[i+1].profession){
            console.log(data[i].profession)
        }
    }
    console.log(data[data.length-1].profession);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) => a.age-b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
      for(let i=0;i<data.length;i++){
        if(data[i].name=="john"){
            data[i].profession="manager";
        }
        console.log(data[i]);
      }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let count=0;
       for(let i=0;i<data.length;i++){
        if(data[i].profession=="developer" || data[i].profession=="admin"){
            count++;
        }
       }
       console.log("total count of developers and admins" + " "+ count);
  }





