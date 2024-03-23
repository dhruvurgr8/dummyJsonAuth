import "./userdetails.css";

const UserDetails = ({ userData }) => {
  if (!userData) {
    return <div className="loader"></div>;
  }
  return (
    <>
      <div className="user-details-card">
        <img src={userData.image} alt="User" />
        <div className="user-details">
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
          <p>
            <strong>Username:</strong> {userData.username}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Age:</strong> {userData.age}
          </p>
          <p>
            <strong>Gender:</strong> {userData.gender}
          </p>
          <p>
            <strong>Birth Date:</strong> {userData.birthDate}
          </p>
          <p>
            <strong>SSN:</strong> {userData.ssn}
          </p>
          <p>
            <strong>Eye Color:</strong> {userData.eyeColor}
          </p>
          {userData.hair && (
            <>
              <p>
                <strong>Hair Color:</strong> {userData.hair.color}
              </p>
              <p>
                <strong>Hair Type:</strong> {userData.hair.type}
              </p>
            </>
          )}
          <p>
            <strong>Height:</strong> {userData.height} cm
          </p>
          <p>
            <strong>Weight:</strong> {userData.weight} kg
          </p>
          <p>
            <strong>Blood Group:</strong> {userData.bloodGroup}
          </p>
          <p>
            <strong>Phone:</strong> {userData.phone}
          </p>
          {userData.address && (
            <p>
              <strong>Address:</strong> {userData.address.address},{" "}
              {userData.address.city}, {userData.address.state},{" "}
              {userData.address.postalCode}
            </p>
          )}
          {userData.bank && (
            <p>
              <strong>Bank:</strong> Card Type: {userData.bank.cardType}, Card
              Number: {userData.bank.cardNumber}, Card Expiry:{" "}
              {userData.bank.cardExpire}
            </p>
          )}
          <p>
            <strong>Domain:</strong> {userData.domain}
          </p>
          <p>
            <strong>MAC Address:</strong> {userData.macAddress}
          </p>
          <p>
            <strong>IP Address:</strong> {userData.ip}
          </p>
          <p>
            <strong>User Agent:</strong> {userData.userAgent}
          </p>
          <p>
            <strong>Weight:</strong> {userData.weight}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserDetails;

// This is the final code
