type GetRequestProps = {
    url: string, accessToken?: string
}

type PostRequestProps<T> = {
    url: string,
    accessToken?: string,
    body: T
}

const TEST_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzNkZDEyYzZhMGFlZmMzYTAyNDE4MiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxNDMwMzk2NSwiZXhwIjoxNzE0MzExMTY1fQ.8phNWd7_V2itzmlA16zQj67sn1WvRtNwCeDkujIIBDM";

export const getResponseJson = async ({url, accessToken}: GetRequestProps) => {
    const requestUrl = process.env.NEXT_PUBLIC_API_URL + url;
    const response = await fetch(requestUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken || TEST_TOKEN}`
        }
    })

    return await response.json();
}

export const postRequestJson = async <T>({url, accessToken, body}: PostRequestProps<T>) => {
    const requestUrl = process.env.NEXT_PUBLIC_API_URL + url;
    const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken || TEST_TOKEN}`
        },
        body: JSON.stringify(body)
    })

    return await response.json();
}
