import { API } from "./constants";

export async function subscribeUser(email: string) {
  try {
    const response = await fetch(API.SUBSCRIBE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Subscription failed");
    }

    return { success: true, message: result.message };
  } catch (error) {
    console.error("Subscription Error:", error);
    return { success: false, message: "Something went wrong. Try again later." };
  }
}