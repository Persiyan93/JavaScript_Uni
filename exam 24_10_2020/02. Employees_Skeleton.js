function solveClasses() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }
        addTask(id, taskName, priority) {
            let task = {
                id,
                taskName,
                priority
            }
            if (priority === 'high') {
                this.tasks.unshift(task);
            }
            else {
                this.tasks.push(task);
            }
            return `Task id ${id}, with ${priority} priority, has been added.`
        }
        doTask() {
            if (this.tasks.length === 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
            let cuurrentTask = this.tasks.shift();
            return cuurrentTask.taskName;
        }
        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
        }
        reviewTasks() {
            let resultMessage = 'Tasks, that need to be completed:\n';
            this.tasks.forEach(task => {
                resultMessage += `${task.id}: ${task.taskName} - ${task.priority}\n`;
            });
            return resultMessage.toString().trimEnd();

        }
    }
    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.baseSalary = 1000 + Number(bonus);
            this.experience = experience;
        }
        learn(years) {
            this.experience += years;
        }
    }
    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.baseSalary = 1000 + bonus;
            this.experience = Number(experience) + Number(5);
        }
        changeTaskPriority(taskId) {

            let task = this.tasks.filter(x => x.id === taskId);
            let indexofTask = this.tasks.indexOf(task);
            this.tasks.splice(indexofTask, 1);
            if (task.priority === 'high') {

                task.priority = 'low';
                this.tasks.push(task);
            }
            else {
                task.priority = 'high';
                this.tasks.unshift(task);
            }
            return task;
        }

    }
    return {
        Developer,
        Junior,
        Senior
    }
}