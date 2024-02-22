import React from 'react';
import './style/TeamMember.css'; // Import the CSS file for TeamMember

const TeamMember = ({ name, photoUrl, role }) => {
    return (
        <div className='responsive-cell-block team-card-container'>
            <div className='team-card'>
                <div class="img-wrapper">
                    <img className="team-img" src={photoUrl} alt={name}/>
                </div>
            
                <p className="text-blk name">{name}</p>
                <p className="text-blk position">{role}</p>
            </div>
        </div>
    );
};

export default TeamMember;
