// CODE here for your Lambda Classes
/*Person
First we need a Person class. This will be our base-class
Person receives name age location all as props
Person receives speak as a method.
This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props*/
////Person class/////////////
class Person {
    constructor(info) {
        this.name = info.name,
        this.age = info.age,
        this.gender = info.age,
        this.location = info.location

    }//closing constructor
    talk() {
        console.log(`HeyYa my ${this.name} my existence is at${this.location}`);
    }
}//closing person
/////class Instructor///////////
class Instructor extends Person {
    constructor(iProps) {
        super(iProps);
        this.speciality = iProps.speciality,
        this.favLanguage = iProps.favLanguage,
        this.catchPhrase = iProps.catchPhrase
    }//closes
    demo(subject) {
        return (`${student.name} receives a perfect score on ${subject}`);
    }//closes demo
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}`);
    }//closes grade
    stdsGrade(student) {
        let addSubtract = Math.Random();

    }
}//closes Instructor class
//////student class/////////////


class Student extends Person {
    constructor(stdsAttrs) {
        super(stdsAttrs);
        this.previousBackground = stdsAttrs.previousBackground,
        this.className = stdsAttrs.className,
        this.favSubjects = stdsAttrs.favSubjects,
        this.grade = stdsAttrs.grade = 95
    }//closes constructor
    listSubjects() {
        this.favSubjects.map(subj => console.log(subj));
    }
    PRAssignments() {
        return (`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge() {
        return (`${student.name} has begun sprint challenge on ${subject}`);
    }
}//closes student
class TeamLeader extends Instructor {
    constructor(tlProps) {
        super(tlProps);
        this.gradClassName = tlProps.gradClassName,
        this.favInstructor = tlProps.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
const lola = new Student ({
    name: 'Lola Stevens',
    location: 'Portland, TN',
    age: 21,
    gender: 'F',
    previousBackground: 'Dancer',
    className: 'FT23',
    favSubjects: ['HTML', 'Less', 'Javascript'],
    grade: 75

});
const brit = new Instructor({
    name: 'Brit',
    location: 'Zoom Meeting Client',
    age: 31,
    gender: 'F',
    specialty: 'instructing',
    favLanguage: ['html', 'Javascript', 'nodejs' ],
    catchPhrase: 'whoops'
});
const morty = new Student ({
    name: 'Morty Smith',
    location: 'Portland, TN',
    age: 14,
    gender: 'M',
    previousBackground: 'Student',
    className: 'FT1',
    favSubjects: ['C++', 'C#', 'Python'],
    grade: 80

});
const rick = new Instructor({
    name: 'Rick Sanchez',
    location: 'Zoom Meeting Client',
    age: 'Ageless',
    gender: 'M',
    specialty: 'Science',
    favLanguage: ['html', 'Javascript', 'nodejs' ],
    catchPhrase: 'wubbalubbadubdub'
});
const geralt = new TeamLeader({
    name: 'Phoenix Person',
    location: 'Bird World',
    age: 100,
    gender: 'male',
    specialty: 'being a bird',
    favLanguage: 'Birdish',
    catchPhrase: 'None',
    gradClassName: 'FSW3',
    favInstructor: 'Britt'
});
 console.log()