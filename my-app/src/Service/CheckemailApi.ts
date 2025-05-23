import axios from 'axios';

const ApiKey = '';
const ApiUrl = '';

const checkemail = async (email:string) => {
    try {
        const response = await axios.post(
          ApiUrl,
            {email:email},
      {
        headers: {
          'Content-Type': 'application/json',
          'x-functions-key': ApiKey
        }
      }
    );
    console.log('成功响应:', response.data);
    return { exists: !!response.data.exists}; 
  } catch (error) {
    console.error('checkemail 出错:', error);
    throw error;
  }
};
export default checkemail;
