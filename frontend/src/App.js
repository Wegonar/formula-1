import './App.css';
import {useEffect, useState} from "react";
import DriverCard from "./driver-card/DriverCard";

function App() {
    const [drivers, setDrivers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('/api/drivers')
            .then(response => response.json())
            .then(response => {
                console.log('response', response)
                setDrivers(response)
            })
            .catch(error => console.error('Error while fetching data', error))
            .finally(() => setIsLoading(false));
    }, [])

    function handleOvertake(driverId) {
        fetch(`/api/drivers/${driverId}/overtake`, {
            method: 'post',
            headers: {'Content-Type':'application/json'}
        })
            .then(response => response.json())
            .then(response => {
                console.log('response', response)
                setDrivers(response)
            })
            .catch(error => console.error('Error while overtaking', error))
    }

    return (
        <div className={'driver-list'}>
            {isLoading ? <p>Loading Drivers...</p> : (
                drivers.map(driver => <DriverCard key={driver.id} driver={driver} onOvertake={handleOvertake} />)
            )}
        </div>
    );
}

export default App;
