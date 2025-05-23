import axios from 'axios';

// const ApiKey = '';
// const ApiUrl = '';

const handleRegister = async (email:string,company:string,companyweb:string,password:any,) => {
    try {
        const response = await axios.post(
          ApiUrl,
            {email:email,company:company,companyweb:companyweb,password:password},
      {
        headers: {
          'Content-Type': 'application/json',
          'x-functions-key': ApiKey
        }
      }
    );

    console.log('成功响应:', response.data);
    return response.data;
  }catch (error) {
    throw error;
  }
}
export default handleRegister;