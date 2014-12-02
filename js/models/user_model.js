App.UserModel= DS.Model.extend({
    login: DS.attr('string'),
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    age: DS.attr('integer')
});

App.UserModel.FIXTURES = [{
        id: '1',
        login: "songbird",
        firstname: "Iryna",
        lastname: "Ivko",
        age: '27'
    }, {
        id: '2',
        login: "Max",
        firstname: "Maxim",
        lastname: "Malahov",
        age: '20'
    }, {
        id: '3',
        login: "DragonFly",
        firstname: "Alex",
        lastname: "Watson",
        age: '40'
    }, {
        id: '4',
        login: "Kitty",
        firstname: "Kate",
        lastname: "Jasely",
        age: '30'
    }, {
        id: '5',
        login: "falcon",
        firstname: "David",
        lastname: "Gransonberry",
        age: '19'
    }];