function RobotAdress({ robotAddress }) {
    return (
        <>
            <p>{robotAddress.suite}</p>
            <p>{robotAddress.zipcode}</p>
            <p>{robotAddress.city}</p>
        </>
    )

}

export default RobotAdress