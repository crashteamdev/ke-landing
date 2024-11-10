"use client";

import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

export default function MixpanelInitializer() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            mixpanel.init("c15d57d13fcbfc5f41170407d2aa82b0", {
                debug: true,
                track_pageview: true,
                persistence: "localStorage",
            });
        }
    }, []);

    return null;
}
