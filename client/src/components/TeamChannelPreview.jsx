import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const ChannelPreview = ({ channel }) => (
    <p className="channel-preview__item">
        {channel?.data?.name || channel?.data?.id}
    </p>
);

const DirectPreview = ({ channel, client }) => {
    const members = Object.values(channel.state.memebrs).filter(({ user }) => user.id !== client.userID );
    return (
        <div className="channel-preview__item single">
            <Avatar 
                image={members[0]?.user?.image}
                name={members[0]?.user?.fullName}
                size={24}
            />
            <p>{members[0]?.user?.fullName}</p>
        </div>
    );
};

const TeamChannelPreview = ({ channel, type }) => {
    
    const { channel: activeChannel, client } = useChatContext();

    return (
        <div className={
                channel?.id === activeChannel?.id ? "channel-preview__wrapper__selected" : "channel-preview__wrapper"
            }
            onClick={() => {
                console.log("channel clicked", channel);
            }}
        >
            {type === "team" ? <ChannelPreview channel={channel} /> : <DirectPreview client={client} channel={channel} />}
        </div>
    );
};

export default TeamChannelPreview;
