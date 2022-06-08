import axios from 'axios'
import { SEConfiguration } from './SEConfiguration';
export const SBSConfiguration = async (event: any, step:String): Promise<any> => {
   type User = {
      message: string;
  };
  type GetUsersResponse = {
      data: User[];
  };
  if(step === '1'){
  try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetUsersResponse>(
          'https://api.mocki.io/v2/d2d0daf0/SBSConfiguration',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      
      // console.log(JSON.stringify(data, null, 4));
      // // 👇️ "response status is: 200"
       console.log('response status is: ', status);
      
      console.log(JSON.stringify(data, null, 4));
      SEConfiguration('','2')
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
      } else {
        console.log('unexpected error: ', error);
      }
    }
   }else{
      console.log('first try step 1')
   }
}