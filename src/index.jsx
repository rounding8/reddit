
import axios    from 'axios';
import React    from 'react';
import ReactDOM from 'react-dom';

import 'css/app';

import Home from 'containers/home';

const App = {

    init: function() {
        console.log('=> App.init()');

        // Initialize Application State
        // App.State = {...};

        // Initialize Application Globals/Constants
        App['api-url'] = 'http://www.reddit.com/r/all/new.json';

        App.load();
    },

    load: function() {
        console.log('=> App.load()');

        // get initial/default reddit API `/new` endpoint url data
        App.get();
    },

    get: function() {
        // retrieve api data based on `App['api-url']` value
        // after user modifies input form field then clicks submit, the new value will be attempted as a reddit api endpoint for App['api-url']
        axios.get(App['api-url']).then(response => App.parse(response).exec()).catch(error => console.error(error));
    },

    parse: function(data) {
        console.log(data);

        // right now this works for `/hot`, `/new`, and `/top` endpoints

        // it does NOT work for `/random` bc it has a different response structure
        // requiring diff parsing; update later..
        App['data'] = data;

        return this;
    },

    exec: function() {
        console.log('=> App.exec()');

        const content = (
            <React.Fragment>
                <h1>UpKeep Coding Test ∞ Raven N. Allan</h1>
                <Home app={App} />
            </React.Fragment>
        );

        App.render(content);
    },

    render: function(element) {
        ReactDOM.render(element, document.getElementById('root'));
    },

    update: function(endpoint) {
        // update reddit api endpoint url w/ new one user entered in input form field
        App['api-url'] = `http://www.reddit.com/r/all/${endpoint}.json`;

        // use this new concatenated str to attempt to get new api data; this currently assumes it's a valid url..
        App.get();
    }
};

window.onload = () => {
    App.init();
};
