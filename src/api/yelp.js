import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer aw7PaHlRDJ-e6iXJWsh6WVEi3aNa5dygRRVCuyiHcMMBo17MhERhSHeo0tyzfDmr_qyi5GDOSUgPNXE0V0nRNIhKzfDVpLGzA3wyDWJ3RALy5I6c1mzC0VoDuzg6YHYx'
    }
})

