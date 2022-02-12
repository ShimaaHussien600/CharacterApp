import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const CharacterCard = (props) => {
  const { character, onClick } = props;
  return (
    <Card sx={{ maxWidth: 345 }} className='m-10' onClick={() => onClick(character.id)}>
      <CardMedia
        component="img"
        height="140"
        image={character?.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character?.name}
        </Typography>
        {character?.species &&
          <div className="row">
            <div className="col-1">
              <KeyboardDoubleArrowRightIcon htmlColor="#757575" fontSize='45px' />
            </div>
            <div className="col-11 grayText">
              <span>{character?.species}{character?.status !== "unknown" && ` (${character?.status})`}
              </span>
            </div>
          </div>}
        {character?.location?.name &&
          <div className="row">
            <div className="col-1">
              <LocationOnIcon htmlColor="#757575" fontSize='45px' />
            </div>
            <div className="col-11 grayText">
              <span>{character?.location?.name}</span>
            </div>
          </div>}
        {character?.gender &&
          <div className="row">
            <div className="col-1">
              {character?.gender === "Male" ?
                <MaleIcon htmlColor="#757575" fontSize='45px' />
                :
                <FemaleIcon htmlColor="#757575" fontSize='45px' />}
            </div>
            <div className="col-11 grayText">
              <span>{character?.gender}</span>
            </div>
          </div>}

      </CardContent>
    </Card>
  );
}
