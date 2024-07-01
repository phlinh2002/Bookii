import { Book } from "./books";

export interface User{
  email:string,
  password:string,
  role:string,
  userID: number,
  shoppingbasket:Book[];
}
export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`http://localhost:4730/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("not found")
  }
};



export const updateProfile = async (userId: number, email: string, role: string) => {
  try {
    const response = await fetch(`http://localhost:4730/users/${userId}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({ email, role }), 
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error('Failed to update profile');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    throw new Error('Failed to update profile. Please try again.');
  }
};
updateProfile(1,"admin@bookmonkey.api", "admin" )
updateProfile(2,"customer@bookmonkey.api","non-admin")

