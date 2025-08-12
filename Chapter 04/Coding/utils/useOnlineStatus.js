import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    // This hook will check if the user is online or offline
    // and update the onlineStatus state accordingly

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
    }, []);

    return onlineStatus
}

export default useOnlineStatus;