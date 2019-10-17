// CODE here for your Lambda Classes

class Person {
    constructor(attr); {
    this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
}

speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
}
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty,
            this.favLanguage = attr.favLanguage,
            this.catchPhrase = attr.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground,
            this.className = attr.className,
            this.favSubjects = attr.favSubjects, 
     }

    listSubjects() {
        return ''
    }

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

class Project Manager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName,
            this.favInstructor = attr.favInstructor
    }
    standUp(name, channel){
        return `${name} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(name, subject, student){
        `${name} debugs ${student.name}'s code on ${subject}`;
    }
}