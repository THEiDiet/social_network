import React from "react";
import s from './main.module.css'
import Slider from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';
import {createTheme, ThemeProvider} from "@mui/system";

const SuccessSlider = styled(Slider)(({ theme }) => ({
    width: 300,
    color: theme.palette.success.main,
    '& .MuiSlider-thumb': {
        '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
        },
        '&.Mui-active': {
            boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.error.main, 0.16)}`,
        },
    },
}));

const MySliderHoho = styled(Slider)(({theme}) => ({
    width: '1000px',
    color: 'red',
    margin: '20px',
    '& .MuiSlider-thumb': {
        color: 'pink',
        borderRadius: '2px',
    },
    '&:hover, &.Mui-focusVisible': {
        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.error.main, 0.16)}`,
    },
    '&.Mui-active': {
        boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.error.main, 0.16)}`,
    }
}))

const myTheme = createTheme({
    palette: {
        primary: {
            main: '#77c5ae',
            light: '#77c5ae',
            dark: '#77c5ae',
            contrastText : '#dafff2',
        },
        grey:{
            400: '#dafff2'
        }
    }
})
//[`&.${sliderClasses.disabled}`]: {
//   73 |   pointerEvents: 'none',
//   74 |   cursor: 'default',
// > 75 |   color: theme.palette.grey[400]
//      | ^  76 | },
const ItHardToExplain = styled('div')(({theme})=> ({
    height:500,
    width: 500,
    backgroundColor:theme.palette.primary.dark,

}))

const MyThemeComponent = styled('div')(({theme}) =>({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRadius:theme.shape.borderRadius,
    // boxShadow: theme.shadows[5],/**/
    width: 400,
    height: 400
}))

const Main = () => {
    return (
        <main className="main">
            <img className={s.bg_img}
                 src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
                 alt=""/>
            <div className={s.aboutMe}>
                <img className={s.aboutMe__ava}
                     src="https://images.all-free-download.com/images/graphiclarge/girl_avatar_template_handdrawn_cartoon_character_sketch_6849754.jpg"
                     alt=""/>
                <div className={s.aboutMe__desc}>
                    <h2 className={s.aboutMe__title}>Hi there!</h2>
                    <div className={s.aboutMe__text}>Something about me</div>
                </div>
            </div>
            <div className={s.posts}>
                all posts
                <MySliderHoho/>
                <ThemeProvider theme={myTheme}>
                    <ItHardToExplain/>
                    <MyThemeComponent>
                        My new component
                    </MyThemeComponent>
                </ThemeProvider>
                <Slider sx={{width: 400, color:'pink', '& .Mui-active': {borderRadius:'1px', color: 'black', border: '5px solid red'}}} />
                <div>new post</div>
                <div>earlier posts</div>
            </div>
        </main>
    )
}

export default Main