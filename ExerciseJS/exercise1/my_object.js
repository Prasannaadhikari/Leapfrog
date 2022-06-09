// Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.
// Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:


// Name: ABC School of Schoolery, Date: 2000
// Name: BCD School of Trickery, Date: 2006



let me={
    name: 'Prasanna Adhikari',
    address: 'Kathmandu',
    email: 'prasanna@gmail.com',
    intrest: ['exploring places', 'coding'],
    education: [
        { name: 'KCE', enrolled_date:'2017-06-01'},
        {name: 'AASS', enrolled_date:'2015-05-01'},
        {name:'MBHSS', enrolled_date:'2010-04-01'}
    ]
}

for(const item of me.education){
    console.log(`Name: ${item.name}, Date: ${item.enrolled_date}`);
}





