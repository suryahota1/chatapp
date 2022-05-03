import React from "react";
import { AddChannel } from "./../assets/AddChannel";

const TeamChannelList = ({ children, error = false, loading, type, isCreating, setCreateType, setIsCreating, setIsEditing }) => {
    console.log("TeamChannelList children", children);
    console.log("TeamChannelList error", error);
    console.log("TeamChannelList loading", loading);
    console.log("TeamChannelList type", type);

    if ( error ) {
        return type === "team" ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ) : null;
    }

    if ( loading ) {
        <div className="team-channel-list">
            <p className="team-channel-list__message loading">
                {type === "team" ? "Channels" : "Messages"} Loading...
            </p>
        </div>
    }

    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === "team" ? "Channels" : "Direct Messages"}
                </p>
                <AddChannel 
                    isCreating={isCreating}
                    setCreateType={setCreateType} 
                    setIsCreating={setIsCreating} 
                    setIsEditing={setIsEditing}
                    type={type === "tema" ? "team" : "messaging"}
                />
            </div>
            {children}
        </div>
    );
};

export default TeamChannelList;
