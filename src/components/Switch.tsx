import {useState} from 'react'
import { ButtonGroup, Button, Checkbox, ToggleButtonGroup, ToggleButton } from '@mui/material';
import "./switch.css"

interface SwitchProps {
    firstString: string;
    secondString: string;
    callback: (id: number) => number
}

export default function Switch({firstString, secondString, callback}: SwitchProps)  {

    const [tabActive, setTabActive] = useState(1); 
    const update = (number: number) => {
        setTabActive(number)
        callback(number)
    }
  return (




      


        <div className="btn-container">
           
           <ButtonGroup>
                <Button onClick={() => update(1)}   variant={ tabActive === 1? "contained": "outlined"} >{firstString}</Button>
                <Button onClick={()=> update(2)} variant={ tabActive === 2 ? "contained": "outlined"} >{secondString}</Button>
            </ButtonGroup>

        </div> 
    
  )
}
