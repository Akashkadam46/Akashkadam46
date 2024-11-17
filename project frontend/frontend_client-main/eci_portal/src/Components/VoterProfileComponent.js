import "../Component_CSS/VoterProfileComponent.css";
import { url } from './../Common/Constant';

const VoterProfile = ({ voterInfo }) => {
  const {
    voterId,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    age,
    gender,
    uid,
    pan,
    state,
    district,
    taluka,
    village,
    pincode,
    photo,
  } = voterInfo; // Spread Operator

  return (
    <div>
      <h1 className="page-title">Voter Profile</h1>
      <div className="main-div">
        <div className="image-container">
          <img className="voter-image" src={url + "/" + photo} alt="" />
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td className="heading">Voter Id:</td>
                <td>{voterId}</td>
              </tr>
              <tr>
                <td className="heading">First Name:</td>
                <td>{firstName}</td>
              </tr>
              <tr>
                <td className="heading">Middle Name:</td>
                <td>{middleName}</td>
              </tr>
              <tr>
                <td className="heading">Last Name:</td>
                <td>{lastName}</td>
              </tr>
              <tr>
                <td className="heading">Birth Date:</td>
                <td>{dateOfBirth}</td>
              </tr>
              <tr>
                <td className="heading">Age:</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td className="heading">gender:</td>
                <td>{gender == "M" ? "Male" : "Female"}</td>
              </tr>
              <tr>
                <td className="heading">UID:</td>
                <td>{uid}</td>
              </tr>
              <tr>
                <td className="heading">PAN No:</td>
                <td>{pan}</td>
              </tr>
              <tr>
                <td className="heading">State:</td>
                <td>{state}</td>
              </tr>
              <tr>
                <td className="heading">District:</td>
                <td>{district}</td>
              </tr>
              <tr>
                <td className="heading">Taluka:</td>
                <td>{taluka}</td>
              </tr>
              <tr>
                <td className="heading">Village:</td>
                <td>{village}</td>
              </tr>
              <tr>
                <td className="heading">Pincode:</td>
                <td>{pincode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default VoterProfile;
