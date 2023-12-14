import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from '@chatscope/chat-ui-kit-react';

const MessageUI = ({ currentUser = null, messages = [], onSend = () => {} }) => {
  return (
    <div style={{ position: 'relative', height: '500px' }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map(content => {
              return (
                <Message
                  model={{
                    ...content,
                    direction: currentUser === content.sender ? 'outgoing' : 'incoming'
                  }}
                  avatarPosition={currentUser === content.sender ? null: 'top-left'}
                >
                  {currentUser === content.sender ? null : <Avatar src='logo192.png' />}
                </Message>
              )
            })}
          </MessageList>
          <MessageInput
            onSend={onSend}
            placeholder='Type message here'
          />
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default MessageUI
