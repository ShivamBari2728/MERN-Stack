function greet() {
  console.log(this);
}

greet(); //returns "window" in browser 

//---------

const student = {
  name: "Shivam",
  greet: function () {
    console.log(this.name);
  }
};

student.greet(); 

//-------
const student2 = {
  name: "Shivam",
  greet: () => {
    console.log(this.name);
  }
};

student2.greet();

//----------
const student3 = {
  name: "Shivam",
  greet: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

student3.greet();  //arrow function takes this from normal function.

//------------

function Person(name) {
  this.name = name;

  setTimeout(() => {
    console.log(this.name);
  }, 1000);
}

const p1 = new Person("Shivam");