type RequestProps = {
    server: boolean,
    url: string,
    accessToken?: string
}

type RequestPropsWithBody<T> = RequestProps & {
    body: T
}

const getRequestUrl = (server: boolean, url: string) => server ? `${process.env.NEXT_PUBLIC_API_URL}${url}` : url;

export const getResponseJson = async ({server, url, accessToken}: RequestProps) => {
    try {
        const headers: any = {
            "Content-Type": "application/json"
        };
        if (accessToken) {
            headers["Authorization"] = `Bearer ${accessToken}`;
        }

        const requestUrl = getRequestUrl(server, url);
        const response = await fetch(requestUrl, {
            method: "GET",
            headers
        })

        return await response.json();
    } catch (error) {
        return null;
    }
}

export const postRequestJson = async <T>({server, url, accessToken, body}: RequestPropsWithBody<T>) => {
    try {
        const headers: any = {
            "Content-Type": "application/json"
        };
        if (accessToken) {
            headers["Authorization"] = `Bearer ${accessToken}`;
        }

        const requestUrl = getRequestUrl(server, url);
        const response = await fetch(requestUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })

        return await response.json();
    } catch (error) {
        return null;
    }
}

export const putRequestJson = async <T>({server, url, accessToken, body}: RequestPropsWithBody<T>) => {
    try {
        const requestUrl = getRequestUrl(server, url);
        const response = await fetch(requestUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken || process.env.TEST_TOKEN}`
            },
            body: JSON.stringify(body)
        })

        return await response.json();
    } catch (error) {
        return null;
    }
}

export const deleteRequestJson = async ({server, url, accessToken}: RequestProps) => {
    try {
        const requestUrl = getRequestUrl(server, url);
        const response = await fetch(requestUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken || process.env.TEST_TOKEN}`
            }
        })

        return await response.json();
    } catch (error) {
        return null;
    }
}
