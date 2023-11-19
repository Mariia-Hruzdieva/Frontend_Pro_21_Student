class Student {
    gradesArr = [];
    attendance = [];

    constructor(name, surname, yearOfBirth, gradesArr) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.gradesArr = gradesArr;
    }
    getFullName() {
        return this.name + ' ' + this.surname;
    }
    age() {
        const today = new Date();
        const age = today.getFullYear() - this.yearOfBirth;

        console.log('age' + age);
    };
    averageGrade() {
        const sum = this.gradesArr.reduce((a, b) => a + b, 0);
        const avg = sum / this.gradesArr.length;

        return avg;
    }
    present() {
        if (this.attendance.length < 25) {
            this.attendance.push(true);
        }
    }
    absent() {
        if (this.attendance.length < 25) {
            this.attendance.push(false);
        }
    }
    summary() {
        const averageGrade = this.averageGrade();

        const sum = this.attendance.reduce((a, b) => a + +b, 0);
        const averageAttendance = sum / this.attendance.length;

        if (averageGrade > 90 && averageAttendance > 0.9) {
            console.log(this.getFullName() + ': Молодець!');

            return;
        } else if (
            (averageGrade < 90 && averageAttendance > 0.9)
            || (averageGrade > 90 && averageAttendance < 0.9)
        ) {
            console.log(this.getFullName() + ': Добре, але можна краще');

            return;
        }

        console.log(this.getFullName() + ': Редиска!');
    }
}

let student = new Student('Ann', 'Peters', 1999, [95, 95, 100, 95, 95, 100]);
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();

student.summary();
student.age();

let student2 = new Student('John', 'Ivanov', 2000, [95, 95, 100]);
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();

student2.summary();
student2.age();
