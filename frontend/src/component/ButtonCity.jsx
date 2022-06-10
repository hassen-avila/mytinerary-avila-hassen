import '../App.css'
import '../style/buttonCity.css';
import Stack from '@mui/material/Stack';

import {Link as LinkRouter} from "react-router-dom"

export default function ButtonCity() {
  return (
      <div className='buttonC '>
          <div className='text-button-box'>
              <h3 className='text-button'>Why is Travel Important?</h3>
              <p className='text-button'>One of the best things you can do for your mental health every now and again, especially as a busy college student with an evening job or a young professional working 12-hour shifts, is to disconnect in order to recharge.</p>
              <p className='text-button'>If you want to enjoy your life, click below</p>
          </div>
          <div className='button-box'>
            <Stack direction="row" spacing={2}>
            <LinkRouter to='/Cities'><div className='ov-btn-grow-skew-reverse'>SHOW ME!!</div>
            </LinkRouter>
            </Stack>
            </div>
          
      </div>
    
  );
}