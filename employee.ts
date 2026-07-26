class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Department:", this.department);
    }
}

const emp = new Employee("Vyshnavi", 50000, "IT");
console.log(emp.name);
emp.display();

const manager = new Manager("Anu", 70000, "HR");
manager.showDepartment();
