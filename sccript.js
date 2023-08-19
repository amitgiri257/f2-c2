// const students = [
//     {
//       ID: 1,
//       name: 'Alice',
//       age: 21,
//       grade: 'A',
//       degree: 'Btech',
//       email: 'alice@example.com'
//     },
//     {
//       ID: 2,
//       name: 'Bob',
//       age: 22,
//       grade: 'B',
//       degree: 'MBA',
//       email: 'bob@example.com'
//     },
//     {
//       ID: 3,
//       name: 'Charlie',
//       age: 20,
//       grade: 'C',
//       degree:'Arts',
//       email: 'charlie@example.com'
//     }
//   ]; 
  
//   function displayStudents() {
//     const tableBody = document.querySelector("#student-table tbody");
//     tableBody.innerHTML = "";

//     students.forEach(student => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${student.ID}</td>
//             <td>${student.name}</td>
//             <td>${student.age}</td>
//             <td>${student.grade}</td>
//             <td>${student.degree}</td>
//             <td>${student.email}</td>
//             <td>
//                 <button class="edit-button" data-id="${student.ID}">Edit</button>
//                 <button class="delete-button" data-id="${student.ID}">Delete</button>
//             </td>
//         `;
//         tableBody.appendChild(row);
//     });
// }

let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
 
    
    let nameInput= document.querySelector("#name");
    let emailInput= document.querySelector("#email");
    let gpaInput= document.querySelector("#gpa");
    let ageInput= document.querySelector("#age");
    let degreeInput= document.querySelector("#degree");
   
    btnAdd.addEventListener('click', () => {
        var n=1;
        let name =nameInput.value;
        let email =emailInput.value;
        let gpa =gpaInput.value;
        let age =ageInput.value;
        let degree =degreeInput.value;
        
        let template = `
                    <tr>
                        <td>${n}</td>
                     
                        <td>${name}</td>
                        <td>${email}</td>
                        <td>${gpa}</td>
                        <td>${age}</td>
                        <td>${degree}  <a href="#" ><img src="./sources/edit 1.svg"></a><a href="#" ><img src="./sources/trash-2 1.svg"></a></td>
                    </tr>`;
                   
                    table.innerHTML += template;
    });
    