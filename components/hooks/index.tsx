import { useEffect, useState } from "react";

export function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);
    const [hasBeenIntersected, setHasBeenIntersected] = useState(false);

    useEffect(() => {
        if (ref.current && !hasBeenIntersected) {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    setHasBeenIntersected(true);
                    observer.disconnect(); // Stop observing after the first intersection
                }
            });
            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            };
        }
    }, [ref, hasBeenIntersected]);

    return isIntersecting;
}
