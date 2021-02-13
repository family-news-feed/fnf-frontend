import React from 'react';
import Container from '@material-ui/core/Container';
import AccessAlarm from '@material-ui/icons/AccessAlarm';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import AddPhotoAlternateIconOutlined from '@material-ui/icons/AddPhotoAlternateOutlined';
import AddPhotoAlternateIconRounded from '@material-ui/icons/AddPhotoAlternateRounded';
import AddPhotoAlternateIconTwoTone from '@material-ui/icons/AddPhotoAlternateTwoTone';
import AddPhotoAlternateIconSharp from '@material-ui/icons/AddPhotoAlternateSharp';

function IconsContainer(): JSX.Element {
  return (
    <Container className="IconsContainer">
      <h1> ICONS USAGE </h1>
      <p> you can assign colors like this </p>
      <AccessAlarm color="primary" />
      <AccessAlarm color="secondary" />
      <AccessAlarm color="action" />
      <AccessAlarm color="disabled" />
      <br />
      <p> each icon has 5 different looks </p>
      <AddPhotoAlternateIcon />
      <AddPhotoAlternateIconOutlined />
      <AddPhotoAlternateIconRounded />
      <AddPhotoAlternateIconSharp />
      <AddPhotoAlternateIconTwoTone />
    </Container>
  );
}

export default IconsContainer;
