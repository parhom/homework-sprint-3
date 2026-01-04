import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                height:4,
                borderRadius:10,
                maxWidth:147,
                color: '#8B8B8B',
                '& .MuiSlider-track':{
                    color: '#00CC22',
                },
                '& .MuiSlider-thumb':{
                    color:'#fff',
                    border:'1px solid #00CC22',
                  '&:before':{
                        maxWidth: 6,
                        maxHeight:6,
                        backgroundColor: '#00CC22',
                  }
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
