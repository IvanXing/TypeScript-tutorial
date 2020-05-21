class Person {
  name = 'dell';
  getName() {
    return this.name;
  }
}

// 方法重写覆盖后，用super调用父类的方法  super指向父类方法
class Teacher10 extends Person {
  getTeacherName() {
    return 'Teacher';
  }
  getName() {
    return super.getName() + 'lee';
  }
}

const teacher = new Teacher10();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
