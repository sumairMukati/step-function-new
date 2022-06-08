import axios from 'axios'
export const SEConfiguration = async (event: any,step:String): Promise<any> => {
  type searchResp = {
    s_no: number;
    oid: string;

}

type GetSearchResponse = {
    data: searchResp [];
}
if(step === '2'){
try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetSearchResponse>(
        'https://api.mocki.io/v2/d2d0daf0/SEConfiguration',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    
    // console.log(JSON.stringify(data, null, 4));
    // // 👇️ "response status is: 200"
     console.log('response status is: ', status);
    //console.log(Mysum())
    console.log(JSON.stringify(data, null, 4));
    
    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
    } else {
      console.log('unexpected error: ', error);
    }
  }
}else{
  console.log('first try step 2')
}
}