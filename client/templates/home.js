Template.home.created = function () {
    console.log('Created the home template');
};
Template.home.rendered = function () {
    console.log('Rendered the home template');
};
Template.home.destroyed = function () {
    console.log('Destroyed the home template');
};


//To display data in the home template, we will create a helper function //that will return a simplestring as follows

Template.home.helpers({
    exampleHelper: function () {
        return new Spacebars.SafeString('This text came from a helper with some<strong > HTML</strong >.');
    }
});

Template.home.helpers({
    // other helpers ...
    dataContextHelper: function () {
        return {
            someText: 'This text was set using a helper of the parent    template.',
            someNested: {
                text: 'That comes from "someNested.text"'
            }
        };
    }
});

//
Template.home.rendered = function () {
    console.log('Rendered the home template');
    console.log(this.find('p').innerHTML);
    this.find('p').innerHTML = 'We just replaced that text!';

    
};