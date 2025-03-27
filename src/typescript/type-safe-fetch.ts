interface User {
  id: number;
  name: string;
  email: string;
}

const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
    }
    try{
        const data = await response.json();
        return data as T;
    }catch(err){
        throw new Error(`issue when parsing to json: ${err instanceof Error ? err.message : ""}` );
    }
    
    
  };

const fetchUser = async () => {
  const user = await fetchData<User>("https://api.example.com/user/1");
  console.log(user.name); // Should be type-checked as `string`
};

