
import axios from 'axios'
 import { SBSConfiguration } from './SBSConfiguration';

export const connectivity = async (event: any): Promise<any> => {
    
    type User = {
        message: string;
    };
    type GetUsersResponse = {
        data: User[];
    };
    
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.get<GetUsersResponse>(
            'https://api.mocki.io/v2/d2d0daf0/ConnectivityTest',
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
    
        console.log('response status is: ', status);
        console.log(JSON.stringify(data, null, 4));
        // 👇️ "response status is: 200"
        
        
        SBSConfiguration('','1')
        //return data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
        } else {
          console.log('unexpected error: ', error);
        }
      }
    // configure()

}