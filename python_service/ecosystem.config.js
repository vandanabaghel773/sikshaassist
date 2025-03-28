module.exports = {
    apps: [
        {
            name: "fastapi-app",
            script: "uvicorn",
            args: "main:app --host 0.0.0.0 --port 8000",
            interpreter: "/usr/bin/python3",
            watch: false
        }
    ]
};