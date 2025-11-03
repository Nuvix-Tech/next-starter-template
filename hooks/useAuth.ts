"use client";

import { useEffect, useState } from "react";
import { nx } from "@/lib/nuvix";
import { Models } from "@nuvix/client";

export function useAuth<T extends Models.Preferences>() {
    const [user, setUser] = useState<Models.User<T> | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        async function fetchUser() {
            try {
                const account = await nx.account.get();
                if (mounted) setUser(account as Models.User<T>);
            } catch (error) {
                if (mounted) setUser(null);
                console.error("Auth fetch failed:", error);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        fetchUser();

        return () => {
            mounted = false;
        };
    }, []);

    return {
        user,
        isAuthenticated: !!user,
        loading,
    };
}
