import './DriverCard.css';

function DriverCard({driver}) {

    return (
        <div>
            {driver.firstname} {driver.lastname}
        </div>
    );
}

export default DriverCard;
