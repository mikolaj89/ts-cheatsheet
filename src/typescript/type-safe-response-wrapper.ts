interface User {
  id: number;
  name: string;
  email: string;
}

interface SuccessResponse<T> {
  data: T;
}

interface ErrorResponse {
  error: string;
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

function isSuccessResponse<T>(response: ApiResponse<T>){
  return 'data' in response;
}

const fetchApi = async <T>(url: string): Promise<ApiResponse<T>> => {
  const response = await fetch(url);
  try {
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${url}: ${response.statusText}`
      );
    }

    const result = await response.json();

    return { data: result as T };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "An error occured" };
  }
};

const fetchUser = async () => {
  const response = await fetchApi<User>("https://api.example.com/user/1");

  if (isSuccessResponse(response)) {
    console.log(response.data.name); // Type-safe access
  } else {
    
    console.error(response.error); // Error message
  }
};
