window.App = Ember.Application.create({});
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function () {
    this.resource('users', function () {
        this.resource('user', {path: ':user_id'});
        this.resource('add');
    });
});

App.UsersRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('UserModel');
    }
});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo('users');
    }
});

App.UserRoute = Ember.Route.extend({
    model: function (params) {
        return this.store.find('UserModel', params.user_id);
    }
});

App.UsersController = Ember.ObjectController.extend({
    actions: {
        deleteUser: function (id) {
            if (!id) {
                return;
            }
            this.store.find('UserModel', id).then(function (userobj) {
                userobj.destroyRecord();
            });
            this.transitionToRoute('users');
        }
    }
});

App.UserController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        editUser: function () {
            this.set('isEditing', true);
        },
        doneEditing: function () {
            this.set('isEditing', false);
        }
    }
});

App.AddController = Ember.ObjectController.extend({
    actions: {
        addUser: function () {
            var login = this.get('login');
            var firstname = this.get('firstname');
            var lastname = this.get('lastname');
            var age = this.get('age');
            if (!login.trim() || !firstname.trim() || !lastname.trim() || !age.trim()) {
                return;
            }

            var newUser = this.store.createRecord('UserModel', {
                login: login,
                firstname: firstname,
                lastname: lastname,
                age: age
            });
            
            this.set('login', '');
            this.set('firstname', '');
            this.set('lastname', '');
            this.set('age', '');

            // !!!!!!!!!!!!!!     Save the new model. BUGGY DOES NOT WORK
            //newUser.save();

        }
    }
});