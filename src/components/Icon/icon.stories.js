import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg'
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "UI 组件/Icon",
  component: Icon
};

export const Default = () => <Icon icon={SmileIcon} />;

export const CustomColor = () => <Icon icon={SmileIcon} color="#cccccc" />;

export const CustomSize = () => <Icon icon={SmileIcon} width={48} height={48} color="#cccccc" />;

export const FontAwesome = () => <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>;

export const FontAwesomeColor = () => <FontAwesomeIcon icon={faCommentDots} style={{ color: "#ccc" }}></FontAwesomeIcon>;

export const FontAwesomeSize = () => {
  return <div>
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "24px" }}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "36px" }}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "48px" }}></FontAwesomeIcon>
  </div>
}