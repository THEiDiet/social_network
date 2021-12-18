import s from "./profileInfo.module.css";
import React from "react";

const ProfileInfo = () => {
    return (
        <div className={s.aboutMe}>
            <img className={s.aboutMe__ava}
                 src="https://images.all-free-download.com/images/graphiclarge/girl_avatar_template_handdrawn_cartoon_character_sketch_6849754.jpg"
                 alt=""/>
            <div className={s.aboutMe__desc}>
                <h2 className={s.aboutMe__title}>Hi there!</h2>
                <div className={s.aboutMe__text}>Something about me</div>
            </div>
        </div>
    )
}
export default ProfileInfo