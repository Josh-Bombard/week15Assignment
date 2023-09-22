// api.js

import USERS_API from "../API/UsersApi";


export async function createUser(newUser) {
  try {
    const response = await fetch(`${USERS_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error(`Failed to create user. Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the created user data
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}
