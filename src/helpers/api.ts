export async function post(url: string, body: any) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(body),
    });
    return await response.json();
}

export async function get(url: string, body: any) {
    const response = await fetch(url);
    return await response.json();
}