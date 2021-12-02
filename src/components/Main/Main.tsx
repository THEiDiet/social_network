import React from "react";
import s from './main.module.css'

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
                <div>new post</div>
                <div>earlier posts</div>
            </div>
        </main>
    )
}

export default Main