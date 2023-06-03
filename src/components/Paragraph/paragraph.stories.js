import React from "react";
import Paragraph from ".";

export default {
  title: "排版/Paragraph",
  component: Paragraph
};

export const Default = () => (
  <>
    <Paragraph>这是一个段落</Paragraph>
    <Paragraph>这是一个段落</Paragraph>
  </>
)

export const Ellipsis = () => (
  <Paragraph ellipsis>
    这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本
  </Paragraph>
)

export const NoEllipsis = () => (
  <Paragraph>
    这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本这是一个超长文本
  </Paragraph>
)