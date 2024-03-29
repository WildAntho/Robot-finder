import "./robotAdress.css"

function RobotAdress({ robotAddress }) {
    return (
        <section>
            <p className="adress">{robotAddress.suite}</p>
            <p className="adress">{robotAddress.zipcode}</p>
            <p className="adress">{robotAddress.city}</p>
        </section>
    )

}

export default RobotAdress