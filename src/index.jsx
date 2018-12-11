
import axios    from 'axios';
import React    from 'react';
import ReactDOM from 'react-dom';

import Home from 'containers/home';

const App = {

    init: function() {
        console.log('=> App.init()');

        App.load();
    },

    load: function() {
        console.log('=> App.load()');

        // const REDDIT_API_URL = document.getElementById('root')...

        axios.get('http://www.reddit.com/r/all/new.json').then(response => App.parse(response).exec()).catch(error => console.error(error));
    },

    parse: function(data) {
        console.log(data);

        App['data'] = data;

        return this;
    },

    exec: function() {
        console.log('=> App.exec()');

        const content = (
            <Home app={App} />
        );

        App.render(content);
    },

    render: function(element) {
        ReactDOM.render(element, document.getElementById('root'));
    }
};

window.onload = () => {
    App.init();
};
