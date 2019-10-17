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
        return (`${student.name} loves to talk about this ${subject}`);
    }//closes demo
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject} 😇`);
    }//closes grade
    //Math.floor(Math.random()*10) 
    giveGrade(student) {
       let plusMinusGrade = Math.random();

        if(plusMinusGrade > 0.5) {
            student.grade += Math.floor(Math.random() * Math.random() * 10);
                return `Points added to ${student.name} 😇! Current Grade: ${student.grade}`;
        }// closes if statement
        else { 
            student.grade -= Math.floor(Math.random() * Math.random() * 10);
              return `Points subtracted from ${student.name} 🤐! Current grade: ${student.grade}`;
        }
    }//closes give grade



    
}//closes Instructor class
//////student class/////////////


class Student extends Person {
    constructor(stdsAttrs) {
        super(stdsAttrs);
        this.previousBackground = stdsAttrs.previousBackground,
        this.className = stdsAttrs.className,
        this.favSubjects = stdsAttrs.favSubjects,
        this.grade = stdsAttrs.grade
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
    graduate() {
        return (this.grade < 70 ? "You must flex ~_~ Then try again" : "You Graduated!!!");
    }
}//closes student
// bool y = (x == 42) ? true : false;

/*This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School

If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score. */


///////Team Leader //////////////////////
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
const cindy = new Student ({
    name: 'Cindy Stevens',
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
    favInstructor: 'Rick'
});
console.log(brit.grade(cindy, 'User Interface'));
console.log(brit.giveGrade(cindy));
console.log(cindy.graduate());