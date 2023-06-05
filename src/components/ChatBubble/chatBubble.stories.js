import React from "react";
import ChatBubble from ".";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";

export default {
  title: "UI 组件/ChatBubble",
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>]
};

export const FromOthers = () => <ChatBubble time="昨天 下午14: 26">其他人发来的消息</ChatBubble>;

export const FromMine = () => <ChatBubble time="昨天 下午15: 26" type='mine'>我发送的消息<Emoji label="smile">😀</Emoji></ChatBubble>;

export const VoiceMessageType = () => <ChatBubble time="昨天 下午18: 26"><VoiceMessage time="01:24" /> </ChatBubble>

export const VoiceMessageMine = () => <ChatBubble time="昨天 下午18: 26" type="mine"><VoiceMessage time="01:24" type="mine"/> </ChatBubble>