export const checkIfImages = (url: string) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(url);
        }
        img.onerror = () => {
            reject(url);
        }
    })
}
