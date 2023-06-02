import React from "react";
import Badge from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

export default {
  title: "UI 组件/Badge",
  component: Badge
};

export const Default = () => <Badge count={5}></Badge>;

export const DotVariant = () => {
  return <Badge show variant={'dot'}>
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '24px' }}></FontAwesomeIcon>
  </Badge>
}
export const DefaultVariant = () => {
  return <Badge count={5} showZero variant={'default'}>
  </Badge>
}