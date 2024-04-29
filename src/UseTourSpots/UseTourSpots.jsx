import { useQuery } from "@tanstack/react-query";

const UseTourSpots = () => {
    const {data=[], isLoading, refetch} = useQuery({
        
        queryKey: ["touristsSpots"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/touristsSpots');
            const data = await res.json();
            return data;
        }
    })

    return {data, isLoading, refetch};
};

export default UseTourSpots;