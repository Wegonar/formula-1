import './DriverCard.css';

function DriverCard({driver}) {

    return (
        <div className={'driver-card'}>
            <div className={'driver-image'}
                 style={{'background-image': `url('http://localhost:5000${driver.imgUrl}')`}}>
            </div>
            <div className={'code'}>
                {driver.code}
            </div>
            <div className={'name'}>
                {driver.firstname} {driver.lastname}
            </div>
            <div className={'team'}>
                {driver.team}
            </div>
            <div className={'place'}>
                #{driver.place}
            </div>
            <button>Overtake</button>
        </div>
    );
}

export default DriverCard;
