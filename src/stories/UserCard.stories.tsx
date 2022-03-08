import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UserCard} from "../components/module_components/UserCard";
import defaultPhoto from './../assets/user.png'
import {MemoryRouter} from 'react-router-dom';
import {action} from "@storybook/addon-actions";
import { useArgs } from '@storybook/client-api';

export default {
    title: 'Custom/UserCard',
    component: UserCard,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = ({...args}) => {
    return <MemoryRouter><UserCard {...args}/></MemoryRouter>
}

export const FirstCard = Template.bind({});
FirstCard.args = {
    user:{
        id: 12,
        name: 'Name',
        status: 'Status',
        uniqueUrlName: null,
        followed: false,
        photos: { small: defaultPhoto, large: defaultPhoto }
    },
    isDisabled: [],
};
export const Second:ComponentStory<typeof UserCard>  = ({...args}) => {
    const [{isDisabled,user},setIsDisabled] = useArgs()

    const toggleOnFollow = () => {
        setIsDisabled({isDisabled:[2],user})
        setTimeout(()=>{
            setIsDisabled({isDisabled:[],user:{...user,followed:!user.followed}})
        },500)
    }
    return <MemoryRouter><UserCard user={user} onUnFollow={toggleOnFollow} onFollow={toggleOnFollow} isDisabled={isDisabled} /></MemoryRouter>
}
Second.args = {
    user:{
        id: 2,
        name: 'Name',
        status: 'Status',
        uniqueUrlName: null,
        followed: false,
        photos: { small: defaultPhoto, large: defaultPhoto }
    },
    isDisabled: [],
    onUnFollow:()=>{},
    onFollow:()=>{}
};