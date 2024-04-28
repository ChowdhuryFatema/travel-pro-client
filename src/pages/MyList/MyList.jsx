import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyListTable from "./MyListTable";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";


const MyList = () => {

    const { user, isLoading } = useContext(AuthContext);
    const [myLists, setMyLists] = useState([])
    

    useEffect(() => {
        fetch(`https://travel-pro-server-250joqnjw-fatema-chowdhurys-projects.vercel.app/touristsSpots/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyLists(data);
            })
    }, [user])

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="my-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="bg-base-200">
                                <th>Tourists Spot</th>
                                <th>Location</th>
                                <th>Average Cost</th>
                                <th>Total Visitors Per Year</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myLists.map(myList => <MyListTable
                                key={myList._id}
                                myList={myList}
                                myLists={myLists}
                                setMyLists={setMyLists}></MyListTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;