import React from 'react';
import PropTypes from 'prop-types';
import StyledTitleBar, {Title, Actions} from './style';
import Avatar from 'components/Avatar';
import face1 from 'assets/images/face-female-1.jpg'
import Paragraph from 'components/Paragraph';
import Text from 'components/Text';
import Icon from 'components/Icon';
import { ReactComponent as Call } from 'assets/icons/call.svg';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';
import { ReactComponent as Options } from 'assets/icons/options.svg';


function TitleBar({children, face=face1, ...rest}) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar status="online" src={face} />
      <Title>
        <Paragraph size="large">李明浩</Paragraph>
        <Paragraph type="secondary">
          <Text>在线</Text>
          <Text>· 最后阅读：3小时前</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon icon={Call} opacity={0.3} />
        <Icon icon={Camera} opacity={0.3} />
        <Icon icon={Options} opacity={0.3} />

      </Actions>
    </StyledTitleBar>
  )
}

TitleBar.propTypes = {
  children: PropTypes.any
}

export default TitleBar
