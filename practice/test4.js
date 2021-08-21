let arr = [
    { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
    { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
  ];
  const places = [
    {
      id: 1,
      city: "Biloxi",
      country: "United States",
      address: "Walton"
    },
    {
      id: 2,
      city: "Carmen de Viboral",
      country: "Colombia",
      address: "Drewry"
    },
    {
      id: 3,
      city: "New Mīrpur",
      country: "Pakistan",
      address: "Morningstar"
    },
    {
      id: 4,
      city: "Seropédica",
      country: "Brazil",
      address: "Parkside"
    },
    {
      id: 5,
      city: "Ponjen",
      country: "Indonesia",
      address: "Gina"
    }
  ];
  function test5(arr) {
    for(let i = 0; i < arr.length; i++){
      const ul = document.querySelector("#container");
      const makeLi = document.createElement('li');
      const makeDiv1 = document.createElement('div');
      const makeDiv2 = document.createElement('div');
      const makeDiv3 = document.createElement('div');
      ul.appendChild(makeLi);
      makeLi.appendChild(makeDiv1);
      makeLi.appendChild(makeDiv2);
      makeLi.appendChild(makeDiv3);
      makeDiv1.classList.add("country");
      makeDiv2.classList.add("city");
      makeDiv3.classList.add("address");
      makeDiv1.textContent = arr[i].country;
      makeDiv2.textContent = `City : ${arr[i].city}`;
      makeDiv3.textContent = `Address : ${arr[i].address}`;
    }
  }
  //test5(places);
  

  function printRole(user) {
    console.log(user.role);
  }
  
  function test4(arr) {
    for(let i = 0; i < arr.length; i++){
      const ul = document.querySelector('#container');
      const makeLi = document.createElement('li');
      const makeA = document.createElement('a');
      const makeDiv = document.createElement('div');
      ul.appendChild(makeLi);
      makeLi.appendChild(makeA);
      makeA.classList.add('name');
      makeA.textContent = `${arr[i].firstName} ${arr[i].lastName}`;
      makeLi.appendChild(makeDiv);
      makeDiv.classList.add('age');
      makeDiv.textContent = arr[i].age;
      makeA.onclick = function () {
        printRole(arr[i]);
      }
    }
    
  }
  test4(arr);

  
