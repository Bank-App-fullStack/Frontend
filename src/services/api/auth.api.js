
export async function login(data) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        throw error;
    }
}
