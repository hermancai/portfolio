import { useEffect, useState } from "react";

const useDelayRender = (delay: number) => {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShouldRender(true);
        }, delay);

        return () => window.clearTimeout(timeout);
    }, [delay]);

    return shouldRender;
};

export default useDelayRender;
