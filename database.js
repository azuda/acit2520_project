let Database = {
    cindy: {
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}]
    },
    alex: {
        reminders: []
    } 
}


const auth_data = [
{
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
},
{
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
},
{
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
},
];

const userModel = {
findOne: (email) => {
    const user = auth_data.find((user) => user.email === email);
    if (user) {
    return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
},
findById: (id) => {
    const user = auth_data.find((user) => user.id === id);
    if (user) {
    return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
},
};

module.exports = { auth_data, userModel };


module.exports = { Database, auth_data, userModel };