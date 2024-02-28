import axios from 'axios';
import { addUsers, removeUsers, addUser, fetchingUsers, fetchingUsersFailed } from '../redux/user/userAction';
import { useDispatch, useSelector } from 'react-redux';

export const useUsers = () => {
    // const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const usersData = useSelector((state) => state.users.users) 

    const addUserData = (data) => {
        // setUsers([...users, data])
        dispatch(addUser(data));
    }

    const getUserDataFromApi = async() => {
        dispatch(fetchingUsers())
        try{
            const userResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
            if(userResponse){
                dispatch(addUsers(userResponse.data));
            }
        }catch(error){
            dispatch(fetchingUsersFailed(error.message));
        }
    }

    const deleteUser = async(id) => {
        try{
            //logic for deleting a user with perticular id
            //if we got positive response we'll again call getUsersDataFromApi() to get updated users
        }catch(error){

        }
    }

    // useEffect(()=>{
    //     setUsers([...usersData])
    // },[usersData])

    // useEffect(()=>{
    //     getUserDataFromApi()
    // },[])
  

    return {usersData, addUserData, getUserDataFromApi}
}   