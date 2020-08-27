class Person {
  name = "dell";
  getName() {
    return this.name;
  }
}

// 常规继承，子类方法重写会覆盖父类方法
// 解决：方法重写覆盖后，用super调用父类的方法  super指向父类方法
/*
** super使用场景
*/
// super.getName()就是父类的getName
class Teacher10 extends Person {
  getTeacherName() {
    return "Teacher";
  }
  getName() {
    return super.getName() + "lee";
  }
}

const teacher = new Teacher10();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
