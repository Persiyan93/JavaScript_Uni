function host(endpoint) {

}
export async  function createTeam(team) {
    const userToken=localStorage.getItem('userToken');
    if (!userToken) {
        throw new Error('User is not logged in!')
    }
    return (await fetch(`https://team-manager-c9598.firebaseio.com/teams.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(team)
   
    })).json();
}