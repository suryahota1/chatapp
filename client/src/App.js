import React, { useState } from 'react';
import './App.css';
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { Auth, ChannelContainer, ChannelListContainer } from './components';

const API_KEY = "wuf7vqq3z3dw";
const client = StreamChat.getInstance(API_KEY);

const cookies = new Cookies();
const authToken = cookies.get("token");

if ( authToken ) {
	const client = StreamChat.getInstance(API_KEY);
	client.connectUser({
        name: cookies.get("userName"),
        fullName: cookies.get("fullName"),
        id: cookies.get("userId"),
		phoneNumber: cookies.get("phoneNumber"),
		image: cookies.get("avatarURL"),
		hashedPassword: cookies.get("hashedPassword"),
	}, authToken);
}

function App() {

	const [ createType, setCreateType ] = useState("");
	const [ isCreating, setIsCreating ] = useState(false);
	const [ isEditing, setIsEditing ] = useState(false);

	if ( !authToken ) {
		return <Auth />
	}
	return (
		<div className="app__wrapper">
			<Chat client={client} theme="team light">
				<ChannelListContainer 
					isCreating={isCreating}
					setCreateType={setCreateType}
					setIsCreating={setIsCreating}
					setIsEditing={setIsEditing}
				/>
				<ChannelContainer 
					isCreating={isCreating}
					isEditing={isEditing}
					setIsCreating={setIsCreating}
					setIsEditing={setIsEditing}
					createType={createType}
				/>
			</Chat>
		</div>
	);
}

export default App;
