const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Mzc5YTYyZmIzMDM5NWI0Y2RlMjM4YSIsImFkbWluIjp0cnVlLCJpYXQiOjE3MTYyODU3NTYsImV4cCI6MTc0NzgyMTc1Nn0.S_TaOE_4a8lem0MWvETCe7FBlY_HxYBdyukG4UpPfYk`


export async function getUser(id) {
    try {
        if(!token) throw Error("Not connected")
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${id}`, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,

            },
        });
        const data = await res.json();

        return data;
    } catch (err) {
        return err;
    }
}

// export async function getMe(token) {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/self/me`, {
//             cache: "no-store",
//             headers: {
//                 "Authorization": `Bearer ${token}`,
//             },
//         });

//         if (!res.ok) {
//             console.error("Error fetching user data");
//         }

//         const data = await res.json();
//         return data;
//     } catch (err) {
//         return err;
//     }
// }

