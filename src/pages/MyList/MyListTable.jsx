import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyListTable = ({ myList, myLists, setMyLists }) => {

    const {
        _id,
        image,
        location,
        average_cost,
        country_Name,
        tourists_spot_name,
        totalVisitorsPerYea,
    } = myList;


    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axios.delete(`http://localhost:5000/touristsSpots/${_id}`)
                    .then(data => {
                        console.log(data.data);


                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Deleted Successfully.",
                                icon: "success"
                            });

                            const remaining = myLists.filter(item => item._id !== _id)
                            setMyLists(remaining);
                        }
                    })
            }
        });

    }

    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded-md w-16 h-16">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            {tourists_spot_name}
                        </div>
                        <div className="text-sm opacity-50">{country_Name}</div>
                    </div>
                </div>
            </td>
            <td>{location}</td>
            <td>{average_cost}</td>
            <td>{totalVisitorsPerYea}</td>
            <th>
                <Link to={`/update/${_id}`} className="btn rounded-sm  border-red-500 hover:border-red-500 bg-transparent btn-overlay btn-overlay2 relative hover:text-red-500 text-white w-1/3 hover:bg-transparent btn-sm px-6">
                    <span className="z-20">
                    <MdEdit size={20}/>
                    </span>
                </Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn rounded-sm  border-red-500 hover:border-red-500 bg-transparent btn-overlay btn-overlay2 relative hover:text-red-500 text-white w-1/3 hover:bg-transparent btn-sm px-6">
                    <span className="z-20">
                        <MdDeleteForever size={20} />
                    </span>
                </button>
            </th>
        </tr>
    );
};

MyListTable.propTypes = {
    myList: PropTypes.object,
    myLists: PropTypes.array,
    setMyLists: PropTypes.func,
}
export default MyListTable;