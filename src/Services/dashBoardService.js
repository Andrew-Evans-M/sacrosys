import axios from "axios"

const getDashBoardDetails = async() =>{
        return await axios.get("https://656ee72f6529ec1c6236e48a.mockapi.io/api/V1/dashboardSales")
    }

const dashBoardService = {
    getDashBoardDetails,
}

export default dashBoardService;