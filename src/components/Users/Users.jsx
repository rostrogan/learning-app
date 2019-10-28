import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/images/def-user-img.png'
import * as axios from "axios";

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
                                    ? <button onClick={() => {l
                                        axios
                                            .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`)
                                            .then(response => {
                                                this.props.setUsers(response.data.items);
                                                this.props.setTotalUsersCount(response.data.totalCount);
                                                this.props.setIsFetching(false);
                                            });
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
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