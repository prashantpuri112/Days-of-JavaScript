const day = 'Monday';
switch (day) {
    case 'Tuesday':
        console.log('Doing Courses');
        console.log('Go to Hackathon');
        break; // Without break the codes keeps continues executing
    case 'Wednesday':
        console.log('Write daily Blog');
        break;
    case 'Thursday': //Specifying cases at once
    case 'Friday':
        console.log('Post on LinkdIn');
        break;
    case 'Saturday':
        console.log('Record Videos for Youtube');
        break;
    case 'Sunday':
    case 'Monday':
        console.log('Workout and Weekend');
        break;
    default:
        console.log('Not a valid day!');

}

//Same logic with If else statement
if (day === 'Tuesday') {
    console.log('Doing Courses');
    console.log('Go to Hackathon');

} else if (day === 'Wednesday') {
    console.log('Write daily Blog');

} else if (day === 'Thursday' || day === 'Friday') {
    console.log('Post on LinkdIn');

} else if (day === 'Saturday') {
    console.log('Record Videos for Youtube');

} else if (day === 'Sunday' || day === 'Monday') {
    console.log('Workout and Weekend');

} else {
    console.log('Not a valid day!');
}