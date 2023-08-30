import React from 'react'
import {Link} from 'react-router-dom'
import { Typography, Stack, Button } from "@mui/material";


const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction="row">
          <Button sx={{ 
            ml: '19px',
            color: '#000', 
            backgroundColor: '#ff22225c', 
            fontSize: '19px', 
            borderRadius: '20px', 
            textTransform: "capitalize"}}>{exercise.bodyPart}
            </Button>
          <Button
          sx={{ 
            ml: '19px',
            color: '#000', 
            backgroundColor: '#e4ff007a', 
            fontSize: '20px', 
            borderRadius: '20px', 
            textTransform: "capitalize"}}>{exercise.target}
          </Button>
          <Button 
          sx={{
            ml: '19px',
            color: '#000', 
            backgroundColor: '#2300cc59', 
            fontSize: '20px', 
            borderRadius: '20px', 
            textTransform: "capitalize"}}>{exercise.equipment}
          </Button>
        </Stack>
        <Typography
        sx={{color: '#000', fontSize: '22px', fontWeight: 'bold', mt: '25px'}}
        >
          {exercise.name}
        </Typography>
    </Link>

  );
}

export default ExerciseCard 