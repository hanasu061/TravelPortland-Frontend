import axios from "axios";

class VisitDataService {
    getAll(page = 0) {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/xsq/visits?page=${page}`);
    }

    getVisit(id) {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/xsq/visits/id/${id}`);
    }

    createReview(data) {
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/xsq/reviews`, data);
    }

    updateReview(data) {
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/xsq/reviews`, data);       
    }
    
    deleteReview(id, userId) {
        return axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/v1/xsq/reviews`, {data:{review_id:id, user_id:userId}});
    }    
    
}

export default new VisitDataService();