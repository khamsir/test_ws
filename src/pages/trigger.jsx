const Trigger = () => {
    const bearer = '508|wWQL9hM6wOLBriR1vOfPQDOqAOrfQfE6ACEq284V';

    const sendData = () => {
        fetch('https://be.caready.codr-staging.id/api/websocket/test', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearer}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log('Success:', data);
                alert('Data send!');
            })
            .catch((error) => {
                // console.error('Error:', error);
                alert('Gagal gan!');
            });

    }
    return (
        <div>
            <button type="button" onClick={sendData}>Send!</button>
        </div>
    )
}

export default Trigger;