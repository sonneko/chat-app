# Sonneko-Chat-App backend

## all routes:

#### no authorization required:
- /signin
    - request:
        ```ts
        {
            "username": string,
            "password-hash": string
        }
        ```
    - response:
        ```ts
        {
            "token": string
        }
        ```
        or
        ```ts
        {
            "error": "failed to login" | "no params"
        }
        ```
- /signup
    - request:
        ```ts
        {
            "username": string,
            "password-hash": string
        }
        ```
    - response:
        ```ts
        {
            "token": string
        }
        ```
        or
        ```ts
        {
            "error": "failed to siginup" | "no params"
        }
        ```


#### authorization required:
- /rooms
    - request:
        ```ts
        {
            "token": string
        }
        ```
    - response:
        ```ts
        {
            "rooms": [
                {
                    "id": string,
                    "name": string
                }
            ]
        }
        ```
        or
        ```ts
        {
            "error": "failed to get rooms" | "failed to verify token"
        }
        ```
- /room/:roomId
    - request:
        ```ts
        {
            "token": "string",
            "id": "string",
            "index": number
        }
        ```
    - response:
        ```ts
        {
            "name": "string",
            "users": [
                {
                    "id": "string",
                    "username": "string"
                }
            ],
            "messages": [
                {
                    "user": "string",
                    "content": "string",
                    "timestamp": "string"
                }
            ]
        }
        ```
        or
        ```ts
        {
            "error": "failed to get room" | "failed to verify token" | "there is no such room"
        }
        ```
- /profile/:userId
    - request:
    ```ts
    {
        "token": string,
        "id": string
    }
    ```
    - response:
    ```ts
    {
        "username": string
    }
    ```
    or
    ```ts
    {
        "error": "failed to get profile" | "failed to verify token" | "there is no such user"
    }
    ```
- /setting/:settingId
    - request:
    ```ts
    {
        "token": string,
        "id": string,
        "value?": string
    }
    ```
    - response:
    ```ts
    {
        "value": string, | "status": "ok"
    }
    ```
    or
    ```ts
    {
        "error": "failed to get setting" | "failed to verify token" | "there is no such setting"
    }
    ```