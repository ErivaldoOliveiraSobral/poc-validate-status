import React from "react";
import axios from "axios";

export default class GitRepos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repositories: []        
        }
    }

    async componentDidMount() {
        await axios.get('https://api.github.com/users/erivaldooliveirasobral/repos', {
            validateStatus: status => status === 200
        }).then(result => { // Se cair aqui deu bom :)
            this.setState({ repositories: result.data })
        }).catch(error => { // Se cair aqui de ruim :(
            this.setState({ repositories: [ { name: "Deu ruim!" } ] });
        });
    }

    render() {
        const { repositories } = this.state;
        const { loading } = this.props; 
        return (
            <>
                {loading 
                ? (<div>Loading...</div>)
                : <table>
                    {repositories.length > 0 && (
                        repositories.map((repo, index) => {
                            return (<li key={index}>{repo.name}</li>);
                        })
                    )}
                </table>
                }
            </>
        );
    }
}