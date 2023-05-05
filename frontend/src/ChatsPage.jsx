import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
	return (
		<div style={{ height: "100vh" }}>
			<PrettyChatWindow
				projectId="50804db6-1115-470b-8c91-d02755c2bf62"
				username={props.user.username}
				secret={props.user.secret}
				style={{ height: "100vh" }}
			/>
		</div>
	);
};

export default ChatsPage;
