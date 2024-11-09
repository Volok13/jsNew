let getUp = [
    true, -456, false, 34, ['first', 'second', 'third'], 'key', 657, 823, 'mango'
];
let number = getUp[5];
console.log(getUp[0]);
console.log(getUp[1]);
console.log(getUp[2]);
console.log(getUp[3]);
console.log(getUp[4]);
console.log(getUp[6]);
console.log(getUp[7]);
console.log(getUp[8]);
console.log(getUp[9]);
console.log(number[0])

let book1 = {
    title: 'Pet cemetery',
    pageCount: 400,
    genre: 'horror',
    autors : [
        {name: 'Stephen King'},
        {age: 76}
    ]
}
let book2 = {
    title: 'Look in my dreams',
    pageCount: 300,
    genre: "fiction",
    autors: [
        {name: 'Max Kidruk'},
        {age: 41}
    ]
};
let book3 = {
    title: 'Dark tower',
    pageCount: 600,
    genre: 'fiction',
    autors: [
        {name: 'Stephen King'},
        {age: 76}
    ]
}
console.log(book1, book2, book3);

let person = [
    {name: 'kokos', username:'kokos150', password: 'ndfngngn'},
    {name: 'Karlos', username: 'kotter', password: 'fdkf3434'},
    {name: 'Lise', username: 'leff', password:'kn5nk345'},
    {name: 'Sergey', username: 'first', password: 'm4lk5m45'},
    {name: 'Jasmine', username: 'flour', password: '35kml5m45'},
    {name: 'Fiona', username: 'fink', password: '535nn5kn'},
    {name: 'Maxc', username: 'men', password: '4ml54m54'},
    {name: 'Carter', username: 'cant', password: 'n5knk45n'},
    {name: 'Bella', username: 'bbbbe', password: 'nkn54kn45'},
    {name: 'Edvard', username: 'end', password: '5nk3n45'},
]
console.log(person[0].password);
console.log(person[1].password);
console.log(person[2].password);
console.log(person[3].password);
console.log(person[4].password);
console.log(person[5].password);
console.log(person[6].password);
console.log(person[7].password);
console.log(person[8].password);
console.log(person[9].password);
console.log(users['password'])

let temperature = [
    {day: 'monday', morning: 19, afternoon: 23, evening: 16},
    {day: 'tuesday', morning: 16, afternoon: 20, evening: 13},
    {day: 'wednesday', morning: 20, afternoon: 28, evening: 18},
    {day: 'thursday', morning: 23, afternoon: 32, evening: 20},
    {day: 'friday', morning: 12, afternoon: 18, evening: 10},
    {day: 'saturday', morning: 21, afternoon: 39, evening: 21},
    {day: 'sunday', morning: 14, afternoon: 24, evening: 16}
];
console.log(temperature);

let x = 32;
if (x !== 0) {
    console.log(true)
}else{
    console.log(false)
}

let time = 32;
if (time >= 0 && time < 15) {
    console.log('first');
}else if(time >= 15 && time < 30) {
    console.log('second');
}else if(time >= 30 && time < 45) {
    console.log('third');
}else {
    console.log('fourth');
}

let day = 15;
if (day >= 1 && day <= 10){
    console.log('first');
}else if (day >= 10 && day <= 20){
    console.log('second');
}else if (day >= 20 && day <= 31) {
    console.log('third');
}else {
    console.log('???');
}

let dayNumber = 3;
switch (dayNumber) {
    case 1 :
        console.log('Monday');
        break
    case 2 :
        console.log('thursday');
        break;
    case 3 :
        console.log('wednesday');
        break;
    case 4 :
        console.log('thursday');
        break;
    case 5 :
        console.log('friday');
        break;
    case 6 :
        console.log('saturday');
        break;
    case 7 :
        console.log('sunday');
        break;
    default:
        console.log('???');
}

let num1 = 25;
let num2 = 25;
if (num1 > num2) {
    console.log(num1);
}else if(num1 < num2) {
    console.log(num2);
}else{
    console.log(num1);
}


let x = null;
switch (x) {
    case null:
    case undefined:
    case 0:
    case '':
        x = 'default';
        break;
    default:
        console.log(x);
        break
}
console.log(x);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i = 0; i + 6; i++) {
    if (coursesAndDurationArray[i].monthDuration > 5) {
        console.log('super')
    }
}
