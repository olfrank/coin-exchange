import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className= "footer">
            <div>
                <p>Powered by: <a className="link" href="https://coinpaprika.com/">coinpaprika.com</a></p>
            </div>
            <div>
                <p>Created and Designed by: <a className= "link" href="https://github.com/olfrank">Ollie Francis</a> </p>
            </div>
            </footer>
        )
    }
}
