import React from 'react';
import PropTypes from 'prop-types'; 


const Profile = (props) => {
  return (
    <div>
      <p> fullname : {props.fullname} </p>
      <p> bio: {props.bio}</p>
      <p> profession: {props.profession}</p>
      {props.children}
      {props.handelName(props.fullname)}

    </div>
  );
}
Profile.defaultProps = {
  fullname: "name",
  bio: "bio",
  profession: "profession"
};

Profile.propTypes = {
  fullname: PropTypes.string
}
export default Profile;
