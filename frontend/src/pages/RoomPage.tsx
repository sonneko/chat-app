import { useParams } from "@solidjs/router"
import { Component } from "solid-js"

const RoomPage: Component = () => {
    const params = useParams();
    const roomId = params.roomId;
    return (
        <>This is RoomPage with roomId={roomId}.</>
    )
}

export default RoomPage;