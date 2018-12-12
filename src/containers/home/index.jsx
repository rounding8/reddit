
import PropTypes from 'prop-types';
import React     from 'react';

import List from 'components/list';

export default class Home extends React.Component {
    static propTypes = {
        app: PropTypes.object.isRequired
    }

    composeInputForm() {
        return (
            <form>
                <h2>http://www.reddit.com/r/all/<span id="endpoint">new</span>.json</h2>
                <input id="input" name="input" type="text" defaultValue="new" onChange={this.onInputChange} placeholder="endpoint" maxLength="50" size="30" required />
                <button id="submit" name="submit" onClick={this.onSubmitClick} type="button">UPDATE</button>
            </form>
        );
    }

    composeList(items) {
        return <List items={items.data['data'].children} />;
    }

    onInputChange() {
        const input = document.getElementById('input').value;

        // update text of endpoint in displayed reddit URL
        document.getElementById('endpoint').innerHTML = input;
    }

    onSubmitClick = () => {
        const input = document.getElementById('input').value;

        this.props.app.update(input);
    }

    render() {
        const input   = this.composeInputForm();
        const listing = this.composeList(this.props.app['data']);

        return (
            <div id="main">
                {input}
                {listing}
            </div>
        );
    }
}
