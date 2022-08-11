import { useState, useEffect } from "react";
import Echo from 'laravel-echo';
import Pusher from "pusher-js";

const Listener = () => {
    // const url = 'https://be.caready.codr-staging.id';
    // const ws_url = 'be.caready.codr-staging.id';

    const [data, setData] = useState([]);

    useEffect(() => {
        const bearer = '508|wWQL9hM6wOLBriR1vOfPQDOqAOrfQfE6ACEq284V';

        const echo = new Echo({
            broadcaster: 'pusher',
            key: 'b7972ccc676c3155d4fa',
            cluster: 'ap1',
            forceTLS: true,
        })

        // console.log(echo)
        echo.channel(`test.connection`) // diisi nama channel
            .listen(`.test.connection`, (e) => {
                console.log(e)  // e itu response websocket
                setData(prev => ([
                    ...prev,
                    e.message,
                ]))
            })
            .listen(`.test.case2`, (e) => {
                console.log(e)
            })
            .listen(`.test.case3`, (e) => {
                console.log(e)
            })
            .listen(`.test.case4`, (e) => {
                console.log(e)
            })

        echo.channel(`test.connection2`) // diisi nama channel
            .listen('.test.asd', (e) => {
                // disini aksi
            })

        // echo.private(`test.connection`)
        //     .listenForWhisper(`countdown`, (e) => {
        //         console.log('etst')
        //     })

        return () => {
            console.log('stop lsioten');
            echo.channel(`test.connection`)
                .stopListening(`.test.connection`)
                .stopListening(`.test.case2`)
                .stopListening(`.test.case3`)
                .stopListening(`.test.case4`)

            echo.channel(`test.connection2`)
                .stopListening(`.test.asd`)
        };
        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>Listen Now</h1>
            {
                data.map((el, idx) => (
                    <div key={idx} style={style.container}>
                        {el}
                    </div>
                ))
            }
        </div>
    )
}

const style = {
    container: {
        border: '1px solid black',
        marginBottom: '20px',
    }
}

export default Listener;