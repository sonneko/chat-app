import { useParams } from "@solidjs/router";
import { Component } from "solid-js";

const ProfilePage: Component = () => {
    const params = useParams();
    const userId = params.userId;
    return (
        <>This is ProfilePage with userId={userId}.</>
    )
}

export default ProfilePage;