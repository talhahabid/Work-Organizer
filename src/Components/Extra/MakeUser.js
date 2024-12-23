import { sendRequestToServer } from "../../Utils/SendRequestToServer";

const createUser = async (user) => {
    const url = "";
    await sendRequestToServer(url, "POST", user, "Users");
}

const getUser = async (user) => {
    const url = "";
    await sendRequestToServer(url, "GET", user, "Users");
}
 
export {createUser, getUser}