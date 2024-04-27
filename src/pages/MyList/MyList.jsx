import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyListTable from "./MyListTable";


const MyList = () => {

    const { user } = useContext(AuthContext);
    const [myLists, setMyLists] = useState([])
    

    useEffect(() => {
        fetch(`http://localhost:5000/touristsSpots/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyLists(data);
            })
    }, [user])

    return (
        <div className="max-w-7xl mx-auto px-5">
            <h2>My list {myLists.length}</h2>
            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
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