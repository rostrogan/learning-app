import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/images/def-user-img.png'
import Preloader from "../common/Preloader/Preloader";
import {usersApi} from "../../api/users.api";

const Users = props => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map((p, index) => {
                        return (
                            <span className={props.currentPage === p ? s.selectedPaginationButton : null}
                                  onClick={e => props.onPageChanged(p)}
                                  key={index}
                            >{p}</span>
                        );
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : defaultUserPhoto}
                                     className={s.userPhoto}
                                     alt={'Avatar'}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button
                                        className={s.followButton}
                                        disabled={props.isFollowingProcess.some(id => id === u.id)}
                                        onClick={() => {
                                            props.setFollowingProcess(true, u.id);
                                            usersApi.unfollow(u.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.setFollowingProcess(false, u.id);
                                            });
                                        }}>{
                                        props.isFollowingProcess.some(id => id === u.id)
                                            ? <Preloader />
                                            : 'Unfollow'
                                    }</button>
                                    : <button
                                        className={s.followButton}
                                        disabled={props.isFollowingProcess.some(id => id === u.id)}
                                        onClick={() => {
                                            props.setFollowingProcess(true, u.id);
                                            usersApi.follow(u.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.setFollowingProcess(false, u.id);
                                            });
                                        }}>{
                                            props.isFollowingProcess.some(id => id === u.id)
                                                ? <Preloader />
                                                : 'Follow'
                                        }</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;