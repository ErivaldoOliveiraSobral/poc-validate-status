import React, { useState, useEffect } from 'react';
import axios from "axios";

export default () => {
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        
        const fetchData = async (page) => {
            await axios.get(`https://api.github.com/users/erivaldooliveirasobral/repos?page=${page}`, {
                validateStatus: status => status === 200
            }).then(result => {
                if (result.data.length > 0) {
                    setRepos(oldRepos => [ ...oldRepos, ...result.data ]);
                    fetchData(page + 1);
                }
            })
        }

        fetchData(1);

    }, [])

    return (
        <>
            {repos.map((repo, index) => (
                <a href={repo.html_url}>
                    <li key={index}>{repo.name}</li>
                </a>
            ))}
        </>
    );
}