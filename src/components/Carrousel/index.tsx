import React from 'react'

import { styled } from '@mui/system'

import Box from '@mui/material/Box'

import IconButton from '@mui/material/IconButton'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

const CarrouselContainer = styled("section", {
    shouldForwardProp: (props) => props !== "containerwidth"
})<{ containerwidth: number; }>(({ containerwidth }) => ({
    padding: '0px',
    margin: '0px',
    width: `${containerwidth}px`,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    '&:hover': {
      '& .float-button-action': {
        top: '50%',
        opacity: 1,
      }
    }
}))

const CardsContainer = styled("div", {
    shouldForwardProp: (props) => props !== "containerwidth"
})<{ containerwidth: number; }>(({ containerwidth }) => ({
    padding: '0px',
    margin: '0px',
    width: `${containerwidth}px`,
    display: 'flex',
    overflowX: 'hidden',
    
}))

const FloatButton = styled(IconButton, {
    shouldForwardProp: (props) => props !== "disable"
})<{ disable: boolean }>(({ disable }) => ({
    color: `${disable? '#DCD2BE' : 'white'}`,
    background: `${disable? 'rgba(0, 0, 0, .2)' : '#127369'} !important`,
    position: 'absolute',
    top: '130%',
    width: '30px',
    height: '30px',
    transform: 'translate(0px, -50%)',
    transition: 'top .3s ease-in-out, opacity .2s ease-in-out',
    opacity: 0,
    '& svg': {
      fontSize: '1.2rem',
    }
}))

type RegisterCardHandleType = (id:number, width: number) => React.ReactNode

interface CarrouselPropsType {
    width: number;
    cardsbyview: number;
    data: number[];
    onRegisterCard: RegisterCardHandleType;
    horizontalPadding?: number;
    maxwidth?: number;
}  

const Carrousel = ({ width, cardsbyview, data, onRegisterCard, maxwidth, horizontalPadding=15 }: CarrouselPropsType) => {

    const [marginleft, setMarginLeft] = React.useState<number>(0)

    const carrouselContainerWidth = React.useMemo<number>(() => {
        if (maxwidth && width > maxwidth) return maxwidth
    
        return width
    }, [maxwidth, width])

    const cardsContainerWidth = React.useMemo<number>(() => {
        return carrouselContainerWidth - (horizontalPadding * 2)
    }, [carrouselContainerWidth, horizontalPadding])

    const cardWidth = React.useMemo<number>(() => {
        return cardsContainerWidth / cardsbyview
    }, [cardsContainerWidth, cardsbyview])

    const floatbuttondisabled = React.useMemo<boolean>(() => {
        return data.length - cardsbyview <= 0
    }, [data, cardsbyview])

    const leftover = React.useMemo<number>(() => Math.abs(data.length - cardsbyview) * cardWidth, [data, cardsbyview, cardWidth])

    const LeftMoveAction = () => {
        if (floatbuttondisabled) return;

        if (leftover > Math.abs(marginleft)) setMarginLeft( (marginleft - cardWidth) )
    }
    
    const RightMoveAction = () => {
        if (floatbuttondisabled) return;

        if (marginleft < 0) setMarginLeft( (marginleft + cardWidth) )
    }
    
    React.useEffect(() => {
        setMarginLeft(0)
    }, [])

    return (
        <CarrouselContainer containerwidth={carrouselContainerWidth} >
            <CardsContainer containerwidth={cardsContainerWidth}>
                <Box
                    sx={{
                        display: 'flex',
                        scrollSnapAlign: 'start',
                        transition: 'margin-left .2s ease-in-out',
                        marginLeft: `${marginleft}px`
                    }}
                    >
                        {data.map((id) => onRegisterCard(id, cardWidth))}
                </Box>
            </CardsContainer>

            {!floatbuttondisabled && (<>
                <FloatButton 
                    disable={(leftover <= Math.abs(marginleft))}
                    onClick={LeftMoveAction} 
                    sx={{ left: 0 }} 
                    disableRipple={(leftover <= Math.abs(marginleft))}
                    className='float-button-action'
                    >
                    <ArrowLeftIcon />
                </FloatButton>

                <FloatButton 
                    disable={marginleft >= 0}
                    onClick={RightMoveAction} 
                    sx={{ right: 0 }} 
                    disableRipple={marginleft >= 0}
                    className='float-button-action'
                >
                    <ArrowRightIcon />
                </FloatButton>
            </>)}
        </CarrouselContainer>
    )
}

export default Carrousel