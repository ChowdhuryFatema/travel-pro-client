import { useQuery } from "@tanstack/react-query";

const UseTourSpots = () => {
    const {data=[], isLoading, refetch} = useQuery({
        
        queryKey: ["touristsSpots"],
        queryFn: async () => {
            const res = await fetch('https://travel-pro-server-250joqnjw-fatema-chowdhurys-projects.vercel.app/touristsSpots');
            const data = await res.json();
            return data;
        }
    })

    return {data, isLoading, refetch};
};

export default UseTourSpots;